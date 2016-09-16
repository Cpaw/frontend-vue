<template>
	<article>
		<div class="container">
			<div class="contents">
				<div class="readable">
					<div class="smallbox">
						<section>
							<h1>Rules</h1>
							<p>CpawCTFに挑戦する際は、必ず以下のルールに従ってください。</p>
							<ul>
								<li>設置されている各問題からflagを探し、問題ページにあるフォームから送信すると問題に応じた得点が入ります。</li>
								<li>CpawCTFにおけるすべてのflagは，次の形式です : Cpaw{example}</li>
								<li>獲得した得点の合計に応じて，より高難易度・高得点の問題が解禁されます．全問題完答を目指して頑張って下さい！</li>
								<li>問題用に用意された環境以外は絶対に攻撃しないでください。悪質な攻撃を確認した場合、当該アカウントの凍結やアクセス制限などの処置を行ないます。</li>
								<li>CpawCTFは常設です。そのため、解法やflagをインターネットなど第三者が不本意に見てしまう可能性のある場所に公開しないでください！</li>
								<li>お問い合わせは，twitterアカウント@porisuteruまたは@nomukenへリプライなどを飛ばしてください．</li>
							</ul>
						</section>

						<section>
							<h1>CTFとは</h1>
							<p>
								CTFとは、"Capture The Flag"の頭文字をとったものです．<br>
								CTFはセキュリティコンテストの一つであり、サイバーセキュリティをはじめとするコンピュータに関する技術や知識を競うコンテストです。<br>
								与えられた問題からflag(フラグ)と呼ばれる文字列を探し出すことで得点し，合計得点で順位を競います．<br>
								flagは問題ごとに用意された，特定の形式を持つ文字列である場合が多いです．
							</p>
							<p>
								オンラインCTFでは，大会・常設問わずJeopady形式と呼ばれる競技形態が多く行われており，CpawCTFもその一つです．<br>
								Jeopadyは，ジャンルや難易度ごとに出題された複数の問題に解答する競技形態です．<br>
								オンサイトCTFでは，参加者同士による攻防戦形式のCTFが行われることもあります．競技形態としては，King of the hillが有名です．
							</p>
							<p>
								世界中でオンラインやオンサイトのCTFが開かれており、日程は<a href="https://ctftime.org/"> CTFtime.org</a>というサイトがまとめているので、参考にしてください。
							</p>
						</section>

						<section>
							<h1>各ジャンル特徴の解説</h1>
							<p>出題される問題のジャンルは以下の11種類に分類されます．</p>
							<ul>
								<li>Crypto(暗号問題)</li>
								<li>Web(ウェブ問題)</li>
								<li>Reversing(リバース・エンジニアリング問題)</li>
								<li>Pwn(脆弱性攻撃問題)</li>
								<li>Forensic(フォレンジック問題)</li>
								<li>Network(ネットワーク通信問題)</li>
								<li>PPC(プログラミング問題)</li>
								<li>Steganography(データ隠蔽問題)</li>
								<li>Recon(追跡問題)</li>
								<li>Trivia(知識問題)</li>
								<li>Misc(その他)</li>
							</ul>
						</section>

						<section>
							<h1>Crypto</h1>
							<p>
								古典暗号から現代暗号、またはオリジナルの暗号などを攻撃し、flagを求める問題です。<br>
								鍵の長さが短い、アルゴリズムに脆弱性がある、など問題に使用されている暗号の穴をついて解読する問題や、<br>
								そもそもどのようなアルゴリズムで暗号化されているのかを調べる問題などがあります。<br>
							</p>

						</section>

						<section>
							<h1>Web</h1>
							<p>
								ウェブサイトの脆弱性を探し、攻撃することでflagを見つける問題です。<br>
								SQLi、XSSなどと呼ばれる脆弱性を探したり、HTTPヘッダーに隠されたflagを見つけ出すなどの問題があります。<br>
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>Fiddler</li>
								<li>Burp</li>
								<li>OWASP ZAP</li>
							</ul>
						</section>

						<section>
							<h1>Reversing</h1>
							<p>
								様々なプログラムを逆アセンブラなどによって解析し、flagを見つけ出す問題です。<br>
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>Fiddler</li>
								<li>Burp</li>
								<li>OWASP ZAP</li>
							</ul>
						</section>

						<section>
							<h1>Pwn</h1>
							<p>
								プログラムの脆弱性を攻撃し、flagを取る問題です。
								サーバーでプログラムが動いていて、そのプログラムを手元で解析し、
								脆弱性を見つけてプログラムに異常な動作をさせることによりshellを取るのが大まかな流れですが、
								深い知識が必要となるため初心者には少し敷居の高いジャンルとなっています。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>IDAdemo</li>
								<li>gdb-peda</li>
								<li>python</li>
								<li>ruby</li>
							</ul>
						</section>

						<section>
							<h1>Forensic</h1>
							<p>
								様々なデータの中に隠されているflagを探し出す問題です。
								ゴミ箱で削除されたデータを復元し、flagを探したり、大量のパケットの中からflagの情報が書いてあるパケットを見つけ出したりする問題が主		です。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>Autopsy</li>
								<li>FTKimager</li>
								<li>バイナリエディタ[Bzなど]</li>
								<li>Wireshark</li>
							</ul>
						</section>
						
						<section>
							<h1>Network</h1>
							<p>
								ネットワークに関する知識を用いてflagを取る問題です。
								pcapファイルと呼ばれるネットワークを流れているデータを保存したファイルからflagを見つけ出したり、
								特定のターゲットに通信をし、様々な攻撃をすることでflagを取る問題があります。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>WireShark</li>
								<li>Network Miner</li>
								<li>Scapy</li>
							</ul>
						</section>
				
						<section>
							<h1>PPC</h1>
							<p>
								プログラミング力を図る問題です。
								何をやればflagが出るのかは自明になっていて、それを実際に実装してflagを取れるかを試される問題で、競技プログラミングに類似しています		。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>エディタ [Vim, emacs, Sublime Text, VisualStudio Code, atom, ...]</li>
								<li>IDE [VisualStudio, IntelliJ, ...]</li>
								<li>各言語コンパイラ，インタプリタ</li>
							</ul>
						</section>
				
						<section>
							<h1>Steganography</h1>
							<p>
								音声や画像のデータに隠されたflagを探し出す問題です。
								画像のバイナリデータにflagが埋め込まれていたり、
								音声の波形がflagの文字になっていたりとユニークな方法でflagを探しだす問題が多い特徴があります。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>GIMP2</li>
								<li>sonic visualizer</li>
								<li>stegsolve</li>
							</ul>
						</section>
				
						<section>
							<h1>Recon</h1>
							<p>
								
								特定の人物の情報を集めて答える問題です。
								その人の住んでいる国の地域をSNSなどで情報収集し特定するなど近年問題視されているSNSの危険性などを知ることができるジャンルです。
							</p>
							<h2>便利なツール</h2>
							<ul>
								<li>Twitter</li>
								<li>facebook</li>
							</ul>
						</section>
				
						<section>
							<h1>Trivia</h1>
							<p>
								雑学問題です。
								クイズが出されて回答するというのが通常の形式です。
								Googleをうまく使ってときましょう！
							</p>
						</section>
				
						<section>
							<h1>Misc.</h1>
							<p>
								いわゆる「その他」の問題です。
								通常あまり細かくジャンル分けしないCTFが多いため、ジャンル分けされていない問題などはすべてMiscに分類されます。
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-left: 1em;
  border-bottom: 1px solid #3df;
}

h2 {
  font-size: 1em;
}

h2:before {
	content: "> ";
	color: #3df
}

section {
  margin-bottom: 3em;
}

a{
  color: #3df;
}

a:hover {
  color: #7ef;
}
</style>