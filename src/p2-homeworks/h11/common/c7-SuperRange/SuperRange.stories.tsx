import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions';
import SuperRange, {SuperRangePropsType} from './SuperRange';

export default {
   title: 'SuperRange',
   component: SuperRange,
   argTypes: {},
} as Meta;

const onChangeRangeCallback = action('Changed range value');

const Template: Story<SuperRangePropsType> = (args) => <SuperRange {...args} />;

const baseArgs = {
   onChangeRange: onChangeRangeCallback
}

export const SuperRangeExample = Template.bind({});
SuperRangeExample.args = {
   ...baseArgs,
   value: 0
};


