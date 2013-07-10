(function ($) {

  // Provide new command for Drupal's Ajax framework.
  Drupal.ajax.prototype.commands.commerceProductUrlsUpdateUrl = function(ajax, response, status) {
    if (window.history && window.history.pushState) {
      history.pushState(null, document.title, '?' + response.data);
    }
    else {
      // ... what?
    }
  };

})(jQuery);

