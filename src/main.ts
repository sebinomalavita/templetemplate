import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';// Import styles

const app = createApp(App);
app.mount('#app');

app.use(store).use(router);

// Mount the application
app.mount('#app');
