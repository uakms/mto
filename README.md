# mto - mojiretsu wo tanjun ni okikae masu.

### このプロジェクトの本体である辞書 (/ 内)
- kana-jisyo
- kanji-jisyo

### 本体を説明するための付属品 (docs/ 内)
- docs/mto.js, index.html, style.css (画面を構成するため)
- docs/dic-kana.js, dic-kanji.js (本体の辞書を変換したもので中身は JSON)

### 使い方
こちらの [ページ](https://uakms.github.io/mto/) に移動して適当な文字列を変換して遊んでみてください。

変換辞書作成の都合上、目的の結果を得るためには一筋縄ではいきません。以下にその変換手順を書いておきます。

> Note: 変換の対象となるのは、常に「変換前の文章」のテキストエリアにある文字列になります。各種変換ボタンを押すと、変換されたテキストが「変換後の文章」のテキストエリアに表示されます。続けて別の変換をする場合は、「結果を入力へ」ボタンを押して「変換後の文章」を「変換前の文章」へ移動させてください。

| 目的の変換 | ボタンの操作|
|---|---|
| 新字新仮名を新字旧仮名へ | 新かな→旧かな |
| 新字新仮名を旧字新仮名へ | 旧字体→新字体 |
| 新字新仮名を旧字旧仮名へ | 新かな→旧かな &raquo; 結果を入力へ &raquo; 新字体→旧字体 |
| 新字旧仮名を新字新仮名へ | 旧字体→新字体 |
| 新字旧仮名を旧字新仮名へ | 旧かな→新かな &raquo; 結果を入力へ &raquo; 新字体→旧字体 |
| 新字旧仮名を旧字旧仮名へ | 新かな→旧かな &raquo; 結果を入力へ &raquo; 旧字体→新字体 |
| 旧字新仮名を新字新仮名へ | 旧字体→新字体 |
| 旧字新仮名を新字旧仮名へ | 旧字体→新字体 &raquo; 結果を入力へ &raquo; 新かな→旧かな |
| 旧字新仮名を旧字旧仮名へ | 旧字体→新字体 &raquo; 結果を入力へ &raquo; 新かな→旧かな &raquo; 結果を入力へ &raquo; 新字体→旧字体 |
| 旧字旧仮名を新字新仮名へ | 旧字体→新字体 &raquo; 結果を入力へ &raquo; 旧かな→新かな |
| 旧字旧仮名を新字旧仮名へ | 旧字体→新字体 |
| 旧字旧仮名を旧字新仮名へ | 旧字体→新字体 &raquo; 結果を入力へ &raquo; 旧かな→新かな &raquo; 結果を入力へ &raquo; 新字体→旧字体 |

例えば「旧字旧仮名を旧字新仮名へ」変換する際に注意が必要です。辞書 (kana-jisyo) は「新字体+新かな」「新字体+旧かな」のペアで登録してありますので、一度旧漢字を新字体に変換し、仮名の変換を行なった後に再度旧字体に変換し直すという手間がかかってしまいます。

良く使われるであろう「新字新仮名を旧字旧仮名へ」と「旧字旧仮名を新字新仮名へ」の変換を、一発でできるボタンを設置しました。それぞれ「新文章→旧文章」「旧文章→新文章」です。可逆変換が可能なはずですが、うまくいかない場合があるかもしれません。

### 技術的特徴 (なし)
JSON 形式の辞書を参照して文字列を単純に置き換えていきます。複雑なアルゴリズムはなく、テキストエリアに入力されている文字列に対して、辞書の要素すべてを順番に検索＆置換していくだけです。

### 経緯
かつて旧字旧仮名遣いを練習していた時に、それが間違っていないかどうかを Emacs 上で確認するために作成したものが原型になっています。いつの間にか登録している単語が多くなってきて「これは確認するだけでなく、文章の変換目的に使えるのではないか？」と思い至り、Emacs Lisp ではじめて実装しました。

Ruby, Python3, Vim script, Scheme, Perl5, Lua, C#, Common Lisp, Golang, Objective-C, C, node.js, C++, PHP, Swift, Elixir と異なる言語で実装をしてきました。ファイルオープン、パス、正規表現、配列、ハッシュ、引数の処理など、基本的なものしか触れていませんが、自分にとっては「Hello, World!」的な課題となっています。これらのプログラムで利用するためのデータがこの辞書です。

GUI 的なものについては、C# で Windows Forms 版、Ruby の Sinatra で Web アプリ、Objective-C で Cocoa 版と iOS 版、JavaScript で Electron 版を作りました。

今まで JavaScript は敬遠していたのですが、GitHub Pages で動かしてみようと実装しました。この JavaScript で実装したものは、ファイルをダウンロード (docs/ 以下のみで良い) してウェブブラウザで開けばローカルで動きますし、どこかのホームページにアップロードしても (たぶん) 動きます。クロスドメインなことはしてませんし。

### 結論
辞書を自分の好きなように編集して東京弁に変換したり、植物名や国名を カタカナ⇔漢字 変換したりして遊んでください。この辞書を編集する過程でその知識が身につきます (実はそれが目的かも)。

### 追記
Heroku の無料 dyno の範囲では月末に停止してしまうことが多くなってきました。利用者が増えたのは嬉しいのですが、JavaScript が利用できない場合を除き、Heroku 版ではなく [GitHub Pages 版](https://uakms.github.io/mto/)の利用をお願いします。

2022 年 11 月 28 日までに mto.herokuapp.com でのサービスは終了する予定です。
