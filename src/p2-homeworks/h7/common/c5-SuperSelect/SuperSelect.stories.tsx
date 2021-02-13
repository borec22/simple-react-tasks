import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import SuperSelect, {SuperSelectPropsType} from './SuperSelect';
import {action} from '@storybook/addon-actions';

export default {
   title: 'SuperSelect',
   component: SuperSelect,
   argTypes: {},
} as Meta;

const onChangeOptionCallback = action('Changed selected value');

const Template: Story<SuperSelectPropsType> = (args) => <SuperSelect {...args} />;

const baseArgs = {
   onChangeOption: onChangeOptionCallback
}

export const SuperSelectExample = Template.bind({});
SuperSelectExample.args = {
   ...baseArgs,
   value: 'Lviv',
   options: ['Kiev', 'Lviv', 'Minsk', 'Odessa', 'Donetsk']
};


