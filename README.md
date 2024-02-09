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

First, we want to find the complexity of the two for loops.
The first for loop: 

```for(var jump=1; jump <= hi; jump *= 2) ``` 

has a complexity of $\log_2 n$.
However, analyzing the second for loop becomes tricky because we see that each iteration depends on the value of the outter for loop variable:

```for(var i=0; i < hi; i += jump*2)```.

I found it helpful to iterate through the loops visually to determine the combined complexity. Taking, for example, an array of length 8, we have that the outter loop will iterate 3 times, with jump values of 1,2, and 4. In the inner loop we see that with a jump value of 1, we will iterate 4 times ($4=\frac{n}{2}$). On the next iteration we will double the size of our subarrays and iterate twice ($2=\frac{n}{4}$). On the final iteration of the outter loop, we only iterate through the inner loop once ($1=\frac{n}{8}$). Noticing this pattern gives us this sum: $\sum\limits_{i=1}^{\log_2 n} \frac{n}{2^i}$, which simplifies to $n-1$.

All of this is to say that the content contained in the first two loops will run $n-1$ times.

After this we have some constant time operations, and then encounter a for loop that iterates through an array of size $\frac{n}{C}$:

```for (var a = lo; a < hi; a++)```

Inside this loop we have as a slicing operation as well as a splicing operation that both have a time complexity of $\Theta(n)$. So the inner-most for loop has a rough complexity of $2n$.

Combining all of this we have $(n-1)(\frac{n}{C})(2n)=n^3\in\Theta(n^3)$ for the worst-case time complexity of this implimentation.

Sources:
ChatGPT was consulted once for this exercise with the prompt of "Give me generalized hints on how to impliment an in-place function when it usually isn't in-place. Don't show me code".
Apart from this, the exercise was completed independently. No code was taken from outside sources.
