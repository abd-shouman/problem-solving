# FCC Problem Solving
This porject is created to solve the problems provided by FREE CODE CAMP (FCC) at the following link (https://learn.freecodecamp.org/). 

The problems can be found under the title "Coding Interview Prep (Thousands of hours of challenges)"
For each file, the tile of the problem along with a description is provided

# Usage
- Clone or Download the repisotory.
- In the file `FCC_PS.html` update the `script` tag to use the appropiate javascript file  

## 1. symmetic_difference.js
### Algorithms: Find the Symmetric Difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

## 2. inventory_update.js
### Algorithms: Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

## conjuction_problem.js
### A random interview question [Not an FCC problem]
This is an interview question a friend of mine was asked. Since, the problem was explained to me through the interviewee (i.e. my friend), the proper terminology might have not been used.

#### The problem:
Create a function that tells if one string if a conjuction of the other. A string is a conjuction of another string if it has the same number of letters with the same occurences.

*For example:*
ABA is a conjuction BAA. Both have 2 occurunces of A and once occurnce of B
ABA is not aconjuction of BBA. Because they do not have the same occurunces of the same letters.

