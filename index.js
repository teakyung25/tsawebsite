$(document).ready(function(){ 
/*Turn on and off audio*/
   var clicked = true;
    $(".line-c").click( function() {
  		 if (clicked) {
    	 $(".line").addClass("stop");
   		 clicked = false;
         console.log("clicked true");
          $("#backgroundaudio").trigger("pause");
    } else {
   		 $(".line").removeClass("stop");
   		 clicked = true;
         console.log("clicked false");
         $("#backgroundaudio").trigger("play");
  		}
	});
    
 });
});

