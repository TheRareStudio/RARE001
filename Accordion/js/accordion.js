$(document).ready(function() {
			
	$('#st-accordion ul > li .inside-content')
    .click(function(e){
      e.stopPropagation();
    })
    .hide();
    
    $('#st-accordion ul > li').click(function(){
    
    var snap_top = $(this);
    var position = snap_top.position();
    
    $('html, body').animate({ scrollTop: position.top }, 'slow');
    
    var selfClick = $(this).find('.inside-content').is(':visible');
    
    if(!selfClick) {
      $(this)
        .parent()
        .find('.inside-content:visible')
        .slideToggle();
    }
    
    $(this)
      .find('.inside-content')
      .stop(true, true)
      .slideToggle();
    });
				
});