<?php
	session_start();
	
	if (!isset($_SESSION['firstlogin'])) {
		$_SESSION['firstlogin'] = 'false';
		$_SESSION["islogged"] = 'false';
		$_SESSION["username"] = 'Guest';
		header('Location: /');
		exit;
	}

	// $nom = isset($_POST['nom'])?$_POST['nom']:'';
	// $num = isset($_POST['num'])?$_POST['num']:'';
	// $msg = '' ;
	
	if (isset($_SESSION["islogged"]) && $_SESSION["islogged"] == 'true') {
		require("./templates/logged.tpl");
	}

	else  {
		require("./templates/first_connection.tpl");
	}

?>