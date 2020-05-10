# z-platform-ui
> 后台项目通用组件方法集合

# 调试方式启动

```bash
npm install

npm run dev
```

# 在自己项目中引用

## 项目根目录运行
```
npm install element-ui z-platform-ui --save
```
## main.js加入如下代码
```
import ElementUI from "element-ui"
import ZPlatformUI from "z-platform-ui"
import "element-ui/lib/theme-chalk/index.css"
import "z-platform-ui/lib/index.css"

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(ZPlatformUI)
```