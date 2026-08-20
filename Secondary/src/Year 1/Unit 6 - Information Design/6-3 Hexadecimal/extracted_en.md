# النظام الستعشري - Hexadecimal

What will we learn today?

Lesson introduction — a new number system for the computer

Today we will learn about the hexadecimal system (Hexadecimal) — a number system that uses the digits 0 to 9 and the letters A to F, and it is very important in computers because the letters shorten long binary numbers. Then we will learn how to convert between binary and hexadecimal, and between hexadecimal and decimal.

Think of it this way:

When a binary number gets long, reading it becomes tiring — so hexadecimal arranges it into small groups, each group of 4 digits, producing short and easy numbers.

### ⚠️ Common Mistakes

Mixing up letters and digits — in hexadecimal, A is not a letter of speech, it is a digit meaning 10.

Forgetting the subscript (16) — we must write it to distinguish hexadecimal from decimal.

Mixing up B and D — B = 11 and D = 13, don't let their similar shape fool you.

The Hexadecimal System

digits 0 to 9 and letters A to F — book page 59

The hexadecimal system writes numbers with 16 different symbols

0 to 9

A = 10 ... F = 15

the subscript (16)

the part active in this step

the other parts

The hexadecimal system is a method of representing numbers using the digits 0 to 9 and the letters A to F. A hexadecimal number is sometimes written with a subscript (16) at the bottom right of the number — this is what we call a hexadecimal number.

When the digits 0 to 9 run out, we start using letters: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15. So we need 16 symbols to write any hexadecimal number.

Remember:

The key sentence: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 — memorize it well.

### Correspondence table: Decimal, Binary, Hexadecimal

The same number is written differently in each system — this table puts them side by side.

Decimal

Binary

Hex

Binary to hexadecimal — example: 10011010(2)

10011010(2)

1001 / 1010

9A(16)

the part active in this step

the other parts

To convert from binary to hexadecimal, we split the binary number into groups of 4 digits starting from the rightmost digit, then convert each group into a hexadecimal digit and join the results in order.

Example:

10011010(2): starting from the right → 1001/1010. 1001(2) = 9(16), and 1010(2) = A(16), so 10011010(2) = 9A(16).

Hexadecimal to binary — example: A4(16)

A4(16)

A = 1010, 4 = 0100

10100100(2)

the part active in this step

the other parts

To convert from hexadecimal to binary, we convert each hexadecimal digit into a 4-digit binary number, and join the results in order.

Example:

A4(16): A(16) = 1010(2), and 4(16) = 0100(2), so A4(16) = 10100100(2).

Hexadecimal to decimal — example: C6(16)

C6(16)

11000110(2)

= 198

the part active in this step

the other parts

To convert from hexadecimal to decimal, we first convert the hexadecimal number to binary, then convert that binary number to decimal.

Example:

C6(16): C(16) = 1100(2) and 6(16) = 0110(2), so C6(16) = 11000110(2). Then we convert the binary to decimal: 0×1 + 1×2 + 1×4 + 0×8 + 0×16 + 0×32 + 1×64 + 1×128 = 198.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: In the hexadecimal system, what does the digit D equal?
Options:
A. 13
B. 11
C. 12
Correct Answer: A
Explanation: Correct! A = 10, B = 11, C = 12, D = 13.

Q: What is the hexadecimal number 9A(16) in binary?
Options:
A. 10010010(2)
B. 10011010(2)
C. 10101001(2)
Correct Answer: B
Explanation: Correct! 9(16) = 1001(2), and A(16) = 1010(2), so 9A(16) = 10011010(2).

### ⚠️ Common Mistakes

Starting to group from the left — we must start from the rightmost digit of the binary number.

When converting from hexadecimal to binary, forgetting that each digit needs 4 places — even if the digit is small like 4.

Converting directly from hexadecimal to decimal — the correct way is to go through binary first.

Exercises

Your book: page 60

### ✍️ Exercise 1: Warm Up — binary to hex and back

Convert the binary number 11011011(2) to hexadecimal.

A  DB(16)

B  DB(16)

C  DC(16)

