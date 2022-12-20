<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Access-Control-Allow-Origin" content="*" />
        <link rel="shortcut icon" type="image/x-icon" href="./assets/logo.png" />
        <title>City Guess</title>
        <link rel="stylesheet" href="./styles/output.css"  type="text/css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossorigin=""></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./scripts/info.js"></script>
    </head>
  <body>

  

    <div>
        <div class="flex items-start justify-start">
            <div class="absolute border-2 border-#BBCBC4-400 bg-white z-2 mr-4 rounded">
                <div class="h-24 w-44">
                    
                </div>
            </div>
        </div>
        <div id = "VilleInformation" class="flex items-star justify-center">
            <div id = "InfoVille"class="absolute border-2 border-#BBCBC4-400 bg-white bg-opacity-75 mt-8 z-2 px-4 py-2 w-72 h-64 mr-4 rounded md:w-96 h-auto">
            
            </div>
     </div>
        <div id = "Leaflets" class="flex items-start justify-end">
                <button type="button" id="minus" class="absolute cursor-pointer rounded-full border-2 border-white px-3 py-1 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">-</button>
                <div id = "BlockLeaf"class="hide absolute border-2 border-#BBCBC4-400 bg-white bg-opacity-75 mt-8 z-2 px-4 py-2 w-72 h-64 mr-4 rounded md:w-96 h-auto">
                    <p id = "tour"class="text-center text-m py-2 px-1">Devinez le pays!</p>
                    <p id="distance" class="distance text-start text-m py-1 px-1">Distance : 0</p>
                
                    <div id="map" class="h-80 w-auto">

                    </div>

                <div class="flex justify-center py-2">
                    <button type="button" id="confirmer" class="cursor-pointer rounded-lg border-2 border-white  px-8 py-2.5 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">Confirmer</button>
                </div>
            </div>
         </div>
         </div>

    
        

        <div id="googlemapados">
            <a href="./menu.php">
            <button type="button" id="annuler" class="relative cursor-pointer rounded-lg border-2 border-red-600  bg-red-600 px-4 py-2.5 text-white font-medium text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">Quitter</button>
            </a>

            <button type="button" id="showinfos" class="relative cursor-pointer rounded-lg border-2 border-red-600  bg-red-600 px-4 py-2.5 text-white font-medium text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">Indices (Infos sur la ville)</button>
        </div>

  </body>
</html>

<?php

    session_start();
    
    $_res = NULL;


    function get_random_city() {
		require('./sql.php'); //$pdo est défini dans ce fichier        
		try {
            $request = $pdo->prepare("SELECT * FROM `infocity`");
			
            $bool = $request->execute();
                if ($bool) {
                    $resultat = $request->fetchAll(PDO::FETCH_ASSOC);
                    $randos = rand(0,2);
                    $res = $resultat[$randos];
                    echo "<script>updateIframe('".$res['iframe']."'); updateInfos('".json_encode($res)."');</script>";
                    
                } else {
                    echo "fail";
                }
            
		}
		catch (PDOException $e) {
			echo utf8_encode("Echec de select : " . $e->getMessage() . "\n");
			die(); // On arrête tout.
		}
	}

    get_random_city();

?>