$(function(){
    var cliH=$(window).height();
    var num=0;
    var flag=true;
    var cH=$(window).height();
    var cW=$(window).width();
    $('.fullpage').css({'height':cH,'width':cW});
    $('.section').css({'height':cH,'width':cW});
    $('body').css({'height':cH,'width':cW});

    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $(".fullpage").mousemove(function(e){
        e.preventDefault();
    })

    document.onmousedown=function(e){
        e.preventDefault()
    }

    document.onmousemove=function(e){
        e.preventDefault()
    }

    touch.on("body","swipeup",".fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num>=$("section").length){
            num=$("section").length-1;
            //document.title=num;
            return;
        }
        flag=false;

        $(".fullpage").css({marginTop:-num*cliH,transition:"margin-top 1s ease"});
    })
    touch.on("body","swipedown",".fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            //document.title=num;
            return;
        }
        flag=false;
        $(".fullpage").css({marginTop:-num*cliH,transition:"margin-top 1s ease"})
    })

    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })

    var flag1=true;
    $(".opcation").click(function(){

        if (flag1){
        $(".opcation .opcation-top").css({
            transform:"translate(0,6px) rotate(45deg)"
        })
        $(".opcation .opcation-bottom").css({
            transform:"translate(0,-6px) rotate(-45deg)"
        })
        $(".minbox div").each(function(index,obj){
            $(obj).css({
                opacity:0,
                animation:"menu 1s linear forwards "+index*0.2+"s"
                //animation:" menu 1s linear forwards"
            })
        })
            flag1=false;
        }
        else{
            $(".opcation .opcation-top").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".opcation .opcation-bottom").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".minbox div").each(function(index,obj){
                //alert(1)
                $(obj).css({
                    opacity:1,
                    animation:"menu1 1s linear forwards "+(1.2-index*0.2)+"s"
                    //  animation:" menu1 1s linear forwards "
                })
            })
            flag1=true;
        }
    })

})