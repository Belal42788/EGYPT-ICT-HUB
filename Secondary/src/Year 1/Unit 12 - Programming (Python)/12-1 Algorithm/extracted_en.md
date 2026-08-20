# Algorithm

What will we learn today?

Lesson Introduction

Before writing any program, we must first think: how do we solve the problem? We solve everyday problems with ordered steps, and the computer needs the same idea but more precisely. Today we'll learn how to describe a solution in clear steps, how to draw it so we can see and understand it, and how to turn it into computer language.

This lesson is based on the ICT textbook, pages 155 to 158, and it's the foundation after which we'll learn our first real programming language: Python.

Algorithm

clear steps to solve a problem

### The Algorithm: a way to solve a problem

An algorithm is a method or procedure for solving a particular problem — a set of ordered, logical steps that, if followed in order, lead to a solution. Like a cooking recipe: each step is written, and if you follow it correctly you get the intended dish.

The computer doesn't think by itself — it needs a very clear algorithm to execute. Diagrams like flowcharts and activity diagrams help us express an algorithm visually in an easy way.

Example: an algorithm from waking up to leaving

Wake up in the morning

Is it sunny?

Yes ← Leave

No ← Bring an umbrella

a step that runs in order

a decision (branching)

The three control structures

Almost any algorithm can be expressed with three basic structures along with input/output:

Sequential structure

Runs processes in order: Start ← Process 1 ← Process 2 ← End.

Repeating structure

Repeats the process while the condition is met: Loop condition ← Process 1 ← Loop.

Branching structure

Separates processes by condition: Condition ← Yes Process 2 / No Process 1.

### ⚠️ Common Mistakes

Confusing the algorithm with the program: the algorithm is the plan or steps, the program is implementing them in code.

Writing steps without order: the algorithm must be in logical order to succeed.


### Questions

Q: What is an algorithm?
Options:
A. A device that calculates
B. B method or procedure to solve a problem
C. A drawing on paper
Correct Answer: B
Explanation: Correct! An algorithm is a method or procedure for solving a particular problem.

Q: Which structure repeats a process while the condition is met?
Options:
A. The sequential structure
B. The branching structure
C. The repeating structure
Correct Answer: C
Explanation: Correct! The repeating structure repeats the process while the condition is met.

Programming Language

a language to talk to the computer

### How do we talk to the computer?

A programming language is a language we use to express algorithms in a way the computer can understand. Writing a program (source code) using a programming language is called programming.

Programs are written using programming languages, then translated into a machine language that the computer understands — ultimately a set of instructions made of combinations of 0s and 1s.

Examples of programming languages

Python

A language used in fields like AI and statistics, and can be executed with minimal coding.

JavaScript

A language that can be confirmed only within a web browser, making it optimal for web-related purposes.

Scratch

A visual programming language developed for educational purposes, using blocks that are intuitive and easy to understand.

### ⚠️ Common Mistakes

Confusing the programming language with programming itself: programming is the act of writing code, and the language is the tool.

Assuming the computer understands our everyday language — no, it needs a programming language translated to machine language.

Q: What are programs translated into for the computer to understand?
Options:
A. Machine language
B. Another programming language
C. Arabic language
Correct Answer: A
Explanation: Correct! Programs are translated into machine language the computer understands.

Q: Which language is optimal for the web and only confirmed in the browser?
Options:
A. Python
B. Scratch
C. JavaScript
Correct Answer: C
Explanation: Correct! JavaScript is optimal for the web.

Flowchart

a drawing of a single process flow

### How do we draw the algorithm?

A flowchart is a method for illustrating the flow of a single process — we use specific symbols for each kind of step and connect them with lines showing the flow direction.

The basic flowchart symbols

Symbol

Name

Meaning

Start/End

Terminal

Start/End

Display

Display

Display on a screen, etc.

Data

Data

Data input and output

Process

Process

Operations and other processes

Condition

Conditional branch

Branching according to conditions

Loop

Repeat

Start/End of a repetition

Line

Flow of data and control

### ⚠️ Common Mistakes

Confusing the decision symbol (diamond) with the process symbol (rectangle) — the decision is a diamond and questions go in it.

Forgetting direction arrows between symbols — the arrow shows the execution order.

Q: What does the diamond symbol represent in a flowchart?
Options:
A. Branching according to conditions
B. B process or operation
C. Start and end
Correct Answer: A
Explanation: Correct! The diamond represents branching according to conditions.

Q: What is a flowchart good for drawing?
Options:
A. Parallel processes
B. The flow of a single process
C. A calculation rule
Correct Answer: B
Explanation: Correct! A flowchart is good for the flow of a single process.

Activity Diagram

good for parallel process flows

### When there are parallel processes

An activity diagram is a suitable method for representing parallel process flows — when things happen at the same time between two sides, like me and the phone or the customer and the ATM.

Example from the book: when a customer withdraws money from an ATM — the customer inserts the card and enters the PIN, and the machine determines the withdrawal and gives the cash. Each has its role and they work together.

Example: withdrawing cash from an ATM

(Customer)

(ATM)

the customer

the ATM

### ⚠️ Common Mistakes

Using a flowchart when there are parallel processes — an activity diagram is better.

Confusing the two diagrams: a flowchart is for a single process, an activity diagram is for parallel processes.

Q: What is an activity diagram good for?
Options:
A. Representing parallel process flows
B. A single process flow
C. A calculation rule
Correct Answer: A
Explanation: Correct! An activity diagram is good for parallel process flows.