✅ Answer: B — DB(16)

starting from the right: 1101 = D, and 1011 = B, so 11011011(2) = DB(16).

Convert the binary number 11110110(2) to hexadecimal.

A  6F(16)

B  F7(16)

C  F6(16)

✅ Answer: C — F6(16)

1111 = F, and 0110 = 6, so 11110110(2) = F6(16).

Convert the hexadecimal number 9E(16) to binary.

A  10011110(2)

B  10011101(2)

C  10101110(2)

✅ Answer: A — 10011110(2)

9 = 1001, and E = 1110, so 9E(16) = 10011110(2).

Convert the hexadecimal number A5(16) to decimal.

A  155

B  175

C  165

✅ Answer: C — 165

A = 1010 and 5 = 0101, so A5(16) = 10100101(2) = 1×1 + 0×2 + 1×4 + 0×8 + 0×16 + 1×32 + 0×64 + 1×128 = 165.

### ✍️ Exercise 2: binary to hex and back

Convert the binary number 11010101(2) to hexadecimal.

A  D5(16)

B  D6(16)

C  C5(16)

✅ Answer: A — D5(16)

1101 = D, and 0101 = 5, so 11010101(2) = D5(16).

Convert the binary number 01110110(2) to hexadecimal.

A  67(16)

B  76(16)

C  77(16)

✅ Answer: B — 76(16)

0111 = 7, and 0110 = 6, so 01110110(2) = 76(16).

Convert the hexadecimal number C5(16) to binary.

A  11000101(2)

B  11001001(2)

C  10100101(2)

✅ Answer: A — 11000101(2)

C = 1100, and 5 = 0101, so C5(16) = 11000101(2).

Convert the hexadecimal number BB(16) to binary.

A  10111101(2)

B  10111011(2)

C  10011011(2)

✅ Answer: B — 10111011(2)

B = 1011, and B = 1011, so BB(16) = 10111011(2).

### ✍️ Exercise 3: hexadecimal to decimal

Convert the hexadecimal number 31(16) to decimal.

A  39

B  59

C  49

✅ Answer: C — 49

3 = 0011 and 1 = 0001, so 31(16) = 00110001(2) = 1 + 16 + 32 = 49.

Convert the hexadecimal number C7(16) to decimal.

A  189

B  199

C  209

✅ Answer: B — 199

C = 1100 and 7 = 0111, so C7(16) = 11000111(2) = 1 + 2 + 4 + 64 + 128 = 199.

Convert the hexadecimal number 9F(16) to decimal.

A  149

B  169

C  159

✅ Answer: C — 159

9 = 1001 and F = 1111, so 9F(16) = 10011111(2) = 1 + 2 + 4 + 8 + 16 + 128 = 159.

Convert the hexadecimal number AB(16) to decimal.

A  171

B  161

C  181

✅ Answer: A — 171

A = 1010 and B = 1011, so AB(16) = 10101011(2) = 1 + 2 + 8 + 32 + 128 = 171.

Recap

a quick journey through everything we learned today

### The hexadecimal system

it writes numbers with 16 symbols: the digits 0 to 9 and the letters A to F.

### Letters equal numbers

A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

### Binary to hexadecimal

group from the right in fours, and convert each group to a hexadecimal digit.

### Hexadecimal to binary to decimal

each hexadecimal digit = 4 binary places, then we convert the binary to decimal.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How many different symbols does the hexadecimal system use?
Options:
A. 10 symbols
B. only 2 symbols
C. 16 symbols
Correct Answer: C
Explanation: Correct! Ten digits + 6 letters = 16 symbols.

Q: When converting from binary to hexadecimal, how many digits do we group the number into?
Options:
A. 4 digits
B. 3 digits
C. 8 digits
Correct Answer: A
Explanation: Correct! Each hexadecimal digit represents 4 binary places.

Q: What is the hexadecimal number 2F(16) in decimal?
Options:
A. 37
B. 57
C. 47
Correct Answer: C
Explanation: Correct! 2F(16) = 00101111(2) = 32 + 8 + 4 + 2 + 1 = 47.
