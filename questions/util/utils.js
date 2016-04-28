var getRoot = function(){
	var root = document.getElementById('root');
	return root;
};

var appendToRoot = function (element){
	var root = getRoot();
	root.appendChild(element);
};

var print = function(text){
	var element = document.createElement("div");
	if(text == "IN"){
		element.style.cssText = "color:green;";
	}
	else if(text == "OUT"){
		element.style.cssText = "color:red;";
	}
	element.innerHTML = text;
	appendToRoot(element);
};