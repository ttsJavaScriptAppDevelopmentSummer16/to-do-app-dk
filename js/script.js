(function(document) {

	// shortcuts!
	var q = document.querySelector.bind(document);
	var qa = document.querySelectorAll.bind(document);

	var addButton = q("#addButton");


	addButton.addEventListener('click', function(event){


		console.log('clicked');
		// gets whatever the user entered into input field (ie: the value)
		var input = q("input").value;


		var newLI = document.createElement('li');
		newLI.innerHTML = input;
		console.log(input)

		var list = q('#list');
		list.appendChild(newLI);

	})

	removeButton.addEventListener('click', function(event){

		q('#list').lastChild.remove();

	})

})(document);