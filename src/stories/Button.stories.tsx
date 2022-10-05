import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'select' },
    shape: { control: 'select' },
    size: { control: 'select' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryFill = Template.bind({});
PrimaryFill.args = {
  children: 'BUTTON',
  color: 'primary',
  shape: 'fill',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'BUTTON',
  color: 'primary',
  shape: 'outline',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  children: 'BUTTON',
  color: 'primary',
  shape: 'text',
};

export const SecondaryFill = Template.bind({});
SecondaryFill.args = {
  children: 'BUTTON',
  color: 'secondary',
  shape: 'fill',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: 'BUTTON',
  color: 'secondary',
  shape: 'outline',
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  children: 'BUTTON',
  color: 'secondary',
  shape: 'text',
};

export const WarningFill = Template.bind({});
WarningFill.args = {
  children: 'BUTTON',
  color: 'warning',
  shape: 'fill',
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  children: 'BUTTON',
  color: 'warning',
  shape: 'outline',
};

export const WarningText = Template.bind({});
WarningText.args = {
  children: 'BUTTON',
  color: 'warning',
  shape: 'text',
};
