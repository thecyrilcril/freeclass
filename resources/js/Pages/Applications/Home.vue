<template>
    <page-layout>
      <div class="md:flex">
        <div>
          <img class="hidden md:block" src="/images/awoof-flipped.jpg" alt="">
        </div>
        <div class="md:w-1/2 md:mt-24 md:ml-12">
          <h2 class="text-3xl md:text-4xl font-spectral-sc mb-2">Free Pattern Drafting Class</h2>
          <img class="md:hidden mx-auto" src="/images/awoof-flipped.jpg" alt="">

          <!-- <p class="text-xl font-light pl-1">Learn the Foundations of Modern Fashion design</p> -->
          <p class="text-xl font-light pl-1 mb-2  leading-8">Yes! join our exclusively <span class="font-semibold">free*</span> hands-on pattern drafting training to kick-start your fashion design career and equip you with the fundamentals of modern fashion design.</p>
          <p class="text-xl font-light pl-1 mb-3">Here are <span class="italic">some of the topics</span> we will cover—</p>
          <div class="flex md:hidden mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">The body anatomy and how its relates to Fashion design.</span>
          </div>
          <div class="hidden md:flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">The body anatomy and how to take accurate body measurement.</span>
          </div>
          <div class="flex md:hidden mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">How to take accurate body measurement.</span>
          </div>
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">Introduction to pattern drafting (why pattern drafting?).</span>
          </div>
          <div class="md:hidden flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">How to cut sewing patterns & pattern blocks.</span>
          </div>
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">2 Practical classes from the <a class="hover:underline text-indigo-600" href="https://paystack.com/buy/mastering-the-basic-pattern-set" target="_blank">basic pattern set</a>.</span>
          </div>
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">Design Analysis and Style deconstruction</span>
          </div>
          <p class="text-lg font-light pl-1 mb-6 leading-8 font-medium">To participate in this training click on the register button below. <span class="hidden md:block">You will be notified if selected. <span class="font-light">good luck!</span></span></p>
          <div class="flex justify-center md:justify-start">
            <inertia-link class="inline-flex items-center px-8 py-4 bg-purple-600 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-pink-700 active:bg-pink-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" :href="route('applicants.create')">Register if you live in Ilorin
            <!-- <button :href="route('applicants.create')" class="">Register if you live in Ilorin</button> -->
            </inertia-link>
        </div>
        <p class="md:hidden text-sm text-center font-light pl-1 mb-6 leading-8">You will be notified if selected. <span class="font-medium">good luck!</span></p>

        </div>

      </div>
    </page-layout>
</template>
<script>
    import PageLayout from '@/Layouts/PageLayout'
    import Button from '@/Jetstream/Button'
    import Bullet from '@/Components/Bullet'
    export default {
      name: 'Register',
      metaInfo: {
        title: 'Free Pattern Drafting Training',
        meta: [
            { description: 'Register for Image Clothia Innovations FREE pattern drafting training' }
        ]
      },
      components: {
          PageLayout,
          Button,
          Bullet,
      },
      props: {
        title: String,
        description: String
      },

    }
</script>
