# Blog-welcome-page
博客欢迎页面-迭代1，页面地址:https://yhevis.top/zhuye.php

**因博客本身的建站系统为typecho，所以页面也引用的jquery作为开发库，内置的贪吃蛇前端游戏为学生时期开发。**

**具体代码如有需要可自行修改**

## 目录说明
1. index                                      入口文件
2. js
   * /web.js                                  页面主要交互文件 
   * /js.js,/Nutrient.js,/Snake               导航内置的贪吃蛇前端游戏逻辑文件
3. css
   * /main.css                                页面核心css文件
   * /buttonMain.css                          页面按钮样式文件
   * /snake.css                               内置贪吃蛇前端游戏样式
 
## 如果你是站长但是对前端一窍不通的话可以看看这里

##### 修改页头文字  
修改inde.html文件第八行  
```html
   <title>博客</title>
```

##### 修改页头图片  
修改index.html文件第九行的url为图片链接  
```html
    <link rel="icon" type="image/ico" href="url">
```

##### 导航栏位修改
修改index.html文件25-33行之间的li标签  
href=""内为超链接，标签中间为按钮文字  
```html
    <li><a href="https://www.yhevis.top/index.php" target="_blank">博客</a></li>
```

##### 网站logo
修改index.html文件第47行  
src=""内填写logo图片地址  
```html
   <img class="logo logo-ig" src="" alt="">
```

##### 关于
修改index.html62-64行标签内的内容（标签本身勿动）
```html
    <div class="abtCont">
        <h2>关于我</h2>
    </div>
```
**语法：**
```html
<h2>大标题</h2>
<h3>小标题</h3>
<p>段落文字</p>
<a href="链接">超链接</a>
```


### 另外如果你真的用了且觉得还行的话我希望能添一个友链，谢谢大佬  
* 名字：YH_evIs' blog
* 地址：https://yhevis.top  
* 标志：https://www.yhevis.top/blog.png  
* 介绍：Life is brief, and then you die, you know? ——Steve Jobs  
