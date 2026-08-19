# Programming Basics — Python

What will we learn today?

Lesson Introduction

Programming is how we talk to the computer in a language it understands. A computer doesn't understand our everyday words — it only understands clear, short instructions, step by step, written in a file called a program. We do the thinking and the deciding, and it executes at incredible speed — we just have to get the idea across exactly. And today, for the first time, we'll really talk to the computer!

Today we're talking about your first real steps in programming with Python — an easy, clear language and one of the most famous languages in the world. We'll learn how to make the computer display text, how to store data in boxes called variables, and how to make it calculate for us.

This lesson is based on the ICT textbook, pages 159 to 162, and it's the foundation that all the next programs will build on.

### ⚠️ Common Mistakes

Confusing print with something else — print is not for printing on paper, it's for displaying on the screen.

Forgetting the parentheses ( ) after print — you need two parentheses before and after the content.

Not knowing the type of content inside the parentheses (text or number) — we'll settle it in the next part.

The print Statement

How do we make the computer display text?

### print displays what's inside the parentheses

The job of print is to display on the screen the text or the value inside the parentheses ( ). What we write inside the parentheses is of two types:

(character string)

we enclose it between quotation marks — either 'text' with a single quote or "text" with a double quote.

(number)

we write it without any quotation marks.

Analogy:

print is like an announcement on a screen — what's inside the parentheses is what will appear. Text needs quotation marks so it's recognized as words, and a number is written normally because it's a value that calculations work with.

hello.py

Edit the code and run it — mind the quotation marks

See the difference visually:

text between quotes

number without quotes

text between quotes

number without quotes

### ⚠️ Common Mistakes

Writing a number between quotes: print("2023") — the result is text not a number, and if you try to calculate with it, it fails.

Writing print(Hello) without quotes — Python will think Hello is an unknown variable name = a NameError.

Forgetting the opening or closing quotation mark → a syntax error (SyntaxError).


### Questions

Q: What makes the computer display text on the screen?
Options:
A. The while statement
B. The print statement
C. The if statement
Correct Answer: B
Explanation: Correct! The print statement makes the computer display text or numbers on the screen.

Q: When displaying text in Python, what do we write it between?
Options:
A. Quotation marks
B. Parentheses
C. No marks at all
Correct Answer: A
Explanation: Correct! Text goes between quotation marks, like 'Hello' or "Hello".

Variables

we store data so we can use it later

### Variable: Like a box to store data

A variable is like a box in the computer's memory that we name and store a value in. When we write city = "Cairo", we tell the computer: «put the value Cairo inside a box named city».

Then at any time we write print(city) — Python goes to the box, returns the value inside it and displays it.

city.py

Change the values and see the output yourself

The = sign doesn't mean «equals»!

the value

the variable name

The golden rule:

In programming, the = sign means «assign the value on the right to the name on the left» — not «equals». So x = 5 means make x hold 5, not «x equals 5».

### ⚠️ Common Mistakes

Using the variable before defining it: you need city = "Cairo" first and then print(city) — the reverse order means a NameError.

Confusing = (assignment) with == (comparison): == asks «are they equal?» — that's a concept we'll learn later; for now we use a single = for assignment.

Forgetting to quote text: city = Cairo is wrong because Cairo here will be treated as an unknown variable name. You need city = "Cairo".

Q: What is a variable in Python like?
Options:
A. A function that displays on screen
B. A whole program
C. A named box where we store a value
Correct Answer: C
Explanation: Correct! A variable is like a named box we store a value in to use later.

Q: What does the = sign mean in Python?
Options:
A. Comparing whether two values are equal
B. Assigning the value to the variable
C. Displaying a value on screen
Correct Answer: B
Explanation: Correct! = means put the value on the right into the variable on the left.

Arithmetic Operators

+ - × ÷ // % **

The table of the seven operations

Operation

Symbol

Meaning

Example

Result

Addition

Addition

Subtraction

Subtraction

Multiplication

Multiplication

Division

(decimal result)

Quotient

Quotient

Remainder

Remainder

Power

Power

### Play with the symbols — each symbol explains itself

Click any of the seven symbols and see a real example and its output.

ops.py

The results in order: 8, 2, 15, 1.666, 1, 2, 125

### ⚠️ Common Mistakes

Confusing multiplication * with the sign x — in Python multiplication is the star, not the letter x.

Confusing / (decimal result), // (integer result) and % (remainder) — each has its own use.

Writing a^x for power, when what's required is a ** x.

Q: What does the // symbol do in Python?
Options:
A. A decimal result
B. The remainder
C. Integer quotient
Correct Answer: C
Explanation: Correct! // gives the integer quotient (drops the decimal part).

