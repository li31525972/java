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

## 排序
### ASC 升序
```
SELECT * FROM 表名 ORDER BY ASC;
```

### DESC 降序
```
SELECT * FROM 表名 ORDER BY DESC;
```

## 分组
```
// 基础语法：
SELECT 列名 FROM 表名 [WHERE 条件] GROUP BY 分组列名 [HAVING 分组后过滤条件] [ORDER BY 排序];
```

## 分页
```
SELECT * FROM 表名 LIMIT 当前条数,每页显示的条数;
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


## 外键约束
- 让表与表之间产生关联关系，保证数据的准确性

### 建表时添加外键约束
```
// ⚠️：order 不可以作为表名
// 基本语法：
// 基本语法：
ALTER TABLE 表名称 ADD [CONSTRAINT 外键名称] FOREIGN KEY 列名称 REFERENCES 关联表名称(列名称);

CREATE TABLE IF NOT EXISTS orderlist(
	id INT PRIMARY KEY AUTO_INCREMENT,
	number VARCHAR(20) NOT NULL,
	uid INT,
	CONSTRAINT 外键名 FOREIGN KEY (本表外键列名) REFERENCES 主表名(主表列名)
);
// 示例：(CONSTRAINT ou_fkl 指定外键名称)
CREATE TABLE IF NOT EXISTS orderlist(
	id INT PRIMARY KEY AUTO_INCREMENT,
	number VARCHAR(20) NOT NULL,
	uid INT,
	CONSTRAINT ou_fkl FOREIGN KEY (uid) REFERENCES user(id)
);
```
### 单独添加外键
```
// 基本语法：
ALTER TABLE 表名 ADD [CONSTRAINT 外键名称] FOREIGN KEY (本表外键列名) REFERENCES 主表名(关联列名);
```

### 删除外键约束
```
// 基本语法：
ALTER TABLE 表名 DROP FOREIGN KEY 外键名;

// 示例：
ALTER TABLE orderlist DROP FOREIGN KEY ou_fkl;
```

### 级联更新和级联删除
#### 添加外键约束，同时添加级联更新和级联删除
```
// 语法：
ALTER TABLE 表名 ADD [CONSTRAINT 外键名称] FOREIGN KEY (本表关联外键ID) REFERENCES 主表名称(主表关联列名) ON UPDATE CASCADE ON DELETE CASCADE;

// 示例：
ALTER TABLE orderlist ADD CONSTRAINT ou_fkl FOREIGN KEY (uid) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE;
```

## PRIMARY KEY 主键约束
- 主键约束默认包含非空和唯一两个功能，一张表只能有一个主键，主键一般用于表中数据的唯一标识

### 建表时添加主键约束
```
// 基本语法：
ALTER TABLE 表名(
    列名 数据类型 PRIMARY KEY,
    ...,
    列名 数据类型
)
```
### 单独添加主键约束
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型 PRIMARY KEY;
```

### 删除主键约束
```
// 基本语法：
ALTER TABLE 表名 DROP PRIMARY KEY;
```

## AUTO_INCREMENT 自增约束
- `mysql`中的自增约束，必须配合键的约束一起使用

### 建表添加主键自增约束
```
// 基本语法：
ALTER TABLE 表名(
    列名 数据类型 PRIMARY KEY AUTO_INCREMENT,
    ...,
    列名 数据类型
)
```
### 删除主键自增约束
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型;
```

### 建表后单独添加主键自增约束
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型 AUTO_INCREMENT;
```

## UNIQUE 唯一约束
### 建表时添加
```
// 基本语法：
CREATE TABLE 表名(
    列名 数据类型 UNIQUE,
    ...,
    列名 数据类型
);
```

### 单独添加
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型 UNIQUE;
```

### 删除
```
// 基本语法：
ALTER TABLE 表名 DROP INDEX 列名;
```

## NOT NULL 非空约束
### 建表时添加
```
// 基本语法：
CREATE TABLE 表名(
    列名 数据类型 NOT NULL,
    ...,
    列名 数据类型
);
```

### 单独添加
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型 NOT NULL;
```

### 删除
```
// 基本语法：
ALTER TABLE 表名 MODIFY 列名 数据类型;
```

## 多表操作

### 一对一
- 在任意一个表建立外键，去关联另外一个表的主键
```
CREATE DATABASE db3;

USE db3;

CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20)
);

INSERT INTO user VALUES (null, '张三'),(null, '李四');

CREATE TABLE card (
	id INT PRIMARY KEY AUTO_INCREMENT,
	number VARCHAR(20) UNIQUE NOT NULL,
	cid INT UNIQUE,
	CONSTRAINT cu_fk1 FOREIGN KEY (cid) REFERENCES user(id)
);

INSERT INTO card VALUES (null,'123456'),(null, '789123');
```

