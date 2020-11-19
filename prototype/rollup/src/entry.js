import MyButton from "./MyButton";
import SfcButton from "./SfcButton.vue";
import JsxButton from "./JsxButton.vue";

// 添加插件
MyButton.install = (app) => app.component("MyButton", MyButton);
SfcButton.install = (app) => app.component("SfcButton", SfcButton);
JsxButton.install = (app) => app.component("JsxButton", JsxButton);

// 组件库
const Element = {
  MyButton,
  SfcButton,
  JsxButton,
  install: (app) => {
    app.use(MyButton);
    app.use(SfcButton);
    app.use(JsxButton);
  },
};

export default Element;
