/*
 * @Author: bruceliu bruceliu@nswap.com
 * @Date: 2022-05-07 14:36:59
 * @LastEditors: bruceliu bruceliu@nswap.com
 * @LastEditTime: 2022-05-07 16:39:07
 * @FilePath: /component-lib-demo/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'component-lib-demo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // base: '/docs-dist/',
  // publicPath: '/docs-dist/',
  mode: 'site',
  history: {
    type: 'hash', // 设置路由模式为 hash 模式，防止部署至 GitHub Pages 后刷新网页后出现 404 的情况发生.
  },
  // more config: https://d.umijs.org/config
});
