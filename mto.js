// Author: nakinor
// Created: 2015-04-06
// Revised: 2015-04-13

function gsub(str, key, val) {
  return str.split(key).join(val);
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

function replaceStrings2(jisyo1, jisyo2, flag) {
    var str = document.mto.bef.value;
    if (flag == 0) {
        for(var i = 0; i < jisyo1.length; i++) {
            str = gsub(str, jisyo1[i][0], jisyo1[i][1]);
        }
        for(var i = 0; i < jisyo2.length; i++) {
            str = gsub(str, jisyo2[i][0], jisyo2[i][1]);
        }
    } else if (flag == 1) {
        for(var i = 0; i < jisyo1.length; i++) {
            str = gsub(str, jisyo1[i][1], jisyo1[i][0]);
        }
        for(var i = 0; i < jisyo2.length; i++) {
            str = gsub(str, jisyo2[i][1], jisyo2[i][0]);
        }
    }
    document.mto.aft.value = str;
}

function replaceStrings(jisyo, flag) {
    var str = document.mto.bef.value;
    if (flag == 0) {
        for(var i = 0; i < jisyo.length; i++) {
            str = gsub(str, jisyo[i][0], jisyo[i][1]);
        }
    } else if (flag == 1) {
        for(var i = 0; i < jisyo.length; i++) {
            str = gsub(str, jisyo[i][1], jisyo[i][0]);
        }
    }
    document.mto.aft.value = str;
}

function DictElements() {
    document.write("<p>現時点での辞書の要素数は、" +
                   "かな変換用辞書：" + kanaArray.length +
                   "、漢字変換用辞書：" + kanjiArray.length + "</p>");
}

function DictElementsHan() {
    document.write("<p>現時点での辞書の要素数は、" +
                   "ハングル変換用辞書：" + hanArray.length + "</p>");
}

// for mobile page
function mDel() {
    document.mto.tArea.value = "";
}

function mReplaceStrings2(jisyo1, jisyo2, flag) {
    var str = document.mto.tArea.value;
    if (flag == 0) {
        for(var i = 0; i < jisyo1.length; i++) {
            str = gsub(str, jisyo1[i][0], jisyo1[i][1]);
        }
        for(var i = 0; i < jisyo2.length; i++) {
            str = gsub(str, jisyo2[i][0], jisyo2[i][1]);
        }
    } else if (flag == 1) {
        for(var i = 0; i < jisyo1.length; i++) {
            str = gsub(str, jisyo1[i][1], jisyo1[i][0]);
        }
        for(var i = 0; i < jisyo2.length; i++) {
            str = gsub(str, jisyo2[i][1], jisyo2[i][0]);
        }
    }
    document.mto.tArea.value = str;
}
