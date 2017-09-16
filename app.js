$(document).ready(function(){
  //array created with initial animal variables
    gifButtonsArray=["cat", "dog", "bird"];
  
    for (var x = 0; gifButtonsArray.length > x; x++) {
    var gifButton = $("<button>");
    //Element is selected above and a class, id, value, and text are attributed to the gifButton variable/object
    gifButton.addClass("click-button");
    gifButton.attr("id", gifButtonsArray[x]);
    gifButton.attr("value",gifButtonsArray[x]);
    gifButton.text(gifButtonsArray[x]);
    //gifButton is appended to the gifButtonArea
    $("#gifButtonArea").append(gifButton);
  }


  $("#submit").on("click", function() {  
    //this click handler and following code handles adding new buttons and arrays objects to the gifButtonArray
    $("#gifButtonArea").empty();
    //the above function clears the html
    var name = $("#text").val().trim();
    //name is taken from the input and pushed into the gifButtonsArray
    gifButtonsArray.push(name);
    console.log(gifButtonsArray);
    //for loop repeated from earlier to repeat population of buttons in html, unfortunately, NONE OF THEM WORM BECUASE I THINK IT HAS SOMETHING TO DO WITH THE ORDER OR WITH THE DOCUMENT.READY PORTION
    for (var x = 0; gifButtonsArray.length > x; x++) {
      var gifButton = $("<button>");
      gifButton.addClass("click-button");
      gifButton.attr("id", gifButtonsArray[x]);
      gifButton.attr("value",gifButtonsArray[x]);
      gifButton.attr("id", gifButtonsArray[x]);
      gifButton.text(gifButtonsArray[x]);
      $("#gifButtonArea").append(gifButton);
  }
  });


  $(".click-button").on("click", function(){
    //This grabs the text from the buttons to create gifs
    var text = $(this).text();
    $("#gifInnerArea").empty();
    console.log(text);
    //Creates the URL that we use to pull from Giphy
    var queryURL= "http://api.giphy.com/v1/gifs/search?q="+text+"&api_key=dc6zaTOxFJmzC&limit=10&rating=g"
    //ajax function gets the object data using the queryURL
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    //This is the "for" loop to go through the API data, it is currently set to the fixed image small still url
    for (var i = 0; response.data.length > i; i++) {
    var imageUrl = response.data[i].images.fixed_height_small_still.url;
     var gifImage = $("<img>");
     var gifRating = $("<p>");
        gifImage.attr("src", imageUrl);
        gifRating.text(response.data[i].rating);
        $("#gifInnerArea").append(gifImage);
        $("#gifInnerArea").append(gifRating);
        gifImage.addClass("click-image");
    }
    });
  });

  //So there isn't any funcionality to make the gifs change but it would probably go something like this
  //var still=true
  //on.click(gifButton){
    //if(still =true)
    //(imageURL=response.data[i].fixed_height_small.url)
    //still=false;
    //else
    //imageUrl = response.data[i].images.fixed_height_small_still.url;


  
 });
