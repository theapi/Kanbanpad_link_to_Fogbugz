// ==UserScript==
// @name        Kanbanpad link to Fogbugz
// @namespace   work
// @description Add links to Fogbugz
// @include     https://www.kanbanpad.com/projects/*
// @version     1
// ==/UserScript==

$(document).ready(function() {
    $('p.title').each(function(i) {
      var fogbug_id = parseInt($(this).text());
      if (fogbug_id > 0) {
        var url = 'http://fogbugz.dennisinteractive.co.uk/default.asp?' + fogbug_id;
        $(this).replaceWith('<p class="title"><a href="' + url + '" target="fogbugz" style="color:#3E3E3E">' + $(this).text() + '</a></p>');
      }
    })
});