// JavaScript Document

	$(window).scroll(function(){
	var windowWidth = $(this).width();
	var windowHeight = $(this).height();
	var windowScrollTop = $(this).scrollTop();
  
  // BIO SECTION EFFECT
  var bioAnimation = function(){
    $('#bio-section').find('p').delay(100).animate({
            opacity: 1, 
            left: 0
        }, 'slow'
    ); 
    $('#education').find('img').delay(600).animate({opacity:1, right:0},'slow');
    $('#bio-section').find('blockquote').delay(1500).animate({opacity:1, bottom:0},'slow');

  };
  // SKILLS SECTION EFFECT
  var skillsAnimation = function(){
	  $(".skillset-link").delay(1000).animate({opacity:1},"slow");
  };
  // SKILLS SECTION EFFECT
  var workAnimation = function(){
	  $("#lcbo").delay(500).animate({opacity:1},"fast");
	  $("#pong").delay(1000).animate({opacity:1},"fast");
	  $("#charlie").delay(1500).animate({opacity:1},"fast");
	  $("#yas3").delay(2000).animate({opacity:1},"fast");
	  $("#angular").delay(2500).animate({opacity:1},"fast");
  };
  		//Landscape phones and down
	 if(windowWidth<=549){
    if(windowScrollTop>500){
  		bioAnimation();
  	}
    if(windowScrollTop>700){
       skillsAnimation();
    }
    if(windowScrollTop>900){
      workAnimation();
    } //Tablets
  }else if(windowWidth>549 && windowWidth<=991){
    if(windowScrollTop>480){
  		bioAnimation();
  	}if(windowScrollTop>950){
       skillsAnimation();
    }if(windowScrollTop>1600){
       workAnimation();
    }  //Browser
  }else{
     if(windowScrollTop>450){
  		bioAnimation();
  	}if(windowScrollTop>650){
       skillsAnimation();
    }
    if(windowScrollTop>950){
       workAnimation();
    }
  }

});