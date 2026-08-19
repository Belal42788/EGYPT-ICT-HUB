# Application of Programming [2] — Python

What are we learning today?

Today we learn about Functions in Python — something we define once and use many times; it takes values (Arguments) and returns a result (Return value).

### What is a Function

A set of operations in one named unit we can call.

### Argument and return

The function takes inputs and returns a result via return.

### Built-in and user-defined

There are built-in functions like print, and ones we define with def.

Common mistakes

You must define the function with def before you call it.

If you forget return the function won't return a value (it returns None).

The Function concept

A function takes an Argument, runs operations, and returns a Return value to the caller.

A Function is a set of operations in one unit. We define it with def; the variable that receives a value inside the function is an Argument; with return we send the result to the caller as a return value. And to use it we perform a call.

The function takes x = 5 and returns y = 2 × 5 = 10.

A function with two arguments: area(10, 5) = 10 × 5 / 2 = 25.

There are two kinds of functions: Built-in functions ready to use without definition like print, len and int, and User-defined functions that we define ourselves with def.

A function with an if/else condition — judge(40) prints Fail.

Common mistakes

Forgetting the colon : after the def line — without it the function won't be defined.

The number of Arguments when you call must match the definition.

The return must be inside the function to return the value to the caller.


### Questions

Q: Which keyword starts a function definition?
Options:
A. for
B. def
C. if
Correct Answer: B
Explanation: Correct! We define a function with def.

Q: What sends the result of the process inside the function to the caller?
Options:
A. return
B. print
C. def
Correct Answer: A
Explanation: Correct! The return statement sends the return value.

Exercises

### Warm Up — Page 173

The function circle calculates the area of a circle. Give the program for blanks A and B, and the value shown when row [1] runs.

Answer: A = def, B = return, and value [1] = 78.5.

The function judge takes a score and shows Pass if ≥ 80 and Fail if below. Give the program for blanks A and B.

Answer: A = >=, and B = else.

### Try — Page 174

Choose the term that fits blanks [1] and [2] from options A to D.

Answer: [1] = A (Argument), and [2] = B (Return value).

The function area calculates the area of a triangle. Give the program for blanks A and B, and the values shown when rows [1] and [2] run.

Answer: A = base * height / 2, B = return, value [1] = 25 and value [2] = 21.

The function celsius_to_fahrenheit converts temperature from Celsius to Fahrenheit. Give the program for blanks A and B.

Answer: A = fahrenheit, and B = temp_celsius.

The function evaluate takes a score and shows a grade from the table. Give the program for blanks A to C.

Answer: A = >=, B = elif, C = >=.

Recap

A function is a set of operations in one unit.

We define it with def then write the function name.

The function takes Arguments and returns a value with return.

To use it we make a Call with the function name.

There are built-in functions and user-defined ones.

Q: Which line correctly defines a function that takes a number and returns its double?
Options:
A. def dbl(x)
B. deff dbl(x):
C. def dbl(x):
Correct Answer: C
Explanation: Correct! def + function name + Argument in parentheses and a colon.

Q: If you define def circle(r): and call circle(5), what is r?
Options:
A. 5
B. 0
C. 1
Correct Answer: A
Explanation: Correct! The value we pass becomes the Argument.

Q: If a function is defined as def area(base, height): and print(area(10, 5)) gives 25, what returns the 25?
Options:
A. The def keyword
B. The print function
C. The return statement inside the function
Correct Answer: C
Explanation: Correct! Inside the function there is a return that sends the value.

Glossary

A set of operations in one named unit we can call.

The variable that receives a value inside the function when we call it.

The result the function sends to the caller via return.

The action of calling the function by writing its name with the Arguments.

The keyword we use to define a function we create.

A ready function we use without defining, like print and len.
