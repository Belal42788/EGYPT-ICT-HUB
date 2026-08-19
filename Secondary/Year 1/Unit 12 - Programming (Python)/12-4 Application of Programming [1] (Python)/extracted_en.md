# Application of Programming [1] — Python

What are we learning today?

Today we talk about Lists in Python — the thing that stores more than one value in a single variable, and lets the program hold lots of data and process it easily.

### What is a List

An ordered collection of data items kept in one variable.

### Element and Index

Each value in the list has a position number (index) that starts from zero.

### Two-dimensional list

A list inside a list; we reach an element with a[i][j].

Common mistakes

The index starts from zero, not one — a[0] is the first element.

When a list starts empty [] you have to keep adding to it.

The List concept

index

List a has 5 elements, each with an index giving its position.

A List is a collection of data items arranged in sequence, and we can manage all the data together as one group. We define it by writing the list name, an equals sign, and square brackets [] with the values inside, separated by commas.

Try writing a list of numbers or names and print it.

Common mistakes

Forgetting the [] brackets or the comma between values — the list won't be defined correctly.

In Python we write True and False with capital letters, and text values between quotation marks.


### Questions

Q: Which line correctly defines a list of numbers?
Options:
A. num = (5, 10, 15)
B. num = [5, 10, 15]
C. num = 5, 10, 15
Correct Answer: B
Explanation: Correct! Square brackets [] with values separated by commas.

Q: In the list a = [7, 22, 11], what is a[0]?
Options:
A. 22
B. 11
C. 7
Correct Answer: C
Explanation: Correct! The index gives the first element.

The Element concept and index

Each element has an index giving its position, and the index starts from zero.

An Element is each value inside the list, and we reach it by writing the list name and its position number (the index) in brackets like a[2]. Note the index starts from zero, not one. And we can add elements to the end of the list with append.

Using a variable as an index a[i] lets us go over every element.

append adds a new element at the end of the list.

Common mistakes

When you get an element with a number larger than the last index you get an IndexError — indexing starts from zero.

Don't count from one: a[1] is the second element, not the first.

Q: In a = [1, 4, 9, 16, 25], what is a[3]?
Options:
A. 16
B. 9
C. 25
Correct Answer: A
Explanation: Correct! a[0]=1 and a[3]=16 because indexing starts at zero.

Q: After running a = [] then a.append(8) then a.append(28), what is a[1]?
Options:
A. 8
B. 28
C. 1
Correct Answer: B
Explanation: Correct! 8 was added first, then 28, so a[1] = 28.

Two-dimensional list

A two-dimensional list manages data with a row index and a column index: a[i][j].

A two-dimensional list is a list inside a list, storing data in rows and columns. We define it by writing lists inside the big list, and we reach the element in row i and column j with a[i][j].

a[0][0] = 'A' and a[1][2] = 'F'.

Common mistakes

In a[i][j], i is the row number and j is the column number — don't swap them.

A two-dimensional list has two indices, not one like a normal list.

Q: In a = [[1,2,3],[4,5,6],[7,8,9]], what is a[2][1]?
Options:
A. 8
B. 9
C. 7
Correct Answer: A
Explanation: Correct! Row 2, column 1 = 8.

Q: In a = [['A','B'],['C','D']], what is a[1][0]?
Options:
A. D
B. A
C. C
Correct Answer: C
Explanation: Correct! Row 1, column 0 = C.

Exercises

### Warm Up — Page 169

For programs A and B, give the values displayed when each is executed.

Answer: A = 29, and B = 8.

Complete the program that finds the minimum value in list a. Fill in blanks A and B.

Answer: A = 5, and B = a[i].

Fill in blanks A to E so the program prints the required result from the 2D list.

Answer: A = 0, B = 2, C = 0, D = 4, E = a[i][j].

### Try — Page 170

For programs A to C, give the values displayed when each is executed.

Answer: A = 16, B = 28, C = L.

Complete the program that finds the total of the elements in list a. Fill in blanks A to C.

Answer: A = 0, B = 10, C = a[i].

Complete the program that finds the maximum value in list a. Fill in blanks A to C.

Answer: A = 5, B = >, C = a[i].

Fill in blanks A to E so the program prints the required result from the 2D list.

Answer: A = 0, B = 2, C = 0, D = 5, E = a[i][j].

### Exercise — Page 171

For programs A to C, give the values displayed when each is executed.

Answer: A = 1, B = B, C = Information studies.

Complete the program that finds the minimum value in list a. Fill in blanks A to C.

Answer: A = a[0], B = 5, C = a[i].

Complete the program that counts the elements in list a that are greater than 10. Fill in blanks A to C.

Answer: A = 0, B = 5, C = a[i].

Fill in blanks A to E so the program prints the required result from the 2D list.

Answer: A = 0, B = 2, C = 0, D = 3, E = a[i][j].

Recap

A list is an ordered collection of data in [].

The index gives an element's position and starts from zero.

append adds an element to the end of the list.

A 2D list has lists inside and we reach with a[i][j].

We can go over elements with a for loop and a variable index.

Q: Which correctly defines this list?
Options:
A. scores = [10, 20, 30]
B. scores = (10, 20, 30)
C. scores = 10, 20, 30
Correct Answer: A
Explanation: Correct! This is the correct list syntax.

Q: In a = [7, 22, 11], what is a[1]?
Options:
A. 7
B. 22
C. 11
Correct Answer: B
Explanation: Correct! a[0] = 7 and a[1] = 22.

Q: In a = [['A','B'],['C','D']], what is a[1][1]?
Options:
A. C
B. B
C. D
Correct Answer: C
Explanation: Correct! Row 1, column 1 = D.

Glossary

An ordered collection of elements, defined with [].

Each value inside the list.

The element's position number in the list, starting from zero.

A command that adds a new element to the end of the list.

A list inside a list, storing data in rows and columns, reached with a[i][j].

A function that generates a sequence of numbers, used with for.
