// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


let form = $('#sizePicker');
let table = $('#pixelCanvas');




form.submit(function(e) {

	e.preventDefault();
	
	table.html("");

	let height = $('#inputHeight').val();
	let width = $('#inputWidth').val();

	makeGrid(height, width);



});

function makeGrid(height, width) {

// Your code goes here!


	for(var i = 1; i <= height; i++) {

			table.append("<tr></tr>");

	};

	for(var j = 1; j <= width; j++) {

		  $("tr").append("<td></td>");
	}


	$("td").click(function() {
		let color = $('#colorPicker').val();
		$(this).css("background", color);

	});


}



