(function($){

	/*
	 * All of our (unfortunately) necessary JS hacks
	 */
	var Unified_Post_Types = {

		init: function() {
			this.removePostTypeInput();
			this.displayActiveMenu();
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
		},

		/*
		 * _wp_menu_output() is a total black box
		 * When one of our non-primary post types is active, hack it so it appears
		 * the primary post type is the active menu
		 */
		displayActiveMenu: function() {

			var adminMenu = $( '#adminmenu' );
			if ( $( 'li.wp-menu-open', adminMenu ).length ) {
				return;
			}

			$.each( UnifiedPostTypesSettings.unified_post_types, function( key, post_type ) {
				if ( $( 'body' ).hasClass( 'post-type-' + post_type ) ) {
					var menuId = 'li#menu-posts'
					if ( 'post' !== UnifiedPostTypesSettings.primary_post_type ) {
						menuId += '-' + UnifiedPostTypesSettings.primary_post_type;
					}
					$( menuId, adminMenu ).addClass( 'wp-menu-open wp-has-current-submenu' ).removeClass( 'wp-not-current-submenu' );
					$( menuId + ' .wp-first-item', adminMenu ).addClass('current');
				}
			});

		}


	};

	$(document).ready(function(){
		Unified_Post_Types.init();
	});

}(jQuery));
