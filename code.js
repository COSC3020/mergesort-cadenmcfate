function mergesort(array) {
    var max = array.length-1;
    for (var jump=1; jump <= max; jump *= 2) {
        for (var i=0; i < max; i += jump*2) {
            lo = i;
            mid = Math.min(i+jump-1, max);
            hi = Math.min(i+(2*jump)-1, max);
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
        }
    }
    return array;
}
