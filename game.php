<?php

    session_start();

    if (isset($_GET['mode'])) {
        if ($_GET['mode'] == 'info') {
            header("Location: info.php");
        } else if ($_GET['mode'] == 'random') {
            require("./templates/gamemodes/random.tpl");
        } else {
            echo "<script>alert('Le mode demandé n\'existe pas petit rigolo')</script>";
            header("Location: menu.php");
        }
    } else {
        header("Location: menu.php");
    }


?>