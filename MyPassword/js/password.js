	$("#pwd").on("input parse","input",function(e){
    
				var len = $(this).val().length;
				var than=$(this);
		var re= /^[0-9]+.?[0-9]*$/;
        
		if(re.test($(this).val())){
		  		if(len<=1){
		   		$(this).next().focus();
				if($(this).index()>=3){
				$(this).blur();
				}
				setTimeout(function(){
					than.attr("data_val",than.val());
					than.val("●");			
				},300)
		   	
	   }else{
		   $(this).val("");
		   confirm("很抱歉密码错误请重新输入");
	   }
	}else{
		$(this).val("");
		 confirm("很抱歉密码错误请重新输入");
	}
	
});

$("#sub").on("tap",function(){
	var intLen=$("#pwd input");	
    var intenLen = intLen.length;
    var attr=[]; 
    var sures = false;
    for(var i=0;i<intLen.length;i++){
        if(intLen.attr("data_val") == undefined){
            attr.push(""); 
            
        }else{
            attr.push(intLen[i].getAttribute("data_val")); 
        }
		 
    }
    console.log(attr)
    for(var j=0;j<attr.length;j++){
        if(attr[j] == ""){
            sures = true;
            console.log("111")
        }
    }
    if(sures == true){
            confirm("很抱歉密码错误请重新输入");
     }else if(sures == false){
        var data=$(this).attr("data-logo");
         if(data=="create"){
            location.href="logon_pwd.html"; 
         }else if(data=="logo"){
             location.href="../my/my.html"; 
         
         }else if(data=="sure"){
            location.href="../my/my.html"; 
         }
         
     }
})









