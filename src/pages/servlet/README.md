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

## ServletConfig
### 配置
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
        
        <init-param>
            <!--key-->
            <param-name>encoding</param-name>
            <!--value-->
            <param-value>UTF-8</param-value>
        </init-param>
    
        <init-param>
            <param-name>lang</param-name>
            <param-value>zh</param-value>
        </init-param>
    </servlet>
</web-app>
```
### 示例
```java
public class ServletConfigDemo1 extends HttpServlet {
    // 声明ServletConfig
    private ServletConfig config;

    @Override
    public void init(ServletConfig config) throws ServletException {
        this.config = config;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 根据key获取value
        String encoding = config.getInitParameter("encoding");
        System.out.println(encoding);

        // 获取所有的key
        Enumeration<String> initParameterNames = config.getInitParameterNames();
        while(initParameterNames.hasMoreElements()) {
            String key = initParameterNames.nextElement();
            String value = config.getInitParameter(key);
            System.out.println(key + " -- " + value);
        }

        // 获取servletconfig名称
        String servletName = config.getServletName();
        System.out.println(servletName);

        // 获取servletContext对象
        ServletContext servletContext = config.getServletContext();
        System.out.println(servletContext);
        
        // 获取共享数据
        Object name = servletContext.getAttribute("name");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

## ServletContext
### 配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>servletContext</servlet-name>
        <servlet-class>com.gome.myServlet.ServletContextDemo</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>servletContext</servlet-name>
        <url-pattern>/servletContext</url-pattern>
    </servlet-mapping>
    <!--配置servletContext-->
    <context-param>
        <!--key-->
        <param-name>globalEncoding</param-name>
        <!--value-->
        <param-value>UTF-8</param-value>
    </context-param>
</web-app>
```

### 示例
```java
public class ServletContextDemo extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取ServletContext对象
        ServletContext context = getServletContext();

        // 根据key获取value
        String value = context.getInitParameter("globalEncoding");
        System.out.println(value);

        // 获取应用的虚拟目录
        String contextPath = context.getContextPath();
        System.out.println(contextPath);

        // 获取虚拟目录的绝对路径
        String realPath = context.getRealPath("/");
        System.out.println(realPath);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 共享数据
```java
public class ServletContextDemo extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取ServletContext对象
        ServletContext context = getServletContext();

        // 设置共享数据
        context.setAttribute("name", "xxx");

        // 获取共享数据
        Object name = context.getAttribute("name");

        // 删除共享数据
        context.removeAttribute("name");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
## 注解开发
### 使用注解
```java
//  /servletDemo1 就是资源访问路径
@WebServlet("/servletDemo1")
public class ServletNoteDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("开始执行了。。。");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```