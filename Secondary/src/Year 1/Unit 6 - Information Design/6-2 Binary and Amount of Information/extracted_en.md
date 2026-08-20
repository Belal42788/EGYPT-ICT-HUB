# النظام الثنائي وكمية المعلومات — Binary and Amount of Information

What will we learn today?

Lesson introduction — the smallest unit of information and converting between systems

Today we will learn about the smallest unit of information in the computer, the bit (Bit), which handles the two digits 0 and 1, then the group of them we call the byte (Byte). Then we will learn the decimal system (Decimal) we use in our daily lives, and the binary system (Binary) the computer understands, and how to convert a number from one system to the other.

Think of it this way:

Imagine you have a light bulb — it is either on or off, there is no third state. Each bulb is a bit, and all computer information is ultimately bulbs turned on and off in a row.

### ⚠️ Common Mistakes

Mixing up the bit and the byte — the bit is one digit (0 or 1), and the byte is a group of 8 bits.

Thinking the decimal system is the computer's system — no, the computer only understands the binary system.

Forgetting that the number of possibilities grows by a power of 2 — n bits = 2 to the power of n.

The Bit Concept

the smallest unit of information — book page 55

Only two states: 0 or 1 — like a light bulb on or off

🔘 Bulb on / off

0 or 1

2 to the power of n

the part active in this step

the other parts

The bit is the smallest unit of information in a computer, and it has only two states: 0 or 1. One bit represents two states — like a bulb on or off, a voltage high or low, or a magnet's orientation north or south.

Any real information is represented by an arrangement of bits. In general, n bits can represent 2 to the power of n different things. For example: 1 bit represents 2 possibilities (0 or 1), 2 bits represent 4 (00, 01, 10, 11), and 3 bits represent 8.

Remember:

1 bit = 2 possibilities, 2 bits = 4 possibilities, 3 bits = 8 possibilities — every time we add one bit, the number of possibilities doubles.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is the smallest unit of information in a computer?
Options:
A. Byte
B. Binary
C. Bit
Correct Answer: C
Explanation: Correct! The bit is the smallest unit of information and has two states: 0 or 1.

Q: How many different possibilities can 2 bits represent?
Options:
A. 4 possibilities
B. 2 possibilities
C. 8 possibilities
Correct Answer: A
Explanation: Correct! 2 to the power of 2 = 4 possibilities: 00, 01, 10, 11.

### ⚠️ Common Mistakes

Mixing up the bit and the byte — the bit is just one digit, and the byte is 8 bits.

Forgetting that possibilities are computed as 2 to the power of n, not n times 2.

Thinking a bit can have more than two states — no, only two states: 0 or 1.

The Byte Concept

a group of 8 bits — book page 55

8 bits = 1 byte = 256 possibilities — and the units grow by 1024

🔢 8 bits

1 byte = 1 B

KB · MB · GB · TB

the part active in this step

the other parts

One bit is very small, so we use a larger unit called the byte. One byte is a group of 8 bits, and we write it as B. One byte represents 256 possibilities — because 2 to the power of 8 = 256.

The basic unit of information is 1 byte, and the unit changes every 2 to the power of 10 = 1024 times: 1 KB = 1024 B, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB.

Remember:

1 byte = 8 bits = 256 possibilities. And the larger units (KB, MB, GB, TB) each equal 1024 of the previous one.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How many bits are in one byte?
Options:
A. 4 bits
B. 8 bits
C. 32 bits
Correct Answer: B
Explanation: Correct! The byte = 8 bits, written as B.

Q: How many possibilities does 1 byte represent?
Options:
A. 128 possibilities
B. 8 possibilities
C. 256 possibilities
Correct Answer: C
Explanation: Correct! 2 to the power of 8 = 256 possibilities.

### ⚠️ Common Mistakes

Forgetting that units grow by a factor of 1024, not 1000 — 1 KB = 1024 B.

Mixing up the symbols B and b — uppercase B = byte, lowercase b = bit.

Thinking a byte represents 8 possibilities — no, it represents 256 because 2 to the power of 8.

The Decimal Concept

the decimal system — digits 0 to 9 — book page 55

Only ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

🔟 Our daily numbers

From 0 to 9

Place values: units, tens, hundreds

the part active in this step

the other parts

The decimal system is a method of representing numbers using ten digits from 0 to 9. The numbers we use in our daily lives are all decimal — like 2026 or 7.5 or 100.

A number written in decimal notation is called a decimal number, and its place value is determined by its position: units, then tens, then hundreds, and so on, and each place = 10 times the previous one.

Remember:

