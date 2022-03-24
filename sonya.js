@@ -1,71 +1,71 @@
var $ = require('unopinionate').selector,
	onClick = require('onclick'),
	transitionComplete = require('transition-complete');
var $                  = require('unopinionate').selector
var onClick            = require('onclick')
var transitionComplete = require('transition-complete')

$(function() {
	onClick('.entry .name', function() {
		var $this = $(this),
			$entry = $this.closest('.entry');
  onClick('.entry .name', function() {
    var $this  = $(this)
    var $entry = $this.closest('.entry')

		//Close entry
		if($entry.hasClass('open')) {
			$entry
				.height($entry.outerHeight())
				.removeClass('open');
    if ($entry.hasClass('open')) {
      // Close entry
      $entry
        .height($entry.outerHeight())
        .removeClass('open')

			setTimeout(function() {
				$entry.css('height', $entry.attr('data-height') + 'px');
			}, 0);
      setTimeout(function() {
        $entry.css('height', $entry.attr('data-height') + 'px')
      }, 0)

			transitionComplete(function() {
				$entry.find('.readme').remove();
				$entry.css('height', 'auto');
			});
		}
		//Open entry
		else {
			//Close open entries
			$('.entry.open').each(function() {
				var $entry = $(this);
				$entry
					.height($entry.outerHeight())
					.removeClass('open');
      transitionComplete(function() {
        $entry.find('.readme').remove()
        $entry.css('height', 'auto')
      })

				setTimeout(function() {
					$entry.css('height', $entry.attr('data-height') + 'px');
				}, 0);
    } else {
      // Open entry
      $('.entry.open').each(function() {
        // Close open entries
        var $entry = $(this)
        $entry
          .height($entry.outerHeight())
          .removeClass('open')

				transitionComplete(function() {
					$entry.find('.readme').remove();
					$entry.css('height', 'auto');
				});
			});
        setTimeout(function() {
          $entry.css('height', $entry.attr('data-height') + 'px')
        }, 0)

			//Add the open class
			$entry.addClass('open');
        transitionComplete(function() {
          $entry.find('.readme').remove()
          $entry.css('height', 'auto')
        })
      })

			//Explicitly set heights for transitions
			var height = $entry.outerHeight();
			$entry
				.attr('data-height', height)
				.css('height', height);
      // Add the open class
      $entry.addClass('open')

			//Get the data
			$.ajax({
				url: '-/readme/'+$entry.attr('data-name')+'/'+$entry.attr('data-version'),
				dataType: 'text',
				success: function(html) {
					var $readme = $("<div class='readme'>")
						.html(html)
						.appendTo($entry);
      // Explicitly set heights for transitions
      var height = $entry.outerHeight()
      $entry
        .attr('data-height', height)
        .css('height', height)

					$entry.height(height + $readme.outerHeight());
      // Get the data
      $.ajax({
        url: '-/readme/'+$entry.attr('data-name')+'/'+$entry.attr('data-version'),
        dataType: 'text',
        success: function(html) {
          var $readme = $("<div class='readme'>")
                          .html(html)
                          .appendTo($entry)

					transitionComplete(function() {
						$entry.css('height', 'auto');
					});
				}
			});
		}
	});
});
          $entry.height(height + $readme.outerHeight())

          transitionComplete(function() {
            $entry.css('height', 'auto')
          })
        }
      })
    }
  })
})
