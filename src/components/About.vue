<template>
	<article>
		<div class="container">
			<div class="contents">
				<div class="readable">
					<div class="smallbox">
						<h1>About CTF</h1>
						<h2>CTFとは</h2>
						<section>
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
							<p>現在世界中でオンラインやオンサイトのCTFが開かれています。主要な大会の日程は<a href="https://ctftime.org/"> CTFTIME</a>というサイトがまとめています。</p>
						</section>
						<h2>CTFのジャンル</h2>
						<section>
							<p>CTFで出題されるジャンルは、おおよそ以下の11種類に分類されます．</p>
							<ul>
								<li>Web
									<ol>
										<li>Webセキュリティに関する問題</li>
									</ol>
								</li>
								<li>Network
									<ol>
										<li>ネットワークセキュリティに関する問題</li>
									</ol>
								</li>
								<li>Crypto
									<ol>
										<li>暗号に関する問題</li>
									</ol>
								</li>
								<li>Reversing
									<ol>
										<li>リバース・エンジニアリングに関する問題</li>
									</ol>
								</li>
								<li>Pwn
									<ol>
										<li>プログラムの脆弱性を攻撃する問題</li>
									</ol>
								</li>
								<li>Forensic
									<ol>
										<li>様々なデータから情報を集める問題</li>
									</ol>
								</li>
								<li>PPC
									<ol>
										<li>プログラミング技術に関する問題</li>
									</ol>
								</li>
								<li>Steganography
									<ol>
										<li>様々なデータに隠された情報を見つけ出す問題</li>
									</ol>
								</li>
								<li>Recon
									<ol>
										<li>対象の情報を調査する問題</li>
									</ol>
								</li>
								<li>Trivia
									<ol>
										<li>雑学や知識を問う問題</li>
									</ol>
								</li>
								<li>Misc
									<ol>
										<li>その他の問題</li>
									</ol>
								</li>
							</ul>
						</section>
						<h2>各ジャンルの詳細</h2>
						<section>
							<h3>Crypto</h3>
							<p>
								暗号に関する問題です。<br>

							</p>


							<h3>Web</h3>
							<p>
								ウェブサイトの脆弱性を探し、攻撃することでflagを見つける問題です。<br>
								SQLi、XSSなどと呼ばれる脆弱性を探したり、HTTPヘッダーに隠されたflagを見つけ出すなどの問題があります。<br>
							</p>
							<h3>Reversing</h3>
							<p>
								様々なプログラムを逆アセンブラなどによって解析し、flagを見つけ出す問題です。<br>
							</p>
							<h3>Pwn</h3>
							<p>
								プログラムの脆弱性を攻撃し、flagを取る問題です。
								サーバーでプログラムが動いていて、そのプログラムを手元で解析し、
								脆弱性を見つけてプログラムに異常な動作をさせることによりshellを取るのが大まかな流れですが、
								深い知識が必要となるため初心者には少し敷居の高いジャンルとなっています。
							</p>
							<h3>Forensic</h3>
							<p>
								様々なデータの中に隠されているflagを探し出す問題です。
								ゴミ箱で削除されたデータを復元し、flagを探したり、大量のパケットの中からflagの情報が書いてあるパケットを見つけ出したりする問題が主		です。
							</p>
							<h3>Network</h3>
							<p>
								ネットワークに関する知識を用いてflagを取る問題です。
								pcapファイルと呼ばれるネットワークを流れているデータを保存したファイルからflagを見つけ出したり、
								特定のターゲットに通信をし、様々な攻撃をすることでflagを取る問題があります。
							</p>
							<h3>PPC</h3>
							<p>
								プログラミング力を図る問題です。
								何をやればflagが出るのかは自明になっていて、それを実際に実装してflagを取れるかを試される問題で、競技プログラミングに類似しています		。
							</p>
							<h3>Steganography</h3>
							<p>
								音声や画像のデータに隠されたflagを探し出す問題です。
								画像のバイナリデータにflagが埋め込まれていたり、
								音声の波形がflagの文字になっていたりとユニークな方法でflagを探しだす問題が多い特徴があります。
							</p>
							<h3>Recon</h3>
							<p>
								
								特定の人物の情報を集めて答える問題です。
								その人の住んでいる国の地域をSNSなどで情報収集し特定するなど近年問題視されているSNSの危険性などを知ることができるジャンルです。
							</p>
							<h3>Trivia</h3>
							<p>
								雑学問題です。
								クイズが出されて回答するというのが通常の形式です。
								Googleをうまく使ってときましょう！
							</p>
							<h3>Misc.</h3>
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
	font-size: 2.5em;
	margin: 30px -10px;
	padding-left: 5px;
	border-bottom: 3px solid #5ff;
}

h2 {
	padding-left: 1em;
	border-bottom: 1px solid #3df;
	font-size: 2em;
}

h3 {
	font-size: 1.5em;
}

h3:before {
	content: ">> ";
	color: #3df;
}

section {
	margin-bottom: 3em;
	padding-left: 10px;
}

a{
	padding: 10px;
	color: #2cf;
	text-decoration: none; 
}

a:hover {
	color: #7ef;
}

ul {
	margin-left: -1em;
	padding-top: 1em;
	padding-bottom: 1em; 
}

ul li{
	padding: 0px;
	list-style-type: none !important;
	list-style-image: none !important;
	margin: 20px 0px 20px 0px !important;
	position: relative;
	padding-left: 20px;
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

ul li ol {
	margin-left: -1em;
}

ul li ol li{
	width: 80%;
	padding: 0px;
	margin: 0px;
	list-style-type: none !important;
	list-style-image: none !important;
	margin: 5px 0px 5px 0px !important;
	position: relative;
	padding-left: 20px;
} 

ul li ol li:before{
	content: ''; 
	height: 0; 
	width: 0; 
	display: block; 
	border: 5px transparent solid; 
	border-right-width: 0; 
	border-left-color: #3df; 
	position: absolute; 
	top: 4.5px; 
	left: 8px;
}
 
ul li ol li:after{
	content: ''; 
	height: 2px; 
	width: 10px; 
	display: block; 
	background: #3df; 
	position: absolute; 
	top: 9px; 
	left: 0px;
}
</style>