The decimal system is based on the number 10 — that is why it is called decimal.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How many digits does the decimal system use?
Options:
A. Two digits: 0 and 1
B. 10 digits (0 to 9)
C. 16 digits
Correct Answer: B
Explanation: Correct! Ten digits from 0 to 9.

Q: The number 2026 we write every day is what kind of number?
Options:
A. A decimal number
B. B binary number
C. An analog number
Correct Answer: A
Explanation: Correct! Any number we use in our daily lives is decimal.

### ⚠️ Common Mistakes

Mixing up decimal and binary — decimal has 10 digits and binary has only 2.

Forgetting that each place in decimal = 10 times the previous one.

Thinking the computer understands decimal numbers — no, it only understands binary.

The Binary System

only the digits 0 and 1 — book page 55

Only two digits: 0 and 1 — and the number is written with a subscript (2)

⚡ 0 and 1

The binary system

Example: 1011 (2)

the part active in this step

the other parts

The binary system is a method of representing numbers using only two types of digits: 0 and 1. A number represented in binary is sometimes written with a subscript (2) placed at the bottom right, such as 1011(2).

The data processed by a computer primarily uses the binary system — because electronic circuits have only two states: electricity or no electricity. The digit 1 means electricity, and 0 means no electricity.

Remember:

A binary number is written with only 0 and 1, and we put a subscript (2) to distinguish it from decimal.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How many digits does the binary system use?
Options:
A. 10 digits
B. 16 digits
C. Two digits: 0 and 1
Correct Answer: C
Explanation: Correct! The binary system uses only 0 and 1.

Q: The number 1011(2) is what kind of number?
Options:
A. A binary number
B. B decimal number
C. An analog number
Correct Answer: A
Explanation: Correct! The subscript (2) tells us it is a binary number.

### ⚠️ Common Mistakes

Forgetting the subscript (2) under a binary number — it is what distinguishes it from decimal.

Mixing up 0 and 1 in binary and decimal — 10 in binary is not ten, it is two.

Thinking any number with 0 and 1 is decimal — the subscript (2) means it is binary.

Converting Between Systems

binary to decimal and back — book page 55

From the right: multiply each digit by 1, then 2, then 4, then 8 ... and add

🔢 A binary number

✖️ Weights 1, 2, 4, 8...

➕ The sum = a decimal number

the part active in this step

the other parts

### Converting from binary to decimal

Starting from the rightmost digit, we multiply each digit by 1, then 2, then 4, then 8 ... in order, then we add all the results.

Example from the book:

Convert 1011(2) to decimal: (1 × 1) + (1 × 2) + (0 × 4) + (1 × 8) = 1 + 2 + 0 + 8 = 11.

### Converting from decimal to binary

We take the decimal number and keep dividing it by 2 until the quotient becomes 1, then we write the remainders in reverse order from the last division.

Example from the book:

For example the number 6: 6 ÷ 2 = 3 remainder 0, then 3 ÷ 2 = 1 remainder 1, then we write the remainders in reverse and get 110(2).

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is 1011(2) in the decimal system?
Options:
A. 10
B. 15
C. 11
Correct Answer: C
Explanation: Correct! 1 + 2 + 0 + 8 = 11.

Q: How is the decimal number 6 written in the binary system?
Options:
A. 011(2)
B. 110(2)
C. 111(2)
Correct Answer: B
Explanation: Correct! 6 ÷ 2 = 3 (remainder 0), 3 ÷ 2 = 1 (remainder 1) → 110(2).

### ⚠️ Common Mistakes

Starting from the left when converting — we must start from the rightmost digit of the binary number.

Forgetting that the first digit is multiplied by 1, not by 2.

When converting from decimal to binary, forgetting to write the remainders in reverse order.

Exercises

Your book: pages 56 – 58

### ✍️ Exercise 1: Warm Up — fill in the blanks A to E

The smallest unit of information is called a bit, which corresponds to one digit in binary notation. How many different values can this digit represent?

A  1 value

B  4 values

C  2 values

✅ Answer: C — two values (0 or 1)

one binary digit represents two different values: 0 or 1.

One bit represents two values, so how many different types of information can it represent?

A  2

B  8

C  256

✅ Answer: A — 2

one bit represents two different types of information.

A group of how many bits is called one byte?

A  4 bits

B  8 bits

C  16 bits

✅ Answer: B — 8 bits

a group of 8 bits is called one byte, written as 1 B.

What is a group of 8 bits called?

A  Bit

B  Binary

C  Byte

✅ Answer: C — Byte

the byte is a unit of information = a group of 8 bits.

