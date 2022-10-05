import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../components/atoms/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'select' },
    icon: { control: 'select' },
    len: { control: 'number' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'add',
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'add',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: 'add',
  color: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: 'add',
  color: 'warning',
};

export const Black = Template.bind({});
Black.args = {
  icon: 'add',
  color: 'black',
};

export const Gray = Template.bind({});
Gray.args = {
  icon: 'add',
  color: 'gray',
};
