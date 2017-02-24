// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import router from '/imports/routes';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

// Home
import Home from '/imports/ui/Home.vue';

// App start
Meteor.startup(() => {
  new Vue({
    router: router.start(),
    render: h => h(Home),
  }).$mount('app');
});
