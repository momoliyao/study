### changeset 使用步骤（单包）
安装依赖库
```
devDependencies: {
    "@changesets/changelog-github": "^0.4.8",
    "@changesets/cli": "^2.26.1",
}
```


根目录下，初始化配置，会生成.changeset文件夹
```
npx changeset init
```

需要修改下.changeset/config.json中的baseBranch为当前分支，否则会报错

下面是需要重复执行的步骤，就是每当你想生成changelog时，要按照下方的步骤执行一遍

生成 chanegset

1、选择版本类型 （patch ， minor ，  major），这里选了patch
```
npx changeset
```

2、输入更新摘要 enter a summary

3、确定生成 changeset 文件

4、提交更改（个人认为这一步骤可选）

5、生成 changelog
```
npx changeset version
```
运行上面的命令行，会发生如下变化
- 删除了之前生成的changeset文件 eighty-swans-jam.md
- 更新当前工程的版本号 （fishx4TT 版本号由0.0.1 变成了0.0.2）
- 在工程根目录下生成了 CHANGELOG.md 文件


### 再来一次
下面是官网提供的命令行，没有太大差别

1. 添加 changeset tool
```
npm install @changesets/cli && npx changeset init
```
或者
```
yarn add @changesets/cli && yarn changeset init
```

2. 添加 changesets
```
npx changeset
```
或者
```
yarn changeset
```

3. 发布生成log文件
```
npx changeset version
```
或者
```
yarn changeset version
```

4. 发包publish ？？？（失败了，干嘛用的，看起来像是npm publish）
```
npx changeset publish
```
或者
```
yarn changeset publish
```

