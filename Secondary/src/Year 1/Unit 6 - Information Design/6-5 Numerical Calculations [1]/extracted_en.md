# الحسابات الرقمية - Numerical Calculations [1]

What will we learn today?

Lesson introduction — calculations in binary

After learning how to convert between binary and hexadecimal, today we will learn how the computer calculates in binary. Just as we add and subtract with ordinary numbers, the computer adds and subtracts with binary numbers — following the exact same rules.

Think of it this way:

Binary addition and subtraction are done digit by digit just like ordinary arithmetic — but the difference is that a place reaches 2, not 10.

### ⚠️ Common Mistakes

Mixing up addition and subtraction rules — in addition we carry when the sum reaches 2, and in subtraction we borrow 2 when the digit is insufficient.

Forgetting that the calculation is done from the rightmost digit just like ordinary numbers.

Binary Addition

Worked example: 0101(2) + 1001(2) — book page 65

we write the two numbers on top of each other and add digit by digit

0101 + 1001

carry 1 to the next place

the result 1110(2)

the part active in this step

the other parts

In binary addition we add the numbers digit by digit, and the value carries over by one position when the sum reaches 2.

The rules: 0(2) + 0(2) = 0, 0(2) + 1(2) = 1, 1(2) + 1(2) = 0 and carry 1, and 1(2) + 1(2) + 1(2) = 1 and carry 1.

Remember:

The carry moves from right to left — the first digit is the least significant.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is 1(2) + 1(2)?
Options:
A. 2(2)
B. 10(2)
C. 0 and carry 1
Correct Answer: C
Explanation: Correct! 1 + 1 = 2, and 2 in binary is 0 with a carry of 1.

Q: What is 0101(2) + 0110(2)?
Options:
A. 1011(2)
B. 1110(2)
C. 1100(2)
Correct Answer: A
Explanation: Correct! 5 + 6 = 11 = 1011(2).

### ⚠️ Common Mistakes

Forgetting the carry when the sum reaches 2 — for example 1 + 1 is written as 0 and 1 carried.

Confusing the carried value with the written digit — the digit is written in the same place, and the carry goes to the next place.

Binary Subtraction

Worked example: 1010(2) − 0110(2) — book page 65

we write the two numbers and subtract digit by digit with borrowing

1010 − 0110

borrow 2 from the higher place

the result 0100(2)

the part active in this step

the other parts

In binary subtraction we subtract the numbers digit by digit, and when the digit is insufficient we borrow a value of 2 from the next higher digit.

The rules: 0(2) − 0(2) = 0, 1(2) − 0(2) = 1, 1(2) − 1(2) = 0, and 10(2) − 1(2) = 1 with borrowing.

Think of it this way:

Borrowing means the higher digit gives 2, so a 0 becomes 2 and the subtraction continues.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is 10(2) − 1(2)?
Options:
A. 2(2)
B. 1(2)
C. 0(2)
Correct Answer: B
Explanation: Correct! We borrow 2 from the next digit: 2 − 1 = 1.

Q: What is 1101(2) − 0010(2)?
Options:
A. 1011(2)
B. 1111(2)
C. 1100(2)
Correct Answer: A
Explanation: Correct! 13 − 2 = 11 = 1011(2).

### ⚠️ Common Mistakes

Forgetting to borrow when the digit is insufficient — for example 0 − 1 needs to borrow 2.

Forgetting to reduce the digit we borrowed from — when we borrow from 1 it becomes 0.

Exercises

Your book: page 66

### ✍️ Exercise 1: binary addition — part one

What is 0101(2) + 0110(2)?

A  1110(2)

B  1100(2)

C  1011(2)

✅ Answer: C — 1011(2)

5 + 6 = 11 = 1011(2).

What is 1101(2) + 0010(2)?

A  1011(2)

B  1111(2)

C  1101(2)

✅ Answer: B — 1111(2)

13 + 2 = 15 = 1111(2).

What is 0011(2) + 1100(2)?

A  1111(2)

B  1100(2)

C  1001(2)

✅ Answer: A — 1111(2)

3 + 12 = 15 = 1111(2).

What is 1001(2) + 0101(2)?

A  1100(2)

B  1110(2)

C  1010(2)

✅ Answer: B — 1110(2)

9 + 5 = 14 = 1110(2).

### ✍️ Exercise 2: binary subtraction — part one

What is 1101(2) − 0010(2)?

A  1011(2)

B  1101(2)

C  1001(2)

✅ Answer: A — 1011(2)

13 − 2 = 11 = 1011(2).

What is 1010(2) − 0101(2)?

A  0110(2)

B  0101(2)

C  0011(2)

✅ Answer: B — 0101(2)

10 − 5 = 5 = 0101(2).

What is 1101(2) − 1100(2)?

A  0010(2)

B  0000(2)

C  0001(2)

✅ Answer: C — 0001(2)

13 − 12 = 1 = 0001(2).

What is 1011(2) − 0110(2)?

A  0101(2)

B  0110(2)

C  0100(2)

✅ Answer: A — 0101(2)

11 − 6 = 5 = 0101(2).

### ✍️ Exercise 3: binary addition — part two

What is 0111(2) + 0001(2)?

A  0111(2)

B  1000(2)

C  1010(2)

✅ Answer: B — 1000(2)

7 + 1 = 8 = 1000(2).

What is 1010(2) + 0101(2)?

A  1111(2)

B  1100(2)

C  1011(2)

✅ Answer: A — 1111(2)

10 + 5 = 15 = 1111(2).

### ✍️ Exercise 4: binary subtraction — part two

What is 1001(2) − 0110(2)?

A  0100(2)

B  0011(2)

C  0001(2)

✅ Answer: B — 0011(2)

9 − 6 = 3 = 0011(2).

What is 1010(2) − 1010(2)?

A  0010(2)

B  0101(2)

C  0000(2)

✅ Answer: C — 0000(2)

10 − 10 = 0 = 0000(2).

Recap

a quick journey through everything we learned today

### Binary addition

we carry 1 when the sum reaches 2 — 1 + 1 = 0 and carry.

### Binary subtraction

we borrow 2 when the digit is insufficient — 0 − 1 = 1 with borrowing.

### digit-by-digit calculation

we start from the rightmost digit and move left.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: When do we carry in binary addition?
Options:
A. when the digit is insufficient
B. when adding zero and zero
C. when the sum reaches 2
Correct Answer: C
Explanation: Correct! When the sum reaches 2 we write 0 and carry 1.

Q: What is 1010(2) + 0101(2)?
Options:
A. 1101(2)
B. 1111(2)
C. 1011(2)
Correct Answer: B
Explanation: Correct! 10 + 5 = 15 = 1111(2).

Q: What is 1010(2) − 1010(2)?
Options:
A. 0000(2)
B. 1010(2)
C. 0101(2)
Correct Answer: A
Explanation: Correct! Any number minus itself = zero = 0000(2).
