<?php 

 if(isset($_POST['username']) && isset($_POST['score']) && isset($_POST['mode'])) {
     //echo $_POST['username'], " ", $_POST['score'], " ", $_POST['mode'];

     require('./sql.php'); //$pdo est défini dans ce fichier
		$sql="INSERT INTO ACCOUNTS VALUES (:username, :email, :password)";
        
		try {
            $insert = $pdo->prepare("INSERT INTO `scoreboard` ( `username`, `score`, `mode` ) values('".$_POST['username']."', '".$_POST['score']."', '".$_POST['mode']."') ");
			
            $bool = $insert->execute();
            if ($bool) {
                return "ok";
            } else {
                return "eat ze bug";
            }
            
		}
		catch (PDOException $e) {
			echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
			die(); // On arrête tout.
		}
        
 } else {
    require('./sql.php'); //$pdo est défini dans ce fichier
    $sql="INSERT INTO ACCOUNTS VALUES (:username, :email, :password)";
    
    try {
        $request = $pdo->prepare("SELECT `username`, `score`, `mode` FROM `scoreboard` ORDER BY `score` DESC");
        
        $bool = $request->execute();
        if ($bool) {
            $resultat = $request->fetchAll(PDO::FETCH_ASSOC);
            echo "<h1>Scoreboard : </h1>";
            echo "<h3>Score | Username | Mode</h3>";
            $i = 1;
            foreach ($resultat as $entry) {
                echo "n°", $i, " - ", $entry['score'], " points - ", $entry['username'], " - ", $entry['mode'], "<br>";
                $i = $i + 1;
            }
        } else {
            echo "fail";
        }
        
    }
    catch (PDOException $e) {
        echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
        die(); // On arrête tout.
    }
 }



?>