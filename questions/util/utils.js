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
	if(text == "T"){
		element.style.cssText = "color:green;";
		element.innerHTML = "IN";
	}
	else if(text == "F"){
		element.style.cssText = "color:red;";
		element.innerHTML = "OUT";
	}
	appendToRoot(element);
};