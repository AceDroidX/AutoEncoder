# AutoEncoder
一个部署在服务器上的自动压制系统
![示例图片](https://github.com/AceDroidX/AutoEncoder/raw/master/web.png)
## Why?
作为Vtuber字幕组的一员，总会遇到没有压制man、视频压坏或是~~电脑太菜~~导致压制时间过长的问题  
这个项目就是为了解决以上问题而产生的！~~当然你得有一台性能不错的服务器才行~~
## How to use？
1. 准备web前端  
    - 下载[gh-pages分支](https://github.com/AceDroidX/AutoEncoder/archive/gh-pages.zip)里的文件到webroot中  
    - 或自行构建
```shell
cd auto-encoder-web
npm install
npm run build
```
2. 运行Python后端  
    1. 安装Python3.7或以上版本
    2. 安装相关依赖库`pip install flask`
    3. 安装ffmpeg并**设置好path环境变量**
    4. 下载[主分支](https://github.com/AceDroidX/AutoEncoder/archive/master.zip)里的文件  
    5. `python ./auto-encoder-api/main.py`
## And more
这只是一个花了三天时间的练手作品  
前端Vue+axios  
后端Python+ffmpeg  
