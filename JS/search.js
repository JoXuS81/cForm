/*
TABLE OF CONTENTS


1. Click on close button
2. Click on search image
3. Find Elements
 3.1 About
 3.2 Services

*/


// Click on close button
$(".close").click(function() {
    $(".close").delay(1000).hide();
    $(".form").delay(1000).hide();
    $(".searchImg").delay(1000).show();
}); 


// Click on search image
$(".searchImg").click(function() {
    $(".close").delay(1000).show();
    $(".form").delay(1000).show();
    $(".searchImg").delay(1000).hide();
}); 


// Find elements
// About
$('#searchfor').keyup(function(){
    var page = $('#searchOne');
    var pageText = page.text().replace("<span>","").replace("</span>");
    var searchedText = $('#searchfor').val();
    var theRegEx = new RegExp("("+searchedText+")", "igm");    
    var newHtml = pageText.replace(theRegEx ,"<span>$1</span>");
    page.html(newHtml);
});

// Services
$('#searchfor').keyup(function(){
    var page = $('#searchThree');
    var pageText = page.text().replace("<span>","").replace("</span>");
    var searchedText = $('#searchfor').val();
    var theRegEx = new RegExp("("+searchedText+")", "igm");    
    var newHtml = pageText.replace(theRegEx ,"<span>$1</span>");
    page.html(newHtml);
});

// Services
$('#searchfor').keyup(function(){
    var page = $('#searchTwo');
    var pageText = page.text().replace("<span>","").replace("</span>");
    var searchedText = $('#searchfor').val();
    var theRegEx = new RegExp("("+searchedText+")", "igm");    
    var newHtml = pageText.replace(theRegEx ,"<span>$1</span>");
    page.html(newHtml);
});