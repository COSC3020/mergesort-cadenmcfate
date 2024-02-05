function mergesort(array) {
    var hi = array.length-1;
    for (var jump=1; jump <= hi; jump *= 2) {
	for (var i=0; i < hi; i += jump*2) {
	    array = merge(array,i,Math.min(i+jump-1, hi), Math.min(i+(2*jump)-1, hi));
	}
    }
    return array;
}

function merge(array,lo,mid,hi) {
    var b = mid+1;
    for (var a = lo; a < hi; a++) {
	if (b > hi) break;
	else if (a === b) b++;
	if (array[a] > array[b]) {
	    var tmp = array[b];
	    array = array.slice(0,b).concat(array.slice(b+1,array.length));
	    array.splice(a, 0, tmp);
	    b++;
	}
    }
    return array;
}
