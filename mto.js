// Author: nakinor
// Created: 2015-04-06
// Revised: 2015-04-11

function gsub(str, car, cdr) {
  return str.split(car).join(cdr);
}

// for pc page
function del() {
    document.mto.bef.value = "";
}

function toBeforeTextArea() {
    var str = document.mto.aft.value;
    document.mto.bef.value = str;
    document.mto.aft.value = "";
}

function replaceStrings2(jisyo1, jisyo2) {
    var str = document.mto.bef.value;
    for(var key in jisyo1) {
        str = gsub(str, key, jisyo1[key]);
    }
    for(var key in jisyo2) {
        str = gsub(str, key, jisyo2[key]);
    }
    document.mto.aft.value = str;
}

function replaceStrings(jisyo) {
    var str=document.mto.bef.value;
    for(var key in jisyo) {
        str = gsub(str, key, jisyo[key]);
    }
    document.mto.aft.value = str;
}

function DictElements() {
    document.write("<p>現時点での辞書の要素数は次のとおりです。<br />" +
                   "現代仮名使いから歴史的仮名遣いへの変換：" +
                   CalcDictElements(kanaData)
                   + "、新字体から旧字体への変換：" +
                   CalcDictElements(kanjiData)
                   + "<br />歴史的仮名遣いから現代仮名使いへの変換：" +
                   CalcDictElements(kanaTmData)
                   + "、旧字体から新字体への変換：" +
                   CalcDictElements(kanjiOnData)
                   + "</p>"
                  );
}

function DictElementsHan() {
    document.write("<p>現時点での辞書の要素数は次のとおりです。<br />" +
                   "ひらがなからハングルへの変換：" +
                   CalcDictElements(hangJhData) +
                   "、ハングルからひらがなへの変換：" +
                   CalcDictElements(hangHjData) +
                   "</p>"
                  );
}

function CalcDictElements(jisyo) {
    var elem = 0;
    for (var index in jisyo) {
        elem = elem + 1;
    }
    return elem;
}

// for mobile page
function mDel() {
    document.mto.tArea.value = "";
}

function mReplaceStrings2(jisyo1, jisyo2) {
    var str = document.mto.tArea.value;
    for(var key in jisyo1) {
        str = gsub(str, key, jisyo1[key]);
    }
    for(var key in jisyo2) {
        str = gsub(str, key, jisyo2[key]);
    }
    document.mto.tArea.value = str;
}
