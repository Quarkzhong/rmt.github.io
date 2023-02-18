let $ = (selector) => {
    return document.querySelectorAll(selector);
};
/*
@element 传入的元素 例如$(".box")[0]
函数用来个元素添加上滑动事件
*/
let up = (element) => {
    //获取当前触摸时间
    let startTime = 0;
    //获取当前触摸的位置
    let startTouch = 0;
    //获取当前触摸结束的位置
    let endTouch = 0;
    //获取当前触摸结束的时间
    let endTime = 0;
    //获取当前触摸的距离
    let distance = 0;
    element.addEventListener('touchstart', function (e) {
        //获取当前触摸时间
        startTime = new Date().getTime();
        //获取当前触摸的位置
        startTouch = e.touches[0].clientY;
    }, false);
    element.addEventListener(
        "touchend",
        function (e) {
            //获取当前触摸结束的位置
            endTouch = e.changedTouches[0].clientY;
            //获取当前触摸结束的时间
            endTime = new Date().getTime();
            //获取当前触摸的距离
            distance = endTouch - startTouch;
            //获取当前元素的子元素的个数
            let len = $(".box")[0].children.length;
            //获取当前元素的高度
            let h = element.clientHeight;
            let str='-'+(len-1)*h+"px";
            if(distance < 0 && $(".box")[0].style.top!=str){
                //获取当前元素的高度
                h = element.clientHeight;
                //获取当前元素的top值
                let str = $(".box")[0].style.top;
                //如果当前元素的top值是空的话
                if(str == ""){
                    //设置当前元素的top值为当前元素的高度
                    $(".box")[0].style.top = 0-h + "px";
                }else{
                    //如果当前元素的top值不是空的话
                    //获取当前元素的top值
                    let str = $(".box")[0].style.top;
                    //设置当前元素的top值为当前元素的top值减去当前元素的高度
                    $(".box")[0].style.top = parseInt(str) - h + "px";
                }
                console.log('up');
            }
            
        },
        false
    );
    
};
let down=(element)=>{
    //获取当前触摸时间
    let startTime = 0;
    //获取当前触摸的位置
    let startTouch = 0;
    //获取当前触摸结束的位置
    let endTouch = 0;
    //获取当前触摸结束的时间
    let endTime = 0;
    //获取当前触摸的距离
    let distance = 0;
    element.addEventListener('touchstart', function (e) {
        //获取当前触摸时间
        startTime = new Date().getTime();
        //获取当前触摸的位置
        startTouch = e.touches[0].clientY;
    }, false);
    element.addEventListener(
        "touchend",
        function (e) {
            //获取当前触摸结束的位置
            endTouch = e.changedTouches[0].clientY;
            //获取当前触摸结束的时间
            endTime = new Date().getTime();
            //获取当前触摸的距离
            distance = endTouch - startTouch;

            if(distance > 0 && ($(".box")[0].style.top!=0+"px")){
                //获取当前元素的高度
                let h = element.clientHeight;
                //获取当前元素的top值
                let str = $(".box")[0].style.top;
                //如果当前元素的top值是空的话
                if(str == ""){
                    //设置当前元素的top值为当前元素的高度
                    $(".box")[0].style.top = 0+h + "px";
                }else{
                    //如果当前元素的top值不是空的话
                    //获取当前元素的top值
                    let str = $(".box")[0].style.top;
                    //设置当前元素的top值为当前元素的top值减去当前元素的高度
                    $(".box")[0].style.top = parseInt(str) + h + "px";
                }
                console.log('down');
            }
           
        },
        false
    );
    
}