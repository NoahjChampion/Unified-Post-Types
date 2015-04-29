(function($){

	/*
	 * All of our (unfortunately) necessary JS hacks
	 */
	var Unified_Post_Types = {

		init: function() {
			this.removePostTypeInput();
		},

		/*
		 * Core adds a hidden input to #posts-filter form like this:
		 * <input type="hidden" name="post_type" class="post_type_page" value="post">
		 *
		 * It's used to keep track of the current post type page. However,
		 * because we've added a <select> dropdown, it's not necessary.
		 */
		removePostTypeInput: function() {
			$('#posts-filter input.post_type_page[name="post_type"]').remove();
		}

	};

	$(document).ready(function(){
		Unified_Post_Types.init();
	});

}(jQuery));
