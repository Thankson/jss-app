import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentBlock from './ContentBlock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/ContentBlock',
  component: ContentBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ContentBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentBlock> = (args) => <ContentBlock {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    fields: {
        heading: {value: '111'},
        content: {value: '222'},
    }
};
