 $(document).keydown(function (e) {
            console.log(e)
            switch (e.which) {
            case 37: //left Arrow
                var left = parseInt($(".bike").css('left'));
                if (left >= 105) {
                    $(".bike").finish().animate({
                        left: "-=50"
                    })
                };
                break;

            case 38: //Up Arrow
                var top = parseInt($(".bike").css('top'));

                if (top >= 565) {
                    //alert(top);
                    $(".bike").finish().animate({
                        top: "-=50"
                    })
                }
                break;

            case 39: //Right Arrow
                var left = parseInt($(".bike").css('left'));
                if (left <= 1800) {
                    $(".bike").finish().animate({
                        left: "+=50"
                    })
                }
                break;

            case 40: //bottom Arrow
                var top = parseInt($(".bike").css('top'));
                if (top <= 785) {
                    //alert(top);
                    $(".bike").finish().animate({
                        top: "+=50"
                    })
                }
                break;
            }
        })