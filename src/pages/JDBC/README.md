# JDBC

## [下载地址](https://repo1.maven.org/maven2/mysql/mysql-connector-java/)

## IDEA中使用JDBC
1. 点击new->Project，新建一个项目

<img src="/images/jdbc1.png"/>

2. 选择Project SDK, 创建项目,点击next

<img src="/images/jdbc2.png"/>

3. 右键点击MyProject，然后新建一个lib目录

<img src="/images/jdbc3.png"/>

<img src="/images/jdbc4.png"/>

4. 然后解压缩我们下载好的JDBC压缩文件mysql-connector-java-5.1.36.zip，提取出mysql-connector-java-5.1.36-bin.jar文件，将其直接复制到项目lib目录下面。

<img src="/images/jdbc8.png"/>
<img src="/images/jdbc5.png"/>

5. 右键点击lib目录，然后选择Add as a Library，这一步结束后，驱动文件就成功加入到项目中了。

<img src="/images/jdbc6.png"/>
<br />
<img src="/images/jdbc7.png"/>

6. 编写Java代码，测试驱动是否能够正常加载。
```java
public class JDBC_Demo1 {
    public static void main(String[] args) {

        try {
            System.out.println("开始注册驱动");
            // 注册驱动
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("注册成功");

            // 获取链接
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db1", "root", "123456");
            System.out.println("创建链接成功");
            // 获取执行者对象
            Statement stat = con.createStatement();

            // 执行sql语句，接收结果
            String sql = "SELECT * FROM user";
            ResultSet result = stat.executeQuery(sql);

            // 处理结果
            while (result.next()) {
                int id = result.getInt("id");
                String name = result.getString("name");
                System.out.println(id + " --- " + name);
            }

            // 释放资源
            result.close();
            con.close();
            stat.close();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

## DriverManager
- 驱动管理对象

### getConnection()
- 获取数据库连接
```java
/**
 * 获取数据库连接对象
 * 参数：
 *      url: 指定连接的连接的路径
 *      user: 用户名
 *      password: 密码
 */
static Connection getConnection(String url, String user, String password);

// 返回值
Connection 数据库连接对象
```

## Connection
- 数据库连接对象
1. 获取执行者对象
2. 管理事务

### createStatement()
- 普通执行者对象
```java
// Statement createStatement();

Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db1", "root", "123456");
// 获取执行者对象
Statement stat = con.createStatement();
```

### prepareStatement()
- 预编译执行者对象
```java
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/db1", "root", "123456");
// 获取执行者对象
PreparedStatement preparedStatement = con.prepareStatement();
```

### setAutoCommit()
- 开启事务
```java

```

### commit()
- 提交事务
```java

```

### rollback()
- 回滚事务
```

```

### close()
- 释放资源
```java

```

## Statement
- 执行sql语句的对象

### executeUpdate()
```java
/**
 * 参数：
 *      sql 可以执行 insert update delete 语句
 * 返回值 int: 返回可以影响的行数
 */
 int result = stat.executeUpdate(sql);
```

### executeQuery
```java
/**
 * 参数：
 *      sql 可以执行 select 语句
 * 返回值 ResultSet: 封装查询的结果
 */
 ResultSet result = stat.executeQuery(sql);
```

### close()
- 释放资源


## ResultSet
- 结果集对象

### next()
- 判断结果集中是否还有数据
```
boolean next();
```

### 获取结果集中的数据

#### getInt()
- 获取int类型数据

#### getString()
- 获取字符串类型数据


### close()
- 释放资源


## 配置文件
1. `src`目录下创建一个`config.properties`文件
```
# 注册驱动
driverClass=com.mysql.jdbc.Driver
# 数据库链接地址
url=jdbc:mysql://localhost:3306/db2
# 用户名
username=root
# 密码
password=123456
```

2. 添加一个`utils`包，包下创建一个`JDBCUtils`类，编写`jdbc`工具类
```java
package com.gm.utils;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JDBCUtils {
    // 1. 私有构造方法
    private JDBCUtils() {}
    // 2. 声明所需要的配置变量
    private static String driverClass;
    private static String url;
    private static String username;
    private static String password;
    private static Connection con;

    // 3. 提供静态代码块。读取配置文件的信息为变量赋值，注册驱动
    static {
        try {
            // 读取配置文件的信息为变量赋值
            InputStream is = JDBCUtils.class.getClassLoader().getResourceAsStream("config.prpperties");
            Properties prop = new Properties();
            prop.load(is);

            driverClass = prop.getProperty("driverClass");
            url = prop.getProperty("url");
            username = prop.getProperty("username");
            password = prop.getProperty("password");

            // 注册驱动
            Class.forName(driverClass);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 4. 提供获取数据库连接的方法
    public static Connection getConnection() {
        try {
            con = DriverManager.getConnection(url, username, password);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return con;
    }

    // 5. 提供释放资源的方法
    public static void close(Connection con, Statement stat) {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

        if (stat != null) {
            try {
                stat.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

    }
    public static void close(Connection con, Statement stat, ResultSet rs) {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

        if (stat != null) {
            try {
                stat.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }
}

```

3. 使用测试
```java
package com.gm.dao;

import com.gm.domain.Student;
import com.gm.utils.JDBCUtils;

import java.sql.*;
import java.util.ArrayList;

public class StudentDaoImp1 implements StudentDao {

    @Override
    public ArrayList<Student> findAll() {
        ArrayList<Student> list = new ArrayList<>();
        Connection con = null;
        Statement stat = null;
        ResultSet result = null;
        try {
            con = JDBCUtils.getConnection();
            stat = con.createStatement();

            String sql = "SELECT * FROM user";
            result = stat.executeQuery(sql);

            while (result.next()) {
                Integer sid = result.getInt("sid");
                String name = result.getString("name");
                Integer age = result.getInt("age");
                Date birthday = result.getDate("birthday");

                Student stu = new Student(sid, name, age, birthday);

                list.add(stu);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.close(con, stat, result);
        }

        return list;
    }
}

```






