// Libs
import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueTracker from 'vue-meteor-tracker'
import router from '../imports/routes'
import App from '../imports/ui/App.vue'

Vue.use(VueTracker)
Vue.use(VueMeta)

// App start
Meteor.startup(() => {
  new Vue({
    router: router.start(),
    render: h => h(App)
  }).$mount('app')
})
