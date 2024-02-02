# ChatGPT-Share-Server

便捷的账号共享服务


## 部署

快速部署

```bash
curl -sSfL https://raw.githubusercontent.com/Dr-Urso/chatgpt-share-server-mod/master/qinst.sh | bash
```

##文件结构
/backend：goframe后端，使用cooladmingo作为框架

/frontend：cooladmin前端，需进行编译后加入/public文件夹中

/modfrontend：自己加入的前端，也需要放入/public文件夹中

仓库中deploy分支是docker部署用，qinst.sh里可自动下载

release.sh：编译后端并push到docker仓库

releasetest.sh：编译后生成标签为test的容器，不进行push，测试用

/chatgpt-share-mod-test：测试用docker工作目录，dockercompose中已经配置

无法连接至数据库解决方法：

https://github.com/xyhelper/chatgpt-share-server/issues/4

目前问题：react资源文件路由错误，可以通过在引用的资源文件前面加“newlist”目录解决，或者将资源文件移动到外侧文件夹