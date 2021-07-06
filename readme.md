# 官网开发文档(前端)



# 部署

#### 服务器部分

前置条件:  docker 已安装

1. your/docker/config/path/nginx/sites 目录下 复制一个文件

2. 打开刚刚的文件,并修改以下字段

   server_name  PROJECT_NAME.qs.com;
   root  /var/www/PROJECT_GIT_NAME/www;

   3.修改系统hosts文件 新增127.0.0.1 PROJECT_NAME.qs.com

#### 前端编译部分

前置条件:  node 版本 <= 10.15, 可使用nvm安装,推荐node版本10.15

1. 准备 gulp目录,gulpfile.js,package.json

2. gulp/tasks.js   

    将变量 proxyHost 改成 PROJECT_NAME.qs.com

3. 准备 PROJECT_NAME/www/Public/static/default,

    PROJECT_NAME/www/Public/static/mobile

    放到项目相应位置

4. 在项目根目录打开命令行,运行gulp reload即可监听并自动刷新页面
5. 上传代码到测试服前,需要把生成的文件add到git暂存区 不然没法上传



## 编译

使用gulp 对 css & js 进行编译

编译命令: 

​	`gulp reload`  编译并监听刷新
​	`gulp mobile:reload`  编译移动端并监听刷新

​	`gulp default:reload   `编译pc端并监听刷新

​	`gulp build`  编译并压缩(运行完自动停止)

​	`gulp default:build   ` 编译并压缩(运行完自动停止)

​	`gulp mobile :build`  编译并压缩(运行完自动停止)



每次对 css或 js 保存后,都会编译文件

编译后,会生成一个新的文件,
同时会修改head, footer里面的引用的文件名

- 若遇到head.html 在git冲突 请选择任意一个冲突版本， 并重启gulp,待编译后, git重新add  才能上传测试服
- 若编译错误 会自动停止，需要重启gulp
- 自动生成sourcemap 可在浏览器查看源代码 ,源文件名 以及行号(行号可能不太准确)



## html

- 复用的html 可以跟后端商量 用widget 或 直接引入公共的html

- 注意html语义化, eg: ul,li, p, h1-h6...

  

## 图片:  

- 图片展示: 

动态上传的图必须有固定尺寸的div包裹  防止上传的图片太大  导致样式错乱,
后端使用图片裁剪,保证图片比例

前端可用css 属性 object-fit: cover(ie可能不兼容)

- logo: 

  - 不能拉伸,要展示整个图
  所以 外层div 设置 固定宽高,里面的 img 标签设置: 	
  
  ​	`max-width: 100%;`
  
  ​	`max-height: 100%;`
  
- 首屏幻灯片轮播:  

  - 一般情况下宽度100%，高度自适应，完整展示

- banner:  

  - 一般情况下宽度100%，高度自适应，完整展示
  - 如内容不重要，只作为背景，则宽度100%，高度固定，bg cover center填充整个区域

- 列表图

  - 按尺寸比例调用展示

- 正文图(包括但不限于: 富文本里面的图)

  - 宽度不超过内容层宽度，高度自适应
  
    

