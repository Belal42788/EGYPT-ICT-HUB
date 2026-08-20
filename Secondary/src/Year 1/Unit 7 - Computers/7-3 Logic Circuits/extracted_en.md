# الدوائر المنطقية - Logic Circuits

What will we learn today?

Lesson introduction — Logic Circuits

A computer is built entirely on logic circuits — circuits that work with the numbers 0 and 1 and perform logical operations. Today we learn logical operations, the logic circuit, the truth table, the AND, OR, and NOT gates, and finally the half adder and full adder.

Think of it this way:

A logic circuit is like a light switch: a signal goes in (0 or 1), and the circuit decides the output — on or off.

### ⚠️ Common Mistakes

Confusing the AND gate with the OR gate — AND outputs 1 only when all inputs are 1, and OR outputs 1 if at least one input is 1.

Confusing the half adder with the full adder — the half adder adds single-digit numbers, and the full adder considers the carry.

Logical Operations

operations using combinations of 0 and 1 — book page 91

Logical operations are operations performed using combinations of the numbers 0 and 1.

In computers, 1 is processed as true and 0 as false.

Think of it this way:

Like a true or false answer: true = 1, false = 0 — and logical operations decide with them.

0 and 1 are the basis of logical operations

the number 0 — false

the number 1 — true

logical operations — combinations of 0 and 1

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What numbers do logical operations use?
Options:
A. 0 and 1
B. 0 to 9
C. the letters A and B
Correct Answer: A
Explanation: Correct! Logical operations work with combinations of 0 and 1.

Q: In computers, how is 1 processed?
Options:
A. false
B. text
C. true
Correct Answer: C
Explanation: Correct! In computers 1 = true and 0 = false.

The Logic Circuit

a circuit designed to perform logical operations — book page 91

A Logic circuit is a circuit designed to perform logical operations.

It takes inputs (0 or 1) and produces an output (0 or 1) according to the operation it is built on.

Think of it this way:

A logic circuit is like a vending machine: you put in coins (inputs) and it gives you a result.

the logic circuit takes inputs and produces an output

the inputs — signals of 0 or 1

the Logic circuit

the output — 0 or 1

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a logic circuit designed to do?
Options:
A. storing data
B. performing logical operations
C. running the whole computer
Correct Answer: B
Explanation: Correct! A logic circuit is designed to perform logical operations.

Q: What does a logic circuit take in and give out?
Options:
A. text and letters — and a text output
B. colors and images — and a color output
C. inputs of 0 or 1 — and an output of 0 or 1
Correct Answer: C
Explanation: Correct! It takes inputs of 0 or 1 and gives an output of 0 or 1.

The Truth Table

all possible input and output combinations — book page 91

A Truth table is a table that shows all possible combinations of inputs and outputs for a logic circuit.

With two inputs, the table has 4 combinations: 00, 01, 10, and 11.

Think of it this way:

A truth table is like a results table in a game: every move (input) and its result (output).

the truth table collects all the cases

all possible input combinations

the Truth table

the output for each combination

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does a truth table show?
Options:
A. all input and output combinations
B. only one result
C. hardware components
Correct Answer: A
Explanation: Correct! A truth table shows all input and output combinations.

Q: How many combinations does a truth table for a 2-input gate have?
Options:
A. 2 combinations
B. 4 combinations
C. 8 combinations
Correct Answer: B
Explanation: Correct! For two inputs there are 4 combinations: 00, 01, 10, and 11.

The AND Gate

outputs 1 only when all inputs are 1 — book page 91

An AND gate is a circuit that outputs 1 only when all inputs are 1 — otherwise the output is 0.

So A=1 and B=1 gives output 1, and any other combination gives output 0.

Think of it this way:

An AND gate is like the phrase: 'I go only if mom and dad agree' — both must agree (1 and 1) for the output to be 1.

the AND gate — all must be 1

the inputs A and B — each 0 or 1

the AND gate — outputs 1 if both are 1

the output X — 1 only for 1 and 1

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: When does an AND gate output 1?
Options:
A. when all inputs are 1
B. when at least one input is 1
C. when all inputs are 0
Correct Answer: A
Explanation: Correct! An AND gate outputs 1 only when all inputs are 1.

Q: AND gate: A=1 and B=0, what is the output X?
Options:
A. 1
B. 2
C. 0
Correct Answer: C
Explanation: Correct! Not all inputs are 1, so the output is 0.

The OR Gate

outputs 1 if at least one input is 1 — book page 91

An OR gate outputs 1 if at least one input is 1 — the output is 0 only when all inputs are 0.

