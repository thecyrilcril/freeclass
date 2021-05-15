require('./bootstrap');

// require('alpinejs');

import Vue from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue'
import VueMeta from 'vue-meta'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
  import '@fontsource/commissioner/300.css'
  import '@fontsource/commissioner/400.css'
  import '@fontsource/commissioner/500.css'
  import '@fontsource/spectral-sc/600.css'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#F87171',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: true,
})


Vue.mixin({ methods: { route } })

Vue.use(plugin)

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});




const swalOptions = {
  toast: true,
  position: "top-end",
  icon: "error",
  timer: 10000,
  timerProgressBar: true,
  showConfirmButton: false,
  iconColor: '#F87171',
  customClass: {
    title: 'swal-title',
    loader: 'swal-loader',
    container: 'swal-container',
  }
};
Vue.use(VueSweetalert2, swalOptions);

const el = document.getElementById('app')



new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      // resolveComponent: name => require(`./Pages/${name}`).default,
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
      resolveErrors: page => (page.props.errors || {}),
    },
  }),
}).$mount(el)

