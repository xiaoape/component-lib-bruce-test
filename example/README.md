描述
本文讲解使用create-react-app创建的项目，如何部署GitHub Pages，以及这部署到过程中遇到到坑。

创建项目
使用官网方式创建项目。

npx create-react-app my-app
cd my-app
npm install
弹出配置

npm run eject
Github Pages部署讲解
把项目部署成github pages，在github上点开项目到设置，翻到Github Pages设置处，可以看到Github Pages只能使用master、gh-pages分支或者master下面的docs文件夹。
我们这里使用的是gh-pages分支的方式来创建。

安装gh-pages
npm install gh-pages --save-dev
通过gh-pages中间件可以把build文件下到文件推送到github，并且创建gh-pages branch。

修改package.json
增加homepage

  "name": "react_demo",
  "version": "1.1.0",
  "private": true,
  "homepage": "./",  //加上这一句
注意：homepage不要设置成github page上生成的那个链接路径，比如https://username.github.io/react_demo/。
如果设置成上面的连接，build打的包会这所有路径前面加上react_demo。
比如index.html文件中对同等目录下的文件引用应该是src='./index.css',结果会变成src='./react_demo/index.css',这样部署后肯定无法访问，所有资源都找不到。
增加npm scripts命令，推送gh-pages

"scripts": {
        ...
     + "deploy": "gh-pages -d build" //加上这一句
}
-d 后面是文件夹

推送项目
GitHub Pages只是部署项目，react代码直接放上去是识别不了的，所以部署的是打包编译后到代码。

npm run build
编译后就可以推送了,执行上面配置的命令。

npm run deploy
这时github上项目就多出了一个gh-pages的branch，在设置中Github Pages处选择gh-pages分支保存，部署完成。
点击生成的连接，查看是否部署成功。



注意：github pages不支持browserRouter，这样你可能会看不到内容，需要切换成hash模式