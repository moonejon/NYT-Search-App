
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931", 
});

$.ajax({
    queryURL: queryURL,
    method: 'GET',
}).then(function(response) {
    console.log(response);
});
