##  安装
    `git clone` 并  `npm install` 安装项目依赖。
##  测试
    `npm run test` 来运行单元测试，可以测试transform.ts里的函数功能是否正确
##  lint
    `npm run lint` 可以测试代码是否符合lint规范，tslint.json 文件有相关规则
##  premcommit 与 commitlint
    此demo应用husky 与 Git hooks结合，来规范执行git commit前的code格式以及commit的信息格式
## 关于CI
     此demo应用了travis Ci跟 GitHub结合做自动构建工具， 根目录下.travis.yml 为配置文件
   
