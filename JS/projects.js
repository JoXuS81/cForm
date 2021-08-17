/*
TABLE OF CONTENTS

1. Click on All
2. Click on Branding
3. Click on Design
4. Click on Prototyping
5. Functionality

*/


// Colors
// Click on All
$(".all").click(function() {
    event.preventDefault();

    $(".all").css("color", "#f46666");
    $(".branding").css("color", "white");
    $(".design").css("color", "white");
    $(".prototyping").css("color", "white");
});


// Click on Branding
$(".branding").click(function() {
    event.preventDefault();

    $(".all").css("color", "white");
    $(".branding").css("color", "#f46666");
    $(".design").css("color", "white");
    $(".prototyping").css("color", "white");
});


// Click on Design
$(".design").click(function() {
    event.preventDefault();

    $(".all").css("color", "white");
    $(".branding").css("color", "white");
    $(".design").css("color", "#f46666");
    $(".prototyping").css("color", "white");
});


// Click on Prototyping
$(".prototyping").click(function() {
    event.preventDefault();

    $(".all").css("color", "white");
    $(".branding").css("color", "white");
    $(".design").css("color", "white");
    $(".prototyping").css("color", "#f46666");
});


// Functionality
$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })
});