//Weather (conditons) "temperature alert"
//
$(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/1e1c6f15fec4f770/geolookup/conditions/q/SC/Forest_Acres.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});