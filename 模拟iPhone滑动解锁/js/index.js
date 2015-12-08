window.onload=function(){
	var sound = $("#sound")[0];
	var height = document.documentElement.clientHeight;
	// alert(document.documentElement.clientHeight);
	$(".wrap").height(height);
	$("#answer").click(function(){
		$(".call").hide();
		sound.pause();
		$(".incall").show();
	})
}
$(function(){
        function handleTouchEvent(event){
            //only for one touch
            var output = document.getElementById("target");
             output.style.transition="none";
            if (event.touches.length == 1){     
                switch(event.type){
                    case "touchstart":
                    	output.style.left=event.touches[0].pageX+"px";
                        break;
                    case "touchend":
                    	output.style.left=event.touches[0].pageX+"px";

                        break;
                    case "touchmove":
                        event.preventDefault();  //prevent scrolling
                    	output.style.left=event.touches[0].pageX+"px";
                        // output.innerHTML += "<br>Touch move ("+event.touches.length+"####" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                        break;
                }
            }else{
                if (event.touches.length==0) {
                    	if (parseInt(output.style.left)<250) {
                    		console.log(output.style.left);
                    		output.style.transition="left .5s";
                    		output.style.left=0;
                    		// output.style.webkitTransform='translateX(' + event.touches[0].pageX + 'px)';
                    	}else{
                    		console.log(output.style.left);
                    		$(output).fadeOut('fast', function() {
                    			alert("ok");
                    		});
                    	}                  // alert("touchend");
                };
            }
        }
	var but = $("#target")[0];
        but.addEventListener("touchstart", handleTouchEvent, false);
        but.addEventListener("touchend", handleTouchEvent, false);
        but.addEventListener("touchmove", handleTouchEvent, false);
        but.addEventListener("changeTouches", handleTouchEvent, false);
})