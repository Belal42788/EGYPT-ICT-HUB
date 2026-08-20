# الحسابات الرقمية - Numerical Calculations [2]

What will we learn today?

Lesson introduction — representing negative numbers

In the previous lesson we learned addition and subtraction in binary. Today we learn how the computer represents negative numbers — using an idea called the complement — and how it uses it for subtraction.

Think of it this way:

Instead of subtracting, the computer adds the complement! That is why the calculation becomes easier and faster.

### ⚠️ Common Mistakes

Confusing the decimal complement (10’s complement) with the binary one (2’s complement) — one is for ordinary numbers and the other for binary.

Forgetting the step of adding 1 after inverting the digits — this is the most important step in the 2’s complement.

The Complement

The 2’s complement — book page 67

The complement is the smallest number which, when added to a given number, produces a carry to the next higher digit — and the computer uses it to represent negative numbers.

In decimal we call it the 10’s complement: for example the complement of 71 is 29, because 71 + 29 = 100. And in binary we call it the 2’s complement.

The 2’s complement rule:

we invert every digit (0 becomes 1 and 1 becomes 0), then we add 1.

How do we calculate the 2’s complement? — example: 0101(2)

the original number 0101(2)

invert the digits → 1010(2)

add 1 → 1011(2)

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What are the steps to find the 2’s complement?
Options:
A. just invert the digits
B. invert the digits, then add 1
C. just add 1 to the original number
Correct Answer: B
Explanation: Correct! We invert every digit and then add 1 to the result.

Q: What is the 2’s complement of 1001(2)?
Options:
A. 0111(2)
B. 0110(2)
C. 1001(2)
Correct Answer: A
Explanation: Correct! Inverting 1001 gives 0110, and adding 1 gives 0111.

### ⚠️ Common Mistakes

Inverting the digits without adding 1 — the result will be 1 less than the correct complement.

Mixing up the decimal and binary complements — in binary we invert and add 1, and in decimal we use another method.

Subtraction Using Complements

Worked example: 1000(2) − 0111(2) — book page 67

The computer performs subtraction by doing addition with the complement. The process has 3 steps: find the complement, add with it, and ignore the leading digit of the result.

The steps:

① find the complement of the subtrahend. ② use the complement to perform addition. ③ ignore the leading digits of the result and give the answer.

Subtraction by addition: 1000(2) − 0111(2)

the complement of 0111(2) = 1001(2)

1000(2) + 1001(2) = 10001(2)

ignore the leading digit → 0001(2)

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How do we subtract using the complement?
Options:
A. subtract the complement directly from the number
B. add the complement and ignore the last digit
C. find the complement, add, ignore the leading digit
Correct Answer: C
Explanation: Correct! We find the complement of the subtrahend, add it to the number, and ignore the leading digit.

Q: What is 1100(2) − 0111(2) using the complement?
Options:
A. 0101(2)
B. 10101(2)
C. 0110(2)
Correct Answer: A
Explanation: Correct! The complement of 0111 = 1001, and 1100 + 1001 = 10101, ignoring the leading digit gives 0101.

### ⚠️ Common Mistakes

Forgetting to ignore the leading digit of the addition result — the correct answer is the part after the leading digit.

Calculating the complement of the minuend instead of the subtrahend — the complement is always for the subtrahend.

Exercises

Your book: page 68

### ✍️ Drill 1: finding the complement

What is the 2’s complement of 1001(2)?

B  0111(2)

A  0110(2)

C  1001(2)

✅ Answer: B — 0111(2)

inverting 1001 gives 0110, and adding 1 gives 0111.

What is the 2’s complement of 0100(2)?

A  1011(2)

B  1100(2)

C  0100(2)

✅ Answer: B — 1100(2)

inverting 0100 gives 1011, and adding 1 gives 1100.

### ✍️ Drill 2: subtraction using the complement

What is 1100(2) − 0111(2) using the complement?

A  10101(2)

B  0110(2)

C  0101(2)

✅ Answer: C — 0101(2)

the complement of 0111 = 1001, and 1100 + 1001 = 10101, ignoring the leading digit gives 0101.

What is 1110(2) − 1001(2) using the complement?

C  0101(2)

B  10101(2)

A  0111(2)

✅ Answer: C — 0101(2)

the complement of 1001 = 0111, and 1110 + 0111 = 10101, ignoring the leading digit gives 0101.

### ✍️ Drill 3: finding the complement (round two)

What is the 2’s complement of 0101(2)?

C  1011(2)

B  1010(2)

A  0111(2)

