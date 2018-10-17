// 图片大小正好是窗口的大小
$(function(){  //文档就绪函数，JQuery代码要写在这个函数中
    // 获取窗口的宽度
    var $width = $(window).width();
    // 将窗口的宽度通过参数传给图片
    $(".slider-pics img").width($width);
    //将窗口的宽度传给图标
    $(".slider-circle").width($width);


// 在点击菜单按钮的时候把菜单显示出来
$("#menuBtn").on('click',function(){
    if(!$('#menuBtn').hasClass("open")){
        $("#menu").css({
            'display':'block','z-index':'10'
        });
        $("#menuBtn").addClass("open");
    }
    else{
        $("#menuBtn").removeClass("open");
        $("#menu").css({'display':'none'})
    }
})
// 轮播效果
function play(preIndex, currentIndex){
    // 让前一张图片淡出，让后一张图片淡入
    $('.slider-pics').eq(preIndex).fadeOut(500)
    .parent().children().eq(currentIndex).fadeIn(1000);
    // 移除让小圆点被选中的类
    $('.slider-item').removeClass('slider-item-selected');
    // 让当前图片对应的小圆点被选中，当前的小圆点就是白色的
    $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
}

// 左右两边的箭头的点击事件发生时调用的函数
var currentIndex = 0; //不是局部变量，全局变量
var length = $('.slider-pics').length;
function pre(){
    var preIndex = currentIndex;
    currentIndex = (--currentIndex + length) % length;
    play(preIndex,currentIndex);
}

function next(){
    var preIndex = currentIndex;
    // 中间图片编号的处理同样是使用取余的方法,可以把编号控制在0-3的范围内
    currentIndex = ++currentIndex % length;
    play(preIndex,currentIndex);
}

// 轮播图自动播放与停止
var interval, hasStarted = false;

function start(){
    if(!hasStarted){
        hasStarted = true;
// 这是个定时器，它会按照我们指定的时间间隔不停地调用函数
// 这个方法的第一个参数就是那个要调用的函数
// 第二个参数就是我们指定的时间间隔
        interval = setInterval(next,3000);
    }
}

function stop(){
// clearInterval()方法可以帮我们结束setInterval的动作
    clearInterval(interval);
    hasStarted = false;
}
// 最后我们调用了一下start()函数，就是希望在页面一打开的时候，图片就开始轮播
start();

    //把不是第一张的图片隐藏起来
    $('.slider-pics:not(:first)').hide();
    //添加底下的小按钮为白色
    $('.slider-item:first').addClass('slider-item-selected');
   //隐藏两个切换按钮
    $('.slider-button').hide();

    //hover()，它可以传两个参数，一个是mouseenter，也就是鼠标进入时的函数
    // 另一个是mouseleave，鼠标移出时要调用的函数
    // 第一个函数，当鼠标进入时，我们希望停止轮播，所以调用stop()函数
// 然后让左右两侧的按钮显示出来
    $('.slider-pics, .slider-pre, .slider-next').hover(function(){
        stop();
        $('.slider-button').show();
    },function(){   //当鼠标移出时，又让按钮重新隐藏起来  然后让轮播图继续开始轮播
        $('.slider-button').hide();
        start();   
    });

//下面的小圆点我们想实现的效果是，鼠标划到哪个点，就显示出对应的图片
    $('.slider-item').hover(function(){
        stop();
// index()方法 获取元素的编号
// 先筛选刚才有selected类的那个元素，并获取它的编号，把它赋值给preIndex
        var preIndex = $(".slider-item").filter(".slider-item-seleted").index();
//然后把鼠标扫到的那个点的编号赋值给currentIndex 
        currentIndex = $(this).index();
//调用play函数，它可以在两张图片之间切换   
        play(preIndex,currentIndex);
    },function(){  //在鼠标移出的时候再次让它自动播放起来
        start();
    });

    $('.slider-pre').on('click',function(){
        pre();
    })
    $('.slider-next').on('click',function(){
        next();
    })
})