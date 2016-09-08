#express-react
Express的后台集合了react的前端
This is [an example](http://example.com/ "Title") inline link.
1. 通过express-generator安装Express
2. 通过create-react-app 生成client文件夹
3. 在app.js中添加
''app.use(express.static(path.join(__dirname, 'client/build/')));//用来使生成的前端代码为静态资源，可以直接访问''
4. 在client目录下执行 npm run build 生成编译好的index.html
5. 在根目录下执行npm install 安装依赖，然后执行 npm start
6. 打开 http://localhost:3001/index.html
