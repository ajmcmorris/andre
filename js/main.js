$(document).ready(function(){

	$('ul.filter a').click(function() {
	  
	  $('ul.filter .current').removeClass('current');
	$(this).parent().addClass('current');
	

	var filterVal = $(this).text().toLowerCase().replace(' ','-');

	if(filterVal == 'all') {
	  $('section .item-list.hidden').fadeIn('slow').removeClass('hidden');
	}else {
	  $('section .item-list').each(function() {
	    if(!$(this).hasClass(filterVal)) {
	      $(this).fadeOut('slow').addClass('hidden');
	    } else {
	      $(this).fadeIn('slow').removeClass('hidden');
	    }
	  });
	}
		return false;
	});
});