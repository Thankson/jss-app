import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentBlock, { getServerSideProps } from './ContentBlock';

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
// const Template: ComponentStory<typeof ContentBlock> = (args) => <ContentBlock {...args} />;
const Template: ComponentStory<typeof ContentBlock> = (args, { loaded: { name } }) => (
  <ContentBlock {...args} name={name} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  fields: {
    heading: { value: '111' },
    content: { value: '222' },
  },
};
Default.loaders = [
  async () => {
    const data = await getServerSideProps();
    console.log('🔥data💥 ', data);
    // return data.props;
    return data;
  },
];