If we have 24 bits, how many bytes do 24 bits equal?

A  3 B

B  2 B

C  4 B

✅ Answer: A — 3 bytes

since 8 bits = 1 B, 24 ÷ 8 = 3 B.

### ✍️ Exercise 2: Warm Up — compute the amount of information

We threw a set of dice (one large and one small) — we need to represent all possible outcomes. How many bits are required?

A  5 bits

B  7 bits

C  6 bits

✅ Answer: C — 6 bits

6 × 6 = 36 outcomes. 5 bits represent only 32, and 6 bits represent 64 — so 6 bits are needed.

How many B is 1 MB? Write the answer in the form of a power of 2.

A  2 to the power of 20

B  2 to the power of 10

C  2 to the power of 15

✅ Answer: A — 2 to the power of 20

1 MB = 1024 KB, and 1 KB = 1024 B, so 1024 × 1024 = 2^10 × 2^10 = 2^20.

How many times greater is the amount of information in 4 bits compared to 2 bits?

A  twice

B  8 times

C  4 times

✅ Answer: C — 4 times

2 bits represent 4 possibilities, and 4 bits represent 16. 16 ÷ 4 = 4 times.

### ✍️ Exercise 3: Exercise (1) — convert from binary to decimal

Convert 11010(2) into decimal form.

A  26

B  24

C  22

✅ Answer: A — 26

0 × 1 + 1 × 2 + 0 × 4 + 1 × 8 + 1 × 16 = 0 + 2 + 0 + 8 + 16 = 26.

Convert 101011(2) into decimal form.

A  41

B  43

C  45

✅ Answer: B — 43

1 × 1 + 1 × 2 + 0 × 4 + 1 × 8 + 0 × 16 + 1 × 32 = 1 + 2 + 0 + 8 + 0 + 32 = 43.

### ✍️ Exercise 4: Exercise (2) — convert from decimal to binary

Convert the decimal number 39 into binary.

A  110011(2)

B  101001(2)

C  100111(2)

✅ Answer: C — 100111(2)

by repeated division by 2, the result is 100111(2).

Convert the decimal number 120 into binary.

A  1011010(2)

B  1111000(2)

C  1101100(2)

✅ Answer: B — 1111000(2)

by repeated division by 2, the result is 1111000(2).

### ✍️ Exercise 5: Exercise (3) — comprehensive questions

How many bits are in 5 bytes?

A  40 bits

B  35 bits

C  45 bits

✅ Answer: A — 40 bits

5 × 8 = 40 bits.

How many different pieces of information can 1 byte represent?

A  128

B  256

C  512

✅ Answer: B — 256

1 byte = 8 bits = 2^8 = 256 pieces of information.

How many times is the amount of information in 5 bits compared to 3 bits?

A  twice

B  8 times

C  4 times

✅ Answer: C — 4 times

3 bits represent 8 possibilities, and 5 bits represent 32. 32 ÷ 8 = 4 times.

How many MB are in 1 GB? Also, how many B is it (in the form of a power of 2)?

A  1024 MB = 2^20 B

B  1024 MB = 2^30 B

C  1000 MB = 2^30 B

✅ Answer: B — 1024 MB = 2^30 B

1 GB = 1024 MB = 1024 × 1024 × 1024 B = 2^30.

Recap

a quick journey through everything we learned today

### Bit — the smallest unit

only two states: 0 or 1, and n bits represent 2^n possibilities.

### Byte — a group of 8 bits

1 byte = 1 B represents 256 possibilities, and the units grow by 1024.

### Decimal — the base-10 system

the digits 0 to 9 we use in our daily lives.

### Binary — the base-2 system

only the digits 0 and 1, that's the computer's system, and the number is written with a subscript (2).

### Converting between systems

binary to decimal: multiply each digit by 1, 2, 4, 8 and add. decimal to binary: divide by 2 and write the remainders in reverse.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does the computer primarily rely on to represent information?
Options:
A. The binary system
B. The decimal system
C. The analog system
Correct Answer: A
Explanation: Correct! The computer understands the binary system — zeros and ones.

Q: How many bytes are in 1 KB?
Options:
A. 1000 bytes
B. 1024 bytes
C. 1,048,576 bytes
Correct Answer: B
Explanation: Correct! 1 KB = 1024 bytes.

Q: What is the binary number 101(2) in decimal?
Options:
A. 5
B. 101
C. 6
Correct Answer: A
Explanation: Correct! 1 × 1 + 0 × 2 + 1 × 4 = 1 + 0 + 4 = 5.

Glossary

Lesson Terms

Search any term or use the filters to narrow down.
