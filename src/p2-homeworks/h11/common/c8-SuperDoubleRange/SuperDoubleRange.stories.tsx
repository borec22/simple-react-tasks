import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions';
import SuperDoubleRange, {SuperDoubleRangePropsType} from './SuperDoubleRange';

export default {
   title: 'SuperDoubleRange',
   component: SuperDoubleRange,
   argTypes: {},
} as Meta;

const onChangeCallback = action('Changed range value');

const Template: Story<SuperDoubleRangePropsType> = (args) => <SuperDoubleRange {...args} />;

const baseArgs = {
   onChange: onChangeCallback
}

export const SuperDoubleRangeExample = Template.bind({});

SuperDoubleRangeExample.args = {
   ...baseArgs,
   value: [0, 50],
   min: 0,
   max: 100,
   step: 5,
   disable: false
};


