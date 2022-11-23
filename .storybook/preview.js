import 'styles/globals.css';

export const parameters = {
  // layout: 'centered', // canvas页面示范元素位置居中
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    // expanded: true, //canvas页面显示描述文档的描述，类型，初始值
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Mock data
import { setupWorker , rest } from "msw";
if (typeof global.process === "undefined") { // make sure that is not a node process, it is a browser that's the only place that we want this to work
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req,res,ctx) => {
      return res(ctx.json({name: "Steven Zeng"}));
    })
  );
  worker.start();
}

// [Deprecated configure](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-configure)
//排列目录的顺序 // 好像没生效！！！
// import { configure } from '@storybook/react';
// const loaderFn = () => {
// 	const allExports = [
// 		require('../src/stories/Introduction.stories.mdx'),
// 		require(`../src/stories/Page.stories.tsx`),
// 		require(`../src/stories/Button.stories.tsx`),
// 		require(`../src/stories/Header.stories.tsx`),
// 		require(`../src/components/ContentBlock.stories.tsx`),
// 	];
// 	return allExports;
// };
// configure(loaderFn, module);