So A=0 and B=1 gives output 1, and A=0 and B=0 gives output 0.

Think of it this way:

An OR gate is like the phrase: 'I go if dad or mom agrees' — one of them is enough for the output to be 1.

the OR gate — one input of 1 is enough

the inputs A and B — each 0 or 1

the OR gate — outputs 1 if any is 1

the output X — 0 only for 0 and 0

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: When does an OR gate output 1?
Options:
A. if at least one input is 1
B. when all inputs are 1
C. when the input is 0
Correct Answer: A
Explanation: Correct! An OR gate outputs 1 if at least one input is 1.

Q: OR gate: A=0 and B=0, what is the output X?
Options:
A. 1
B. 0
C. 2
Correct Answer: B
Explanation: Correct! No input is 1, so the output is 0.

Exercises

Your book: pages 91–94

### ✍️ Exercise 1: the logic gates

The circuit that outputs 1 only when all inputs are 1 — which is it?

A  the OR gate

B  the AND gate

C  the NOT circuit

✅ Answer: B — the AND gate

An AND gate outputs 1 only when all inputs are 1.

The circuit that outputs 1 if at least one input is 1 — which is it?

A  the OR gate

B  the AND gate

C  the NOT circuit

✅ Answer: A — the OR gate

An OR gate outputs 1 if at least one input is 1.

The circuit that outputs the opposite of the input — which is it?

A  the AND gate

B  the OR gate

C  the NOT circuit

✅ Answer: C — the NOT circuit

A NOT circuit outputs the opposite of the input — 0 becomes 1 and 1 becomes 0.

### ✍️ Exercise 2: the truth tables

AND gate: A=1 and B=1, what is the output X?

A  1

B  0

C  2

✅ Answer: A — 1

All inputs are 1, so the AND gate outputs 1.

OR gate: A=0 and B=1, what is the output X?

A  0

B  2

C  1

✅ Answer: C — 1

At least one input is 1, so the OR gate outputs 1.

NOT circuit: input 0, what is the output X?

A  0

B  1

C  2

✅ Answer: B — 1

A NOT circuit outputs the opposite of the input — 0 becomes 1.

### ✍️ Exercise 3: the half adder

What is a half adder composed of?

A  AND, OR, and NOT gates

B  only an AND gate

C  only a NOT circuit

✅ Answer: A — AND, OR, and NOT gates

A half adder is composed of AND, OR, and NOT gates.

Half adder: A=0 and B=1, what is the sum S?

A  0

B  1

C  2

✅ Answer: B — 1

0+1 = 1, so the sum S=1 and the carry C=0.

Half adder: A=1 and B=1, what is the sum S?

A  0

B  1

C  2

✅ Answer: A — 0

1+1 = 2, so the sum S=0 and the carry C=1.

### ✍️ Exercise 4: the full adder

What does a full adder consider?

A  only the colors

B  the carry from the lower bit and the carry to the higher bit

C  only the sound

✅ Answer: B — the carry from the lower bit and to the higher bit

A full adder considers the carry from the lower bit and the carry to the higher bit.

Full adder: A=1, B=1, Cin=0 — what is the sum S?

A  0

B  1

C  2

✅ Answer: A — 0

1+1+0 = 2, so the sum S=0 and the output carry Cout=1.

Full adder: A=1, B=0, Cin=1 — what is the sum S?

A  1

B  2

C  0

✅ Answer: C — 0

1+0+1 = 2, so the sum S=0 and the output carry Cout=1.

Recap

a quick journey through everything we learned today

### Logical operations

operations using combinations of 0 and 1 — 1 means true and 0 means false.

### The logic circuit and truth table

a circuit that performs logical operations — and the truth table collects all input and output combinations.

### The gates

AND outputs 1 when all are 1, OR outputs 1 if any is 1, and NOT outputs the opposite.

### The adders

the half adder adds single digits, and the full adder considers the carry.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: AND gate: A=1 and B=1 — what is the output X?
Options:
A. 1
B. 0
C. 2
Correct Answer: A
Explanation: Correct! All inputs are 1, so the AND gate outputs 1.

Q: OR gate: A=0 and B=1 — what is the output X?
Options:
A. 0
B. 1
C. 2
Correct Answer: B
Explanation: Correct! At least one input is 1, so the OR gate outputs 1.

Q: Half adder: A=1 and B=1 — what is the carry C?
Options:
A. 0
B. 2
C. 1
Correct Answer: C
Explanation: Correct! 1+1 = 2, so the sum S=0 and the carry C=1.
