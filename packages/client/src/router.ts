import { createRouter, createWebHistory } from 'vue-router';
// 1. Define route components.
import ImageConvertionTool from './components/ImageConvertionTool.vue';
import NumberConvertionTool from './components/NumberConvertionTool.vue';

// 2. Define some routes
const routes = [
  { path: '/', component: ImageConvertionTool },
  { path: '/number', component: NumberConvertionTool },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export { router };
