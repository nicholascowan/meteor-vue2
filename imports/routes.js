// Import the router
import { Router, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
import NotFound from '../imports/ui/NotFound.vue'

// Create router instance
const router = new Router({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
})

Router.configure(() => {
  router.addRoute({
    path: '*',
    component: NotFound
  })
}, -1)

export default router
