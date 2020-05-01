var cheerio = require("cheerio"); 
var request = require("request"); 
const config = require("./config.json")

var discord = require("discord.js");
var client = new discord.Client();




// help command begin

client.on('message', message => {
    if (message.content.startsWith("r!help")) {
          const exampleEmbedd = new discord.MessageEmbed()
          .setColor('#f799f1')
          .setTitle('Help for Random Google Images bot')
          .setDescription('__**🔥 Commands:**__ \n r!help - _this message lmao_ \n r!img <text> - _random search image for argument (replace <text> with your word / sentence)_ \n r!author - _Send author of this bot_ \n r!plzhelpme - _no_ \n  \n __**❤️ Author:**__ \n "Random Google Images bot" is created by **LukynkaCZE** \n Checkout my Website: http://web.lukynka.ga/en/ \n 🥰 Thank **YOU** for using my bot <3')
          .setURL('https://web.lukynka.ga')
          .setTimestamp()
          .setFooter('More about bot on http://www.randomimgbot.ga');
        
        message.channel.send(exampleEmbedd);

    }
  });    

  client.on('message', message => {
    if (message.content.startsWith("r!plzhelpme")) {
          message.channel.send("no help for you bitch.")
  //        const exampleEmbedd = new discord.MessageEmbed()
    //      .setColor('#f799f1')
      //    .setTitle('Help for Random Google Images bot')
  //        .setDescription('__**🔥 Commands:**__ \n r!help - _this message lmao_ \n r!img <text> - _random search image for argument (replace <text> with your word / sentence)_ \n r!author - _Send author of this bot_ \n r!plzhelpme - _no_ \n  \n __**❤️ Author:**__ \n "Random Google Images bot" is created by **LukynkaCZE** \n Checkout my Website: http://web.lukynka.ga/en/ \n 🥰 Thank **YOU** for using my bot <3')
    //      .setURL('https://web.lukynka.ga')
      //    .setTimestamp()
  //        .setFooter('More about bot on http://www.randomimgbot.ga');
        
    //    message.channel.send(exampleEmbedd);

    }
  });    


  client.on('message', message => {
    if (message.content.startsWith("r!author")) {
          const exampleEmbeddd = new discord.MessageEmbed()
          .setColor('#f799f1')
          .setTitle('Help for Random Google Images bot')
          .setDescription('\n __**❤️ Author:**__ \n "Random Google Images bot" is created by **LukynkaCZE** \n Checkout my Website: http://web.lukynka.ga/en/ \n 🥰 Thank **YOU** for using my bot <3')
          .setURL('https://web.lukynka.ga')
          .setTimestamp()
          .setFooter('More about bot on http://www.randomimgbot.ga');
        
         message.channel.send(exampleEmbeddd);

    }
  });    



client.on('ready', async () => {
    client.user.setActivity("Loading.", {type: "STREAMING"})
    setTimeout(load2, 1000)
    
})




function load2() {
    var status1_text = "Created by LukynkaCZE"
    client.user.setActivity("Loading..", {type: "STREAMING"})
    setTimeout(load3, 1000)


}

function load3() {
    var status1_text = "Created by LukynkaCZE"
    client.user.setActivity("Loading...", {type: "STREAMING"})
    setTimeout(status1, 1000)


}


function status1() {
    var status1_text = "Created by LukynkaCZE"
    client.user.setActivity("Created by LukynkaCZE", {type: "STREAMING"})
    setTimeout(status2, 3000)


}


function status2() {
    var status2_text = "!img <text>"
    client.user.setActivity("r!help <text>", {type: "STREAMING"})
    setTimeout(status3, 3000)

}

function status3() {
    var status3_text = "www.randomimgbot.ga"
    client.user.setActivity("www.randomimgbot.ga", {type: "STREAMING"})
    setTimeout(status1, 3000)
}



client.login(config.token); // enter your token

client.on("ready", function() {
	console.log("logged in");
});




client.on("message", function(message) {

	var parts = message.content.split(" "); 

	
	if (parts[0] === "r!img") { 

		
        image(message, parts);
        //message.channel.send(message)

	}

});

function image(message, parts) {

	
    
	var search = parts.slice(1).join(" "); 
  //  message.channel.send("**DEBUG:**" +search)
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
    .setTitle('Random Google Images')
    .setDescription('Random Search Result for: **' +search +'**')
    .setURL('https://web.lukynka.ga')
    .setImage( urls[0] )
    .setTimestamp()
    .setFooter('Bot by LukynkaCZE', 'https://i.imgur.com/6RoCg1R.png');
  
  message.channel.send(exampleEmbed);


	//	message.channel.send( urls[0] );
	});

}