- 图片放大展示可用[viewer.js](https://fengyuanchen.github.io/viewerjs/)
- 图片轮播用[swiper.js](https://www.swiper.com.cn/)



## 图标

用Symbol (svg) 的方式引入,需要设计用AI做图标, 具体引入方式看 iconfont文档

开发环境用iconfont 在线链接

生产环境 需要在iconfont下载





## css

#### 	文件布局

​		commonStyle:  pc + 移动公用

​			var.less:  变量  主要存放网站颜色

​			tool.less:  工具函数 eg: `.mb0{ margin-bottom: 0; }`

​			common.less:  公用代码 eg: `.text-red` 类(某些项目不一定有红色的文字)

​			reset.less :  对浏览器样式重置



​		pc

​		    var.less:   pc端变量 

​			tool.less:  pc工具函数

​			common.less:  pc公共代码

​			icon.less : pc 端icon

​			style.less:  对所有样式代码进行聚合

​			*coder.less* 以作者名为文件名,避免冲突



​		mobile

​		    var.less:  mobile端变量 

​			tool.less:  mobile工具函数

​			common.less:   mobile公共代码

​			icon.less :   mobile  端icon

​			style.less 对所有样式代码进行聚合

​			*coder.less* 以作者名为文件名,避免冲突



### 样式命名规范

- 变量： 

  - 颜色： 一般网站颜色不会很多，因此直接用颜色命名, eg: @green;

    ​			有时候会有两种相近的颜色，可用 light 作为前缀， eg: @light-green;

    ​			边框： @border-color; 背景： @bg-color;输入框背景: @input-bg-color;

  - 距离(高度/宽度)： 定义.container宽度，eg： @container-width;

  - 路径： @img-url:  'path/to/your/img/directory';

- 类名

  - 页面： .page-*, eg: .page-index;

  - 列表： .*-list,  (-item): 

    -  eg: .news-list, .news-item; 同时html用 ul + li

  - 按钮： .btn  

    - 颜色： .btn-green

      - 反白：.btn-border;

    - 状态： .btn-disabled

    - 形状： .btn-square, .btn-square-radius, .btn-radius

      使用的时候组合起来， .btn.btn-green.btn-square;
  
       类似的技巧可以拓展到.tag 之类的地方.



### 样式布局

- [flex的使用](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- 绝对定位的使用



### 常用css类名

- container类： 

  pc : 从设计图量出项目最小宽度后(eg: 1200px),
  		让其居中,超过1200px的时候,左右留白

  ​		    `width: 1200px;` 

  ​			`margin-left: auto;`

  ​			`margin-right: auto;`

  mobile:  从设计图量出白边距离后(eg: 0.3rem),设置 

  ​			`padding-left: .3rem;`

  ​			`padding-right: .3rem;`

  ​			同时设置一个.row类

  ​			`margin-left: -.3rem;`

  ​			`margin-right: -.3rem;`

  

- .article-content 富文本

- pre[wrap] 多行文本

- .text-cut 文字单行裁剪。与flex使用时，须固定裁剪元素的父级宽度(可用calc, rem, px);

  ​	多行裁剪可用 .text-cut-2(ie不可用，因此pc端多行要后端裁剪)



## javascript

- 文件布局
  - 通过app.js, 把该目录下所有js引入到这里
- 命名规范
  - 变量
    - 常量: 用大写加下划线 (eg: DOCUMENT_HEIGHT);
    - 普通变量: 小驼峰
  - 函数
    - 构造函数,类  大驼峰
    - 普通函数 小驼峰



## 移动端

- 加载更多  使用瀑布流
- 主要使用rem做单位 (百分比, 像素)
  - 因chrome字体不能小于12px  所以字体最低可用12px 或 0.24rem(换算后接近12px)
  - 小的圆圈,或其他小的尺寸(一般5px或以下)  可能因为 rem 而有问题,   因此可用px固定宽高
  - 百分比也是常用的响应式单位
- 纯移动端的网站 在pc端打开的时候  内容需要居中展示([参考地址](https://wd.t4tstudio.com/))



## 页面优化

- 交互
  - 数据展示的地方,需要有数字滚动效果(countUp.js), 且需要用户滚动到相应位置才展示(滚动一次即可) [参考地址](https://www.chuse8.com/)
  - 列表图片: 设置鼠标经过放大的效果(pc)
  - 可点击的地方鼠标样式设置`cursor: pointer`
  - 鼠标经过的才展示的阴影,需要有过渡效果 (transition: box-shadow .3s; 或给所有效果加上过渡: transition: all .3s;) 
  - pc端外链地址 尽量在新窗口打开 (target="_blank");
- 展示
  - 搜索页 需要在搜索结果高亮搜索关键词
  - 列表的标题，摘要，描述对照设计图  对文字进行裁剪 (.text-cut);
  - 设置高度最小值100%,把底部固定在页面最下方
- 首屏加速
  - 可用cdn 对lib进行加速（常用[bootcdn](https://www.bootcdn.cn/), [75cdn](https://cdn.baomitu.com/)）
  - 首页图片过多的话,需要使用 [渐进式加载图片](https://github.com/quansitech/progressive-image)
- seo
  - head部分的title、keywords、description
  - 图片的alt标签



# 常用lib

- [swiper](https://www.swiper.com.cn/)

- [echart](https://echarts.apache.org/zh/index.html)

- polyfill (用于浏览器兼容es5非语法性功能，如Promise);

- [countUp](http://inorganik.github.io/countUp.js/)

- msgBox(消息弹窗)

  

###### 全思的库文件

- popup 弹窗插件
- react-cus-form 自定义表单插件
- common.js 
  - ajax-form
  - ajax-link
  - ajax-goto-link
  - ...
- full-area-select 四级地址联动



# 其他

- 兼容性
  - ie10
  - chrome
  - edge
  - safari 看情况(若客户要求)
- 关于误差： 与设计图偏差不能过大,一般1-2px差距可以接受, 
  eg: 14px也可以用15px取整代替
- 底部备案号需要用a标签 新窗口打开(移动端可以不需要) target="_blank"
- 技术支持同样需要a标签, 新窗口打开[技术支持：全思科技](https://www.quansitech.com/)
- 地图 常用百度地图
- 常用网站
  - [caiuse(css兼容查询)](https://caniuse.com/)
  - [压缩图片](https://tinypng.com/)