✅ Answer: C — 1011(2)

inverting 0101 gives 1010, and adding 1 gives 1011.

What is the 2’s complement of 1101(2)?

A  0010(2)

B  0011(2)

C  1011(2)

✅ Answer: B — 0011(2)

inverting 1101 gives 0010, and adding 1 gives 0011.

What is the 2’s complement of 10110001(2)?

A  01001110(2)

B  10110001(2)

C  01001111(2)

✅ Answer: C — 01001111(2)

inverting 10110001 gives 01001110, and adding 1 gives 01001111.

What is the 2’s complement of 01001100(2)?

A  10110100(2)

B  10110011(2)

C  01001100(2)

✅ Answer: A — 10110100(2)

inverting 01001100 gives 10110011, and adding 1 gives 10110100.

### ✍️ Drill 4: subtraction using the complement (round two)

What is 1101(2) − 0110(2) using the complement?

A  0111(2)

B  10111(2)

C  0101(2)

✅ Answer: A — 0111(2)

the complement of 0110 = 1010, and 1101 + 1010 = 10111, ignoring the leading digit gives 0111.

What is 1010(2) − 0111(2) using the complement?

A  10011(2)

B  0011(2)

C  0101(2)

✅ Answer: B — 0011(2)

the complement of 0111 = 1001, and 1010 + 1001 = 10011, ignoring the leading digit gives 0011.

What is 1101(2) − 1010(2) using the complement?

A  10011(2)

B  0110(2)

C  0011(2)

✅ Answer: C — 0011(2)

the complement of 1010 = 0110, and 1101 + 0110 = 10011, ignoring the leading digit gives 0011.

### ✍️ Drill 5: finding the complement (final round)

What is the 2’s complement of 0111(2)?

A  1001(2)

B  1000(2)

C  0111(2)

✅ Answer: A — 1001(2)

inverting 0111 gives 1000, and adding 1 gives 1001.

What is the 2’s complement of 1011(2)?

A  0101(2)

B  0100(2)

C  1101(2)

✅ Answer: A — 0101(2)

inverting 1011 gives 0100, and adding 1 gives 0101.

What is the 2’s complement of 10011011(2)?

A  01100100(2)

B  01100101(2)

C  10011011(2)

✅ Answer: B — 01100101(2)

inverting 10011011 gives 01100100, and adding 1 gives 01100101.

What is the 2’s complement of 11000110(2)?

A  00111001(2)

B  11000110(2)

C  00111010(2)

✅ Answer: C — 00111010(2)

inverting 11000110 gives 00111001, and adding 1 gives 00111010.

### ✍️ Drill 6: subtraction using the complement (final round)

What is 1010(2) − 0110(2) using the complement?

A  0100(2)

B  10100(2)

C  0011(2)

✅ Answer: A — 0100(2)

the complement of 0110 = 1010, and 1010 + 1010 = 10100, ignoring the leading digit gives 0100.

What is 1011(2) − 1001(2) using the complement?

A  0010(2)

B  10010(2)

C  0100(2)

✅ Answer: A — 0010(2)

the complement of 1001 = 0111, and 1011 + 0111 = 10010, ignoring the leading digit gives 0010.

What is 1100(2) − 0010(2) using the complement?

A  11010(2)

B  1010(2)

C  0110(2)

✅ Answer: B — 1010(2)

the complement of 0010 = 1110, and 1100 + 1110 = 11010, ignoring the leading digit gives 1010.

Recap

a quick journey through everything we learned today

### The Complement

the smallest number which, when added to a number, produces a carry — and it is used to represent negative numbers.

### Finding the 2’s complement

we invert every digit (0 ↔ 1), then add 1.

### Subtraction by addition

we find the complement of the subtrahend, add, and ignore the leading digit of the result.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does the computer use the complement for?
Options:
A. converting numbers to hexadecimal
B. representing negative numbers and subtracting by adding
C. storing images
Correct Answer: B
Explanation: Correct! To represent negative numbers and perform subtraction by addition.

Q: What is the 2’s complement of 0100(2)?
Options:
A. 1011(2)
B. 0100(2)
C. 1100(2)
Correct Answer: C
Explanation: Correct! Inverting 0100 gives 1011, and adding 1 gives 1100.

Q: What is 1100(2) − 0010(2) using the complement?
Options:
A. 1010(2)
B. 11010(2)
C. 0110(2)
Correct Answer: A
Explanation: Correct! The complement of 0010 = 1110, and 1100 + 1110 = 11010, ignoring the leading digit gives 1010.
