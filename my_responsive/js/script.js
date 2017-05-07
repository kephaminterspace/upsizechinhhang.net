/* global $container1, e */

//menu ngang
function showMenu() {
    $("#newMenu").css({'max-height': 'calc(100vh - 56px)', 'transition-timing-function': 'max-height .3s ease-in-out'});
}
function hiddenMenu() {
    $("#newMenu").css({'max-height': '0px', 'transition': 'max-height .3s ease-in-out'});
}
function toggleMenuHor() {
    $(document).mouseup(function (e) {
        var $container1 = $("#newMenu");
        var $container2 = $("#__ami_btnOpen");
        var btnOpen = 0;
        var newMenu = 0;
        var outsideMenu = 0;
//        btnOpen is clicked (1:yes, 0:no)
        if (!$container2.is(e.target) && $container2.has(e.target).length === 0) {
            btnOpen = 0;
        } else {
            btnOpen = 1;
        }

//        newMenu
        var i = $('#newMenu').css("max-height");
        if (i !== '0px') {
            newMenu = 1;
        } else {
            newMenu = 0;
        }

//        outsideMenu
        if (!$container1.is(e.target) && $container1.has(e.target).length === 0) {
            outsideMenu = 1;
        } else {
            outsideMenu = 0;
        }


        if (btnOpen === 1 && newMenu === 0 && outsideMenu === 1) {
            showMenu();
        } else {
            hiddenMenu();
        }
    });

}
toggleMenuHor();



//function scrollingClick() {
//    $(document).ready(function () {
//        $('#newMenu .coreMenu ul li a').click(function () {
//            var locationId = $(this).attr('href');
//            var top = 400;
//            $('html, body').animate({
//                scrollTop: $(locationId).offset().top
//            }, 400);
//        });
//
//    });
//}
//scrollingClick();

