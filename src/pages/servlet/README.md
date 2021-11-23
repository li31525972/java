# Servlet

## 配置
- 根据自己IDEA版本自行百度

## 实现
### Servlet
```java
public class ServletDemo1 implements Servlet {
    
    // 初始化
    public void init(ServletConfig arg0) throws ServletException {
        System.out.println("=======init=========");
    }
    
    // 对客户端响应的方法,该方法会被执行多次，每次请求该servlet都会执行该方法
    public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException {
        System.out.println("hehe");
    }

    // 当Servlet被销毁时执行该方法
    public void destroy() {
        System.out.println("******destroy**********");
    }
    
    public ServletConfig getServletConfig() {
        return null;
    }

    public String getServletInfo() {
        return null;
    }
}
```

### 继承 GenericServlet
```java
public class ServletDemo1 extends GenericServlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("servlet方法执行了");
    }
}
```

### 继承 HttpServlet
```java
public class servletDemo3 extends HttpServlet {
    //    初始化
    public void init() throws ServletException {
        System.out.println("servlet 创建成功");
    }

    //    服务中
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("接收到了客户端的请求");
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
    ...
    

    //    销毁
    @Override
    public void destroy() {
        System.out.println("servlet 销毁");
    }
}
```

## 配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--配置servlet-->
    <servlet>
        <!--配置名称-->
        <servlet-name>servletDemo1</servlet-name>
        <!--真实访问路径-->
        <servlet-class>com.gome.myServlet.ServletDemo1</servlet-class>
    </servlet>
</web-app>
```

## 映射
- <font color="red">优先级：具体名称 > 通配符 > 通配符 + 固定格式结尾</font>
### 具体名称
- 具体名称的方式，访问的资源路径必须和映射配置完全相同
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--配置servlet-->
    <servlet>
        <!--配置名称-->
        <servlet-name>servletDemo1</servlet-name>
        <!--真实访问路径-->
        <servlet-class>com.gome.myServlet.ServletDemo1</servlet-class>
    </servlet>
    
    <!--映射servlet-->
    <servlet-mapping>
        <!--和上面需要一致(映射到哪个配置上面)-->
        <servlet-name>servletDemo1</servlet-name>
        <!--浏览器访问资源的路径-->
        <url-pattern>/ganger</url-pattern>
    </servlet-mapping>
</web-app>
```

### 通配符
- `/`开头 + 通配符的方式，只要符合目录结构即可，不必考虑结尾是什么
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--配置servlet-->
    <servlet>
        <!--配置名称-->
        <servlet-name>servletDemo1</servlet-name>
        <!--真实访问路径-->
        <servlet-class>com.gome.myServlet.ServletDemo1</servlet-class>
    </servlet>
    
    <!--映射servlet-->
    <servlet-mapping>
        <!--和上面需要一致(映射到哪个配置上面)-->
        <servlet-name>servletDemo1</servlet-name>
        <!--浏览器访问资源的路径 只要是/ganger开头都匹配这个-->
        <url-pattern>/ganger/*</url-pattern>
    </servlet-mapping>
</web-app>
```

### 通配符 + 固定格式结尾
- 通配符 + 固定格式结尾的方式，只要符合固定结尾格式即可，不必考虑前面的路径
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!--配置servlet-->
    <servlet>
        <!--配置名称-->
        <servlet-name>servletDemo1</servlet-name>
        <!--真实访问路径-->
        <servlet-class>com.gome.myServlet.ServletDemo1</servlet-class>
    </servlet>
    
    <!--映射servlet-->
    <servlet-mapping>
        <!--和上面需要一致(映射到哪个配置上面)-->
        <servlet-name>servletDemo1</servlet-name>
        <!--浏览器访问资源的路径 只要是 .a 结尾都匹配这个 如：sss.a  /xxx/ss.a -->
        <url-pattern>/*.a</url-pattern>
    </servlet-mapping>
</web-app>
```
