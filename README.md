<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="navigation.css">
	<!-- <link rel="stylesheet" type="text/css" href="webcontent.css"> -->
	<title>navigation bar</title>
	<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
	<script src="log.js"></script>
	<script>
		// once the scroll down then ito yung mangyari
		jQuery(function($){
			var $navbar = $('header');
			$(window).scroll(function(event){
				var $current = $(this).scrollTop();
				if($current > 0){
					$navbar.addClass('arrow-show');
				}
				else{
					$navbar.removeClass('arrow-show');
				}
			});
		});
	</script>
</head>
<body>
	<div class="container">
	<header>
		<a href="#">
		<div class="logo">
			<div class="logo-background port">
				<p>PORT</p>
			</div>
			<div class="logo-background folio">
				<p>FOLIO</p>
			</div>
		</div>
		</a>
		<nav class="nav" id="nav-menu">
			<ion-icon name="close-outline" class="header_close" id="close_menu"></ion-icon>
			
			<ul class="nav_list">
				<li class="nav_item"><a href="" style="--i:1;" class="nav_link active">Home</a></li>
				<li class="nav_item"><a href="" style="--i:2;" class="nav_link">About</a></li>
				<li class="nav_item"><a href="" style="--i:3;" class="nav_link">Portfolio</a></li>
				<li class="nav_item"><a href="" style="--i:4;" class="nav_link">Contact</a></li>
				<li class="nav_item"><a href="" style="--i:5;" class="nav_link">Skill</a></li>
		<div class="btn-background">
			<button class="btn-getin">GET IN TOUCH</button>
		</div>
			</ul>
		</nav>
		<div class="menu-icons" onclick="showdialog()">
			<p>share<ion-icon name="share-social-outline" class="icon-share"></ion-icon>Social</p>
		</div>

		<ion-icon name="menu-outline" class="header_toggle" id="toggle_menu"></ion-icon>

	</header>

	<!-- Share link -->
		<div class="share-social" id="sharelink">
			<div class="social-links">
				<div class="x-btn">
					<ion-icon name="close-circle-outline" onclick="closedialog()"></ion-icon>
				</div>
				<h1>Social media share links</h1>
				<div class="menu-icons sharelink">
					<ion-icon name="logo-facebook" class="icon-facebook"></ion-icon>
					<ion-icon name="logo-instagram" class="icon-facebook"></ion-icon>
					<ion-icon name="logo-twitter" class="icon-facebook"></ion-icon>
					<ion-icon name="logo-tiktok" class="icon-facebook"></ion-icon>
					<ion-icon name="copy-outline"></ion-icon>
				</div>
			</div>
		</div>

		<div class="arrow-up">
			<a href="#"><ion-icon name="chevron-up-outline"></ion-icon></a>
		</div>

	<div class="whole-cover">
		<div class="cover-page">
			<div class="cover-con mydescription">
				<p>Hi I'am</p>
				<h2>Darwin Ortozar</h2>
				<p class="text-animation">I do <span class="multiple-type"></span></p>
				<!-- <h2>Hello world</h2> -->
				<div class="btn-background cvdownload">
					<button class="btn-getin">DOWNLOAD CV</button>
				</div>
				
				<div class="menu-icons sociallogo">
					<a href="https://www.facebook.com/darwin.ortozar.5" target="_blank"><ion-icon name="logo-facebook" class="icon-facebook"></ion-icon></a>
					<a href="https://www.youtube.com/channel/UCXUOTq7fxMgtyyJaJlK7E5Q" target="_blank"><ion-icon name="logo-youtube" class="icon-youtube"></ion-icon></a>
					<a href="https://www.facebook.com/darwin.ortozar.5" target="_blank"><ion-icon name="logo-tiktok" class="icon-tiktok"></ion-icon></a>
					<a href="https://www.linkedin.com/in/darwin-ortozar-82b32b268/" target="_blank"><ion-icon name="logo-linkedin" class="icon-linkedin"></ion-icon></a>
					<a href="https://github.com/DarwinGit03" target="_blank"><ion-icon name="logo-github" class="icon-tiktok"></ion-icon></a>
				</div>


			</div>

			<div class="cover-con myprofile">
				<img src="mypicture.png" alt="my-image">
				<p><i>"It is never too late to be what you might have been."</i></p>
			</div>
		</div>

		<div class="youtube-channel">
			<script src="https://apps.elfsight.com/p/platform.js" defer></script>
			<div class="elfsight-app-a1ffc001-be16-4b2b-923e-12964d52b7a0 videodisplay"></div>
		</div>

		<footer>
			<div class="footer-info">
				<div class="footer-width about">
					<h2></h2>
					<p></p>
				</div>
				<div class="footer-width link">
					
				</div>
				<div class="footer-width contact">
					
				</div>
			</div>			
		</footer>


	</div>



<!-- Script for typing -->
	<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

	<script src="nav.js"></script>

	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<!-- For icons -->
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

	<script>
		let show = document.getElementById("sharelink");
		function showdialog(){
			show.classList.add("open-popup");
		}
		function closedialog(){
			show.classList.remove("open-popup");
		}
	</script>

</body>
</html>
