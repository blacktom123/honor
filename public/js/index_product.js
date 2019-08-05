"use strict";
(function(){
    var btns=document.querySelectorAll("div.handle div.btn");
    var lists=document.querySelectorAll("div.handle div.btn>ul.duibi_list");
    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            if(lists[i].style.display=="none"){
                lists[i].style.display="block"
            }else{
                lists[i].style.display="none"
            }
        }
    }
    for(let i=0;i<lists.length;i++){
        lists[i].onmouseover=function(){
            lists[i].style.display="block"
            lists[i].onmouseout=function(){
                lists[i].style.display="none"
            }
        }
    }
})()