Q: An example of an activity diagram in the book?
Options:
A. A cooking recipe
B. Calculating numbers
C. Withdrawing cash from an ATM
Correct Answer: C
Explanation: Correct! Withdrawing cash from an ATM is an activity diagram between the customer and the machine.

Python

the first language we'll learn

### How do we run our first algorithm in Python?

Python is an easy, clear language executed with minimal code. Try writing a simple program like the waking-up example: display a message, ask a question, and branch based on the answer.

The program runs line by line in order, and if the condition is true it executes a certain branch.

wake.py

Change sunny to False and see the branch

### ⚠️ Common Mistakes

Forgetting the colon (:) after if and else — that's essential in Python.

Forgetting the indentation before if lines — Python needs it to understand the code is inside the branch.

Q: What fields is Python good for?
Options:
A. Artificial intelligence and statistics
B. Only the web
C. Education only
Correct Answer: A
Explanation: Correct! Python is good for AI and statistics.

Q: How does a Python program run?
Options:
A. All lines at once
B. Line by line in order
C. From the end to the start
Correct Answer: B
Explanation: Correct! The program runs line by line in order.

Exercises

Your book: pages 156 – 158

### 📋 Warm Up — Page 156

Answer by yourself first, then press «Show All Answers» to check.

What is the term for describing the order of calculations or the sequence in which things are created?

✅ Answer: D — Algorithm.

What is the term for a diagram that visually represents an algorithm and is ideal for showing the flow of parallel processes?

✅ Answer: C — Activity diagram.

The pedestrian flowchart says: «Proceed if the signal is green; otherwise, stop.» Choose the best fit for blanks [1], [2] and [3] from options A to F.

✅ Answers: [1] A, [2] F, [3] E.

What is the term for a control structure like the one in (3)?

✅ Answer: B — Branching structure.

What is the programming language used in fields like AI and statistics, and can be executed with minimal description?

✅ Answer: D — Python.

### 🎯 Try — Page 157

Put your solution by yourself first, then open the solution.

Choose the one that fits blanks [1] to [4] in the sentences from options A to F.

✅ Answers: [1] C (Algorithm), [2] E (Programming language), [3] D (Programming), [4] F (Machine language).

Choose the option that fits blanks [1] to [8] in the flowchart symbols table from options A to H.

✅ Answers: [1] B (Start/End), [2] F (Display), [3] G (Data), [4] H (Process), [5] D (Conditional branch), [6] A (Start repetition), [7] E (End repetition), [8] C (Line).

Choose the one that represents [1] a branching structure and [2] a repeating structure from flowcharts A to C.

✅ Answers: [1] C (branching), [2] B (repeating).

The figure is an activity diagram of you and your smartphone unlocking its screen. Choose the fit for blanks [1] to [4] from options A to D.

✅ Answers: [1] D (Screen turns ON), [2] B (Enter password), [3] A (Verify password), [4] C (Unlock screen).

Name the programming language that can be confirmed only within a web browser, making it optimal for web-related purposes.

✅ Answer: A — JavaScript.

### 💪 Exercise — Page 158

A final challenge — build the answer by yourself then check.

Choose the term that fits blanks [1] to [3] in the sentences from options A to F.

✅ Answers: [1] E (Algorithm), [2] F (Flowchart), [3] C (Activity diagram).

Choose the symbols used in flowcharts that match meanings [1] to [4] from options A to F.

✅ Answers: [1] A (Start/End), [2] B (Branching), [3] C (Start repetition), [4] D (Data input/output).

Choose the flowchart A to C that best represents: «If the product is in stock, purchase it; otherwise, stop shopping.»

✅ Answer: B — it has a decision (branch) based on the availability condition.

The figure is an activity diagram of you and a vending machine when purchasing a product. Choose the fit for blanks [1] to [4] from options A to D.

✅ Answers: [1] A (Insert money), [2] B (Money is counted), [3] C (Press button), [4] D (Product is discharged).

Choose the visual programming language developed for beginners and children from options A to D.

✅ Answer: B — Scratch.

Recap — The Lesson Journey

what we covered in a few lines

1. The Algorithm — the plan

A method or procedure to solve a problem with ordered steps.

2. Programming Language — the expression

A language to express the algorithm, translated into machine language the computer understands.

3. Flowchart — the drawing

Symbols that draw the flow of a single process with lines and arrows.

4. Activity Diagram — the parallel

Good for representing parallel process flows between two sides.

5. Python — the beginning

The first language we'll learn; it runs code line by line.

### Today's Message

Before any code, think about the algorithm. Draw it if you need, and choose the right diagram: a flowchart for a single process, or an activity diagram for parallel. Then translate your ideas into a programming language like Python.

Q: What is an algorithm?
Options:
A. A programming language
B. A diagram
C. A method to solve a particular problem
Correct Answer: C
Explanation: Correct! An algorithm is a method or procedure for solving a particular problem.

Q: What is a flowchart good for?
Options:
A. Parallel processes
B. The flow of a single process
C. A programming language
Correct Answer: B
Explanation: Correct! A flowchart is for the flow of a single process.

Q: What fields is Python good for?
Options:
A. AI and statistics
B. Only the web
C. Education only
Correct Answer: A
Explanation: Correct! Python is good for AI and statistics.

Glossary

Lesson Terms

Search any term or use the filters to narrow down.
