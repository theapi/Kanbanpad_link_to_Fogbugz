// ==UserScript==
// @name        Kanbanpad link to Fogbugz
// @namespace   work
// @description Add links to Fogbugz
// @include     https://www.kanbanpad.com/projects/*
// @version     1
// ==/UserScript==

$(document).ready(function() {   
  addFogbugzLinks();
  setInterval(addFogbugzLinks, 4000);
});

function addFogbugzLinks() {
  // Make avatars bigger.
  $('.user img').each(function(){
    var src = $(this).attr('src');
    $(this).attr('src', src.replace('s=20', 's=100'));
  });
  $('p.title').each(function(i) {
    var existing_link = $(this).find('a');
    if (existing_link.length == 0) {
      var fogbug_id = parseInt($(this).text());
      if (fogbug_id > 0) {
        var url = 'http://fogbugz.dennisinteractive.co.uk/default.asp?' + fogbug_id;
        $(this).replaceWith('<p class="title"><a href="' + url + '" target="fogbugz" style="color:#3E3E3E">' + $(this).text() + '</a></p>');
      }
    }
  })
}
