/**
 * Created by DELL on 2019/8/7.
 */
$(function(){
    //首页轮播图

       $(".main2_box .button-prev").click(function(){
           var w=$(".lb_list").eq(0).width();
           var l=$("#lb").scrollLeft();
           $("#lb").scrollLeft(l-w-20);
       });
        $(".main2_box .button-next").click(function(){
            var w=$(".lb_list").eq(0).width();
            var l=$("#lb").scrollLeft();
            $("#lb").scrollLeft(l+w+20);
        });

        $("#lb .lb_list").hover(
            function(){
                $(this).find(".alt").css({backgroundColor:"#465E3E",color:"#fff"});
                $(this).find(".xian").css({opacity:"1",transform:"scale(0.9)",left:"1%",top:"0.5%"})
            },
            function(){
                $(this).find(".alt").css({backgroundColor:"#ffffff",color:""});
                $(".lb_list  .lb_img_box .xian").css({width:"",height:"",left:"",top:"",opacity:"0"})

            }
        );
    $(".main6_img_box p").hover(
        function(){
            $(this).stop(true,true).animate({padding:"34% 0px"},500)
        },
        function(){
            $(this).stop(true,true).animate({padding:"5% 0px"},500)
        }
    )





    });
