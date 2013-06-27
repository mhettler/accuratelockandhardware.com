$(document).ready(function() {


  // Duplicate fixed elements to create white overlay version
  
  if ($('.fixed > div').hasClass('dup')) {
    $('.fixed > div').each(function(){
      $(this).clone().appendTo($(this).parent()).addClass('overlay');
      $(this).addClass('underlay');
    });
    
      function cropScroll() {
        var currPosition = $(window).scrollTop();
    
        var overClipTop = 0 - currPosition;
        var overClipBottom = overClipTop + $('.splash').height() - 4;     
        var overRect = 'rect(' +overClipTop + 'px auto ' + overClipBottom + 'px 0px)';
        
        var underClipBottom = currPosition + $(window).height();
        var underClipTop= overClipBottom - 16;
        
        var underRect = 'rect(' + underClipTop + 'px auto ' + underClipBottom + 'px 0px)';
        
        $('.overlay').css({clip : overRect});
        $('.underlay').css({clip : underRect});
      };
      
      $(window).scroll(function () { 
        cropScroll();
      });
      
      $(window).resize(function () {
        cropScroll()
      });
    
  };  


});