(function ($) {
    "use strict";
    var methods = {
        max: function () {
            var max = 0;
            this.each(function () {
                max = Math.max(max, $(this).height() * $(this).width());
            });
            return max;
        },
        min: function () {
            var min = this.first().height() * this.first().width();
            this.each(function () {
                min = Math.min(min, $(this).height() * $(this).width());
            });
            return min;
        }
    };
    $.fn.maxMinArea = function (method) {
        return methods[method].apply(this);
    };
}(jQuery));

function result() {
    "use strict";
    $("#result-btn").click(function () {
        $("#result-div").show(300);
        $("#result-div").html("Площа найбільшого блока: " + $(".animation-li").maxMinArea("max") + "<br>" + "Площа найменшого блока: " + $(".animation-li").maxMinArea("min"));
    });
}

var btnActive;
  //hide block by click
function anim2() {
    "use strict";
    btnActive = false;
    $(".animation-li").click(function () {
        $(this).hide(500);
        if (!btnActive) {
            $("#top-button").toggleClass("active hint");
            btnActive = true;
        }
    });
}

    //show all blocks
function anim3() {
    "use strict";
    $("#top-button").click(function () {
        $(".animation-li").show(1000);
        if (btnActive) {
            $("#top-button").toggleClass("active hint");
            btnActive = false;
        }
    });
}

    //random position & height
function anim4() {
    "use strict";
    $(".animation-li").css({
        "position": "relative",
        "border": "2px #ffffff"
    });
    $(".animation-li").each(function () {
        $(this).animate({
            left: "+=" + Math.floor(Math.random() * 200 - 100),
            top: "+=" + Math.floor(Math.random() * 20 - 10),
            height: "+=" + Math.floor(Math.random() * 20 - 10)
        }, "slow");
    });
}

    //random rotate
function anim5() {
    "use strict";
    $(".animation-li").each(function () {
        $(this).css("transform", "rotate(" + Math.floor(Math.random() * 360 - 180) + "deg)");
    });
}

function BtnClick() {
    "use strict";
    var flag = false;
    $("#crazy-button").click(function () {
        if (flag) {
            anim5();
            flag = false;
        } else {
            anim4();
            flag = true;
        }
        $("#result-div").hide(300);
    });
}

$(document).ready(function () {
    "use strict";
    anim2();
    anim3();
    BtnClick();
    result();
});
