$(document).on('ready', function() {

	var videoHeight = "0px"
	var videoRatio = 1.35;

	var setWindowSize = function() {
		var height = $(window).height();
		var mainHeight = Math.floor(height*0.9);
		videoHeight = mainHeight + "px";
		var subHeight = Math.ceil(height*0.1);
		$("#logoPage").css({
			'height': videoHeight
		});
		$("#logoPage div").css({
			'line-height': videoHeight
		});
		$("#videoPage").css({
			'height': videoHeight,
			'width' : (videoRatio*mainHeight) + "px"
		});
		$("#signUpForm").css({
			'height': subHeight + 'px'
		});
		$("#signUpForm > div").css({
			'line-height': subHeight + 'px'
		});
		// $("#signUpForm > div > input").css({
		// 	'line-height': subHeight + 'px'
		// });
	};

	// $("#videoPage").css({
	// 		'height': videoHeight,
	// 		'width': (mainHeight*videoRatio) + "px"
	// 	});

	setWindowSize();

	$("#logoPage button").click(function() {
		$("body").animate({
			'scrollTop':videoHeight
		}, 500);
	});

	$(window).resize(function() {
		setWindowSize();
	});
});