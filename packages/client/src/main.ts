import { createApp } from 'vue'
import App from './App.vue'
import { WasmVipsPlugin } from './plugins/wasm-vips'
import { router } from './router'
import './styles/main.css'

const app = createApp(App)

app.use(router)
app.use(WasmVipsPlugin)
app.mount('#app')
