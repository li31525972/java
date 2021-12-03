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

