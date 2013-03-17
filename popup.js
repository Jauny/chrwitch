var streamGenerator = {

  /* Twitch URL to the top 20 streams */
  searchOnTwitch_: 'https://api.twitch.tv/kraken/streams?limit=20',

  /* XHR Request to grab those streams */
  requestStreams: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnTwitch_, true);
    req.onload = this.showStreams_;
    req.send(null);
  },

  /* onload event inserting the streams into the DOM */
  showStreams_: function(e) {
    var streams = JSON.parse(e.target.responseText).streams;
    console.log(streams);


    for (var i=0; i < streams.length; i++) {
      var stream = {
        game: streams[i].game,
        name: streams[i].channel.name,
        viewers: streams[i].viewers,
      };

      $('tbody').append('<tr>'
        + '<td>' + stream.game + '</td>'
        + '<td>' + stream.name + '</td>'
        + '<td>' + stream.viewers + '</td>');
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  streamGenerator.requestStreams();
});
