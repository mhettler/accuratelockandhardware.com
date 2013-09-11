(function ($, Drupal, window, document, undefined) {

$(document).ready(function() {

if ( $('#edit-stile').val() != 'All' ) {
  $('#edit-backset').attr('disabled','disabled');
  $('.edit-backset').addClass('disableForm');
} else {
  $('#edit-stile').removeAttr('disabled');
  $('.edit-backset').removeClass('disableForm');
};
if ( $('#edit-backset').val() != 'All' ) {
  $('#edit-stile').attr('disabled','disabled');
  $('.edit-stile').addClass('disableForm');
} else {
  $('#edit-stile').removeAttr('disabled');
  $('.edit-stile').removeClass('disableForm');
};

// Disable Filters

$('#edit-backset').change(function(){
  if ( $('#edit-backset').val() != 'All' ) {
    $('#edit-stile').attr('disabled','disabled');
    $('.edit-stile').addClass('disableForm');
  } else {
    $('#edit-stile').removeAttr('disabled');
    $('.edit-stile').removeClass('disableForm');
  };
});

$('#edit-stile').change(function(){
  if ( $('#edit-stile').val() != 'All' ) {
    $('#edit-backset').attr('disabled','disabled');
    $('.edit-backset').addClass('disableForm');
  } else {
    $('#edit-stile').removeAttr('disabled');
    $('.edit-backset').removeClass('disableForm');
  };
});

$('#edit-locking-1').change(function(){
  if ( $(this).is(':checked')) {
    $('#edit-keyed-1').attr('disabled','disabled');
    $('.edit-keyed').addClass('disableForm');
  } else {
    $('#edit-keyed-1').removeAttr('disabled','disabled');
    $('.edit-keyed').removeClass('disableForm');
  };
});

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
//			        { hue: "#000000" },
			        { saturation: -80 },
			        { lightness: -40 }
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
    $(this).hide();
    $(this).parent().css({'background' : 'url(' + imgSrc + ') no-repeat', 'background-size' : 'cover'});
  });
  
  $('.splashSub').each(function(){
    var imgSrc = $(this).find('img').attr('src');
    $(this).find('img').hide();
    $(this).css({'background' : 'url(' + imgSrc + ') no-repeat', 'background-size' : 'cover'});
  });
  
  // Forms > Select Menu - Assign red/green to No/Yes
  
  $('select').each(function() {
   if ( $(this).val() == '1' ) {
     $(this).addClass('selectYes');
   } else if ( $(this).find(':selected').html() == '- None -' ) {
     $(this).addClass('selectNo');;
   };
  });
  
  $(document).ajaxSuccess(function() {
    $('select').each(function() {
     if ( $(this).val() == '1' ) {
       $(this).addClass('selectYes');
     } else if ( $(this).find(':selected').html() == '- None -' ) {
       $(this).addClass('selectNo');
     };
    });
  });
  
  // Smooth jump to anchor
  
  $('a[href^="#"]').click(function() {
    var anchor = $(this).attr('href').substring(1);
    if (anchor != '') { // Ignore blank href="#"
      var anchorY = $("a[name='"+ anchor +"']");
      var distance = anchorY.offset().top;
  	  $('html,body').animate({ scrollTop: distance }, (distance/10));
  	};
  	event.preventDefault();
  });
  
  
  // Product List Previews
  
//  $(document).ajaxSuccess(function() {
  
    //$('.itemExtra').before('<div class="itemNav"><a href="#" class="moreInfo">View Specs</a><a href="#" class="preview">More Info</a></div>');
    
    $('a.preview').click(function() {
      if ( $(this).text() == 'More Info' ) {
        $(this).text('Less Info');
        $(this).parent().parent().parent().find('.moreInfo').show();
      } else {
        $(this).text('More Info');
        $(this).parent().parent().parent().find('.moreInfo').hide();
      };
      event.preventDefault();
    });
  
//  });

  // Duplicate fixed elements to create white overlay version
  
  if ($('.fixed > div').hasClass('dup')) {
    $('.fixed > div').each(function(){
      $(this).clone().appendTo($(this).parent()).addClass('overlay');
      $(this).addClass('underlay');
    });
    
      function cropScroll() {
      
        if ( $(window).width() > 540 ) {
          var currPosition = Math.abs($(window).scrollTop());
      
          var overClipTop = 0 - currPosition;
          var overClipBottom = overClipTop + $('.splashSection').height();  
          var overRect = 'rect(' +overClipTop + 'px auto ' + overClipBottom + 'px 0px)';
          
          var underClipBottom = currPosition + $(window).height();
          var underClipTop= overClipBottom;
          
          var underRect = 'rect(' + underClipTop + 'px auto ' + underClipBottom + 'px 0px)';
          
//          $('.overlay').css({clip : overRect});
//          $('.underlay').css({clip : underRect});
          
          $('.overlay').each(function() {
            $(this).css({clip : overRect});
          });
          $('.underlay').each(function() {
            $(this).css({clip : underRect});
          });
        };

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

  // Sticky series titles in lists
  
   $(window).scroll(function() {
     //$('.view-content > h3').addClass('stickyHeaders');
     $('.stickyHeaders').each(function() {
       
       var currPos = $(this).offset().top - 32;
       var winPos = $(window).scrollTop();
       
       if ( currPos <= winPos ) {
         $('.headerFixed > .stickyHeaders').unwrap();
         $(this).wrap('<div class="headerFixed" />');
       };
       
       if ( ($('.view-content').offset().top) >= winPos ) {
         $('.headerFixed > .stickyHeaders').unwrap();
       };
 
     });
   });



//  
//  $(document).ajaxSuccess(function() {
//    alert("An individual AJAX call has completed successfully");
//  });

})(jQuery, Drupal, this, this.document);

