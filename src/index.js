import MyButton from './components/MyButton.vue'
import Header from './components/Header.vue'

export { MyButton, Header }

export default {
  install(app) {
    app.component('MyButton', MyButton)
    app.component('Header', Header)
  },
}