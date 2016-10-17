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
								<li>Crypto
									<ol>
										<li>暗号に関する問題</li>
									</ol>
								</li>
								<li>Network
									<ol>
										<li>ネットワークセキュリティに関する問題</li>
									</ol>
								</li>
								<li>Web
									<ol>
										<li>Webセキュリティに関する問題</li>
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
								<li>Steganography
									<ol>
										<li>様々なデータに隠された情報を見つけ出す問題</li>
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
								<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fspeakerdeck.com%2Fplayer%2F5cd4dafd42524241b4ddd4c41d9c2bbc&url=https%3A%2F%2Fspeakerdeck.com%2Fpalloc%2Fcryptojiang-yi-zi-liao&image=https%3A%2F%2Fspeakerd.s3.amazonaws.com%2Fpresentations%2F5cd4dafd42524241b4ddd4c41d9c2bbc%2Fslide_0.jpg&key=internal&type=text%2Fhtml&schema=speakerdeck" width="800" height="630" scrolling="no" frameborder="0" allowfullscreen></iframe>
							</p>
							<h3>Network</h3>
							<p>
								ネットワークに関する問題です。
							</p>
							<iframe src="//www.slideshare.net/slideshow/embed_code/key/xzjHkIOgl2rdlM" width="800" height="630" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
							<h3>Web</h3>
							<p>
								ウェブサイトの脆弱性などを見つけ、攻撃する問題です。
								<iframe src="https://drive.google.com/file/d/0B3sek9Uc2waZVmpqVVNjbmkwTkU/preview" width="800" height="455"></iframe>
							</p>
							<h3>Reversing</h3>
							<p>
								様々なプログラムを逆アセンブラなどによって解析する問題です。
								<iframe src="https://drive.google.com/file/d/0B7hCqNkhIBZ-U04zRGdkQ3pPZzg/preview" width="800" height="455"></iframe>
							</p>
							<h3>Pwn</h3>
							<p>
								プログラムの脆弱性を攻撃し、flagを取る問題です。<br>
								サーバーでプログラムが動いていて、そのプログラムを手元で解析し、
								脆弱性を見つけてプログラムに異常な動作をさせることによりshellを取るのが大まかな流れですが、
								深い知識が必要となるため初心者には少し敷居の高いジャンルとなっています。
							</p>
							<h3>Forensic</h3>
							<p>
								様々なデータの中に隠されているflagを探し出す問題です。<br>
								ゴミ箱で削除されたデータを復元し、flagを探したり、大量のパケットの中からflagの情報が書いてあるパケットを見つけ出したりする問題がでます。
							</p>
							<h3>Steganography</h3>
							<p>
								音声や画像のデータに隠されたflagを探し出す問題です。
								<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fspeakerdeck.com%2Fplayer%2F75af7bf7c9c642d094334563e6f7c442&url=https%3A%2F%2Fspeakerdeck.com%2Fkuroiwasi%2Fcpawctf-steganography&image=https%3A%2F%2Fspeakerd.s3.amazonaws.com%2Fpresentations%2F75af7bf7c9c642d094334563e6f7c442%2Fslide_0.jpg&key=internal&type=text%2Fhtml&schema=speakerdeck" width="800" height="630" scrolling="no" frameborder="0" allowfullscreen></iframe>
							</p>
							<h3>Misc</h3>
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
