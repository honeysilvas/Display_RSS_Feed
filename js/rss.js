function getFeed( i ) {

	var rss = "";	
	setTimeout( slowFeed, 5000 );	
	
	var feed = new google.feeds.Feed( "http://www.gallenauniversity.com/_resources/rss/news.xml" );
	var max = 3;
	
	var container = document.getElementById( "feed" );
	
	feed.load( function ( result ) {	
		if ( !result.error ) {	
			if ( result.feed.entries.length == 0 ){
				rss += "There are no entries.";
			}
			for ( var i = 0; i < max; i++ ) {
				var entry = result.feed.entries[ i ];
				
				rss += "<div class='entry'>";
				rss += "<h2><a href='" + entry.link + "' target='_blank'>" + entry.title + "</a></h2>";
				rss += "<img class='thumbnail' src='" + entry.mediaGroups[ 0 ].contents[ 0 ].thumbnails[ 0 ].url + "' />";
				rss += "<span class='date'>" + getFormattedDate( entry.publishedDate ) + "</span><br />";
				rss += "<span class='description'>" + entry.content + "</span>";
				rss += "</div>";
			}
		
		} else {
			if ( result.error.code == 400 ){
				rss += "RSS feed does not exist at the given URL.  Please try again later.";				
			}
		}
		container.innerHTML = rss;
	})
	
	return i;
}

function slowFeed(){
	var container = document.getElementById( "feed" );
	if ( container.innerHTML == "" ){	
		var errorMessage = "It's taking a long time to load this feed.";
		container.innerHTML = errorMessage;
	}
}

function getLongMonth( month ){
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	return monthNames[ month ];
	
}

function getFormattedDate( pubDate ){
	var formattedDate;
	pubDate = new Date( pubDate );
	
	formattedDate = getLongMonth( pubDate.getMonth() ) + " " + pubDate.getDate() + ", " + pubDate.getFullYear();
	return formattedDate;
}