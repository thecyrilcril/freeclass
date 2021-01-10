<template>
    <page-layout>
      <div class="flex">
        <div>
          <img src="/images/awoof-flipped.jpg" alt="">
        </div>
        <div class="md:w-1/2 md:mt-24 md:ml-12">
          <h2 class="text-3xl md:text-4xl font-spectral-sc mb-2">Free Pattern Drafting Class</h2>
          <!-- <p class="text-xl font-light pl-1">Learn the Foundations of Modern Fashion design</p> -->
          <p class="text-xl font-light pl-1 mb-2  leading-8">Yes! join our exclusively <span class="font-semibold">free*</span> hands-on pattern drafting training to kick-start your fashion design career and equip you with the fundamentals of modern fashion design.</p>
          <p class="text-xl font-light pl-1 mb-3">Here are <span class="italic">some</span> of the topics we will cover—</p>
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">The body anatomy and how to take accurate body measurement.</span>
          </div>
<!--           <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">How to take accurate body measurement.</span>
          </div> -->
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">Introduction to pattern drafting (why pattern drafting?).</span>
          </div>
<!--           <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">How to cut sewing patterns & pattern blocks.</span>
          </div> -->
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">2 Practical classes from the <a class="hover:underline text-indigo-600" href="https://paystack.com/buy/mastering-the-basic-pattern-set" target="_blank">basic pattern set</a>.</span>
          </div>
          <div class="flex mb-3">
            <Bullet :class="'text-yellow-300'"></Bullet>
            <span class="font-light text-lg">Design Analysis and Style deconstruction</span>
          </div>
          <p class="text-lg font-light pl-1 mb-6 leading-8 font-medium">To participate in this training click on the register button below. <br>You will be notified if selected. <span class="font-light">good luck!</span></p>

          <inertia-link :href="route('applicants.create')">
          <button class="inline-flex items-center px-8 py-4 bg-purple-600 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-pink-700 active:bg-pink-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Register if you live in Ilorin</button>
        </inertia-link>

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
