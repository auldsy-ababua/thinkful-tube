// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        key: 'AIzaSyC4J8OSqULfMFLjr6TvhkQvL9y1YwxVtx4'
    });

    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        console.log(response.result);
        for(var i=0; i<response.result.items.length; i++){
            var item = response.result.items[i];
            var itemHTML = "<img src='"+item.snippet.thumbnails.default.url+"'>"+item.snippet.title+"<br>"
            $('#search-container').append(itemHTML);
        }
    });
}
function googleApiClientReady() {
    gapi.client.setApiKey('AIzaSyC4J8OSqULfMFLjr6TvhkQvL9y1YwxVtx4');
    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}

