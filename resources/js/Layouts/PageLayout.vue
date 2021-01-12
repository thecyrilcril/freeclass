<template>
    <div>
        <header class="bg-gradient-to-r from-purple-500 to-pink-500 mb-12 text-gray-100">
          <div class="mx-4 md:mx-0">
            <nav class="container mx-auto flex justify-between py-3">

                <inertia-link :href="route('applicants.home')">
                <h1 class="uppercase font-medium tracking-wider">Image clothia free training</h1>
                </inertia-link>

                <ul class="flex items-center">
                    <li class="capitalize">
                    <!-- <inertia-link :href="route('applicants.create')">apply</inertia-link> -->
                    <a href="https://facebook.com/imageclothia" title="Image Clothia Facebook Page" target="_blank">
                        <svg class="w-6 h-6 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.657 167.657">
                            <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"/>
                        </svg>
                    </a>
                    </li>
                </ul>
            </nav>

          </div>
        </header>
        <div class="container mx-auto">
            <main class="mx-4 md:mx-0">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PageLayout',
    }
</script>
