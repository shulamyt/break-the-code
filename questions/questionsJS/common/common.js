var a = ..;
if{a = }
else{a = }
if{a = }
a ?
-------------------
if{
	if{}
	else if{}
	else if{}
	else{}
}
--------------------
if{
	if{}
	else{}
}
else{
	if{}
}
--------------------
if{}
if{}
else{}
--------------------
if{
	return
}
else if{
	return
}
else if{
	return
}
else{
	return
}
-----VS
if{
	return
}
if{
	return
}
if{
	return
}
return
--------------------
while{
	if{
		continue;
	}
	if{
		return;
	}
}
return;


