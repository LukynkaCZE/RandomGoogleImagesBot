var cheerio = require("cheerio"); 
var request = require("request"); 

var discord = require("discord.js");
var client = new discord.Client();



client.login("YOUR TOKEN HERE"); // enter your token

client.on("ready", function() {
	console.log("logged in");
});

client.on("message", function(message) {

	var parts = message.content.split(" "); 

	
	if (parts[0] === "!rimg") { 

		
		image(message, parts);

	}

});

function image(message, parts) {

	

	var search = parts.slice(1).join(" "); 

	var options = {
	    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
	    method: "GET",
	    headers: {
	        "Accept": "text/html",
	        "User-Agent": "Chrome"
	    }
	};
	request(options, function(error, response, responseBody) {
		if (error) {
			
			return;
		}

		

		$ = cheerio.load(responseBody); 

		
		var links = $(".image a.link");


		var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
		console.log(urls);
		if (!urls.length) {

			return;
		}

    
    const exampleEmbed = new discord.MessageEmbed()
    .setColor('#42f5a7')
    .setTitle('Random Search Result')
    .setURL('https://web.lukynka.ga')
    .setImage( urls[0] )
    .setTimestamp()
    .setFooter('Bot by LukynkaCZE', 'https://i.imgur.com/6RoCg1R.png');
  
  message.channel.send(exampleEmbed);


	//	message.channel.send( urls[0] );
	});

}
