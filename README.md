# Functional Programming in 15 minutes (or less)

## Key Concepts

In functional programming, programs are executed by **evaluating expressions**.
In imperative programmingm, programs are composed of statements which change
global state when executed. **Functional programming typically avoids using
mutable state.**

Programs are built mostly, with a handful of very small, very reusable, very
predictable pure functions. Pure functions have a few properties that make them
extremely reusable and extremely useful for a variety of applications:

* **Idempotence**: Given the same inputs, a pure function will always return the
same output, regardless of the number of times the function is called.
Idempotence is an important feature for building RESTful web services, but it
also serves the very useful purpose of separating computation from dependency on
both time and order of operations — extremely valuable for parallel &
distributed computation (think horizontal scaling).
* **Free from Side-effects**: Pure functions can be safely applied with no
side-effects, meaning that they do not mutate any shared state or mutable
arguments, and other than their return value, they don’t produce any observable
 output, including thrown exceptions, triggered events, I/O devices, network,
 console, display, logs, etc...
* **Higher-order functions**: Functions that take other functions as their
arguments. A basic example of a HOF is map which takes a function and a list as
its arguments, applies the function to all elements of the list, and returns
the list of its results
* **Immutable data**: Purely functional programs typically operate on immutable
data. Instead of altering existing values, altered copies are created and the
original is preserved. Since the unchanged parts of the structure cannot be
modified, they can often be shared between the old and new copies, which saves
memory.


Because of the lack of shared state and side-effects, pure functions are much
less likely to conflict with each other or cause bugs in unrelated parts of the
program.

Pure functions produce stronger guarantees of encapsulation than objects without
function purity

List utilities:

    head() — get first element
    tail() — get all but first elements
    last() — get last element
    length() — count of elements

Predicates / comparators (test an element, return boolean)

    equal()
    greaterThan()
    lessThan()

List transformations:

    map() ([x]) -> [y]
      take list x and apply a transformation to each element in that list,
      return new list y
    reverse() ([1, 2, 3]) -> [3, 2, 1]

List searches:

    find() ([x]) -> x
      take list x and return first element that matches a predicate
    filter() ([x]) -> [y]
      take list x and return all items matching predicate

List Reducers / folds:

    reduce()   ([x], function[, accumulator])
      apply function to each element and accumulate the results as a single value
    any() — true if any values match predicate
    all() — true if all values match predicate
    sum() — total of all values
    product() — product of all values
    maximum() — highest value
    minimum() — lowest value
    concat() 
       take a list of lists and return a single, concatenated list in list order
    merge() 
       take a list of lists and return a single, merged list in element order

Iterators / Generators / Collectors (infinite lists)

    sample() 
       return current value of continuous input source (temperature, form input,
       toggle switch state, etc…)
    repeat() — (1) -> [1, 1, 1, 1, 1, 1,…]
    cycle() / loop() 
      when the end of the list is reached, wrap around to the beginning again.

## Resources

* [Don't be scared of functional programming](https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/) - An article from Smashing Magazince
* [James Coglan: Practical functional programming: pick two | JSConf EU 2014 ](https://www.youtube.com/watch?v=XcS-LdEBUkE&feature=youtu.be)
* [Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/index.html)
* [Using Immutable Data Structures in JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)
* [MPJME from Spotify](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
