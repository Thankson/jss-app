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
    type: {
      // 字段名为type
      description: '类型', // 属性描述
      control: {
        type: 'select', //文档控制器类型text(文本),select（选择）... 根据实际情况定义
      },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'text'], //选项内容
      table: {
        category: 'Button', //定义描述分类，可多个组件联合开发区分使用
        type: { summary: 'default | primary  | success | warning | danger | text' }, // 字段属性类型重写
        defaultValue: { summary: 'default' }, //文档描述显示的默认值
      },
    },
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
