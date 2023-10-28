$(document).ready(function () {

    //MENU TOGGLE

    var $menu = $('#menu');
    var $menuToggle = $('#menu-toggle');
    var $closeMenu = $('#close-menu');

    // Toggle the menu by adjusting the left property
    $menuToggle.click(function () {
        if ($menu.css('left') === '0px' || $menu.css('left') === '0') {
            $menu.css('left', '-250px');
        } else {
            $menu.css('left', '0');
        }
    });

    //PAGE LOADING

    // Load the given content by default when the page loads
    $("#content").load("start.html");

    // Handle clicks on menu links
    $("#menu ul li a").click(function (e) {
        e.preventDefault(); // Prevent the default link behavior

        var pageToLoad = $(this).attr("href"); // Get the href attribute of the clicked link

        // Load the content of the selected page into the "content" div
        $("#content").load(pageToLoad);
    });
});
