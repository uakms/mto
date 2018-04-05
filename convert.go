/* vim:ts=4:
 * Author: nakinor
 * Created: 2015-04-09
 * Revised: 2018-04-05
 */

// Go の実行環境をインストールして `go run convert.go` で使ってね♡

package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
)

var (
	reComment = regexp.MustCompile("^;.*|^$")         //コメント行
	reNote    = regexp.MustCompile("[\t\n\f\r ]+;.*") //備考
	reSepa    = regexp.MustCompile(" /")              //辞書の区切り文字
)

func CreateJsonDict(jisyo string) []string {
	jsonDictArr := []string{}
	ifile, err := os.Open(jisyo)
	if err != nil {
		fmt.Println("ファイルを読み込めませんでした")
		os.Exit(0)
	}
	defer ifile.Close()
	scanner := bufio.NewScanner(ifile)

	for scanner.Scan() {
		commentedLine := reComment.MatchString(scanner.Text())

		if commentedLine == false {
			mbody := reNote.ReplaceAllString(scanner.Text(), "")
			supl := reNote.FindStringSubmatch(scanner.Text())
			suplstr := ""

			if len(supl) != 0 {
				reSplmnt := regexp.MustCompile("\\[(.*)\\]")
				supl2 := reSplmnt.FindAllStringSubmatch(supl[0], -1)

				if len(supl2) != 0 {
					reSubSep := regexp.MustCompile("\\|")
					suplstr = "[\"" +
						reSubSep.ReplaceAllString(supl2[0][1], "\", \"") + "\"]"
				} else {
					suplstr = "[]"
				}
			} else {
				suplstr = "[]"
			}

			mainstr := reSepa.ReplaceAllString(mbody, "\", \"")
			elem := "[\"" + mainstr + "\", " + suplstr + "]"
			jsonDictArr = append(jsonDictArr, elem)
		}
	}
	return jsonDictArr
}

func OutputJsonDict(jsonDictArr []string, pref string, fname string) {
	ofile, err := os.Create(fname)
	if err != nil {
		fmt.Println("ファイルを書き込めませんでした")
		os.Exit(0)
	}
	defer ofile.Close()
	writer := bufio.NewWriter(ofile)
	fmt.Fprint(writer, "var "+pref+" =\n[\n")
	for i := 0; i < len(jsonDictArr)-1; i++ {
		fmt.Fprint(writer, "  "+jsonDictArr[i]+",\n")
	}
	fmt.Fprint(writer, "  "+jsonDictArr[len(jsonDictArr)-1]+"\n]\n")
	writer.Flush()
	return
}

func main() {
	kanaArr := CreateJsonDict("kana-jisyo")
	OutputJsonDict(kanaArr, "kanaArray", "docs/dic-kana.js")
	kanjiArr := CreateJsonDict("kanji-jisyo")
	OutputJsonDict(kanjiArr, "kanjiArray", "docs/dic-kanji.js")
	return
}
