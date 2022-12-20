<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="./assets/logo.png" />
    <title>City Guess</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../assets/scripts/script.js"></script>
    <script src="../assets/scripts/menu.js"></script>

</head>


<body>
    <nav class="px-2 bg-transparent border-gray-700 py-4 absolute z-30 right-5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">

            <button data-collapse-toggle="navbar-multi-level" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </nav>

    <div  class="relative flex items-center justify-center h-screen  overflow-hidden">

        <div id='div' class="relative py-16 bg-transparent z-30">

            <div class="bg-black bg-opacity-10 p-8 rounded-xl text-white">
                <h2 class=" text-2xl text-white font-bold text-center uppercase pb-8">Choose a gamemode</h2>

                <div class="space-x-4 ">
                    <button id="random" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                         hover:border-green-400 focus:bg-green-50 active:bg-green-700">
                        <div class="relative flex items-center space-x-4 justify-center">

                            <a href='game.php?mode=random'>
                                <span
                                    class=" uppercase block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-green-400 sm:text-base">Random Guess</span>
                            </a>
                        </div>
                    </button>

                    <button id="info" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                hover:border-yellow-400 focus:bg-yellow-50 active:bg-yellow-700">
                        <div class="relative flex items-center space-x-4 justify-center">

                            <a href='game.php?mode=info'>
                                <span
                                    class="block w-max font-semibold tracking-wide text-sm transition duration-300 uppercase group-hover:text-yellow-400 sm:text-base">Info Guess</span>
                            </a>
                        </div>
                    </button>

                    <button id="btn3" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                         hover:border-red-600 focus:bg-red-100 active:bg-red-500" disabled>
                        <div class="relative flex items-center space-x-4 justify-center">

                            <a >
                                <span
                                    class="uppercase block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-red-600 sm:text-base">Coming Soon</span>
                            </a>
                        </div>
                    </button>
                </div>

            </div>
        </div>

        <video autoplay loop muted id="video"
            class="hide absolute z-10 w-auto min-w-full min-h-full max-w-none blur-sm transform transition-all duration-1500 ease-out ">
            <source src="../assets/others/city.mp4" type="video/mp4" /> Your browser does not support the video tag.
        </video>
    </div>


</body>

</html>