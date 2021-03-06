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
		var mainHeight = Math.floor(height*0.75);
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
		$("#contactUs").css({
			'height': (height*0.05) + 'px'
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

	$("#playVideo").click(function() {
		$("#modalBackground").fadeIn(300, function() {
			$("#videoModal").fadeIn(300);
		});
	});

	$("#videoModal").click(function() {
		hideVideo();
	});

	$("#signUpForm input").focus(function(){
		$("small.error").addClass('hideError');
		// $(this).removeClass('error');
	});

	$("#signUp").click(function() {
		var email = $("#signUpForm input").val();
		$("small.error").addClass('hideError');
		if(email && email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
		{
			//validate email
			jQuery.post('/api/register',{'email':email});
			$("#signUpForm input").val("");
		}
		else
		{
			$("small.error").removeClass('hideError');
			// $("#signUpForm input").addClass('error');
		}
	})

	$(window).keydown(function(event) {
		if(event.which === 27) {
			hideVideo();
		}
	});

	$(window).resize(function() {
		setWindowSize();
	});
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-49828363-1', 'subbrapp.com');
		  ga('send', 'pageview');