### 一对多
- 在多的一方建立外键约束，来关联-的一方主键
```
CREATE DATABASE db4;
USE db4;

CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL
);

INSERT INTO user VALUES (null, '张三'),(null, '李四');

CREATE TABLE orderlist(
	id INT PRIMARY KEY AUTO_INCREMENT,
	number VARCHAR(20) NOT NULL,
	uid INT NOT NULL,
	CONSTRAINT ou_fk1 FOREIGN KEY (uid) REFERENCES user(id)
);

INSERT INTO orderlist VALUES (null, '123', 1),(null, '234', 1),(null, '333', 2),(null, '444', 2);
```

### 多对多
- 需要借助第三张表，中间表至少包含两个列，这两个列作为中间表的外键，分别关联两张表的主键
```
CREATE DATABASE db1;
use db1;

CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20)
);

INSERT INTO user VALUES (null,'张三'),(null,'李四');

CREATE TABLE course(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20)
);

INSERT INTO course VALUES (null, '数据结构'),(null, '算法'),(null, '设计模式'),(null, '网络');

CREATE TABLE user_course(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,    -- 用于和用户建立外键关联
	cid INT,    -- 用于和课程建立外键关联
	CONSTRAINT uc_fk1 FOREIGN KEY (uid) REFERENCES user(id),
	CONSTRAINT uc_fk2 FOREIGN KEY (cid) REFERENCES course(id)
);

INSERT INTO user_course VALUES (null,1,1),(null,1,2),(null,2,1),(null,2,4);
```
## 多表查询
### 内连接查询
- 内连接查询的是两张表有交集的部分数据(有主外键关联的数据)

#### 显示内连接
```
// 基础语法：
SELECT 列名 FORM 表名1 [INNER] JOIN 表名2 ON 条件;

// 示例：查询用户信息和对应的课程信息
SELECT * FROM user INNER JOIN user_course ON user_course.uid = user.id;
```

#### 隐式内连接
```
// 基础语法：
SELECT 列名 FROM 表名1,表名2 WHERE 条件;
```

### 外连接查询
#### 左外连接
- 查询左表的全部数据和左右两张表有交集部分的数据
```
// 语法：
SELECT 列名 FORM 表名1 LEFT [OUTER] JOIN 表名2 ON 条件;
```

#### 右外连接
- 查询右表的全部数据和左右两张表有交集部分的数据
```
// 语法：
SELECT 列名 FORM 表名1 RIGHT [OUTER] JOIN 表名2 ON 条件;
```

### 子查询

#### 单行单例
```
// 语法：
SELECT 列名 FROM 表名 WHERE 条件;
// 示例：
SELECT NAME,AGE FROM USER WHERE AGE=(SELECT MAX(AGE) FROM USER);
```

#### 多行单列
```
// 语法：
SELECT 列名 FROM 表名 WHERE [NOT] IN (SELECT 列名 FROM 表名 [WHERE 条件]);
// 示例：查询张三和李四的所有课程信息
SELECT * FROM COURSE WHERE UID IN (SELECT ID FROM USER WHERE NAME IN ('张三','李四'));
```

#### 多行多列
```
// 语法：
SELECT 列名 FORM 表名,(SELECT 列名 FROM 表名 [WHERE 条件]) [WHERE 条件];
// 示例：
```

### 自关联查询
- 在同一张表中数据有关联性，我们可以把这张表当成多张表来查询(比如菜单这种有父级关联的)
```
// 示例：
SELECT
    M1.ID,
    M1.NAME,
    M1.PID,
    M2.ID,
    M2.NAME 
FROM 
    MENULIST M1 
LEFT OUTER JOIN 
    MENULIST M2 
WHERE 
    M2.PID = M1.ID;
```

## 视图
- 将比较复杂的查询语句所查询出来的结果自动的封装到一张虚拟的数据表里面，简化后面的操作

### 创建
```
// 语法：
CREATE VIEW 视图名称[(列名列表)] AS 查询语句;
```

### 修改
- 修改视图数据后，源表中的数据也会随之修改
#### 修改视图数据
```
// 语法：
UPDATE 表名 SET 列名=值 WHERE 条件;
```
#### 修改视图结构
```
// 语法：
ALTER VIEW 视图名称 (列名列表) AS 查询语句;
```
### 删除
```
// 语法：
DROP VIEW [IF EXISTS] 视图名称;
```

### 查询
```
// 语法：
SELECT 列名 FROM 视图名称;
```

## 数据备份和恢复
### 命令行方式
```
// 备份
1. 登录到mysql服务器
2. 输入：mysqldump -u root -p 数据库名称 > 文件保存路径

// 恢复
1. 登录到mysql服务器
2. 删除已备份的数据库
3. 重新创建名称相同的数据库
4. 使用该数据库
5. 导入文件执行：source 备份文件全路径
```

