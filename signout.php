<?php
    session_start();
	$_SESSION["islogged"] = 'false';
	$_SESSION["username"] = 'Guest';

    echo '<script type="text/javascript">
           window.location = "/"
      </script>';
    exit();
?>