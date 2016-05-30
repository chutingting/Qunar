(function(){
             //判断输入的手机号码
            var regexp=/^[1][358][0-9]{9}$/;
            //判断输入的手机号是否正确
            var sure = false;
            //判断输入的验证码是否正确
            var code = false;
            //键盘输入事件判断输入的手机号
            $("#phoneNumber").on("keyup",function(){
                setTimeout(function(){
                    if(regexp.test(phoneNumber.value)){
                        sure = true;
                        console.log(true)
                    }else{
                        sure = false;
                        console.log(false)
                    }
            },1000);
            
            });
            $("#code").on("touchstart", function(){
                //判断 获取验证码按钮内容为  "获取验证码"  和  手机号输入框的内容正确的情况下执行
                if($(this).html() == "获取验证码"  && sure == true || $(this).html() == "重新发送" && sure == true){
                   
                    //定义毫秒数
                    var time = 60;
                    //$("#code").html(time);
                    var timer = setInterval(function(){
                        time--;
                        $("#code").html(time+'s');
                        if(time <= 0){
                            clearInterval(timer);
                            $("#code").html("重新发送");  
                        }
                    },1000);                
                }else if($("#phoneNumber").val() == ""){
                    alert("手机号不能为空");
                }else{
                    alert("手机号不正确");
                }
            });
   
            //判断验证码输入的时候才可以   确认更换
            $("#codeval").on("keyup",function(){
                //模拟验证码
                code = $(this).val() == "1234" ? true : false;

               //判断输入框有内容的话下面的   确认按钮  可以点击
                if($(this).val().length >= 1){
                    $(".sure").addClass("sureval");
                }else{
                    $(".sure").removeClass("sureval");
                }
                
            
            });
    
    /***********************    跳转页面    *************************************/
            $(".sure").on("touchstart",function(){
                if($(this).hasClass("sureval")){
                    if(sure == true && code == true){
                        if(confirm("修改成功")){
                            //跳转到另一个页面
                          
                            location.href='../certificatesure/certificatesure.html';
                        }
                    }else if(sure == true && code == false){
                        confirm("验证码错误，请重新输入");
                    }else{
                        confirm("验证码错误，请重新输入");
                    }
                }
            });
            
           
            
        })();
        