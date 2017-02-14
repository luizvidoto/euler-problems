var fib = 1;
var fibs = [];
var counter, i;
for (var counter = 0; i < 1000; i++) {
	i = counter - 1 < 0 ? counter: 0;
	fibs.push(fibs[i] + fibs[i - 1])
}
