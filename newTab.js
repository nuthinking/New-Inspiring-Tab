window.onload = function()
{
	var frame = document.getElementById("iframe");
	var urls = localStorage["inspiring_urls"];
	if(!urls){
		urls = INSPIRING_URLS.join(",");
	}
	var arr = urls.split(",");
	for(var i=0; i<10; i++){
		arr.concat(urls.split(","));
	}
	var index = Math.floor(Math.random() * arr.length);
	var url = arr[index];
	frame.src = url;
}