[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer
First, analyzing the mergesort function, we want to find the complexity of the two for loops.
The first for loop: 

```js for(var jump=1; jump <= hi; jump *= 2) ``` 

has a complexity of $\log_2 n$.
However, analyzing the second for loop becomes tricky because we see that each iteration depends on the value of the outter for loop variable:

```js for(var i=0; i < hi; i += jump*2)```.

I found it helpful to iterate through the loops visually to determine the combined complexity. Taking, for example, an array of length 8, we have that the outter loop will iterate 3 times, with jump values of 1,2, and 4. In the inner loop we see that with a jump value of 1, we will iterate 4 times (which is n/2). On the next iteration we will double the size of our subarrays and iterate twice (n/4). On the final iteration of the outter loop, we only iterate through the inner loop once (n/8). Noticing this pattern gives us this sum: $\sum\limits_{i=1}^{\log_2 n} \frac{n}{2^i}$, which simplifies to $n-1$.

All of this is to say that the content contained in the inner loop will run $n-1$ times; the merge function will be called $n-1$ times.

In our merge function we have a for loop that contains operations of constant complexity. Taking a look at the for loop:

```js for (var a = lo; a < hi; a++)```

We see that it is simply iterating through the subarray bound by the indexes of lo to hi. Which is to say that it iterates $\frac{n}{C}$ times depending on the size of the subarray. 

Combining this we find the overall time complexity for the worst-case runtime: $(n-1)(\frac{n}{C})=n^2\in\Theta(n^2)$.


Sources:
ChatGPT was consulted once for this exercise with the prompt of "Give me generalized hints on how to impliment an in-place function when it usually isn't in-place. Don't show me code".

Apart from this, the exercise was completed independently. No code was taken from outside sources.
