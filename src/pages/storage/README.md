# 会话存储

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