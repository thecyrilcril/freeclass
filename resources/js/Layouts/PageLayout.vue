<template>
    <div>
        <header class="bg-purple-600 mb-12 text-gray-100">
          <div class="mx-4 md:mx-0">
            <nav class="container mx-auto flex justify-between py-3">

                <inertia-link :href="route('applicants.index')">
                <h1 class="uppercase font-medium tracking-wider">Image clothia free training</h1>
                </inertia-link>

                <ul class="flex">
                    <li class="capitalize">
                    <inertia-link :href="route('applicants.create')">apply</inertia-link>
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
        components: {

        },
        props: {

        },
        data() {
            return {

            }
        },
        methods: {

        }

    }
</script>
