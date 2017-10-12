# mto - mojiretsu wo tanjun ni okikae masu.

### このプロジェクトの本体である辞書
- kana-jisyo
- kanji-jisyo

### 本体を説明するための付属品
- docs/mto.js, index.html, sp.html, style.css (画面を構成するため)
- docs/dic-kana.json, dic-kanji.json (本体の辞書を JSON に変換したもの)
- docs/howto.html (使い方を説明するためのもの)

### その他
- convert.go (本体の辞書を JSON に変換するもの)

### うだうだ
とりあえず [ここ](https://uakms.github.io/mto/) に移動して触ってみれば README を読まんでもわかるんちゃう？(と思ったのは私だけで「結果を入力へ」とか、わけがわらないそうです。[HowTo](https://uakms.github.io/mto/howto.html) を読んでみてください。また、w3m のようなテキストブラウザを利用していて JavaScript が使えない場合は [こちら](https://mto.herokuapp.com/sp) を試してみてください)

JSON 形式の辞書を参照して文字列を単純に置き換えていきます。複雑なアルゴリズムはなく、テキストエリアに入力されている文字列に対して、辞書の要素すべてを順番に検索＆置換していくだけです。

かつて旧字旧仮名を練習していた時に、それが間違っていないかどうかを Emacs 上で確認するために作成したものが原型になっています。いつの間にか登録している単語が多くなってきて「これは確認するだけでなく、文章の変換目的に使えるのではないか？」と思い至り、Emacs Lisp ではじめて実装しました。

Ruby, Python3, Vim script, Scheme, Perl5, Lua, C#, Common Lisp, Golang, Objective-C, C, node.js, C++, PHP, Swift と異なる言語で実装をしてきました。ファイルオープン、パス、正規表現、配列、ハッシュ、引数の処理など、基本的なものしか触れていませんが、自分にとっては「Hello, World!」的な課題となっています。これらのプログラムで利用するためのデータがこの辞書です。

GUI 的なものについては、C# で Windows Forms 版、Ruby の Sinatra で Web アプリ、Objective-C で Cocoa 版と iOS 版、JavaScript で Electron 版を作りました。

今まで JavaScript は敬遠していましたが、GitHub で動かしてみようと実装しました。この JavaScript で実装したものは、ファイルをダウンロード(docs/ 以下のみで良い)してウェブブラウザで開けばローカルで動きますし、どこかのホームページにアップロードしても(たぶん)動きます。クロスドメインなことはしてませんし。

辞書を自分の好きなように編集して東京弁に変換したり、植物名や国名をカタカナ-漢字変換したりして遊んでください。この辞書を編集する過程でその知識が身につきます(脳に記憶されるッ！)。
