<template>
    <page-layout>
      <div class="md:w-1/2">
        <h2 class="text-3xl md:text-4xl font-spectral-sc">Free Pattern Drafting Class</h2>
        <p class="text-xl font-normal">Learn the Foundations of Modern Fashion design</p>
      </div>
    </page-layout>
</template>
<script>
    import PageLayout from '@/Layouts/PageLayout'
    import Button from '@/Jetstream/Button'
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
      },
      props: {
        title: String,
        description: String
      },

    }
</script>
