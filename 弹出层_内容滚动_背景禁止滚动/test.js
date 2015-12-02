$(document).ready(function() {
    $("#but").click(function() {
        $("#tip").show();
        $(document).on("mousewheel", preventD, false);
        $(document).on("touchmove", preventD, false);

    });
    $(".textarea").on("mousewheel", innerscroll);
    $("#tip").click(function() {
        $(this).hide();
        $(document).off("mousewheel", preventD);
        $(document).off("touchmove", preventD);
    });
})

function innerscroll(event) {
    event.stopPropagation();
    var delta = event.originalEvent.wheelDelta;
    console.log("delta=" + delta);
    var box = $(this)[0];
    if ($(box).height() + box.scrollTop-15 >= box.scrollHeight) {
        	console.log("b");
        if (delta < 0) {
            event.preventDefault();
            return false;
        };
    };
    if (box.scrollTop == 0) {
        	console.log("t");
        if (delta > 0) {
            event.preventDefault();
            return false;
        };
    };
}

$("body").on("mousewheel", preventD);
$(document).on("touchmove", preventD);

function preventD(event) {
    event.preventDefault();
    return false;
}
