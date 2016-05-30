(function($){
    

    /*点击城市*/
    $('#main .city').hide();
    $('#main').on('tap','.city_show',function(){
         
        $('#main .search').hide();
        $(this).find('i').toggleClass('rotate');     
        if($(this).find('i').hasClass('rotate')){
            $('.top_right').html('<img src="imgs/close.png" class="close">'); 
            $('.home_content').css({
                opacity:0
            });
            $('#main .city').fadeIn(); 
            $('#main .city').css({
                'z-index':100
            }); 
            $('#menu').hide();
        }else{
            $('.top_right').html('<img src="imgs/search.png" class="search_btn">');
            $('.home_content').css({
                opacity:1
            });
            $('#main .city').hide(); 
            $('#menu').show();
        }
       /* scroll();*/
       
    })
    $('#main .city').on('tap','a',function(){
        $('.city_show span').text($(this).text());
        change();
    })
   /* $('#main').on('tap','.close',function(){       
        change();
    })*/
    function change(){
        $('#main .city').hide();
        $('.home_content').css({
                    opacity:1
         });
         $('.city_show').find('i').removeClass('rotate'); 
        $('.top_right').html('<img src="imgs/search.png" class="search_btn">'); 
        $('#menu').show();
        $('#main .search').hide();
    }
    
    /*点击搜索*/
    
    //点击搜索框关闭，使搜索内容清空；
	$("#cot_off").on("click",function(){
		$(".cot_search input").val("");
	})
   
  
    $('.home_top').on('tap','.top_right',function(){
    
        if($(this).find('img').hasClass('search_btn')){
             $('.home_content').css({
                opacity:0
             });
             $('.search').show();
             $('.search').css({
                'z-index':100
             });
             $('.top_right').html('<img src="imgs/close.png" class="close">'); 
             $('#menu').hide();
        }else if($(this).find('img').hasClass('close')){
                $('#main .city').fadeOut();
               $('.home_content').css({
                    opacity:1
                });
             $('.city_show').find('i').removeClass('rotate'); 
            $('.top_right').html('<img src="imgs/search.png" class="search_btn">'); 
            $('#menu').show();
            $('#main .search').hide();
             $('.search').css({
                'z-index':0
             });
        }
        
        /*scroll();  */ 
    })
    /*图片轮播*/
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:3000,
         autoplayDisableOnInteraction:false,
         speed:1500
    });
    
    /*侧滑菜单*/
    $('#black').hide();
    $('#menu').on('tap',function(){
        $('#aside').css({
            'left':0,
            '-webkit-transition':'all 0.3s ease'
        });
        $('#black').show();
        $('#black').css({
            opacity:0.8
        });
    })
    $('#black').on('tap',function(){
        $('#aside').css({
            'left':'-4rem',
            '-webkit-transition':'all 0.3s ease'
        });
        $('#black').hide();
    });
    
    $("#aside .aside_list p").on('tap','a',function(){
        $(this).addClass('bg').parent().siblings().find('a').removeClass('bg')
    })
    
    /*截取aside name*/
    
    var Len=$('.name').html().length;    
    if(Len>5){
        $('.name').html($('.name').html().substring(0,5)+'...')
    } 
    
     /*截取热门搜索*/
    var Lens=$('.search_name ul li').find('a');    
    for(var i=0;i<Lens.length;i++){
        if(Lens[i].innerHTML.length>5){
             console.log(Lens[i].innerHTML.substring(0,5)+'...')
            Lens[i].innerHTML=Lens[i].innerHTML.substring(0,5)+'...';
        }
    }
  
    
      /*var scroll = function(){
        var d = $('.home_content').scrollTop();
        var k = $('.banner').height();

        var h = k - d;
        if (h <= 0) {
            $('.nav_list').css({
                "position": "fixed",
                "top": "0.82rem",
                "left": "0"
            })
            
        } else if (h > 0) {
            $('.nav_list').css({
                "position": ""                    
            })
           
        }
      }
      
      
      $('.home_content').on('scroll', function () {
            scroll();
    });*/
    $('#navshow').hide();
    $('.home_content').on('scroll', function () {
        var d = $(this).scrollTop();
        var k = $('.banner').height();

        var h = k - d;
        if (h <= 0) {
            $('#navshow').show();
           /* $('.nav_list').css({
                "position": "fixed",
                "top": "0.82rem",
                "left": "0"
            });
            $('.list').css({
                "top": "1.6rem",
                "left": "0"
            });*/
        } else if (h >= 0) {
             $('#navshow').hide();
            /*$('.nav_list').css({
                "position": "",
                "top": "",
                "left": ""
            });
            $('.list').css({
                "top": "",
                "left": ""
            });*/
        }
    });
    
    

    /*search效果*/
	$("#cot_off").css({
			display: "none"
		});
		$(".cot_search").on("focus", "input", function () {
			$("#cot_off").css({
				"display": "block"
			});

		})
		$(".cot_search input").keyup(function (e) {
			if (e.keyCode == 8) {

				if ($(".cot_search input").val().length == 0) {
					$("#cot_off").css({
						display: "none"
					});
				}
			}
			if ($(".cot_search input").val().length == 0) {
				$("#cot_off").css({
					display: "none"
				});
			} else {
				$("#cot_off").css({
					display: "block"
				});
			}
		})

		$("#cot_off").on("tap", function () {
			$(".cot_search input").val("");
			$("#cot_off").css({
				display: "none"
			});
		})

		$(".search_name ul").on("tap", "li a", function () {
			$(".cot_search input").val($(this).html());
			$("#cot_off").css({
				display: "block"
			});
		})
    
})(Zepto)