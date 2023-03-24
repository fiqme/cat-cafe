<template>
    <body class="bg-gray-100">
        <div class="grid grid-cols-4 gap-5 m-2">
            <div v-for="c in store.rawWithFavList"
                class="bg-white m-2 rounded-sm shadow-md hover:scale-105 transition delay-75 relative h-48">
                <div class="text-cyan-500 rounded-t-sm grid place-items-center my-2">
                    <p class="ml-2 text-xl font-bold">{{ c.breed }}</p>
                </div>
                <div>
                    <div class="mx-4 border border-b-1 border-cyan-100"></div>
                </div>
                <ul class="ml-2 text-sm m-2">
                    <li>Country: {{ c.country }}</li>
                    <li>Origin: {{ c.origin }}</li>
                    <li>Coat: {{ c.coat }}</li>
                    <li>Pattern: {{ c.pattern }}</li>
                </ul>
                <!-- <div class="border border-t border-gray-200"></div> -->
                <div class="grid place-content-center border border-t-gray-200 border-b-0 absolute inset-x-0 bottom-0">
                    <div @click="store.addFav(c)">
                        <svg v-if="c.is_fav" class="w-5 hover:cursor-pointer py-2" fill="red" stroke="gray" stroke-width="1"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                            </path>
                        </svg>
                        <svg v-else class="w-5 hover:cursor-pointer py-2" fill="none" stroke="gray" stroke-width="1"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                            </path>
                        </svg>
                    </div>
                </div>


            </div>

        </div>
    </body>
</template>

<script setup>
// import { useFavStore } from '../store/FavStore'
// const store = useFavStore();
// store.getList();



</script>

<style lang="scss" scoped></style>