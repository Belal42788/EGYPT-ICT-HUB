# Programming Basics [2] — Python

What will we learn today?

Lesson Introduction

In the previous lesson (12-2) we learned to display, store, and calculate with Python. Today we take a big step: we'll make the program repeat things by itself and make decisions on its own. So we write less code, and it does more!

This lesson is based on the ICT textbook, pages 163 to 167, and it covers the two most important tools in programming: loops and branching.

The Loop Structure (for)

repeats a process a set number of times

### The for statement and looping

The for statement makes Python execute a certain process more than once. The syntax: for variable in range(...): then we write the code to repeat with indentation.

The range() function specifies the range for the variable. It has three forms: range(end), range(start, end), and range(start, end, increment).

The forms of range()

Writing style

Meaning

range(end)

Starts from 0 and increases by 1 up to end - 1.

range(start, end)

Starts from start and increases by 1 up to end - 1.

range(start, end, inc)

Starts from start and increases by inc up to end - inc.

loop.py

First result: 0 1 2 3 — second: 1 3 5

### ⚠️ Common Mistakes

Forgetting the colon (:) after the for line — that's essential.

Forgetting the indentation before the repeated code — Python will error.

range(4) displays 0 1 2 3, not 1 2 3 4 — the end is not included.


### Questions

Q: What does range(4) produce?
Options:
A. 1 2 3 4
B. 0 1 2 3
C. 4 5 6 7
Correct Answer: B
Explanation: Correct! range(4) shows 0 1 2 3 — the end is not included.

Q: What will for i in range(1, 7, 2) print?
Options:
A. 1 2 3 4 5 6
B. 1 3 5 7
C. 1 3 5
Correct Answer: C
Explanation: Correct! It increments by 2: 1 3 5.

Comparison Operators

used to compare values

### Comparing values

A comparison operator is used to compare expressions or values. The result is true if the condition is met, or false if not.

The comparison operators table

Operator

Meaning

Example

Equal

Not equal

Less than

Greater than

Less than or equal to

Greater than or equal to

### ⚠️ Common Mistakes

Confusing = (assignment) with == (comparison): == asks «are they equal?».

Using a single = inside a condition instead of == — that will error.

Q: Which comparison operator asks «are they equal?»?
Options:
A. =
B. ==
C. !=
Correct Answer: B
Explanation: Correct! == compares whether two values are equal.

Q: If x = 70, what is the result of x < 70?
Options:
A. false
B. true
C. 70
Correct Answer: A
Explanation: Correct! 70 is not less than 70, so the result is false.

The Branching Structure (if)

makes decisions based on conditions

### The conditional expression if / elif / else

The if statement lets us branch based on a condition. A conditional expression determines whether a condition is met, returning true if met and false if not.

if alone when a condition is met, if ~ else when we also want what happens if it's not met, and if ~ elif ~ else to check multiple conditions in order.

grade.py

Result: Grade is B (because 70 >= 50)

### ⚠️ Common Mistakes

Forgetting the colon after if, elif and else.

Forgetting the indentation before the code inside the branch.

Wrong condition order: start with the largest, like >= 90 first then >= 50.

Q: What does if decide?
Options:
A. Repeats a process
B. Branches by condition
C. Adds numbers
Correct Answer: B
Explanation: Correct! if branches by condition — if true it runs a certain branch.

Q: If x = 70 in if x >= 90 / elif x >= 50, what's the result?
Options:
A. Grade is B
B. Grade is A
C. Grade is C
Correct Answer: A
Explanation: Correct! 70 is not >= 90, but 70 >= 50 so the elif runs.

Exercises

Your book: pages 165 – 167

### 📋 Warm Up — Page 165

Answer by yourself first, then press «Show All Answers» to check.

Choose the program that displays "Grade is A" from options A to D.

✅ Answer: C — we need point = 90 (assignment) and print(result) to display.

This program calculates the total and average of integers 1 to 10. Fill in blanks A, B and C.

✅ Answers: A = 11 (to include 10), B = total + i, C = total.

### 🎯 Try — Page 166

Put your solution by yourself first, then open the solution.

Choose the correct output when this program runs: for i in range(0, 5, 1): print(i)

✅ Answer: B — range(0, 5, 1) displays 0 1 2 3 4.

Choose the program that displays "Pass" from options A to D.

✅ Answer: D — we need score = 95 and print(result).

This program counts down from 5 to 0, and when it reaches 0 it displays "Start!". Fill in blanks A, B and C.

✅ Answers: A = range(5, -1, -1), B = i, C = i == 0.

This program displays "It is an even number" for even numbers 1 to 100. Fill in blanks A and B.

✅ Answers: A = 101, B = i % 2 == 0.

### 💪 Exercise — Page 167

A final challenge — build the answer by yourself then check.

Choose the program that produces the same output as: for i in range(3): print(i)

✅ Answer: A — the same output 0 1 2.

Choose the correct output when this program runs: x = 7 then if x < 3 ... elif x <= 10 ... else

✅ Answer: A — 7 is not < 3, but 7 <= 10 so it picks the table.

This program displays the total of all numbers 1 to 100. Fill in blanks A and B.

✅ Answers: A = 101, B = total + i.

This program displays the number of even numbers between 1 and 10. Fill in blanks A, B and C.

✅ Answers: A = range(1, 11), B = 1, C = count.

Recap — The Lesson Journey

what we covered in a few lines

1. The for loop — repeat

for + range() runs the code a set number of times.

2. Comparison — compare

==, !=, <, >, <=, >= compare values and return true/false.

3. Branching if — decide

if / elif / else picks a branch based on the condition.

### Today's Message

When you want repetition, use for with range(). When you want a decision, use if with comparison operators. Together they're the basis of any smart program.

Q: for with what runs the code a set number of times?
Options:
A. if
B. else
C. range()
Correct Answer: C
Explanation: Correct! for with range() sets the number of repetitions.

Q: Which comparison operator asks «greater than or equal?»?
Options:
A. >=
B. <=
C. ==
Correct Answer: A
Explanation: Correct! >= compares greater than or equal.

Q: if x >= 90 ... elif x >= 50 and x = 70, what's the result?
Options:
A. The if branch
B. The else branch
C. The elif branch
Correct Answer: C
Explanation: Correct! 70 is not >= 90 but 70 >= 50 so it picks the elif branch.

Glossary

Lesson Terms

Search any term or use the filters to narrow down.
