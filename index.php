<?php
	session_start();
	$_SESSION["islogged"] = 'false';
	$_SESSION["username"] = 'Guest';

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