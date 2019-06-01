$(document).ready(function()
//ajax grabbing the query
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) 
        console.log(response)