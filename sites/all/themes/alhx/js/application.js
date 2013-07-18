(function ($, Drupal, window, document, undefined) {

$(document).ready(function() {

  //mh Contact Map 41.047467,-73.557295
  
  function initialize() {
	  var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(41.047467, -73.557295),
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
  		}
  		var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
                                
              var image = 'madeInStamford.png';
			  var myLatLng = new google.maps.LatLng(41.047467, -73.557295);
			  var beachMarker = new google.maps.Marker({
				  position: myLatLng,
				  map: map,
				  title: "Accurate Lock & Hardware"
			  });
			  
			  var styles = [
			    {
			      stylers: [
			        { hue: "#00d4ff" },
			        { saturation: -80 },
			        { lightness: -30 }
			      ]
			    },{
			      featureType: "road",
			      elementType: "geometry",
			      stylers: [
			        { lightness: 20 },
			        { visibility: "simplified" }
			      ]
			    },{
			      featureType: "road",
			      elementType: "labels",
			      stylers: [
			        { visibility: "off" }
			      ]
			    }
			  ];
			  
			  map.setOptions({styles: styles});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

  //ms Carousel Fullscreen hack
    
  $('.flexslider ul#flexslider_views_slideshow_flexslider_galleries-block img').each(function(){
    var imgSrc = $(this).attr('src');
    console.log(imgSrc);
    $(this).hide();
    $(this).parent().css({'background' : 'url(' + imgSrc + ') no-repeat', 'background-size' : 'cover'});
  });
  
  
  // Product List Previews
  
  $('.itemExtra').before('<div class="itemNav"><a href="#" class="moreInfo">More Info</a><a href="#" class="preview">Preview</a></div>');
  
  $('a.preview').toggle(function() {
    $(this).parent().parent().find('.itemExtra').show();
    return false;
  }, function() {
    $(this).parent().parent().find('.itemExtra').hide();
    return false;
  });

  // Duplicate fixed elements to create white overlay version
  
  
  $(document).ajaxSuccess(function() {
    alert("An individual AJAX call has completed successfully");
  });
  
  if ($('.fixed > div').hasClass('dup')) {
    $('.fixed > div').each(function(){
      $(this).clone().appendTo($(this).parent()).addClass('overlay');
      $(this).addClass('underlay');
    });
    
      function cropScroll() {
        var currPosition = Math.abs($(window).scrollTop());
    
        var overClipTop = 0 - currPosition;
        var overClipBottom = overClipTop + $('.splashSection').height();  
        var overRect = 'rect(' +overClipTop + 'px auto ' + overClipBottom + 'px 0px)';
        
        var underClipBottom = currPosition + $(window).height();
        var underClipTop= overClipBottom;
        
        var underRect = 'rect(' + underClipTop + 'px auto ' + underClipBottom + 'px 0px)';
        
        $('.overlay').css({clip : overRect});
        $('.underlay').css({clip : underRect});

      };
      
      $(window).load(function () {
        cropScroll();
      });
      
      $(window).scroll(function () { 
        cropScroll();
      });
      
      $(window).resize(function () {
        cropScroll()
      });
    
  };  
});

<<<<<<< HEAD
  // Sticky series titles in lists
  
  
  
  $(window).scroll(function() {
    $('.view-content > h3').addClass('stickyHeaders');
    $('.stickyHeaders').each(function() {
      
//      console.log( $(this).offset().top + ' : ' + $(window).scrollTop() + ' || ' + $('.view-content').offset().top );
      
      var currPos = $(this).offset().top - 32;
      var winPos = $(window).scrollTop();
      
      if ( currPos <= winPos ) {
        $('.headerFixed > .stickyHeaders').unwrap();
        $(this).wrap('<div class="headerFixed" />');
      } else if ( $('.view-content').offset().top  >= winPos ) {
        $('.headerFixed > .stickyHeaders').unwrap();
      };

    });
  });

//  $(".view-content").each(function () {
//      var cname = "sticky";
//      var v = $(".view-content > h3");
//      var h = v.outerHeight();
//      console.log('something');
//      v.eq(0).addClass(cname);
//      $(window).scroll(function () {
//          v.each(function () {
//              var t = this;
//   
//              var top_of_container = $(t).scrollTop();
//              var top_of_object = $(t).position().top;
//   
//   
//              if (top_of_container > top_of_object) {
//                  v.removeClass(cname).css("top", "auto");
//                  $(t).addClass(cname).css("top", 0);
//              } else if ((top_of_container > top_of_object - h) && top_of_container - top_of_object < 0) {
//                  $("." + cname).css("top", top_of_object - top_of_container - h + "px")
//   
//              }
//   
//   
//          });
//   
//   
//      });
//  });  

  

});
=======
})(jQuery, Drupal, this, this.document);
>>>>>>> 967593b064e1db5eaa4c1a6b5f244861a737cef6
