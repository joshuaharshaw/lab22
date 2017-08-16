var quotes = [
{ text: "Help me, Obi-Wan Kenobi. You\'re my only hope!", author: "Leia Organa"},
{ text: "I find your lack of faith disturbing.", author: "Darth Vader"},
{ text: "Never tell me the odds!", author: "Han Solo"},
{ text: "Do. Or do not. There is no try.", author: "Yoda"},
{ text: "No. I am your father.", author: "Darth Vader"},
{ text: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.", author: "Yoda"},
{ text: "It\'s not that I gave up, Skywalker-but unlike you, when the time comes, I am prepared to let my student go. Can you say the same?", author: "Luminara Unduli"}
];

var randomQuote;

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/api/lyrics", function (req, res) {
	res.send(quotes);
});

// app.get("/api/random-lyric", function (req, res) {
// 	randomQuote = quoteMe();
// 	res.send(randomQuote);
// });

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
