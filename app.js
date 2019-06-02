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
	  
	  let results = response.data;

	  for(var i=0; i<results.length; i++);{

		  let brandImage = $("<img>");
		  $("#add-brands").append(brandImage)
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
	$("#new-brand").text(brands.val())
	

    // Add that value to the brands array push
	brands.push(brand);
    // Run the code that creates all the buttons again
    createButtons();
  });

  
});
