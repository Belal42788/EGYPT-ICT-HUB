# التمثيل الرقمي للحروف - Digital Representation of Characters

What will we learn today?

Lesson introduction — how the computer represents characters and symbols

After learning in previous lessons how the computer represents numbers in binary and hexadecimal, today we will learn how it represents characters and symbols. Characters in the computer have special numbers called a character code, and we learn how we encode them, how they can get corrupted, and what role the font plays.

Think of it this way:

Every character in the computer has a secret number that identifies it — just as every student at school has a personal exam number.

### ⚠️ Common Mistakes

Mixing up the character code and the character shape — the code is the number, and the shape is the font.

Thinking all systems are the same — ASCII represents English characters and symbols, while Unicode represents the world's languages.

Forgetting that 1 byte can represent only 256 character types.

Character Code

every character has its own number — book page 61

Every character is represented by a binary or hexadecimal number

the character

a unique number

the same code for the same character

the part active in this step

the other parts

A character code is a unique numerical value assigned to each character, symbol, etc. So every character in the computer has a binary or hexadecimal number that distinguishes it from any other character.

For example: the capital letter M has the binary code 01001101(2) and the hexadecimal 4D(16). This character is always recognized by the same code in the same system.

Remember:

Lowercase letters are different from uppercase ones in codes — a is not A.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is a character code?
Options:
A. the shape of the character on screen
B. the sound of the character when we pronounce it
C. a unique numerical value for each character
Correct Answer: C
Explanation: Correct! A character code is a unique numerical value for each character or symbol.

Q: What is the hexadecimal code for the capital letter M?
Options:
A. 6D(16)
B. 4D(16)
C. 4C(16)
Correct Answer: B
Explanation: Correct! Capital M has the code 4D(16) and 01001101(2).

### ⚠️ Common Mistakes

Mixing up uppercase and lowercase — each has a different code.

Forgetting that the code must be unique — two different characters cannot share the same code.

Character Code System

ASCII and Unicode — book page 61

The character code system organizes the relationship between characters and their codes

characters and symbols

the mapping rule

systems: ASCII and Unicode

the part active in this step

the other parts

A character code system summarizes the correspondence between characters and their respective character codes. Among the well-known systems are ASCII code and Unicode.

Example:

English letters, digits and symbols (like the letters A to Z and the digits 0 to 9) are assigned a fixed numeric code in the character code system.

ASCII code — represents letters, digits and symbols only

letters, digits and symbols

takes 1 byte

no other language characters

the part active in this step

the other parts

ASCII code is a system that represents alphabetic characters, digits, symbols and control characters (the symbols used to control the computer). But it does not include the characters of other world languages like Arabic.

Each ASCII character takes 1 byte, which allows representing 256 different character types in principle.

Think of it this way:

One character is 8 bits — the first 4 bits set the row, and the last 4 bits set the column in the code table.

Unicode — combines the characters of all world languages

all world languages

one unified system

UTF-8 and UTF-16

the part active in this step

the other parts

Unicode is a character code standard that consolidates the characters of all world languages into a single character code. Due to differences in code assignments, there are variations such as UTF-8 and UTF-16.

Example:

Your phone and computer handle Arabic, English and Japanese at the same time thanks to Unicode.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Which of these systems represents the characters of all world languages?
Options:
A. Unicode
B. ASCII code
C. Character code
Correct Answer: A
Explanation: Correct! Unicode consolidates all world languages into one system.

Q: How much space does one ASCII character take?
Options:
A. 8 bytes
B. 1 byte
C. 1 kilobyte
Correct Answer: B
Explanation: Correct! One character takes 1 byte.

### ⚠️ Common Mistakes

Mixing up ASCII and Unicode — the first is only for English characters, and the second for all world languages.

Forgetting that every ASCII character = 1 byte = 8 bits.

Thinking 1 byte represents an unlimited number — no, it represents 256 character types.

Encoding

representing a string with character codes — book page 61

Worked example: converting the word Hello into code

Hello

the code of each character

48 65 6C 6C 6F

the part active in this step

the other parts

Encoding is representing a string using character codes. The opposite process is called decoding — converting the codes back into readable text.

Example: the word Hello. Each character has a code: H = 48, e = 65, l = 6C, l = 6C, o = 6F. Combined, the word Hello is written in hex as 48656C6C6F(16).

Remember:

Encoding turns text into codes, and decoding turns codes into text. They are exactly the opposite.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is encoding?
Options:
A. representing a string with character codes
B. converting codes into readable text
C. the numerical value of each character
Correct Answer: A
Explanation: Correct! Encoding is representing a string with character codes.

Q: What is the hex code of the capital letter H?
Options:
A. 65(16)
B. 6C(16)
C. 48(16)
Correct Answer: C
Explanation: Correct! Capital H has the code 48(16) = 01001000(2).

### ⚠️ Common Mistakes

Mixing up encoding and decoding — the first is text to codes, and the second is codes to text.

Forgetting the order of the codes — we must keep the character order as is.

Character Corruption

when encoding and decoding do not match — book page 61

the same codes, a different decoding method → strange characters

the original text

decoding with a different method

strange characters

the part active in this step

the other parts

Character corruption is a phenomenon that occurs due to mismatched encoding and decoding methods. The text was encoded with a certain system, and you decoded the codes with a different system, so incomprehensible characters appear.

Example:

Arabic text was encoded with one system and decoded with another → scattered symbols and characters with no meaning appear.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What causes character corruption?
Options:
A. mismatched encoding and decoding methods
B. large data size
C. choosing a different font
Correct Answer: A
Explanation: Correct! Mismatched encoding and decoding methods produce strange characters.

