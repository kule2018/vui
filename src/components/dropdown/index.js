import Vue from 'vue'
import dropdown from './dropdown'
import Drop from './drop'
Vue.directive('dropdown', {
  bind (el, binding, vnode) {
    let drop = null

    let removeDropdown = (e) => {
      if (e.target === el) return
      drop && drop.remove()
      drop = null
    }
    el.addEventListener('click', () => {
      if (document.querySelector('.vui-dropdown')) return
      let position = {x: el.getBoundingClientRect().left, y: el.getBoundingClientRect().top}
      drop = new Drop(dropdown, el, position, binding.value)
    })

    document.addEventListener('click', removeDropdown)
    document.addEventListener('touchmove', removeDropdown)
  }
})