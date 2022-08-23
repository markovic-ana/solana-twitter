import { onBeforeRouteUpdate, useRoute } from 'vue-router'

// This composable is used by many components.It’s a little refactoring
// that helps deal with Vue Router hooks.Normally, we’d need to add some
// code for when we enter a router and some other code when the route updates
// but the components stay the same — e.g.the topic changes in the topics page.
// That function enables us to write some logic once that will be fired on both events.

export const useFromRoute = (fn) => {
  fn(useRoute(), null)
  onBeforeRouteUpdate((to, from, next) => {
    fn(to, from)
    next()
  })
}
