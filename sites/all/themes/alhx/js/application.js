$(document).ready(function() {


  // Duplicate fixed elements to create white overlay version
  
  if ($('.fixed > div').hasClass('dup')) {
    $('.fixed > div').each(function(){
      $(this).clone().appendTo($(this).parent()).addClass('overlay');
      $(this).addClass('underlay');
    });
    
      function cropScroll() {
        var currPosition = Math.abs($(window).scrollTop());
    
        var overClipTop = 0 - currPosition;
        var overClipBottom = overClipTop + $('.splash').height();     
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