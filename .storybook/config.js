import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import Mybutton from '../src/stories/MyButton.vue';
import TextareaComp from '../src/components/modules/TextareaComp.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
Vue.component('my-button', Mybutton);
Vue.component('textareaComp', TextareaComp);

function loadStories() {
  // You can require as many stories as you need.
  //require('../src/stories/index.stories.js');
  require('../src/stories/components.module.textareacomp.js');
}

configure(loadStories, module);
