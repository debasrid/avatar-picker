jQuery(document).ready(function($) {
    
    $('.toolbar-icons a').on('click', function( event ) {
      event.preventDefault();
    });

    $("#avatar-picker-box").find('a').hover( function() {
      $this = $(this);
      $imgelement = $(this).find('div[id="div-content"]');
        $imgelement.animate({
          top: "+=50",
          opacity: 0
        }, 0, function() {
            $imgelement.removeClass("icon-bg").addClass("loader").css({top: "-=100", opacity: 1}).animate({
              top: "+=50"
            });
        });
        
    },
    function() {
      $this = $(this);
      $imgelement = $(this).find('div[id="div-content"]');
      $imgelement.removeClass("loader").addClass("icon-bg");
     
    });

    $("#avatar-picker-box").find('a').on('click', function() {
      $this = $(this);
      $button = $('div[data-toolbar="avatar-picker-box"]').find('div[id="div-wrapper-selected"]');
      $newImg = $(this).find('div[id="div-wrapper"]').attr("class");
      $oldImg = $button.attr("class");
      if($newImg != $oldImg) {
        $button.animate({
          top: "+=50",
          opacity: 0
        }, 200, function() {
            $button.removeClass($oldImg).addClass($newImg).css({top: "-=100", opacity: 1}).animate({
            top: "+=50"
          });
        });
      }

    });

    $('div[data-toolbar="avatar-picker-box"]').toolbar({
        content: '#avatar-picker-box',
        position: 'bottom',
    });


  });