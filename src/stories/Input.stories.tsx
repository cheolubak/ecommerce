import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/atoms/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input your text.',
};
