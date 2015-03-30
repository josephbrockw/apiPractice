$('document').ready(function() {

	$(function(){
		$('#search-term').submit(function(){
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
		})
		
	});

	function showResults(results){
		$.each(myData, function(index, value){
			$('#search-results').append('<p>' + value.Title + '</p>');
	    	console.log(value.Title);
	    });
	};

	function getRequest(searchTerm){
		var parameters = {
			s: searchTerm,
			r: 'json'
		};
		url = 'http://www.omdbapi.com';

		$.getJSON(url, parameters, function(data){
	    	myData = data.Search;
	    	showResults(data.Search);
	  	});
	}

});