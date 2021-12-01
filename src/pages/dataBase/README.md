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


## DDL
- 操作数据库和数据表

### 查询数据库
```
// 查询所有的数据库
SHOW DATABASES;

// 查询当前正在使用的数据库
SELECT DATABASE();

// 查询数据库的创建语句
SHOW CREATE DATABASE 数据库名称;

// 查询数据库的字符集
SHOW CREATE DATABASE 数据库名称;
```

### 创建数据库
```
// 创建数据库
CREATE DATABASE 数据库名称;

// 数据库不存在则创建
CREATE DATABASE IF NOT EXISTS 数据库名称;

// 创建数据库并指定字符集
CREATE DATABASE 数据库名称 CHARACTER SET utf8;
```

### 修改数据库
```
// 修改数据库的字符集
ALTER DATABASE 数据库名称 CHARACTER SET 字符集名称;
```


### 删除数据库
```
// 删除数据库
DROP DATABASE 数据库名称;

// 如果数据库存在则删除
DROP DATABASE IF EXISTS 数据库名称;
```

### 使用数据库
```
USE 数据库名称;
```

### 创建数据表
```
// 基本语法
CREATE TABLE 表名(
    字段名 数据类型    约束,
    ...
    字段名 数据类型    约束
)

// 示例：
CREATE TABLE user(
    id  INT NOT NULL,
    name VARCHAR(20),
    age INT
)
```

### 查询数据表
```
// 查询所有的数据表
SHOW TABLES;

// 查询表结构
DESC 表名;
// 示例：查询 USER 表的表结构
DESC USER;

// 查询数据库中某个表的字符集
SHOW TABLE STATUS FROM 数据库名称 LINK '表名';
```

### 修改数据表
```
// 修改表名
ALTER TABLE 表名 RENAME TO 新表名;

// 修改表的字符集
ALTER TABLE 表名 CHARACTER SET 字符集名称;

// 单独添加一列
ALTER TABLE 表名 ADD 字段名 数据类型;

// 修改某列的数据类型
ALTER TABLE 表名 MODIFY 字段名 新数据类型;

// 修改列名和数据类型
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
```

### 删除数据表
```
// 删除数据表
DROP TABLE 表名;

// 数据表存在则删除
DROP TABLE IS EXISTS 表名;

// 删除数据表的某一列
ALTER TABLE 表名 DROP 字段名; 
```

## DML
- 表数据的增删改
### 新增表数据
```
// 给指定列添加数据
INSERT INTO 表民(字段1,字段2)VALUES(值1,值2);

// 给全部列添加数据
INSERT INTO 表名 VALUES(值1,值2,...);
```
### 修改表数据
```
// 语法：
UPDATE 表名 SET 字段名=值,字段名=值 WHERE (条件);

// 示例：
UPDATE USER SET NAME='张三' WHERE ID=1;
```

### 删除表数据
```
DELETE FROM 表名 WHERE 条件;
```

## DQL
- 表数据的查询
### 查询语法
```
SELECT 字段列表 FROM 表名列表 WHERE 条件列表 GROUP BY 分组字段 HAVING 分组后的过滤条件 ORDER BY 排序 LIMIT 分页;
```
### 查询全部数据
```
SELECT * FROM 表名;
```

### 查询指定字段的表数据
```
SELECT 列名1,列名2 FROM 表名;
```

### 去重查询
```
SELECT DISINCT 列名1,列名2.. FROM 表名;
```

### 计算列的值
```
SELECT 列名1 运算符 列名2 FROM 表名;
```

### 别名查询
```
SELECT 列名 AS 别名 FROM 表名;
```

## WHERE

<img src="/images/where.png" />

### 且
```
// 语法1
SELECT * FROM 表名 WHERE 条件1 AND 条件2;
// 示例：查询18以上50以下所有用户
SELECT * FROM USER WHERE AGE > 18 AND AGE < 50;

// 语法2
SELECT * FROM XX WHERE 字段名 BETWEEN 值1 AND 值2;
// 示例：查询18以上50以下所有用户
SELECT * FROM USER WHERE AGE BETWEEN 18 AND 20;
```

### 或
```
// 语法1
SELECT * FROM 表名 WHERE 条件1 OR 条件2;
// 示例：
SELECT * FROM USER WHERE NAME = '张三' OR NAME = '李四';

// 语法2
SELECT * FROM 表名 WHERE 列名 IN (值1,值2);
// 示例：
SELECT * FROM USER NAME IN ('张三','李四');
```

## LINK
```
'%a'     // 以a结尾的数据
'a%'     // 以a开头的数据
'%a%'    // 含有a的数据
'_a_'    // 三位且中间字母是a的
'_a'     // 两位且结尾字母是a的
'a_'     // 两位且开头字母是a的
```


## 聚合函数
### COUNT 统计数量
```
SELECT COUNT(列名) FROM 表名;
```

### MAX 求最大值
```
SELECT MAX(列名) FROM 表名;
```

### MIN 求最小值
```
SELECT MIN(列名) FROM 表名;
```

### SUM 求和
```
SELECT SUM(列名) FROM 表名;
```

### AVG 求平均值
```
SELECT AVG(列名) FROM 表名;
```

## DCL
- 定义数据库的访问权限和安全级别、及创建用户
