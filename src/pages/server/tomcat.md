# tomcat

## [官网地址](https://tomcat.apache.org/)

## 下载
- 下载JDK对应的版本(以java8为示例)

<img src="/images/tomcat-download.png"/>

## 安装
- 解压放到习惯的路径，例如：/usr/local/ 

## 启动
- cd 到tomcat/bin目录下
```
cd /usr/local/tomcat/bin/
```
### Mac/Linux
- 执行 ./startup.sh
```
如果出现 permission denied: ./startup.sh 这是没有权限
chmod u+x *.sh 放开所有.sh文件权限
再次执行 startup.sh 即可启动服务
默认地址：localhost:8080
```
### windows
- 执行 ./startup.bat

## 停止
- cd 到tomcat/bin目录下
```
cd /usr/local/tomcat/bin/
```
### Mac/Linux
- 执行 sh shutdown.sh
```
sh shutdown.sh
```
### windows
- 执行 shutdown.bat

## 部署前端项目
```
到 tomcat/webapps/ROOT 创建一个目录：比如 hello
将前端项目文件放入到该文件夹下
访问：localhost:8080/hello

如果要部署到跟路径就将项目的index.html直接放在ROOT文件夹下就行
```

## IDEA集成tomcat
- 点击运行 - 编辑配置

<img src="/tomcat/tomcat1.png"/>

<img src="/tomcat/tomcat2.png"/>

- 选择`Tomcat Server` - 本地

<img src="/tomcat/tomcat3.png"/>

- 点击配置 - 选择`tomcat`安装地址或者手动输入安装地址

<img src="/tomcat/tomcat4.png"/>
<img src="/tomcat/tomcat5.png"/>

- 最后点击确定