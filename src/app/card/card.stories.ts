import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<CardComponent>;
export const Primary: Story = {
  args: {
    backgroundColor: 'red',
    label: 'Card',
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Card Secondary',
  },
};

