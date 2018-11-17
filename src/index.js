/*!
 * Vue Webpack Example (https://github.com/ganlvtech/vue-webpack-example)
 * Copyright (c) 2018 Ganlv (https://github.com/ganlvtech)
 * Licensed under MIT (https://github.com/ganlvtech/vue-webpack-example/blob/master/LICENSE)
 */
import App from './App.vue';
import Vue from 'vue';

const vm = new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
})