Q: The symbol that raises a number to a power?
Options:
A. The power **
B. The remainder %
C. Division /
Correct Answer: A
Explanation: Correct! ** is the power, like 3 ** 2 = 9.

Sequential Structure

the program runs line after line in order

### Simply: from top to bottom in order

Any Python program runs from the first line to the last line in order — like reading a page from top to bottom. If an error happens on any line, the program stops and the rest doesn't run.

The next example is the book's complete example (9 lines) — press «Run Sequentially» and live the moment line by line, and watch the output drop below on the screen.

← → the arrow keys on the keyboard take you to the next / previous section during the presentation.

The Program

Progress:

the line running right now

lines not run yet

### ⚠️ Common Mistakes

Assuming the program runs all lines at once — no, line after line in order.

If print(city) runs before the variable is defined — Python gives a NameError and stops.

The variable must be defined before being used in the sequence.

Q: How does the sequential structure work?
Options:
A. From the end to the start
B. Line by line, top to bottom
C. All lines at the same moment
Correct Answer: B
Explanation: Correct! The program runs line by line, top to bottom, in order.

Q: What if we use a variable before defining it in the program?
Options:
A. Gives a NameError and stops
B. Displays 0
C. Continues normally without an error
Correct Answer: A
Explanation: Correct! Python gives a NameError and stops execution.

Exercises

Your book: pages 160 – 162

### 📋 Warm Up — Page 160

Answer by yourself first, then press «Show All Answers» to check.

Choose the program that displays "HelloWorld!"

✅ Answer: A — to display text you need print() with quotation marks.

Choose the program that displays "Mr. Suzuki"

✅ Answer: D — we define the variable with the text first, then print. (Note: using the variable before defining it in A and B failed)

When we run a = 6, what's the output of each line?

✅ Answers: A = 10, B = 5, C = 30, D = 3 (Python displays 3.0) — and E = 216.

### 🎯 Try — Page 161

Put your solution by yourself first, then open the solution.

Choose the one that displays "Hello"

✅ Answer: C — print with quotes for the text.

Choose the one that displays "Correct"

✅ Answer: A — we define the variable before we print.

Choose the one that displays "2"

✅ Answer: B — the remainder: 20 ÷ 3 = 6 with remainder 2, so the result is 2.

Choose the one that displays "81"

✅ Answer: C — the power: 3 to the power of 4 = 81.

If c = 5, what are the results?

✅ Answers: [1] = 8, [2] = 3, [3] = 20, [4] = 2.5 — and [5] = 25.

What's the name of the symbol like "=" used to assign a value to a variable?

✅ Answer: D — Assignment operator.

### 💪 Exercise — Page 162

A final challenge — build the answer by yourself then check.

Choose the one that displays "Nice to meet you"

✅ Answer: A — print with quotes.

Choose the one that displays "17 years old"

✅ Answer: C — we define the age before using it.

Choose the one that displays "15"

✅ Answer: B — multiplication: 5 × 3 = 15.

Choose the one that displays "2"

✅ Answer: D — integer division: 8 ÷ 3 = 2 (with remainder 2).

If c = 9, what are the results?

✅ Answers: [1] = 11, [2] = 5, [3] = 18, [4] = 4 — and [5] = 1.

What's the name of the symbols like + and - used in calculations?

✅ Answer: B — Arithmetic operator.

Recap — The Lesson Journey

what we covered in a few lines

1. The print statement — Display

We display any text (with quotes) or number (without quotes) on the screen.

2. Variables — Storage

A variable is a box we name and store the value inside using =.

3. Arithmetic Operators — Calculation

The operators: + - * / // % ** cover us from addition up to power.

4. Sequential Structure — Order

The program runs from the first line to the last line, and an error stops the execution.

### Today's Message

Every great program starts with a few words: print, storing a value in a variable, then an arithmetic operation. And the most important thing: they all run sequentially — line after line.

Q: When we write print("Hello") in Python, what happens?
Options:
A. Displays "Hello" with quotes
B. Gives a NameError
C. Displays Hello on the screen
Correct Answer: C
Explanation: Correct! print makes the computer display the word Hello on the screen.

Q: What does the + symbol do in Python?
Options:
A. Compares two values
B. Adds (arithmetic operator)
C. Displays a value on screen
Correct Answer: B
Explanation: Correct! + is an arithmetic operator for addition, like 5 + 3 = 8.

Q: Correct order for a first program: define the variable, then?
Options:
A. Use it in print
B. Use it before defining it
C. Don't define it at all
Correct Answer: A
Explanation: Correct! Define the variable first then use it, to avoid a NameError.

Glossary

Lesson Terms

Search any term or use the filters to narrow down.
