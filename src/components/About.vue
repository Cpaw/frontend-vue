<template>
	<article>
		<div class="container">
			<div class="contents">
				<div class="readable">
					<div class="smallbox">
						<h1>About CTF</h1>
						<section>
							<h2>CTFとは</h2>
							<p>CTFとは、"Capture The Flag"の頭文字をとったもので、サイバーセキュリティをはじめとするコンピュータに関する技術や知識を競う大会です。</p>
							<h3>CTFの形式</h3>
							<p>CTFは様々な形式で行われています。以下に、主なCTFの形式を紹介します。</p>
							<ul>
								<li>Jeopardy形式
									<ol>
										<li>クイズ形式で、問題を解きflagと呼ばれる答えの文字列を提出し得点を競います。</li>
										<li>オンラインCTFなどでよく見られる形式です。</li>
									</ol>
								</li>
								<li>Attack&Defence形式
									<ol>
										<li>1チーム1つサーバを与えられ、他チームのサーバを攻撃しflagを奪取しつつ自分のサーバを守ることで得点を競います。</li>
										<li>大きなCTFやオンサイトCTFで行われています。</li>
									</ol>
								</li>
							</ul>
							<h3>CTFのスケジュール</h3>
							<p>世界中でオンラインやオンサイトのCTFが開かれており、日程は<a href="https://ctftime.org/"> CTFtime.org</a>というサイトがまとめているので、参考にしてください。</p>
						</section>
						<section>
							<h2>各ジャンル特徴の解説</h2>
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
							<h2>Crypto</h2>
							<p>
								古典暗号から現代暗号、またはオリジナルの暗号などを攻撃し、flagを求める問題です。<br>
								鍵の長さが短い、アルゴリズムに脆弱性がある、など問題に使用されている暗号の穴をついて解読する問題や、<br>
								そもそもどのようなアルゴリズムで暗号化されているのかを調べる問題などがあります。<br>
							</p>

						</section>

						<section>
							<h2>Web</h2>
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
							<h2>Reversing</h2>
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
							<h2>Pwn</h2>
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
							<h2>Forensic</h2>
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
							<h2>Network</h2>
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
							<h2>PPC</h2>
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
							<h2>Steganography</h2>
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
							<h2>Recon</h2>
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
							<h2>Trivia</h2>
							<p>
								雑学問題です。
								クイズが出されて回答するというのが通常の形式です。
								Googleをうまく使ってときましょう！
							</p>
						</section>
				
						<section>
							<h2>Misc.</h2>
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
	font-size: 2em;
	margin: 30px -10px;
	padding-left: 5px;
	border-bottom: 4px solid #5ff;
}

h2 {
	padding-left: 1em;
	border-bottom: 1px solid #3df;
	font-size: 1.5em;
}

h3 {
	font-size: 1em;
}

h3:before {
	content: "> ";
	color: #3df;
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

ul li{
	padding:0px;
	margin:0px;
	list-style-type:none !important;
	list-style-image:none !important;
	margin: 5px 0px 5px 0px !important;
	position:relative;
	padding-left:20px;
}

ul li:before{
	padding-top: 1.5px;
	content:''; 
	height:0px; 
	width: 90%;
	display:block; 
	position:absolute; 
	top:18px; 
	left:0px; 
	border-bottom: 1px dashed #3df;
}

ul li:after{
	content:'';
	display:block; 
	position:absolute; 
	background:#3df;
	width:5px;
	height:5px; 
	top:7px; 
	left:5px; 
	border-radius: 5px;
}

ul li ol li{
	width: 80%;
	padding:0px;
	margin:0px;
	list-style-type:none !important;
	list-style-image:none !important;
	margin: 5px 0px 5px 0px !important;
	position:relative;
	padding-left:20px;
} 

ul li ol li:before{
	content:''; 
	height:0; 
	width:0; 
	display:block; 
	border:5px transparent solid; 
	border-right-width:0; 
	border-left-color:#3df; 
	position:absolute; 
	top:5px; 
	left:8px;
}
 
ul li ol li:after{
	content:''; 
	height:2px; 
	width:10px; 
	display:block; 
	background:#3df; 
	position:absolute; 
	top:9px; 
	left:0px;
}


</style>