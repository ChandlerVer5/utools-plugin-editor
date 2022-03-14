import { createApp } from 'vue';
import App from './App.vue';

window.utools.onPluginEnter(({ code, type, payload }) => {
  console.log('用户进入插件', code, type, payload);
  createApp(App).mount('#app');
});
