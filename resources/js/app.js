import './bootstrap';
import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount("#app")
import UsersTableComponent from './components/UsersTableComponent.vue';

Vue.component('users-table', UsersTableComponent);
