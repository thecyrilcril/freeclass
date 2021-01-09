<template>
    <page-layout>
      <div v-if="flash.message" class="lg:w-2/3 mb-2 bg-purple-200 rounded-l py-2 px-4">
        Hi {{ flash.message }}
      </div>

      </div>
      <div class="lg:w-2/3">
        <form @submit.prevent="submit" autocomplete="off">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4">
                <label class="block">
                  <span class="text-gray-700">First name</span>
                  <input :class="{ 'border- border-red-400' : errors.first_name }" name="first_name" v-model="form.first_name" class="form-input mt-1 block w-full" placeholder="First name">
                  <div v-if="errors.first_name" class="text-red-600 text-sm">{{ errors.first_name }}</div>
                </label>

                <label class="block">
                  <span class="text-gray-700">Last name</span>
                  <input :class="{ 'border-1 border-red-400' : errors.last_name }" name="last_name" v-model="form.last_name" class="form-input mt-1 block w-full" placeholder="Last name">
                  <div v-if="errors.last_name" class="text-red-600 text-sm">{{ errors.last_name }}</div>
                </label>
            </div>
            <div class="mt-4 mb-4">
              <span class="text-gray-700">Gender</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input v-model="form.gender" type="radio" class="form-radio" name="gender" value="Female">
                  <span class="ml-2">Female</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="form.gender" type="radio" class="form-radio" name="gender" value="Male">
                  <span class="ml-2">Male</span>
                </label>
                <div v-if="errors.gender" class="text-red-600 text-sm">{{ errors.gender }}</div>
              </div>
            </div>
            <div class="grid grid-cols-1 mb-4">
               <label class="block">
                 <span class="text-gray-700">Email</span>
                 <input :class="{ 'border-1 border-red-400' : errors.email }" name="email" v-model="form.email" class="form-input mt-1 block w-full" placeholder="name@myemailprovider.com">
               </label>
               <div v-if="errors.email" class="text-red-600 text-sm">{{ errors.email }}</div>
            </div>
            <div class="grid grid-cols-1 mb-4">
               <label class="block">
                 <span class="text-gray-700">Phone number</span>
                 <input :class="{ 'border-1 border-red-400' : errors.phone_number }" name="phone_number" v-model="form.phone_number" class="form-input mt-1 block w-full" placeholder="090xxxxxxxx">
               </label>
               <div v-if="errors.phone_number" class="text-red-600 text-sm">{{ errors.phone_number }}</div>
            </div>
            <div class="mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4">
              <div class="text-gray-400 mb-2">Location</div>
              <span class="text-gray-700">Do you stay in Ilorin?</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input v-model="form.stay_in_ilorin" type="radio" class="form-radio" name="stay_in_ilorin" value="Yes">
                  <span class="ml-2">Yes</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="form.stay_in_ilorin" type="radio" class="form-radio" name="stay_in_ilorin" value="No">
                  <span class="ml-2">No</span>
                </label>
                <div v-if="errors.stay_in_ilorin" class="mt-1 text-red-600 text-sm">{{ errors.stay_in_ilorin }}</div>
              </div>
            </div>
            <div class="mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4">
              <div class="text-gray-400 mb-2">Your experience level</div>
              <span class="text-gray-700">Which of these statements best describe you?</span>
              <div class="mt-2">
                <label class="block items-center">
                  <input v-model="form.experience" type="radio" class="form-radio" name="experience" value="I want to learn Fashion design">
                  <span class="ml-2">I want to learn Fashion design.</span>
                </label>
                <label class="block items-center">
                  <input v-model="form.experience" type="radio" class="form-radio" name="experience" value="I am a beginner Fashion designer">
                  <span class="ml-2">I am a beginner Fashion designer.</span>
                </label>
                <label class="block items-center">
                  <input v-model="form.experience" type="radio" class="form-radio" name="experience" value="I am a professional Fashion designer but I don't understand pattern darfting">
                  <span class="ml-2">I am a professional Fashion designer but I don't understand pattern drafting.</span>
                </label>
                <div v-if="errors.experience" class="mt-1 text-red-600 text-sm">{{ errors.experience }}</div>

              </div>
            </div>
            <div class="mt-4 mb-4 border-2 border-purple-200 rounded-xl py-2 px-4">
              <div class="text-gray-400 mb-2">How you got to know about this FREE training</div>
              <span class="text-gray-700">How did you learn about this training?</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input  v-model="form.channel"type="radio" class="form-radio" name="channel" value="Facebook">
                  <span class="ml-2">Facebook</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="form.channel" type="radio" class="form-radio" name="channel" value="Instagram">
                  <span class="ml-2">Instagram</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="form.channel" type="radio" class="form-radio" name="channel" value="Someone">
                  <span class="ml-2">Someone (Friend / Acquaintance)</span>
                </label>
                <div v-if="errors.channel" class="mt-1 text-red-600 text-sm">{{ errors.channel }}</div>
              </div>
            </div>
            <!-- <button type="submit" :disabled="form.processing">Submit</button> -->
            <Button class="mb-4 bg-pink-500 hover:bg-purple-700 active:bg-purple-900">Register</Button>
        </form>
      </div>
    </page-layout>
</template>
<script>
    import { Inertia } from '@inertiajs/inertia'
    import PageLayout from '@/Layouts/PageLayout'
    import Button from '@/Jetstream/Button'
    export default {
      name: 'Register',
      props: {
        title: String,
        description: String,
        errors: Object
      },
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
      data() {
        return {
          form: this.$inertia.form({
            first_name: null,
            last_name: null,
            email: null,
            gender: null,
            phone_number: null,
            stay_in_ilorin: null,
            experience: null,
            channel: null,
          }),
          flash: {
            message: null,
          },
        }
      },
      methods: {
        submit() {
          this.form['label'] = this.generateLabel()
          this.$inertia.post(this.route('applicants.store'), this.form, {
            onSuccess: () => {
              // const { message } = this.$page.props.jetstream.flash
              const { message } = this.$page.props.flash
              this.flash = { message }
              setTimeout(() => this.flash.message = null, 10000)
              console.log(this.$page.props)
              // this.flash = this.$page.props.flash.message
              this.$swal({
                icon: 'success',
                iconColor: '#8B5CF6',
                title: 'Congrats!',
                text: message,
              })
              this.form.reset()
            },
            onError: () => {
              this.$swal({
                title: 'There are errors:',
                text: 'please correct the fields in red border and try again!'
              })

            },


          })
        },
        generateLabel() {
            let a = new Uint32Array(3);
            window.crypto.getRandomValues(a);
            return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join('')).replace(/\./g,'');
        },
      },
    }
</script>

