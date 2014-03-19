$(document).on('ready', function() {

	// $("#videoModal").modal();

	var videoHeight = "0px"
	var videoRatio = 1.35;

	var resizeVideo = function() {
		var height = $(window).height();
		var width = $(window).width();

		$video = $("#videoModal iframe");

		$video.attr("width", Math.floor(width*0.8));
		$video.attr("height", Math.floor(height*0.8));
	};

	var setWindowSize = function() {
		var height = $(window).height();
		var mainHeight = Math.floor(height*0.8);
		videoHeight = mainHeight + "px";
		var subHeight = Math.ceil(height*0.2);
		$("#logoPage").css({
			'height': videoHeight,
			'line-height': videoHeight
		});
		$("#videoModal > div").css({
			'line-height': videoHeight
		});
		$("#videoModal").css({
			'line-height': height + "px"
		});
		$("#signUpForm").css({
			'height': subHeight + 'px'
		});

		resizeVideo();
		// $("#signUpForm > div > input").css({
		// 	'line-height': subHeight + 'px'
		// });
	};

	// $("#videoPage").css({
	// 		'height': videoHeight,
	// 		'width': (mainHeight*videoRatio) + "px"
	// 	});

	setWindowSize();

	var hideVideo = function () {
		$("#videoModal").fadeOut(200);
		$("#modalBackground").fadeOut(500);
	}

	$("#playButton").click(function() {
		$("#modalBackground").fadeIn(300, function() {
			$("#videoModal").fadeIn(300);
		});
	});

	$("#videoModal").click(function() {
		hideVideo();
	});

	$(window).keydown(function(event) {
		if(event.which === 27) {
			hideVideo();
		}
	});

	$(window).resize(function() {
		setWindowSize();
	});
});