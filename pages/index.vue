<template>
  <body class="bg-white">
    <div>
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

                <NuxtLink 
                  class="bg-blue-400 text-white w-48 h-10 rounded-md shadow-lg cursor-pointer mx-2 mt-8 hover:bg-blue-300 hover:scale-125 transition hover:delay-75 grid grid-cols-4 relative"
                  to="/location">
                  <div  class="col-span-3 grid place-items-center" >Get Started!</div >
                  <div class="mt-1 rounded-r-md w-48 pr-4 h-6 overflow-hidden absolute flex justify-end">
                    <svg class="h-10 object-cover" fill="white" xmlns="http://www.w3.org/2000/svg" id="mdi-cat"
                      viewBox="0 0 24 24">
                      <path
                        d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                    </svg>
                  </div>

                </NuxtLink >
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
              <NuxtLink to="/breeds"
                class="bg-blue-900 text-white rounded-b-md  cursor-pointer h-10 grid place-items-center hover:bg-cyan-500 hover:text-white border">
                Click Here!
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white mx-10 rounded-md shadow-lg border border-blue-300 col-span-2 relative">
            <h2 class="text-blue-800 text-2xl font-bold pt-2 pl-4 uppercase">
              Did You Know ?
            </h2>
            <p class="py-6 px-4">
              {{ cat.fact }}
            </p>

            <div class="w-full absolute inset-x-0 bottom-0">
              <NuxtLink
                class="bg-blue-900 text-white rounded-b-md  cursor-pointer h-10 grid place-items-center hover:bg-cyan-500 hover:text-white "
                to="/">
                Tell me another fact!
              </NuxtLink>
            </div>
          </div>
        </div>

      </main>
    </div>
  </body>
</template>

<script setup>
import { useFavStore } from '../store/FavStore'
const store = useFavStore();
store.getList();

const { data: cat } = await useFetch('https://catfact.ninja/fact')
// console.log(cat.value);


</script>