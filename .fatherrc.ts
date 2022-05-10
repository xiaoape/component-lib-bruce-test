export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true, // less 转 css
  // 打包的产物若需引入 antd ，则通过按需加载形式引入。
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
