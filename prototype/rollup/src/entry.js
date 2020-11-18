import MyButton from './MyButton'

// 添加插件
MyButton.install = (app) => app.component("MyButton", MyButton);

// 组件库
const Element = {
    MyButton,
    install: app => {
        app.use(MyButton)
    }
}

export default Element