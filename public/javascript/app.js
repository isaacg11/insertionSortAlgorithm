
var ar = [1,3,2,99,24,4];

function insertionSort(ar){
	var i, j, k, val, lim=ar.length;

	for(i=1;i<lim; ++i) {
		val = ar[j=i]; k = j-1;
		while (j && ar[k]>val) ar[j--] = ar[k--];
		ar[j]=val;
	}
	return ar;
}
console.log(insertionSort(ar));





//lim=3
//i = 1/2
//j = 1/2
//k = 0/1
//val=3/2