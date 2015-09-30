var arr = [2, 5, 3, 8, 5, 3, 8, 9];

int a = 0;
int b = 0; 
for (var i = 0; i < arr.length; i++) {
	if (arr[i] > a) {
		b = a;
		a = arr[i];
	} else if (arr[i] > b) {
		b = arr[i]; 
	}
}
print(a);
print(b);