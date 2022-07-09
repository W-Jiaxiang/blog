import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
//引入VueRouter
import router from './router'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

app.use(ViewUIPlus).use(router).mount('#app')
