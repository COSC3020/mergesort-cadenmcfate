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

The complexity of the first for loop is $log_2 n$.

The next for loop has a complexity of $n$ because it is iterating through the entire array, just with varying sizes of subarrays dependent on the 'jump' variable. 

Here is where we encounter the difference between this algorithm and the typical version of mergesort. The altering of the array is done inside the loop instead of on the outside. In mergesort we copy a temporary array back to the original variable, which has a complexity of $n$. In this algorithm we use splice and slice operations as a way of altering the array in-place, also with a complexity of $n$. We multiply to get $n^2\log_2 n$ instead of the $n\log_2 n$ associated with mergesort. This makes sense as we are sacrificing speed for memory.

Thus, this algorithm has a complexity of $\Theta(n^2 \log n)$.

Sources:
ChatGPT was consulted once for this exercise with the prompt of "Give me generalized hints on how to impliment an in-place function when it usually isn't in-place. Don't show me code".
Apart from this, the exercise was completed independently. No code was taken from outside sources.
