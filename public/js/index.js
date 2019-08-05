$(function () {
    var index = 0; // 记录当前小圆点下标
    var isanimate = true; // 是否自动播放
    var interval; // 自动播放定时器
    //初始化小圆点
    for (let i = 0; i < 4; i++) {
        let li = $('<li></li>')
        $('#bots').append(li)
    }
    $('#bots li').first().addClass('active')
    // 上一张
    $('.swiper-button-prev').click(function () {
        index--;
        if (index < 0) {
            $('#navs').css('left', -6000)
            index = 3
        }
        manimate(index)
        changebots(index)
    })
    //下一张
    $('.swiper-button-next').click(function () {
        index++;
        if (index >4) {
            $('#navs').css('left', -1200)
            index = 1
        }
        manimate(index)
        changebots(index)
    })
    //小点切换
    $('#bots').click(function (ev) {
        var ev = ev || window.event;
        let target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'li') {
            for (let i = 0; i < 4; i++) {
                if ($('#bots')[0].children[i] === target) {
                    index = i;
                    console.log(index)
                    break;
                }
            }
        }
        $('#navs').css('left', (index + 1) * -1200)
        changebots(index)
    })

    // 切换动画效果
    function manimate(i) {
        i +=1;
        // console.log(i)
        $('#navs').stop().animate({left: -i * 1200}, 500)
    }

    // 切换圆点
    function changebots(i) {
        if (i < 0) {
            i = 3
        } else if (i > 3) {
            i = 0
        }
        $('#bots li').eq(i).addClass('active').siblings().removeClass('active')

    }

    // 自动轮播
    function autoplay() {

        interval = setInterval(() => {
            index++;
            if (index >4) {
                $('#navs').css('left', -1200)
                index = 1
            }
            changebots(index)
            manimate(index)
        }, 2000)
    }

    // 鼠标移入停止自动轮播
    $('#box').mouseover(function () {
        clearInterval(interval)
    })
    //鼠标移出开始轮播
    $('#box').mouseleave(function () {
        autoplay()
    })
    autoplay()

})
