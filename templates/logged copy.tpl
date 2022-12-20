<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" type="image/x-icon" href="../assets/others/logo.png"/>
        <title>City Guess</title>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css"/>
        <link rel="stylesheet" href="../assets/styles/style.css"/>
        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet"> 
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="../assets/scripts/script.js"></script>
    </head>

  <body>
    <nav class="px-2 bg-transparent border-gray-700 py-4">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <img src="../assets/others/logo.png" class="h-6 mr-3 sm:h-10" alt="City Guess Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">City Guess</span>
            </a>
            <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                    <a href="../signout.php">Sign Out</a>
                </button>
            </div>
        </div>
    </nav>

    <div id="main" class="centered top-100 justify-center items-center">
        <div id="welcome" class="text-center">
            <h1 class="text-white text-3xl">Welcome to the game, <?php echo $_SESSION["username"]; ?> !</h1><br>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                Start a new game
            </button>
        </div>  
    </div>





    <video autoplay loop class="z-0 blur-sm" id="video-background" class="out" muted plays-inline>
        <source src="../assets/others/city.mp4" type="video/mp4" type="video/mp4">
        <img
           src="https://c8.alamy.com/compfr/2jbtc4c/france-seine-maritime-cote-d-albatre-criel-sur-mer-vue-aerienne-2jbtc4c.jpg"
           title="Your browser does not support the videoplayback tag" />
     </video>

    <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
  </body>
</html>