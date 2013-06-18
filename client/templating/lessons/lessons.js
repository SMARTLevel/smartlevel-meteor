Template.lessons.rendered = function(){
  $(function() {
	$( "#rerun1" )
		.button()
		  .click(function() {
			  })
			  .next()
				.button({
				  text: false,
				  icons: {
					primary: "ui-icon-triangle-1-s"
				  }
				})
				.click(function() {
				  var menu = $( this ).parent().next().show().position({
					my: "left top",
					at: "left bottom",
					of: this
				  });
				  $( document ).one( "click", function() {
					menu.hide();
				  });
				  return false;
				})
				.parent()
				  .buttonset()
				  .next()
					.hide()
					.menu();
		  });

		  $(function() {
			$( "#rerun2" )
			  .button()
			  .click(function() {
			  })
			  .next()
				.button({
				  text: false,
				  icons: {
					primary: "ui-icon-triangle-1-s"
				  }
				})
				.click(function() {
				  var menu = $( this ).parent().next().show().position({
					my: "left top",
					at: "left bottom",
					of: this
				  });
				  $( document ).one( "click", function() {
					menu.hide();
				  });
				  return false;
				})
				.parent()
				  .buttonset()
				  .next()
					.hide()
					.menu();
		  });

		  $(function() {
			$( "#rerun3" )
			  .button()
			  .click(function() {
			  })
			  .next()
				.button({
				  text: false,
				  icons: {
					primary: "ui-icon-triangle-1-s"
				  }
				})
				.click(function() {
				  var menu = $( this ).parent().next().show().position({
					my: "left top",
					at: "left bottom",
					of: this
				  });
				  $( document ).one( "click", function() {
					menu.hide();
				  });
				  return false;
				})
				.parent()
				  .buttonset()
				  .next()
					.hide()
					.menu();
		  });
}
