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

## 数据共享
### 应用域
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
### 请求域
```java
public class ServletContextDemo extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        // 设置共享数据
        req.setAttribute("name", "xxx");

        // 获取共享数据
        Object name = req.getAttribute("name");

        // 删除共享数据
        req.removeAttribute("name");
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

## 请求
### 获取各种路径
```java
@WebServlet("/demo1")
public class requestDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("测试路径。。。");
        // 获取虚拟目录名称
        String contextPath = req.getContextPath();
        System.out.println(contextPath);

        // 获取servlet映射路径
        String servletPath = req.getServletPath();
        System.out.println(servletPath);

        // 获取访问者IP地址
        String remoteAddr = req.getRemoteAddr();
        System.out.println(remoteAddr);

        // 获取请求消息的数据
        String queryString = req.getQueryString();
        System.out.println(queryString);

        // 获取统一资源标识符
        String requestURI = req.getRequestURI();
        System.out.println(requestURI);

        // 获取统一资源定位标识符
        StringBuffer requestURL = req.getRequestURL();
        System.out.println(requestURL);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 获取请求头信息
```java
@WebServlet("/request1")
public class requestDemo1 extends HttpServlet {
    private ServletConfig config;

    @Override
    public void init(ServletConfig config) throws ServletException {
        this.config = config;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("获取请求的各种信息");

        // 根据请求头名称获取对应的值
        String header = req.getHeader("connection");
        System.out.println(header);

        // 根据请求头获取多个值
        Enumeration<String> headers = req.getHeaders("accept-encoding");
        System.out.println(headers);
        while (headers.hasMoreElements()) {
            String s = headers.nextElement();
            System.out.println(s);
        }

        // 获取所有请求头的名称
        Enumeration<String> headerNames = req.getHeaderNames();
        System.out.println(headerNames);
        while (headerNames.hasMoreElements()) {
            String s = headerNames.nextElement();
            System.out.println(s);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
```
### 获取请求参数信息
```java
@WebServlet("/request2")
public class requestDemo2 extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取请求参数信息

        // 根据名称获取数据
        System.out.println("根据名称获取数据");
        String name = req.getParameter("name");
        System.out.println(name);

        // 根据名称获取所有数据
        System.out.println("根据名称获取所有数据");
        String[] ages = req.getParameterValues("age");
        System.out.println(ages);
        for (String age : ages) {
            System.out.println(age);
        }

        // 获取所有名称 - 得到枚举类型
        System.out.println("获取所有名称");
        Enumeration<String> parameterNames = req.getParameterNames();
        System.out.println(parameterNames);
        while (parameterNames.hasMoreElements()) {
            String nextName = parameterNames.nextElement();
            String value = req.getParameter(nextName);
            System.out.println("名称：" + nextName + " 值：" + value);
        }

        // 获取所有参数的健值对
        System.out.println("获取所有参数的健值对");
        Map<String, String[]> parameterMap = req.getParameterMap();
        for (String key : parameterMap.keySet()) {
            String[] values = parameterMap.get(key);
            for (String value: values) {
                System.out.println("名称：" + key + " 值：" + value);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 获取参数手动封装对象
```java
/**
 * 获取参数手动封装对象
 */
@WebServlet("/request3")
public class RequestDemo3 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取所有的数据
        String name = req.getParameter("name");
        String[] ages = req.getParameterValues("ages");

        User user = new User(name, ages);
        System.out.println(user);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 获取参数反射封装对象
```java
/**
 * 获取参数反射封装对象
 */
@WebServlet("/request4")
public class RequestDemo4 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取所有的数据
        Map<String, String[]> map = req.getParameterMap();

        User user = new User();

        for(String key : map.keySet()) {
            String[] value = map.get(key);

            try {
                PropertyDescriptor pd = new PropertyDescriptor(key, user.getClass());
                Method writeMethod = pd.getWriteMethod();
                if (value.length > 1) {
                    writeMethod.invoke(user, (Object)value);
                } else {
                    writeMethod.invoke(user, value);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        System.out.println(user);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 获取参数工具封装对象
```java
/**
 * 获取参数工具封装对象
 */
