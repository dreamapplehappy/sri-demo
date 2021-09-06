# Subresource Integrity Demo

## 安装项目依赖
```
yarn install
```

### 通过`express`将`demo`和`dist`文件夹作为服务端的静态资源文件夹
```
yarn static
```

### 运行`demo`里面的`cmd.js`，生成对应不同的文件的哈希值

注意：运行命令前，先在`demo`文件夹里创建一个名为`integrity`的文件夹；
另外如果是Windows系统的话，如何生成对应的哈希值可以参考：[Tools for generating SRI hashes](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#tools_for_generating_sri_hashes)

---

本项目仅供学习交流使用
