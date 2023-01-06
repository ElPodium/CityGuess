<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" type="image/x-icon" href="../assets/others/logo.png"/>
        <title>City Guess</title>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css"/>  
        <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet"> 
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="../assets/scripts/script.js"></script>
        
        <script src="/scripts/script.js"></script>

    </head>


  <body>
        <nav class="px-2 bg-transparent border-gray-700 py-4 absolute z-30 right-5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">

                <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <button class="border border-white bg-transparent hover:bg-black hover:bg-opacity-10 text-white font-bold hover:text-white py-2 px-4 rounded">
                    <a href="../login.php">Sign In</a>
                </button>
                <button class=" border-[#54466d] border hover:text-white text-white font-bold py-2 px-4 bg-[#54466d] bg-opacity-90 rounded hover:text-[#54466d] hover:bg-transparent ">
                    <a href="../signup.php">Sign Up</a>
                </button>
                </div>
            </div>
        </nav>

    <div class="relative flex items-center justify-center h-screen  overflow-hidden">
        <div  class="hide z-30 p-5 text-2xl text-white grid place-items-center">
            <h1 class="text-2xl text-white z-20  font-bold pb-4 uppercase">Welcome to City Guess</h1>
            <div>
                <button type="button" id='startGame' class="cursor-pointer rounded-lg border-2 border-gray-200  px-8 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"> <a href="../menu.php">Play as a guest</a></button>
                <button type="button" id='startGame' class="cursor-pointer rounded-lg hover:font-bold border-2 border-[#54466d] bg-[#54466d]  px-8 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded hover:bg-transparent hover:text-[#54466d] hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"> <a href="../login.php">Sign in</a></button>
            </div>
            
        </div>

        <video autoplay loop muted id="video" class="hide absolute z-10 w-auto min-w-full min-h-full max-w-none blur-sm transform transition-all duration-1500 ease-out " >
            <source src="../assets/others/city.mp4" type="video/mp4" />  Your browser does not support the video tag.
        </video>
    </div>


  </body>
</html>