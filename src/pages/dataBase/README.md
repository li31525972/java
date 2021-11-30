# mysql

## 安装
### 官网安装
[官网地址](https://downloads.mysql.com/archives/community/)

### macOS安装
1. 查找并确定自己需要安装的版本
```
brew search mysql

==> Formulae
automysqlbackup          mysql++                  mysql-client@5.7         mysql-connector-c++@1.1  mysql-search-replace     mysql@5.7
mysql                    mysql-client             mysql-connector-c++      mysql-sandbox            mysql@5.6                mysqltuner 
```
2. 指定版本安装
```
brew install mysql@5.7  // 安装
brew link --force mysql@5.7  // 链接
brew services start mysql@5.7 // 启动服务
brew services stop mysql@5.7     //停止
brew services restart mysql@5.7 //重启
```
3. 设置密码
```
// 启动之后，输入：
mysql_secure_installation

Securing the MySQL server deployment.
Connecting to MySQL using a blank password.
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin? 
Press y|Y for Yes, any other key for No:    // 是否安装密码验证插件


Please set the password for root here.
New password:   // 设置 root用户 密码 
Re-enter new password:  // 再次输入密码 

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.
Remove anonymous users? (Press y|Y for Yes, any other key for No) : // 是否删除匿名用户

Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.
Disallow root login remotely? (Press y|Y for Yes, any other key for No) :   // 禁止根用户远程登录?


By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.
Remove test database and access to it? (Press y|Y for Yes, any other key for No) :  // 删除测试数据库并访问它?


 - Dropping test database...
Success.
 - Removing privileges on test database...
Success.
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.
Reload privilege tables now? (Press y|Y for Yes, any other key for No) :    // 现在重新加载特权表?


Success.
All done! 
```


