var text = {
    message : "<p style='color:blue'>I'm blue.</p>",
    url:"https://www.cxy61.com/index-image/index.html",
    show:true,
    yanse: "red",
}
// Vue函数创建一个实例
// 用于启动Vue应用的实例，称为：根实例。 也就是变量app
var app = new Vue({
    // el选项 为实例提供挂载元素 ， 可以使html元素 或css选择器
    el:'#app',
    // data选项 用来声明应用内,需要双向绑定的数据
    data:text,
    methods:{
        change: function(){
            // this指当前实例本身，也就是变量app
            // this.show 直接改变实例属性为false,元素被移除
            this.show = false;
        }
    }
    
})