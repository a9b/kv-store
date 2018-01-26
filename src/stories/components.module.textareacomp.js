import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import TextareaComp from '../components/modules/TextareaComp.vue';

storiesOf('TextareaComp', module)
.add('TextareaComp as a template', () => ({
    template: '<textareaComp></textareaComp>'
}))
.add('TextareaComp as a component', () => ({
    components: { TextareaComp },
    template: '<textareaComp></textareaComp>'
}));
