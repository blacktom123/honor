$(function () {
	$("button.button-login").click(function(event) {
        event.preventDefault();
        $("div#change_margin_2>span").each(function(i,elem){
            if(!$(elem).hasClass("info")){
                $(elem).addClass("info");
            }
        });
        if ($("input.userName").val().length == 0) {
            $("#change_margin_2").children(":first-child").removeClass("info");
		}else if ($("input.upwd").val().length == 0) {
            $("#change_margin_2").children(":nth-child(3)").removeClass("info");
		}else if ($("input.userName").val().length != 0 && $("input.upwd").val().length != 0) {
			if(!(/(^[0-9A-Za-z]{4,50}$)/.test($("input.userName").val()))){
				$("#change_margin_2").children(":nth-child(2)").removeClass("info");//有其他字母或者符号型字符的存在
			}else if((/(^[0-9A-Za-z]{4,50}$)/.test($("input.userName").val()))){
				$.ajax({
                    url:"http://127.0.0.1:8080/use/login",
                    type:"post",
					data:{uname:$("input.userName").val(),upwd:$("input.upwd").val()},
					success:function(result){
						// alert(result);
                        var logindata = JSON.parse(result);
                        // console.log(logindata);
						if(logindata == false){
							$("#change_margin_2").children(":nth-child(4)").removeClass("info")
						}else if (logindata == true) {
							location.href="http://127.0.0.1:8080/index.html";
							//alert("done");
						}
					}
				});
			}
		}
	});
});