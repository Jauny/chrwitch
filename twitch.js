$.getJSON("https://api.twitch.tv/kraken/streams", function(data){
  var streams = data.streams;

  var output = "<ul>";
  for (var i in streams) {
    output += "<li>" +
              streams[i].game + " | " +
              streams[i].channel.display_name + " | " +
              streams[i].viewers +
              "</li>";
  }
  output += "</ul>";

  document.getElementById("placeholder").innerHTNL = output;
});
