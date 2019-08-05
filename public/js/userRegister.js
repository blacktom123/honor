$(function () {
	$("input.name-input").blur(function(event){
		event.preventDefault();//阻止触发多余事件
		$("#change_msg span").each(function(i,elem){//清除之前未添加属性的元素,使其隐藏
            if(!$(elem).hasClass("info")){
                $(elem).addClass("info");
            }
        });
		$.ajax({//发送ajax判断是否用户重名
			url:"http://127.0.0.1:8080/use/userRegister1",
			type:"post",
			data:{uname:$("input.name-input").val()},
			success:function(result){
				// alert(result);
				var logindata = JSON.parse(result);
				// console.log(logindata);
				if(logindata ==true){
					// $("#change_margin_2").children(":nth-child(4)").removeClass("info")
					$("input.name-input").parent().next().children(":nth-child(3)").removeClass("info");
					$("button#btnSubmit").prop("disabled",true);//重名禁用按钮
				}else if(logindata ==false){
					$("button#btnSubmit").prop("disabled",false);//不重名清除之前禁用的disabled
				}
			}
		});
	})
	$("button#btnSubmit").click(function(event) {
        event.preventDefault();
        $("#change_msg span").each(function(i,elem){
            if(!$(elem).hasClass("info")){
                $(elem).addClass("info");
            }
        });
        if ($("input.name-input").val().length == 0) {
            $("input.name-input").parent().next().children(":nth-child(1)").removeClass("info");//判断input是否为空
		}else if ($("input.pwd-input").val().length == 0) {
            $("input.pwd-input").parent().next().children(":nth-child(1)").removeClass("info");//判断input是否为空
        }else if ($("input.upwd-input").val().length == 0) {
            $("input.upwd-input").parent().next().children(":nth-child(1)").removeClass("info");//判断input是否为空
		}else if ($("input.email-input").val().length == 0) {
            $("input.email-input").parent().next().children(":nth-child(1)").removeClass("info");//判断input是否为空
		}else if ($("input.born-input").val().length == 0) {
            $("input.born-input").parent().next().children(":nth-child(1)").removeClass("info");//判断input是否为空
		}else if ($("input.name-input").val().length != 0 && $("input.pwd-input").val().length != 0 && $("input.email-input").val().length != 0 && $("input.born-input").val().length != 0) {
			if(!(/(^[0-9A-Za-z]{4,50}$)/.test($("input.name-input").val()))){
				$("input.name-input").parent().next().children(":nth-child(2)").removeClass("info");//判断input是否符合条件
			}else if(!(/(^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$)/.test($("input.pwd-input").val()))){
				$("input.pwd-input").parent().next().children(":nth-child(2)").removeClass("info");//判断input是否符合条件
			}else if($("input.pwd-input").val()!=$("input.upwd-input").val()){
				$("input.upwd-input").parent().next().children(":nth-child(2)").removeClass("info");//判断input是否符合条件
			}else if(!(/(^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,4}(\.[a-z]{2})?)$)/.test($("input.email-input").val()))){
				$("input.email-input").parent().next().children(":nth-child(2)").removeClass("info");//判断input是否符合条件
			}else if(!(/(^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$)/.test($("input.born-input").val()))){
				$("input.born-input").parent().next().children(":nth-child(2)").removeClass("info");//判断input是否符合条件
			}else{//条件成功发送请求,进行数据插入，注册完成
				$.ajax({
                    url:"http://127.0.0.1:8080/use/userRegister",
                    type:"post",
					data:{uname:$("input.name-input").val(),upwd:$("input.pwd-input").val(),email:$("input.email-input").val(),birthday:$("input.born-input").val()},
					success:function(result){
						// alert(result);
                        var logindata = JSON.parse(result);
                        // console.log(logindata);
						if(logindata == false){
							// $("#change_margin_2").children(":nth-child(4)").removeClass("info")
							alert("注册失败");
						}else if (logindata == true) {
							location.href="http://127.0.0.1:8080/login.html";
							//alert("done");
						}
					}
				});
			}
		}
	});
});