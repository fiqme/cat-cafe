<template>
  <body class="bg-white">
    <div>
      <nav class="sticky top-0 inset-x-0 flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-900 to-cyan-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <!-- cat paw icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.32776 10.0688C10.874 9.726 11.7494 7.74275 11.2831 5.63907C10.8167 3.5354 9.18513 2.10793 7.63887 2.45073C6.09261 2.79353 5.21719 4.77678 5.68356 6.88045C6.14993 8.98413 7.7815 10.4116 9.32776 10.0688Z"
              fill="white" />
            <path
              d="M17.8939 6.88046C17.4275 8.98413 15.796 10.4116 14.2497 10.0688C12.7035 9.726 11.828 7.74275 12.2944 5.63908C12.7608 3.5354 14.3924 2.10793 15.9386 2.45073C17.4849 2.79353 18.3603 4.77678 17.8939 6.88046Z"
              fill="white" />
            <path
              d="M15.5326 21.5538C15.1131 21.4699 14.6882 21.3268 14.2427 21.1766C13.4265 20.9016 12.5412 20.6033 11.4928 20.6033C10.4444 20.6033 9.55914 20.9016 8.74302 21.1766C8.2975 21.3267 7.87259 21.4699 7.45299 21.5538C6.26478 21.7915 5.31428 21.0786 4.839 20.128C4.36371 19.1775 4.12596 18.2269 4.839 16.8011C5.24058 15.9981 5.64209 15.5719 6.1285 15.0557C6.50572 14.6553 6.93401 14.2008 7.45299 13.4742C7.66963 13.1709 7.86257 12.8676 8.04909 12.5744C8.88557 11.2595 9.59306 10.1473 11.7304 10.1473C13.4807 10.1473 13.9525 10.9996 14.5012 11.9909C14.772 12.4801 15.0615 13.0031 15.5326 13.4742C15.8451 13.7867 16.1234 14.0536 16.3749 14.2948C17.2709 15.154 17.8276 15.6878 18.3843 16.8011C19.0972 18.2269 18.8595 19.1775 18.3843 20.128C17.909 21.0786 16.7208 21.7915 15.5326 21.5538Z"
              fill="white" />
            <path
              d="M6.68217 9.91782C7.54106 11.7597 7.10895 13.779 5.71703 14.4281C4.3251 15.0772 2.50045 14.1102 1.64156 12.2683C0.782663 10.4264 1.21477 8.40707 2.6067 7.758C3.99863 7.10893 5.82328 8.07592 6.68217 9.91782Z"
              fill="white" />
            <path
              d="M17.8154 14.4281C19.2073 15.0772 21.0319 14.1102 21.8908 12.2683C22.7497 10.4264 22.3176 8.40707 20.9257 7.758C19.5338 7.10894 17.7091 8.07592 16.8502 9.91782C15.9913 11.7597 16.4234 13.779 17.8154 14.4281Z"
              fill="white" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Cat Cafe</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-200 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <NuxtLink to="/location" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Location
            </NuxtLink>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Cafe List
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
              Your Fav
            </a>
          </div>
          <div>
            <a href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Sign
              In</a>
          </div>
        </div>
      </nav>

      <main>
        <div class="flex justify-center ">
          <div class="h-full w-full p-4 grid grid-cols-1">
            <div class="md:grid md:grid-cols-2">
              <img src="~/assets/img/cat-1.png" alt="cat picture" class="md:pl-60 pl-10 object-cover overflow-hidden">
              <div class="pt-20 h-full w-full text-lg">
                <h1 class="text-blue-900 text-4xl font-bold mt-2 mx-2 align-middle">Find Cat Cafe Near You!</h1>

                <p class="my-2 mx-2">
                  Cat cafes typically have a cozy and comfortable atmosphere that's purr-fect for
                  spending quality time with our furry friends. You'll get to experience the soothing presence of the
                  cats, watch them play and snuggle up with them. These cafes often have a wide variety of cat breeds to
                  choose from, so there's always a cat that fits your preference.
                </p>

                <div
                  class="bg-blue-400 text-white w-48 h-10 rounded-md shadow-lg cursor-pointer mx-2 mt-8 hover:bg-blue-300 hover:scale-125 transition hover:delay-75 grid grid-cols-4 relative">
                  <NuxtLink class="col-span-3 grid place-items-center" to="/location">Get Started!</NuxtLink>
                  <div class="mt-1 rounded-r-md w-48 pr-4 h-6 overflow-hidden absolute flex justify-end">
                    <svg class="h-10 object-cover" fill="white" xmlns="http://www.w3.org/2000/svg" id="mdi-cat" viewBox="0 0 24 24">
                      <path
                        d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>

            <div class="w-2/3 mx-auto">
              <div class="my-9 border-b border-blue-200 "></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3">
          <!-- card -->
          <div class="bg-white mx-10 rounded-md shadow-lg border border-blue-300 grid place-items-center">
            <h2 class="text-blue-800 text-2xl font-bold pt-2 uppercase">
              Cat Breed
            </h2>
            <p class="text-center py-6 px-4">
              Would you like to know more about different cat breeds and which one might be the best fit for you?
            </p>

            <div class="w-full">
              <NuxtLink to="/breeds" class="bg-blue-900 text-white rounded-b-md  cursor-pointer h-10 grid place-items-center hover:bg-cyan-500 hover:text-white border">
                Click Here!
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white mx-10 rounded-md shadow-lg border border-blue-300 col-span-2">
            <h2 class="text-blue-800 text-2xl font-bold pt-2 pl-4 uppercase">
              Did You Know ?
            </h2>
            <p class="py-6 px-4">
              Did you know that cats have a special collarbone called the "floating collarbone" or "wishbone" that is not
              attached to any other bones in their body? This allows cats to fit through narrow spaces and makes them
              incredibly agile and flexible.
            </p>

            <div class="w-full">
              <NuxtLink class="bg-blue-900 text-white rounded-b-md  cursor-pointer h-10 grid place-items-center hover:bg-cyan-500 hover:text-white">
                Tell me another fact!
              </NuxtLink>
            </div>
          </div>
        </div>

      </main>
    </div>
  </body>
</template>
