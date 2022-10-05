import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/atoms/IconButton';
import Icon from '../components/atoms/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: { control: 'select' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <Icon icon='add' />,
};

export const Primary = Template.bind({});
Primary.args = {
  children: <Icon icon='add' />,
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <Icon icon='add' />,
  color: 'secondary'
};

export const Warning = Template.bind({});
Warning.args = {
  children: <Icon icon='add' />,
  color: 'warning'
};

export const Black = Template.bind({});
Black.args = {
  children: <Icon icon='add' />,
  color: 'black'
};

export const Gray = Template.bind({});
Gray.args = {
  children: <Icon icon='add' />,
  color: 'gray'
};
