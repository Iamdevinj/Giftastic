$(document).ready(function() {
	var brands = ["nike", "gucci", "adidas", "versace", "reebok", "lacoste"];
  
	function callAPI(brand) {
  var queryURL = `http://api.giphy.com/v1/gifs/search?q=${brand}&api_key=XiKQC2CGu15jEtO4AZe2HEveD1Mu30TL`;
  
  console.log('callapi');
  
	  //ajax grabbing the query
	  $.ajax({
		url: queryURL,
		method: "GET"
  })
  .done(function(response) {
   console.log(response);
   for (let index = 0; index < response.data.length; index++) {
   var searchDiv = $('#images');
   var rating = response.data[index].rating;
   var p = $('<p>').text('Rating: ' +rating);
   var animated = response.data[index].images.fixed_height.url;
   var still = response.data[index].images.fixed_height_still.url;
   var image = $('<img>');
   image.attr('src',still);
   image.attr('data-still',still);
   image.attr('data-animated',animated);
   image.attr('data-state',still);
		image.addClass('searchImage');
		console.log(image);
   searchDiv.append(p);
   searchDiv.append(image);
   $('searches').append(searchDiv);
  
  
   
   }
   
   }
	  
  )}
  
  
	function createButtons() {
	  // Creates the buttons from the array
	  for (var i = 0; i < brands.length; i++) {
		var button = $("<button>").text(brands[i]);
		button.attr("brand-name", brands[i]);
		button.addClass("brand-button");
		$("#button-brand").append(button);
  }
  
	}
  
	createButtons();
  
  
	$("button").on("click", function() {
	  var x = $(this).data("search");
	  var brand = $(this).attr("brand-name");
  console.log('clicked');
  
	  callAPI(brand);
	});
  
	$("#add-button").on("click", function() {
  // grab the value from the form
  $("#add-button").text(brands.val())
  
  
  
  
	  // Add that value to the brands array push
  brands.push(brand);
	  // Run the code that creates all the buttons again
	  createButtons();
	});
  
	
  });