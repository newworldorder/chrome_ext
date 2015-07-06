var inputs = document.getElementsByTagName('input');

for(i in inputs){
    if(inputs[i].type == 'password'){
	console.log('This is a page we want to show something for!');
	chrome.runtime.sendMessage({url:location.href}, function(response){
		console.log("Recognize URL?: " + response.isKnown);
	    });
	break; 
    }
}