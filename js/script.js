jQuery(document).ready(function($) {
    
    $('.toolbar-icons a').on('click', function( event ) {
      event.preventDefault();
    });

    $("#avatar-picker-box").find('a').hover( function() {
      $this = $(this);
      $imgelement = $(this).find('div.wrapper');
      $imgelement.removeClass("wrapper").addClass("wrapper-icon-box-selected");      
    },
    function() {
      $this = $(this);
      $imgelement = $(this).find('div.wrapper-icon-box-selected');
      $imgelement.removeClass("wrapper-icon-box-selected").addClass("wrapper");
     
    });

    $("#avatar-picker-box").find('a').on('click', function() {
      $this = $(this);
      $button = $('div[data-toolbar="avatar-picker-box"]').find('div[id="div-wrapper-selected"]');
      $newImg = $(this).find('div.wrapper-icon-box-selected').attr("class");
      $oldImg = $button.attr("class");
      $imgelement = $(this).find('div[id="div-content"]');
      if($newImg != $oldImg) {
        $imgelement.animate({
          top: "+=50",
          opacity: 0
        }, 0, function() {
            $imgelement.removeClass("icon-bg").addClass("loader").css({top: "-=102", left: "-=3", opacity: 1}).animate({
              top: "+=50"
            },0, setTimeout( function(){
                    $button.animate({
                    top: "+=50",
                    opacity: 0
                    }, 0, function() {
                        $button.removeClass($oldImg).addClass($newImg).css({top: "-=100", opacity: 1}).animate({
                        top: "+=50"
                    },0, function() {
                        $imgelement.removeClass("loader").addClass("icon-bg").css({})
                    }
                    );
                    }
                    );
            } ,1000)
            );
        }
        
        )} else {
            $imgelement.removeClass("loader").addClass("icon-bg").css({});
        }
    });

    $('div[data-toolbar="avatar-picker-box"]').toolbar({
        content: '#avatar-picker-box',
        position: 'bottom',
    });


  });