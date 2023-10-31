$(document).ready(function () {

    //MENU BUTTON (TOGGLE)

    var $menu = $('#menu');
    var $menuToggle = $('#menu-toggle');
    var $closeMenu = $('#close-menu');

    // Toggle the menu by adjusting the 'left' property (basically changing the position of the menu on and off screen)
    $menuToggle.click(function () {
        // Close if open
        if ($menu.css('left') === '0px' || $menu.css('left') === '0') {
            $menu.css('left', '-250px');
        }
        // Open if closed 
        else {
            $menu.css('left', '0');
        }
    });

    // PAGE LOADING (into the container)

    function loadPage(pageToLoad) {
        // loadPage function, loads the page given to it as a parameter (ex for parameter: team.html)

        // First, store the page that was clicked as the last loaded page
        localStorage.setItem('lastLoadedPage', pageToLoad);

        // Second, load the page itself (loads the page into the content div dynamically)
        $("#content").load(pageToLoad);

        // (Mobile compatiblity) Third, close the menu if the device viewport is small (Menu auto close)
        if (window.innerWidth <= 768) {
            $menu.css('left', '-250px');
        }
    }

    // RESTORE SESSION
    // Load the last loaded page, if there is one
    var lastLoadedPage = localStorage.getItem('lastLoadedPage');

    // Check if there is a last loaded page, if yes load it
    if (lastLoadedPage) {
        loadPage(lastLoadedPage);

        // If no, load the default page
    } else {
        loadPage("start.html");
    }

    // LINKS HANDLING (Menu and other)

    // Handle clicks on menu links
    $("#menu ul li a").click(function (e) {
        // Prevent the default link behavior
        e.preventDefault();
        var clickedPage = $(this).attr("href");
        loadPage(clickedPage);
    });

    // pageload még nem működik 
    // !!!IMPORTANT!!! give the id pagelink (id="pagelink") to any links 
    // that open something on this page
    $(".pagelink").click(function (e) {
        // Prevent the default link behavior
        e.preventDefault();
        var clickedPage = $(this).attr("href");
        loadPage(clickedPage);
    });



    // MENU CLOSE
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