const fetch = require('node-fetch')
function testfetch(title) {
	var res;
	fetch("https://jsonplaceholder.typicode.com/posts?title=" + title.replace(/"/g, ""))
		.then(response => response.json())
		.then(json => {
			res = JSON.stringify(json[0]["id"]);
		//	console.log(res);
			return res;
		})
	
}



describe("'GET' testing", function () {
	var res = " ";
	var retrieve_inf = " ";
	beforeEach(function (done) {
		setTimeout(function () {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then(response => response.json())
				.then(json => {
					for (i = 0; i < 10; i++) {
						retrieve_inf += JSON.stringify(json[i]["name"]);
					}
				})
			res = retrieve_inf;
			console.log(retrieve_inf);
			done()

		}, 50)
	});

	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			
			expect(retrieve_inf).not.toEqual(" ");
			done();

		}, 1000)
	});

	
})


var s1 = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
var s2 = "qui est esse";
var s3 = "ea molestias quasi exercitationem repellat qui ipsa sit aut";
var s4 = "eum et est occaecati";
var s5 = "nesciunt quas odio";

describe("'POST' testing case1", function () {

	
	beforeEach(function (done) {
		setTimeout(function () {
			var res;
			fetch("https://jsonplaceholder.typicode.com/posts?title=" + s1.replace(/"/g, ""))
					.then(response => response.json())
					.then(json => {
						s1 = JSON.stringify(json[0]["id"]);
						console.log(s1);
				})
			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			console.log(s1);
			expect(s1).toEqual('1');
			done();
		}, 1000)
	})
})


describe("'POST' testing case2", function () {


	beforeEach(function (done) {
		setTimeout(function () {
			var res;
			fetch("https://jsonplaceholder.typicode.com/posts?title=" + s2.replace(/"/g, ""))
				.then(response => response.json())
				.then(json => {
					s2 = JSON.stringify(json[0]["id"]);
				})
			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			expect(s2).toEqual('2');
			done();
		}, 1000)
	})
})

describe("'POST' testing case2", function () {


	beforeEach(function (done) {
		setTimeout(function () {
			var res;
			fetch("https://jsonplaceholder.typicode.com/posts?title=" + s3.replace(/"/g, ""))
				.then(response => response.json())
				.then(json => {
					s3 = JSON.stringify(json[0]["id"]);
				})
			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			expect(s3).toEqual('3');
			done();
		}, 1000)
	})
})


describe("'POST' testing case4", function () {
	beforeEach(function (done) {
		setTimeout(function () {
			var res;
			fetch("https://jsonplaceholder.typicode.com/posts?title=" + s4.replace(/"/g, ""))
				.then(response => response.json())
				.then(json => {
					s4 = JSON.stringify(json[0]["id"]);
				})
			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			expect(s4).toEqual('4');
			done();
		}, 1000)
	})
})

describe("'POST' testing case5", function () {


	beforeEach(function (done) {
		setTimeout(function () {
			var res;
			fetch("https://jsonplaceholder.typicode.com/posts?title=" + s5.replace(/"/g, ""))
				.then(response => response.json())
				.then(json => {
					s5 = JSON.stringify(json[0]["id"]);
				})
			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			expect(s5).toEqual('5');
			done();
		}, 1000)
	})
})


describe("'POST' respond testing ", function () {
	var result;

	beforeEach(function (done) {
		setTimeout(function () {

			var title = "title"
			var text = "text"
			var userID = "userid"

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
				.then(json => result = json)

			done();
		}, 10);
	});
	it("Check if it retreived the data", function (done) {
		setTimeout(function () {
			expect(result["title"]).toEqual("title");
			expect(result["body"]).toEqual("text");
			expect(result["userID"]).toEqual("userid");
			expect(result["id"]).toEqual(101);
			done();
		}, 1000)
	})
})
