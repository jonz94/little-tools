import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { WasmVipsPlugin } from './plugins/wasm-vips';
import './index.css';

const app = createApp(App);

app.use(router);
app.use(WasmVipsPlugin, { debug: true });
app.mount('#app');
