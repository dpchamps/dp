# Dynamic Programming Overview

An algorithmic technique for solving two broad categories of problems:

### Combinatoric Problems

Concerned with counting or quantifying. Keywords for combinatoric problems are 
variants of the phrase: 

* "How many..."

### Optimization Problems

Concerned with finding the miniumum or maximum of some function.
Keywords for an optimization problem are some variant of the phrases:

* "What is the minimum..."
* "What is the maximum..."

## Requirements 

In order for a problem to be a candidate of a dynamic programming solution,
it must satisfy two properties:

### Optimal Substructure

The problem is comprised of subproblems that can be combined 
to arrive at the solution of the main problem. 

An _optimal_ substructure
denotes that the solution of the sub problems guarantees the optimal solution
of the parent problem.

### Overlapping Sub-problems

The sub-problems of the parent problem are not unique. Each solution may be reused.

## Arriving at a formal definition

Dynamic Programming is an algorithmic technique for solving combinitoric
and optimization problems by using the properties of *optimal substructure*:

* The optimal solution of the overall problem depends upon the optimal solution of 
each subproblem

and *overlapping substructures*:

* Optimal substructures may be reused in other computations.

## Recurrence Relations

Recurrence relations are integral to arriving at solutions of dynamic 
programming problems.

An example recurrence relation to define the summation operation

```
n=0, f(0) = 0
n=1, f(1) = 1
n, f(n) + n
```

A recurrence relation defines base cases, and substructures in terse mathematical 
notation.

## Framework for solving Dynamic Programming Problems

1. Define the objective
1. Identify Base Cases
1. Write a Recurrence Relation
1. Identify order of computation
1. Locate the final answer

### Example, using the summation operator.

#### 1. Defining the objective

`f(n) = 1 + 2 + ... + n`

The result of `f(n)` will be the sum of all numbers up to and including n

#### 2. Identify Base Cases

Base cases are the roots of your dynamic programming problem. As the name
suggests, they are sub problems that do not depend on any further recurrence.

For the summation problem, these base cases will be:

* n=0, f(0) = 0
  * when n=0, we do not need to perform any more computation. We return 0.
* n=1, f(1) = 1
  * Similar to above, there is no computation required, we simply return 1.
  
#### 3. Write a Recurrence Relation

We can use the base cases of our problem to start the recurrence relation:

```
n=0, fn(0) = 0
n=1, fn(1) = 1
```

The recurrence isn't always immediately obvious, but a good place to start is 
by manually computing a few numbers passed the base cases:

``` 
n=2, 1 + 2 = 3
n=3, 1 + 2 + 3 = 6
``` 

Notice, we can represent 1 as f(1) and 1 + 2 as f(2):

```
n=2, f(1) + 2 = 3
n=3, f(2) + 3 = 6
```

Finally, substitute n to find a general solution:

```
n, f(n-1) + n
```

And then combine:

``` 
f(0) = 0;
f(1) = 1;
f(n) = f(n-1)+n
```

#### 4. Define the order of computation

From the recurrence relation outlined above, identify the operations
that combine the recurrences and the location of the recurrences.

For commutative operations, the order does not matter.

#### 5. Locate the final answer

Finally, we must locate the final answer. Our summation occurs at `n`. 
The location of the final answer depends on the order of the computation.

