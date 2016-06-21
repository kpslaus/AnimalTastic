var studioGhibli = ["Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "My Neighbor Toroto", "Grave of the Fireflies", "Princess Mononoke",];

	function renderButtons(){

		$("#movieView").empty();

	}

	for(var i = studioGhibli.length - 1; >=0; i++){
		studioGhibli[i]
		var button = $("<button>", {
			text: studioGhibli[i]
		})

		$("#movieView").append(button);

	$("#addMovie").on('click', function(){
		var value = $("#movieInput").val();

		studioGhibli.push(value);
	}

		$("button").on('click', function(){
			var studioGhibli = $(this).data('movies');
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movies + "&api_key=dc6zaT0XFJmzC&limit=10";

		$.ajax({
			url: queryURL.
			method: 'GET'
		}})

		.done(function(response){


		var results = response.data;

		for(var i=0; i< results.length; i++){


		var movieDiv = $("<div>");

		var p = $("<p>").text("Rating:" + results[i].rating);

		var movieImage = $("<img>");
		movieImage.attr("src", results[i].images.fixed_height.url);

		movieDiv.append(p);
		movieDiv.append(movieImage);

		$("#gifsAppearHere").prepend(movieDiv);

		$('.movieImage').on('click', function(){
			var state = $(this).attr('data-state');

		})

		}

		if (state === 'still'){
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state','animate');
		} else{
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still');
		}

		})
	})



}