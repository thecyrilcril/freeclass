<template>
    <page-layout>
      <div>
        <h1 class="text-red-500 text-3xl font-medium">
        {{ title }}
        </h1>
        <div>{{ description }}</div>
      </div>
    </page-layout>
</template>

<script>
import PageLayout from '@/Layouts/PageLayout'
export default {
  props: {
    status: Number,
  },
  components: {
      PageLayout,
  },
  computed: {
    title() {
      return {
        503: 'Service Unavailable',
        500: 'Server Error',
        404: 'Page Not Found',
        405: 'Not Allowed',
        403: 'Forbidden',
      }[this.status]
    },
    description() {
      return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        405: 'Sorry, you are forbidden from accessing this page.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
      }[this.status]
    },
  },
}
</script>
