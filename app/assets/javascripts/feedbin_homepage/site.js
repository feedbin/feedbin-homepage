(function() {
	if (window.feedbin == null) {
		window.feedbin = {};
	}

	$.extend(feedbin, {
	    init: {
			screenshotTabs: function() {
				$('[data-behavior~=screenshot_nav] li').first().addClass('active');
				return $(document).on('click', '[data-behavior~=screenshot_nav] a', function(event) {
					var src;
					$('[data-behavior~=screenshot_nav] li').removeClass('active');
					$(this).parent('li').addClass('active');
					src = $(this).find('img').attr('src');
					$("[data-behavior~=screenshots] img").addClass('hide');
					$("[data-behavior~=screenshots] img[src='" + src + "']").removeClass('hide');
					return event.preventDefault();
				});
			}
		}
	});

	jQuery(function() {
		return $.each(feedbin.init, function(i, item) {
			return item();
		});
	});

}).call(this);
