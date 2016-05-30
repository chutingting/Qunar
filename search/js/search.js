(function ($) {

		$('.top_right').html('<img src="imgs/return.png" class="return">返回');
		$("#cot_off").on("tap", function () {
			$(".cot_search input").val("");
		})

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

