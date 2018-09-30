


document.getElementById("searchbutton").addEventListener("click", getsearch);

document.getElementById("button").addEventListener("click", function () {

	var title = document.getElementById("title").value;
	var text = document.getElementById("text").value;
	var userID = document.getElementById("selection").value;

	console.log(title + "-" + text + "-" + userID);

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: title,
			body: text,
			userID: userID
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}


	}).then(response => response.json())
		.then(json => alert(JSON.stringify(json)))
})



document.getElementById("selection").addEventListener("change", function () {
	var id = document.getElementById("selection").value;
	console.log(id);
}, false);




function getsearch() {
	
	var searchtitle = document.getElementById("search").value;
	
	fetch("https://jsonplaceholder.typicode.com/posts?title=" + searchtitle.replace(/"/g, ""))
		.then(response => response.json())
		.then(json => {
			var searchresult = "Search result <br>"
			for (i = 0; i < 10; i++) {
				if ((i in json) == 1) {
					searchresult += "Title : " + JSON.stringify(json[i]["title"]) + "<br><br> Body : " + JSON.stringify(json[i]["body"]) + "<br>";
					console.log(JSON.stringify(json[i]["title"]));

				}

			}
			searchresult += "<br>"
			document.getElementById("main").innerHTML = searchresult;

		})


}