@WebServlet("/request5")
public class RequestDemo5 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Map<String, String[]> map = req.getParameterMap();

        User user = new User();
        
        try {
            // BeanUtils 包需要引入
            BeanUtils.populate(user, map);
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println(user);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 流对象获取数据
```java
/**
 * 根据流对象获取数据
 */
@WebServlet("/request6")
public class RequestDemo6 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 字符流 -> 必须是post请求方式
        BufferedReader reader = req.getReader();
        String line;

        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 字节流获取数据
```java
@WebServlet("/request7")
public class RequestDemo7 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletInputStream stream = req.getInputStream();
        byte[] arr = new byte[1024];
        int len;
        while ((len = stream.read(arr)) != -1) {
            System.out.println(new String(arr, 0, len));
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 中文乱码
- `get`请求没有乱码问题
- `post`乱码主要是因为前后端编码格式没有统一
```java
@WebServlet("/request7")
public class RequestDemo7 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置为前端文件编码格式
        req.setCharacterEncoding("UTF-8");
        String name = req.getParameter("name");
        System.out.println(name);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 请求转发
```java
@WebServlet("/request8")
public class RequestDemo8 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置共享数据
        req.setAttribute("encoding", "UTF-8");

        // 获取请求调度对象
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/request7");
        // 实现转发
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}

@WebServlet("/request7")
public class RequestDemo7 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Object encoding = req.getAttribute("encoding");
        System.out.println(encoding);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
### 请求包含
```java
@WebServlet("/request9")
public class RequestDemo9 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/request7");

        requestDispatcher.include(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}

@WebServlet("/request7")
public class RequestDemo7 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("测试执行。。。");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

## 响应
### 字节流响应
```java
@WebServlet("/response1")
public class ResponseDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取字节输出流对象
        ServletOutputStream os = resp.getOutputStream();

        // 定义响应消息
        String str = "hello";

        // 通过字节流对象输出
        os.write(str.getBytes());
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 字符流响应
```java
@WebServlet("/response2")
public class ResponseDemo2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取字符流对象
        PrintWriter os = resp.getWriter();

        // 设置响应消息
        String str = "test";

        // 响应
        os.write(str);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 解决乱码
```java
@WebServlet("/response1")
public class ResponseDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置响应编码格式
        resp.setContentType("text/html;charset=UTF-8");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 响应图片
```java
@WebServlet("/response3")
public class ResponseDemo3 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 通过图片的相对路径获取绝对路径
        String path = getServletContext().getRealPath("/images/logo.jpeg");

        // 创建字节输入流对象，关联图片路径
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(path));

        // 通过响应对象获取字节输出流对象
        ServletOutputStream os = resp.getOutputStream();

        // 循环读写
        byte[] arr = new byte[1024];
        int len;
        while ((len = bis.read(arr)) != -1) {
            os.write(arr, 0, len);
        }

        // 释放资源
        bis.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 设置缓存时间
```java
@WebServlet("/response4")
public class ResponseDemo4 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置缓存 -> 1小时缓存时间
        resp.setDateHeader("Expires", System.currentTimeMillis() + 60*60*1000);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 设置定时刷新
```java
@WebServlet("/response5")
public class ResponseDemo5 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码格式
        resp.setContentType("text/html;charset=UTF-8");

        String str = "3秒之后自动跳转登陆页面";

        // 写入数据
        resp.getWriter().write(str);

        // 定时刷新
        resp.setHeader("Refresh", "3;URL=/response/login.html");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 请求重定向
```java
@WebServlet("/response6")
public class ResponseDemo6 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("开始执行");

        // 本地服务地址
        // resp.sendRedirect(req.getContextPath() + "/response5");

        // 重定向到其它站点
        resp.sendRedirect("https://www.baidu.com");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

### 文件下载
```java
@WebServlet("/response7")
public class ResponseDemo7 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        // 根据相对路径获取绝对路径
        String path = getServletContext().getRealPath("/images/logo.jpeg");

        // 创建字节输入流对象，关联读取的文件
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(path));

        resp.setHeader("Content-Type", "application/octet-stream");
        resp.setHeader("Content-Disposition", "attachment;filename=logo.jpeg");

        // 获取输出流对象
        ServletOutputStream os = resp.getOutputStream();

        // 循环读写
        byte[] arr = new byte[1024];
        int len;
        while ((len = bis.read(arr)) != -1) {
            os.write(arr, 0, len);
        }

        // 释放资源
        bis.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

## Cookie
### name
- Cookie的名称(必须属性)

### value
- Cookie的值(不支持中文，必须属性)

### path
- Cookie的路径(重要)

### domain
- Cookie的域名(重要)

### maxAge
- Cookie的存活时间(重要)

### secure
- 布尔值，表示 cookie 是否应该只在加密的（即 SSL）连接上发送。

### version
- Cookie的版本号，`int`类型(不重要)

### comment
- Cookie的描述(不重要)

### 示例
```java
@WebServlet("/cookie1")
public class CookieDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();
        // 创建cookie对象，用于记录最后访问时间
        Cookie time = new Cookie("time", System.currentTimeMillis() + "");

        // 设置最大存活时间 - 单位：秒(默认-1)
        time.setMaxAge(60*60);

        // 将Cookie添加到客户端
        resp.addCookie(time);

        // 获取Cookie
        Cookie[] cookies = req.getCookies();
        for (Cookie cookie : cookies) {
            // 获取Cookie中的 time
            if ("time".equals(cookie.getName())) {
                String value = cookie.getValue();

                // 日前格式化
                SimpleDateFormat moment = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String formatValue = moment.format(new Date(Long.parseLong(value)));
                // 输出格式化后的日期
                System.out.println(formatValue);

                // 写入到浏览器
                writer.write(formatValue);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
## Cookie使用限制
### 数量大小限制
- 每个网站最多只能有20个`Cookie`，大小不能超过`4KB`，所有网站的`Cookie`不能超过300个

### 名称限制
- `Cookie`的名称只能包含`ASCCI`码表中的字母、数字字符，不能包含逗号、分号、空格、不能以`$`开头，`Cookie`的值不支持中文

### 存活时间限制(setMaxAge()方法接受数字)
- 负整数：当前会话有效，关闭窗口失效
- 0：立即清除
- 正整数：以秒为单位设置存活时间

### 路径限制
- 默认路径：取自第一次访问资源的路径，以这个前缀开头(包括子级路径)才可以获取到
- 设置路径：setPath()方法设置指定路径

## Session
- <font color="red"><b>注意：客户端禁用Cookie时Session将失效</b></font>
### getAttribute(String name)
- 该方法返回在该 session 会话中具有指定名称的对象，如果没有指定名称的对象，则返回 null。

### getAttributeNames()
- 该方法返回 String 对象的枚举，String 对象包含所有绑定到该 session 会话的对象的名称。

### getCreationTime()
- 该方法返回该 session 会话被创建的时间，自格林尼治标准时间 1970 年 1 月 1 日午夜算起，以毫秒为单位。

### getId()
- 该方法返回一个包含分配给该 session 会话的唯一标识符的字符串。

### getLastAccessedTime()
- 该方法返回客户端最后一次发送与该 session 会话相关的请求的时间自格林尼治标准时间 1970 年 1 月 1 日午夜算起，以毫秒为单位。

### getMaxInactiveInterval()
- 该方法返回 Servlet 容器在客户端访问时保持 session 会话打开的最大时间间隔，以秒为单位。

### invalidate()
- 删除整个 session 会话：该方法指示该 session 会话无效，并解除绑定到它上面的任何对象。

### isNew()
- 如果客户端还不知道该 session 会话，或者如果客户选择不参入该 session 会话，则该方法返回 true。

### removeAttribute(String name)
- 移除一个特定的属性: 该方法将从该 session 会话移除指定名称的对象。

### setAttribute(String name, Object value)
- 该方法使用指定的名称绑定一个对象到该 session 会话。

### setMaxInactiveInterval(int interval)
- 设置 session 会话过期时间：该方法在 Servlet 容器指示该 session 会话无效之前，指定客户端请求之间的时间，以秒为单位。

### 示例
```java
@WebServlet("/session1")
public class SessionDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取请求的用户名信息
        String username = req.getParameter("username");

        // 获取session对象
        HttpSession session = req.getSession();

        // 将用户名添加到共享数据中
        session.setAttribute("username", username);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}


@WebServlet("/session2")
public class SessionDemo2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        // 获取session对象
        HttpSession session = req.getSession();

        // 获取共享数据
        Object username = session.getAttribute("username");

        // 写入浏览器
        resp.getWriter().write(username + "");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