## 存储过程
### 创建
```
// 语法：
-- 修改结束分隔符
DELIMITER $

-- 创建存储过程
CREATE PROCEDURE 存储过程名称(参数列表) 
BEGIN 
    sql 语句列表;
END$

-- 修改结束分隔符
DELIMITER ;
```
### 调用
```
// 语法：
CALL 存储过程名称(实际参数);
```

### 查看
```
// 查询数据库中所有的存储过程
SELECT * FROM mysql.proc WHERE db='数据库名称';
```

### 删除
```
DROP PROCEDURE [IF EXISTS] 存储过程名称;
```

### 变量
```
// 定义变量
DECLARE 变量名 数据类型 [DEFAULT 默认值];

// 赋值方式1
SET 变量名 = 变量值;

// 赋值方式2
SELECT 列名 INTO 变量名 FROM 表名 [WHERE 条件];
```

### if 语句
```
IF 判断条件1 THEN 执行的sql语句1;
[ELSEIF 判断的条件2 THEN 执行的sql语句2;]
...
[ELSE 执行的sql语句n;]
END IF;
```

### while 循环
```
初始化语句;
WHILE 条件判断语句 DO
    循环体语句;
    条件控制语句;
END WHILE;
```

### 参数传递
```
-- IN 代表输入参数，需要由调用者传递实际数据(默认)
-- OUT 代表输出参数，该参数可以作为返回值
-- INOUT 可以作为输入参数，也可以作为输出参数


CREATE PROCEDURE 存储过程名称([IN|OUT|INOUT] 参数名 数据类型)
BEGIN
    SQL 语句列表;
END$
```


## 存储函数
- 存储函数必须有返回值
### 创建
```
CREATE FUNCTION 函数名称(参数列表) RETURNS 返回值类型
BEGIN
    SQL 语句列表;
    RETURN 结果;
END$
```

### 调用
```
SELECT 函数名称(实际参数);
```

### 删除
```
DROP FUNCTION 函数名称;
```

## 触发器
### 创建
```
DELIMITER $

CREATE TRIGGER 触发器名称
BEFORE|AFTERINSERT|UPDATE|DELETE
ON 表名
FOR EACH ROW
BEGIN
        触发器要执行的功能;
END$

DELIMITER ;
```

### 查看
```
SHOW TRIGGERS;
```

### 删除
```
DROP TRIGGER 触发器名称;
```

## 事务
- 一条或多条sql语句组成一个执行单元，其特点就是这个单元要么同时成功要么同时失败
- 单元中的sql语句都相互依赖，形成一个整体
- 如果某条sql语句执行失败或者出现错误，那么整个单元就会撤回到事务最初的状态
- 如果所有的sql语句都执行成功了，则事务就顺利执行

### 事务的四大特征
#### 原子性(atomicity)
原子性是指事务包含的所有操作要么全部成功，要么全部失败回滚，因此事务的操作如果成功就必须要完全应用到数据库，如果操作失败则不能对数据库有任何影响.

#### 一致性(consistency)
一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态.
拿转账来说，假设张三和李四两者的钱加起来一共是2000，那么不管A和B之间如何转账，转几次账，事务结束后两个用户的钱相加起来应该还得是2000，这就是事务的一致性.

#### 隔离性(isolcation)
隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离.

#### 持久性(durability)
持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的，即便是在数据库系统遇到故障的情况下也不会丢失提交

### 事务的隔离级别
- 脏读: 事务A在操作某行数据, 此时事务B开始读取数据, 然后事务A回滚事务, 此时事务B读取到的数据就是脏数据, 而事务B这种读取到其他事务的中间数据的过程就是脏读.
- 不可重复读: 事务A在开启事务后,两次读取同一行, 发现返回不同的数据, 这种在一个事务中两次读取到不同数据的情况就是不可重复读.
- 幻读: 事务A开始事务, 正在修改id为1-50的数据, 当修改到40行时候, 再次读取第一行数据, 发现第一行数据似乎没有被修改, 其实它是在被事务A修改后又被其他事务改回来了, 似乎产生了幻觉, 这就是幻读.

<img src="/images/business_level.png"/>

### 开启事务
```
START TRANSACTION;
```

### 回滚事务
```
ROLLBACK;
```

### 提交事务
```
COMMIT;
```

### 事务的提交方式
#### 查看事务的提交方式
```
SELECT @@AUTOCOMMIT; // 0 手动提交  1 自动提交
```
#### 修改事务的提交方式
```
SET @@AUTOCOMMIT=数字;
```

## 存储引擎

### 查询
#### 查询数据库支持的存储引擎
```
SHOW ENGINES;
```
#### 查询某个数据库中所有数据表的存储引擎
```
SHOW TABLE STATUS FROM 数据库名称;
```

#### 查询某个数据库中某个数据表的存储引擎
```

```

### 创建
```

```

### 修改
```

```

## DCL
- 定义数据库的访问权限和安全级别、及创建用户










