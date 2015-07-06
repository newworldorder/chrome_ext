console.log(document.title);
var known_urls = {};

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse){
	console.log('URL to check: ' + req.url);
	var known = false;
	if(req.url in known_urls){
	    known = true; 
	}
	sendResponse({isKnown:known});
});