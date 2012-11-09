//Twitter Feed

// Popular
//
$(function() {
  $.getJSON("http://search.twitter.com/search.json?q=sci%20fi&rpp=10&include_entities=true&result_type=popular&callback=?",
            function(data) {
            $("#twitterFeed")
            .html("<p>Twitter Feed Load Succsessful.</p>");
            for (i=0, j=data.results.length; i<j; i++) {
                $("#apiData")
                    .append("<li>" +
                            "<p>" +
                            "<img src='" + data.results[i].profile_image_url + "' />" +
                            " <a>" + data.results[i].from_user + "</a>" +
                            "<p>" + data.results[i].text + "</p>" +
                            "<p>" + data.results[i].created_at + "</em>" +
                            "</p>" +
                            "</li>");
                }
        });
  });

//Recent
//
$(function() {
  $.getJSON("http://search.twitter.com/search.json?q=sci%20fi&rpp=10&include_entities=true&result_type=recent&callback=?",
            function(data) {
            $("#twitterFeed")
                .html("<p>Twitter Feed Load Succsessful.</p>");
            for (i=0, j=data.results.length; i<j; i++) {
                $("#apiData")
                    .append("<li>" +
                            "<p>" +
                            "<img src='" + data.results[i].profile_image_url + "' />" +
                            " <a>" + data.results[i].from_user + "</a>" +
                            "<p>" + data.results[i].text + "</p>" +
                            "<p>" + data.results[i].created_at + "</em>" +
                            "</p>" +
                            "</li>");
                } 
        });
  });

