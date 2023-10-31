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

    //PAGE LOADING (into the container)

    // Load the given content by default when the page loads
    $("#content").load("start.html");

    // Handle clicks on menu links
    $("#menu ul li a").click(function (e) {
        e.preventDefault(); // Prevent the default link behavior

        var pageToLoad = $(this).attr("href"); // Get the href attribute of the clicked link
        // MENU AUTO-CLOSE
        // Check the screen width and close the menu if it's a small device
        if (window.innerWidth <= 768) { // You can adjust this breakpoint as needed
            $menu.css('left', '-250px');
        }

        // Load the content of the selected page into the "content" div
        $("#content").load(pageToLoad);
    });


    //MENU CLOSE WHEN CLICKED OUTSIDE OF
    // Close the menu when clicking outside of it
    $(document).on('click', function (e) {
        if ($menu.css('left') === '0px' && !$(e.target).closest('#menu').length) {
            $menu.css('left', '-250px');
        }
    });

    // Prevent the menu from closing when clicking inside the menu
    $menu.on('click', function (e) {
        e.stopPropagation();
    });
});