### ⚠️ Common Mistakes

Thinking corruption destroys the file — no, the codes are intact but decoded the wrong way.

Mixing up corruption and changing the font — changing the font gives a different shape to the same character.

Font

the shape of the character corresponding to its code — book page 61

the same code can appear in different shapes depending on the font

the character code

shape data

Sans-serif · Serif

the part active in this step

the other parts

A font is the shape data of characters corresponding to character codes. It determines the shape of the character on screen or in print. Examples include Sans-serif, Serif and Semi-cursive.

To display a character on a computer screen or in printer output, two elements are required: the character code and the font.

Think of it this way:

The code tells the computer 'write the letter A', and the font tells it 'what shape' — bold, thin or decorative.

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a font?
Options:
A. the unique number of each character
B. the shape data of characters
C. turning text into codes
Correct Answer: B
Explanation: Correct! A font is the shape data of characters corresponding to character codes.

Q: What do we need for a character to appear on screen?
Options:
A. the character code + the font
B. only the character code
C. color + size
Correct Answer: A
Explanation: Correct! We need the character code plus the font together.

### ⚠️ Common Mistakes

Mixing up the font and the character code — the font is a shape, and the code is a number.

Forgetting that displaying needs two elements together: the character code and the font.

Exercises

Your book: pages 62 – 64

### ✍️ Exercise 1: fill in the blanks — systems and terms

What is the system that maps characters and symbols to binary or hexadecimal called?

A  Character code system

B  Character corruption

C  Font

✅ Answer: A — Character code system

the character code system summarizes the correspondence between characters and their codes.

Which of these systems accommodates the writing systems of world languages?

A  ASCII code

B  Character corruption

C  Unicode

✅ Answer: C — Unicode

Unicode consolidates the characters of all world languages into one system.

How many bytes represent alphanumeric characters and symbols?

A  1 byte

B  2 bytes

C  8 bytes

✅ Answer: A — 1 byte

one character in systems like ASCII takes 1 byte.

In principle, how many types of characters can 1 byte represent?

A  128

B  256

C  512

✅ Answer: B — 256

8 bits represent 2 to the power of 8 = 256 different character types.

### ✍️ Exercise 2: reading the code table

What is the binary code of the capital letter M?

A  01001111(2)

B  01101101(2)

C  01001101(2)

✅ Answer: C — 01001101(2)

the most significant 4 bits are 0100 and the least significant are 1101 — so the code is 01001101(2).

What is the word MILK in hexadecimal code?

A  4C494D4B(16)

B  4D494C4B(16)

C  4D494C6B(16)

✅ Answer: B — 4D494C4B(16)

M = 4D, I = 49, L = 4C, K = 4B — so the code is 4D494C4B(16).

What does the code 4C6F7665(16) correspond to?

A  Love

B  Look

C  Milk

✅ Answer: A — Love

4C = L, 6F = o, 76 = v, 65 = e — so the text is Love.

### ✍️ Exercise 3: read the table and convert — part two

What is the binary code of the lowercase letter a?

A  01000001(2)

B  01100001(2)

C  01100101(2)

✅ Answer: B — 01100001(2)

the most significant 4 bits are 0110 and the least significant are 0001 — so the code is 01100001(2).

What symbol corresponds to the code 00111110(2)?

A  <

B  =

C  >

✅ Answer: C — >

00111110(2) = 3E(16) — that is the greater-than symbol >.

What symbol corresponds to the code 5C(16)?

A  |

B  \

C  /

✅ Answer: B — \

5C(16) is the code of the backslash symbol.

What string corresponds to the code 486172696E657A756D69(16)?

A  Harmony

B  Harinezumi!

C  Harinezumi

✅ Answer: C — Harinezumi

48 = H, 61 = a, 72 = r, 69 = i, 6E = n, 65 = e, 7A = z, 75 = u, 6D = m, 69 = i.

### ✍️ Exercise 4: calculate the data size

The word Welcome was entered — what is its size in bytes?

A  6 bytes

B  7 bytes

C  8 bytes

✅ Answer: B — 7 bytes

Welcome has 7 letters, and each letter = 1 byte.

The word HappyBirthday was entered — what is its size in bytes?

A  12 bytes

B  11 bytes

C  13 bytes

✅ Answer: A — 12 bytes

HappyBirthday has 12 letters, and each letter = 1 byte.

Which of these terms means the shape data of characters corresponding to their codes?

A  Encoding

B  Unicode

C  Font

✅ Answer: C — Font

the font is the shape data of characters corresponding to character codes.

Recap

a quick journey through everything we learned today

### Character code

a unique numerical value for each character or symbol.

### Character code system

among the systems: ASCII (English only) and Unicode (all world languages).

### Encoding and decoding

encoding turns text into codes, and decoding turns codes into text.

### Character corruption

happens when the encoding and decoding methods do not match.

### Font

the shape data of characters — displaying needs the character code + the font.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the difference between ASCII and Unicode?
Options:
A. ASCII is faster and Unicode is slower
B. ASCII is a font and Unicode is a code
C. ASCII is English and Unicode is world languages
Correct Answer: C
Explanation: Correct! ASCII is for English characters only, and Unicode for all world languages.

Q: What word does the code 48656C6C6F(16) correspond to?
Options:
A. HeIlo
B. Hello
C. Jello
Correct Answer: B
Explanation: Correct! 48 = H, 65 = e, 6C = l, 6C = l, 6F = o → Hello.

Q: To display a character on screen we need two elements — what are they?
Options:
A. color and font
B. sound and motion
C. the character code and the font
Correct Answer: C
Explanation: Correct! The character code + the font are the two required elements.
