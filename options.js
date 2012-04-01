window.onload = function ()
{
	var log = function (str){
		if(window.console)
			window.console.log(str);
	};
	
	var txt = document.getElementById("urls");
	var saved = document.getElementById("saved");
	var error = document.getElementById("error");
	
	var showError = function (str){
		error.innerHTML = str;
		error.hidden = false;
	};
	
	var trim = function (s)
	{
		var l=0; var r=s.length -1;
		while(l < s.length && s[l] == ' ')
		{	l++; }
		while(r > l && s[r] == ' ')
		{	r-=1;	}
		return s.substring(l, r+1);
	}
	
	var restore_options = function (){
		log("restore_options");
		var urls = localStorage["inspiring_urls"];
	    if (!urls) {
	        // populate with defaults
			txt.value = INSPIRING_URLS.join(",");
	    }else{
			txt.value = urls;
		}
	};
	
	var save_options = function (){
		log("save");
		saved.hidden = true;
		error.hidden = true;
		// trim
		txt.value = trim(txt.value);
		if (txt.value.length == 0) {
			showError("Insert at least a url");
			return;
		}
		localStorage["inspiring_urls"] = txt.value;
		saved.hidden = false;
	};
	
	restore_options();
	
	var btn = document.getElementById("btn");
	btn.onclick = function (){
		save_options();
	}
}