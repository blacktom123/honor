    var oNav = $('.year-line'); //导航壳
    var aNav = oNav.find('li'); //导航
    var aDiv = $('#storey .brand-year'); //楼层
    $(window).scroll(function() {
            //可视窗口高度
            var winH = $(window).height();
            //鼠标滚动的距离
            var iTop = $(window).scrollTop();
            // console.log(oNav.offset().top-$(".color1").offset().top);
            // console.log($(".color1").offset().top);
            if(oNav.offset().top<"500"){
             oNav.offset().top-$(".color1").offset().top>"60"?oNav.css("visibility","visible"):oNav.css("visibility","hidden");
            }else{
             oNav.offset().top>="10530"?oNav.css("visibility","hidden"):oNav.css("visibility","visible");
            }
                //鼠标滑动样式改变
                ;
                aDiv.each(function() {
                    if(winH + iTop - $(this).offset().top+winH> winH / 2) {
                        aNav.removeClass('active');
                        aNav.eq($(this).index()).addClass('active');
                    }
                })
        })
    //点击回到当前楼层
    console.log(aNav);
    aNav.click(function() {
        console.log(aDiv.eq($(this).index()));
        var t = aDiv.eq($(this).index()).offset().top;
        $('body,html').animate({
            "scrollTop": t
        }, 500);
        $(this).addClass('active').siblings().removeClass('active');
    });
    //回到顶部
    // oTop.click(function() {
    //     $('body,html').animate({
    //         "scrollTop": 0
    //     }, 500)
    // })