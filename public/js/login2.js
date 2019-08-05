(function(){var txtName=document.querySelector("tr.user-input-tr input.userName");
//查找input元素
var txtUpwd=document.querySelector("tr.user-input-tr input.upwd");
//查找按钮元素
var btn=document.getElementsByTagName("button")[0];
// var txtName=function(){
//     vali(this,/^[0-9A-Za-z]{4,50}$/);
// }
// txt.onblur=function(){
//     vali(this,/^\d{6}$/);
// }
//查找label元素，获取其内容    
var div1=txtName.parentNode
            .children[0]
            .children[0];
var cont1=div1.innerHTML;
var div2=txtUpwd.parentNode
            .children[0]
            .children[0];
var cont2=div2.innerHTML;
//查找div下所有报错的span
var names=document.querySelectorAll("div#change_margin_2 span");
//为input为txtName绑定焦点移除事件
txtName.onblur=function(){
    var txt=this;//获取外部onblur前的元素
    if(this.value==""){//当元素的值为空时，将复制的label内的内容赋值给div1(div1为label内部内容位置，清空后添加)内
        div1.innerHTML=cont1;
    }
    var reg=/^[0-9A-Za-z]{4,50}$/;//创建账号的正则表达
    if(txt.value==""){//当事件元素内的值为空时
        if(names[1].className!="info"){//div下所有报错的span的第一个className为info时
            return;//跳出
        }
        add();//调用清空函数
        names[0].className=""
    }else if(reg.test(txt.value)==false){
        add();
        names[1].className="";
    }else{
        names[1].className="info";
    }
    if(txtUpwd.value=="" && txt.value==""){
        add();
        names[0].className="info";
    }
    
}
txtUpwd.onblur=function(){//密码框调用事件
    var txt=this;
    if(this.value==""){
        div2.innerHTML=cont2;
    }
    var reg=/^[0-9A-Za-z]{4,50}$/;
    if(txt.value=="" && txtName.value!=""){
        if(names[1].className!="info"){
            return;
        }
        add();
        names[2].className=""
    }
    /*else if(reg.test(txtName.value)==false){
        add();
        names[1].className="";
    }*/
    // }else if(reg.test(txt.value)==false){
    //     add();
    //     names[1].className="";
    // }else{
    //     names[1].className="info";
    // }
    
}
function add(){
    for(var name of names){
        name.className="info"
    }
}
btn.onclick=function(){//按钮调用的事件
    if(txtName.value==""){
        add();
        names[0].className="";
    }else if(txtUpwd.value==""){
            if(names[1].className!="info"){
                return;
            }else{
                add();
                names[2].className="";
        }        
    }
}
txtName.oninput=txtUpwd.oninput=function(){//监听内容
        var div=this.parentNode
                    .children[0]
                    .children[0];
        // var cont1=div.innerHTML;
        div.innerHTML="";
        if(txtName.value==""||txtUpwd.value==""){
            add();
        }        
    }
})();
/*(function(){
    $("input:text").blur(function(){

    })
    $("input:text").on("input",function(){
        var $text=$(this);
        var div=$text.prov();
        var cont1=div.html();
        div.html()="";
        if($text.val()==""){
            

        }
    })
})();*/
(function(){
     var btn=document.getElementsByTagName("button")[0];
     var txtName=document.querySelector("tr.user-input-tr input.userName");
        //查找input元素
     var txtUpwd=document.querySelector("tr.user-input-tr input.upwd");
     btn.onclick=function(){
        var u_name=txtName.value;
        var u_pwd=txtUpwd.value;
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var reasult=xhr.responseText;
                console.log(reasult);
            }
        }
        xhr.open("post","http://127.0.0.1:8080/use/login",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        formdata="uname="+u_name+"&upwd"+u_pwd;
        xhr.send(formdata);
     }
})();