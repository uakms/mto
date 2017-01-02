# mto - mojiretsu wo tanjun ni okikae masu.

[ここ](http://nakinor.github.io/mto/) に移動して触ってみれば README を読まんでもわかるんちゃう？

JSON 形式の辞書を参照して文字列を単純に置き換えていきます。複雑なアルゴリズムはなく、テキストエリアに入力されている文字列に対して、辞書の要素すべてを順番に検索＆置換していくだけです。

かつて旧字旧仮名を練習していた時に、それが間違っていないかどうかを Emacs 上で確認するために作成したものが原型になっています。いつの間にか登録している単語が多くなってきて「これは確認するだけでなく、文章の変換目的に使えるのではないか？」と思い至り、Emacs Lisp ではじめて実装されました。

Ruby, Python, Vim script, Scheme, Perl, Lua, C#, Common Lisp, Golang, Objective-C, C, node.js, C++, PHP, Swift と実装してきました。ファイルオープン、パス、正規表現、配列、ハッシュ、引数の処理など、基本的なものしか触れていませんが、自分にとっては「Hello, World!」的な[課題](https://github.com/nakinor/snapshot)となっています。

GUI 的なものについては、C# で .NET Framework 版、Ruby の Sinatra で Web アプリ、Objective-C で Cocoa 版と iOS 版、JavaScript で Electron 版を作りました。

今まで JavaScript は敬遠していましたが、GitHub で動かしてみようと実装しました。この JavaScript で実装したものは、ファイルをダウンロードしてウェブブラウザで開けばローカルで動きますし、どこかのホームページにアップロードしても(たぶん)動きます。クロスドメインなことはしてませんし。

辞書を自分の好きなように編集して東京弁に変換したり、植物名や国名をカタカナ-漢字変換したりして遊んでください。この辞書を編集する過程でその知識が身につきます(脳に記憶されるッ！)。
