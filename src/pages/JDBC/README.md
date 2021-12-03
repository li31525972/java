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












