$(document).ready(function () {

    // ============ MENU BEHAVIOUR SECTION ============

    // MENU BUTTON (TOGGLE)

    var $menu = $('#menu');
    var $menuToggle = $('#menu-toggle');

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

    // ============ PAGE LOADING SECTION ============

    // PAGE LOADING (into the container)

    // Loads the page given to it as a parameter (ex for parameter: team.html)
    function loadPage(pageToLoad) {
        
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

    // ============ PAGE LINK SECTION ============

    // LINKS HANDLING (Menu and other)

    // Call loadPage with clicked link
    function handleClick(e) {
        // Prevent the default link behavior
        e.preventDefault();
        // Store clicked page as var clickedPage
        var clickedPage = $(this).attr('href');
        // Call "loadPage" with the "clickedPage" parameter
        loadPage(clickedPage);
    }
    

    // Handle clicks on menu links
    $("#menu ul li a").click(handleClick);

    // !!!IMPORTANT!!! see fejlesztési javaslatok "linkek" section
    // This is different because it needs to work with JQuery dynamically loaded pages
    $(document).on('click', '.pagelink', handleClick);
});

function changePadding() {
    const element = document.getElementById("content")
    element.style.paddingTop = "3.5rem"
  }
function changeBackPadding() {
    const element = document.getElementById("content")
    element.style.paddingTop = "unset"
  }