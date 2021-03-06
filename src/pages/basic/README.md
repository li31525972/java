# 基础知识

## 数据类型

### 基本类型
#### 整型
|   关键字     |  内存占用(字节)    |  取值范围  |
|   :---:    |  :---:       |  :---:    |
|  byte   |       1     |     -128~127 最大存储数据量 255   |
|  short     |   2     |  -32768~32767 最大存储数据量 65535  |
|  int     |    4   |     负的2的31次方~2的31次方-1  最大存储数据量 2的31次方-1  |
|  long     |    8   |     负的2的64次方~2的64次方-1  最大存储数据量 2的64次方-1  |
#### 浮点类型
|   关键字     |  内存占用(字节)    |  取值范围  |
|   :---:    |  :---:       |  :---:    |
|  float   |       4     |     float类型的数值有一个后缀F(例如：3.14F)   |
|  double     |   8     |  没有后缀F的浮点数值(如3.14)默认为double类型  |
```java
// 定义float类型的时候，需要在后缀添加F，可以是大写也可以是小写
float a = 12.2F;
```
#### 字符
|   关键字     |  内存占用(字节)    |  取值范围  |
|   :---:    |  :---:       |  :---:    |
|  char   |       2     |     0-65535   |
#### boolean
|   关键字     |  内存占用(字节)    |  取值范围  |
|   :---:    |  :---:       |  :---:    |
|  boolean   |       1     |     true,false   |

### 类型转换
#### 隐式转换
```java
// 将数据类型中，取值范围小的数据给取值范围大的类型赋值，可以直接赋值，例：
int a = 10;
double b = a;
// int在内存中占用4个字节，double在内存中占用8个字节，可以直接赋值
```
- 数据范围从小到大

<font color="red">byte -> short/char -> int -> long -> float -> double</font>
- 特殊关注：byte short char 三种数据在进行运算的时候不管是否又更高的数据类型，都会提升为int，然后再进行运算
```java
byte a = 10;
byte b = 20;
int c = a + b; // 运算的时候提升为int,结果就要用int接
```

#### 强制转换
- 把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量
```java
int a = 10; // int 4个字节
byte b = a; // byte 1个字节
System.out.println(b); // 会报错，从int转换为byte可能会损失精度

// 强制转换
byte b = (byte)a; 
```
### 类
```java
public class 类名 {}
```
### 方法
```java
修饰符 返回值类型 方法名(参数类型 形参名) {}

public int addCount(int a) {
    return a + 10
}
```
### interface 接口
### 数组
- 数组的长度是固定的
```java
int[] arr = new int[5]; // 创建一个数组，数组的长度是5
int[] arr = {1,2,3,4,5}; // 创建一个数组同时赋值
```

## 基本语法


## 面向对象
### 类
```java
// 创建
public class Person {
    
}

// 使用
Person student = new Person();
```
## 修饰符
### public
- `public` 任何人都可以访问

### protect
- `protect` 继承的类可以访问以及和`private`一样的权限

### private
- `private` 修饰的成员只能在本类中使用，不能被别的类使用

### default
- `default` 在整个包内都可以访问

### abstract
- `abstract` 定义抽象(用于约束实现类)，只能修饰类和方法，不能修饰变量。


## 常用类


## 正则表达式


## 内存与JVM
