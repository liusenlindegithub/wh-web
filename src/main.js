import Vue from 'vue';
import router from './router';
import App from './app.vue';
import axios from './axios';
import VueAxios from 'vue-axios';
import store from './store/store';
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';

Vue.use(VueAxios,axios);
Vue.use(ViewUI);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});










new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});