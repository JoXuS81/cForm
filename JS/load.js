/* Table of Contents

1. Load Webpage

*/


// Load webpage
$(window).on('load', function () {
    $(".about_section").show("slow");
    $(".blog_section").show("slow");
    $(".contact_section").show("slow");
    $("footer").show("slow");
    $("header").show("slow");
    $('.loader_section').addClass('hide_loader');
    $(".projects_section").show("slow");
    $(".services_section").show("slow");
    $(".team_section").show("slow");
    $(".works_section").show("slow");
});