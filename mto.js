// Author: nakinor
// Created: 2015-04-06
// Revised: 2015-04-09

function gsub(str, car, cdr) {
  return str.split(car).join(cdr);
}

function mDel() {
    document.mto.tArea.value = "";
}

function mReplaceTradOldToModernNew() {
    var str = document.mto.tArea.value;
    for(var key in kanjiOnData) {
        str = gsub(str, key, kanjiOnData[key]);
    }
    for(var key in kanaTmData) {
        str = gsub(str, key, kanaTmData[key]);
    }
    document.mto.tArea.value = str;
}

function mReplaceModernNewToTradOld() {
    var str = document.mto.tArea.value;
    for(var key in kanaData) {
        str = gsub(str, key,kanaData[key]);
    }
    for(var key in kanjiData) {
        str = gsub(str, key,kanjiData[key]);
    }
    document.mto.tArea.value = str;
}

function del() {
    document.mto.bef.value = "";
}

function toBeforeTextArea() {
    var str = document.mto.aft.value;
    document.mto.bef.value = str;
    document.mto.aft.value = "";
}

function replaceTradOldToModernNew() {
    var str = document.mto.bef.value;
    for(var key in kanjiOnData) {
        str = gsub(str, key,kanjiOnData[key]);
    }
    for(var key in kanaTmData) {
        str = gsub(str, key,kanaTmData[key]);
    }
    document.mto.aft.value = str;
}

function replaceModernNewToTradOld() {
    var str = document.mto.bef.value;
    for(var key in kanaData) {
        str = gsub(str, key,kanaData[key]);
    }
    for(var key in kanjiData) {
        str = gsub(str, key,kanjiData[key]);
    }
    document.mto.aft.value = str;
}

function replaceTradToModern() {
    var str=document.mto.bef.value;
    for(var key in kanaTmData) {
        str = gsub(str, key,kanaTmData[key]);
    }
    document.mto.aft.value = str;
}

function replaceModernToTrad() {
    var str = document.mto.bef.value;
    for(var key in kanaData) {
        str = gsub(str, key,kanaData[key]);
    }
    document.mto.aft.value = str;
}

function replaceOldToNew() {
    var str = document.mto.bef.value;
    for(var key in kanjiOnData) {
        str = gsub(str, key,kanjiOnData[key]);
    }
    document.mto.aft.value = str;
}

function replaceNewToOld() {
    var str=document.mto.bef.value;
    for(var key in kanjiData) {
        str = gsub(str, key,kanjiData[key]);
    }
    document.mto.aft.value = str;
}

function DictElements() {
    document.write("<p>現時点での辞書の要素数は次のとおりです。<br />" +
                   "現代仮名使いから歴史的仮名遣いへの変換：" +
                   CalcKanaElements()
                   + "、新字体から旧字体への変換：" +
                   CalcKanjiElements()
                   + "、<br />歴史的仮名遣いから現代仮名使いへの変換：" +
                   CalcKanaOnElements()
                   + "、旧字体から新字体への変換：" +
                   CalcKanjiOnElements()
                   + "です。</p>"
                  );
}

function CalcKanaElements() {
    var kana_no = 0;
    for (var index in kanaData) {
        kana_no = kana_no + 1;
    }
    return kana_no;
}

function CalcKanaOnElements() {
    var kana_no = 0;
    for (var index in kanaTmData) {
        kana_no = kana_no + 1;
    }
    return kana_no;
}

function CalcKanjiElements() {
    var kanji_no = 0;
    for (var index in kanjiData) {
        kanji_no = kanji_no + 1;
    }
    return kanji_no;
}

function CalcKanjiOnElements() {
    var kanji_no = 0;
    for (var index in kanjiOnData) {
        kanji_no = kanji_no + 1;
    }
    return kanji_no;
}
