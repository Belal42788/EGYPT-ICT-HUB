# التباين والانحراف المعياري - Data Analysis [3]

What will we learn today?

Lesson introduction — variance and standard deviation

Measures of central tendency describe the center of the data, but we also need to know how spread out the data is around the mean — and that is the job of the variance and the standard deviation.

Think of it this way:

If all students scored around the same grade the spread is small, but if some scored high and others low the spread is large — the variance and standard deviation express that with numbers.

### ⚠️ Common Mistakes

Confusing the variance with the standard deviation — the variance is the mean of the squared deviations, and the standard deviation is its square root.

Forgetting that the deviation for each value is the value minus the mean, not the mean minus the value.

Confusing spreadsheet functions — VARP and VAR.P for the variance, and STDEV.P for the standard deviation.

Deviation

each value minus the mean — book page 134

The deviation is the value obtained by subtracting the mean from each data value — that is x₁ - x̄, x₂ - x̄, and so on.

If a value is above the mean the deviation is positive, if below it is negative, and if equal it is zero.

Think of it this way:

The deviation tells us 'how far is this value from the mean' — positive above and negative below.

what is the deviation?

deviation = value - mean

each value has its own deviation

positive if the value is larger, negative if smaller

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: How is the deviation for each data value calculated?
Options:
A. the mean minus the value
B. the value minus the mean
C. the value divided by the count
Correct Answer: B
Explanation: Correct! Deviation = value - mean.

Q: If a value is greater than the mean, what does the deviation equal?
Options:
A. positive
B. negative
C. zero
Correct Answer: A
Explanation: Correct! The deviation is positive.

Variance

the mean of the squared deviations — book page 134

The variance is the mean value of (x - x̄)² — meaning we square each deviation then take their mean.

The larger the variance, the more dispersed the data is — and in spreadsheet software we use the VARP function in Google Sheets and the VAR.P function in Excel.

Think of it this way:

We square the deviations to get rid of the positive and negative signs — otherwise they would cancel each other out.

what is the variance?

the mean value of (x - x̄)²

larger variance = more dispersed data

the VARP or VAR.P function

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The variance is the mean of what?
Options:
A. the deviations themselves
B. the squared deviations
C. the data itself
Correct Answer: B
Explanation: Correct! The variance is the mean of (x - x̄)².

Q: What is the variance function in Google Sheets?
Options:
A. STDEV.P
B. MEDIAN
C. VARP
Correct Answer: C
Explanation: Correct! In Google Sheets we use VARP.

Standard Deviation

the positive square root of the variance — book page 134

The standard deviation is the positive square root of the variance — that is s = √Variance.

The standard deviation is expressed in the same unit as the data — if the data is in meters, it is in meters — and its function in spreadsheet software is STDEV.P.

Think of it this way:

The variance comes out in a squared unit (m²), so we take the root to return to the original unit.

what is the standard deviation?

standard deviation = √variance

the positive square root

same unit as the data · the STDEV.P function

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The standard deviation equals what?
Options:
A. √variance
B. the square of the variance
C. the mean of the deviations
Correct Answer: A
Explanation: Correct! The standard deviation is the positive square root of the variance.

Q: What is the standard deviation function in spreadsheet software?
Options:
A. VARP
B. STDEV.P
C. MODE
Correct Answer: B
Explanation: Correct! The STDEV.P function is for the standard deviation.

Steps for Calculating the Standard Deviation

mean, deviations, squares, variance — book page 134

We summarize the data in a table according to these steps to calculate the standard deviation.

Step 1: determine the mean. Step 2: find the deviation for each individual data point. Step 3: square the deviation of each data point. Step 4: determine the variance, which is the mean of the squares.

Think of it this way:

If the variance is 9, then the standard deviation is √9 = 3 — and in the data table, the variance cell is the mean of the squared column.

how do we calculate the standard deviation?

determine the mean

the deviation for each value

square, then the mean = the variance

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The first step to calculate the standard deviation is what?
Options:
A. calculating the deviations
B. squaring the deviations
C. determining the mean
Correct Answer: C
Explanation: Correct! The first step is to determine the mean.

Q: In the steps, the variance is the mean of what?
Options:
A. the squared deviations
B. the deviations
C. the sum of the data
Correct Answer: A
Explanation: Correct! The variance is the mean of the squared deviations.

Exercises

Your book: pages 134–135

### ✍️ Exercise 1: One-Hand Ball Throw

Handball throw results of six individuals: 26, 25, 32, 28, 32, 25 (m) — what is the mean?

A  28 m

B  27 m

C  30 m

✅ Answer: A — 28 m

The sum of the results is 168 ÷ 6 = 28.

With the same data — what is the variance?

A  3

B  9

C  54

✅ Answer: B — 9

The squared deviations: 4, 9, 16, 0, 16, 9 — their sum is 54 and their mean is 54 ÷ 6 = 9.

With the same data — what is the standard deviation?

A  3 m

B  9 m

C  28 m

✅ Answer: A — 3 m

The standard deviation = √9 = 3 m.

### ✍️ Exercise 2: English Vocabulary Scores

The scores of ten students: 9, 3, 4, 10, 10, 5, 7, 9, 10, 3 — what is the mean?

A  8 points

B  7 points

C  6.5 points

✅ Answer: B — 7 points

The sum of the scores is 70 ÷ 10 = 7.

With the same scores — what is the variance?

A  9

B  7

C  8

✅ Answer: C — 8

The squared deviations from 7: 4, 16, 9, 9, 9, 4, 0, 4, 9, 16 — their sum is 80 and their mean is 80 ÷ 10 = 8.

With the same scores — what is the standard deviation? (√2 = 1.414)

A  2.83

B  2.71

C  2.65

✅ Answer: A — 2.83

The standard deviation = √8 = 2√2 = 2 × 1.414 = 2.83.

### ✍️ Exercise 3: Days to Complete Assignments A and B

Days to complete assignment A: 22, 28, 25, 26, 24 — what is the variance?

A  8

B  25

C  4

✅ Answer: C — 4

The mean is 25, and the squared deviations: 9, 9, 0, 1, 1 — their sum is 20 and their mean is 20 ÷ 5 = 4.

Days to complete assignment B: 21, 29, 27, 25, 28 — what is the standard deviation? (√2 = 1.414)

A  2.00

B  2.83

C  3.00

✅ Answer: B — 2.83

The mean is 26, the variance is 8, and the standard deviation = √8 = 2.83.

Which data set has a greater variance?

A  assignment B

B  assignment A

C  they are equal

✅ Answer: A — assignment B

The variance of A is 4 and of B is 8 — so B is more dispersed.

### ✍️ Exercise 4: Strawberry Weights

The weights of eight strawberries: 22, 25, 18, 17, 22, 21, 20, 15 (g) — what is the mean?

A  21 g

B  20 g

C  22 g

✅ Answer: B — 20 g

The sum of the weights is 160 ÷ 8 = 20.

With the same data — what is the variance?

A  9

B  3

C  72

✅ Answer: A — 9

The squared deviations from 20: 4, 25, 4, 9, 4, 1, 0, 25 — their sum is 72 and their mean is 72 ÷ 8 = 9.

With the same data — what is the standard deviation?

A  9 g

B  3 g

C  20 g

✅ Answer: B — 3 g

The standard deviation = √9 = 3 g.

### ✍️ Exercise 5: Math and English Scores

Math scores: 7, 9, 6, 10, 8 — what is the variance?

A  4

B  8

C  2

✅ Answer: C — 2

The mean is 8, and the squared deviations: 1, 1, 4, 4, 0 — their sum is 10 and their mean is 10 ÷ 5 = 2.

English scores: 10, 8, 6, 4, 2 — what is the standard deviation? (√2 = 1.414)

A  2.83

B  2.00

C  3.16

✅ Answer: A — 2.83

The mean is 6, the variance is 8, and the standard deviation = √8 = 2.83.

Which set of scores has a greater variance?

A  math

B  they are equal

C  English

✅ Answer: C — English

The variance of math is 2 and of English is 8.

Recap

a quick journey through everything we learned today

### Deviation

the value minus the mean — positive if the value is larger, negative if smaller.

### Variance

the mean of the squared deviations — the larger the variance, the more the spread — the VARP or VAR.P function.

### Standard Deviation

the positive square root of the variance — in the same unit as the data — the STDEV.P function.

### The Calculation Steps

determine the mean, calculate the deviations, square them, then the mean of the squares is the variance.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How is the deviation for each data value calculated?
Options:
A. the mean of the squared deviations
B. the value minus the mean
C. the middle value
Correct Answer: B
Explanation: Correct! Deviation = value - mean.

Q: What is the standard deviation function in spreadsheet software?
Options:
A. VARP
B. AVERAGE
C. STDEV.P
Correct Answer: C
Explanation: Correct! The STDEV.P function is for the standard deviation.

Q: The variance is the mean of what?
Options:
A. the squared deviations
B. the root of the deviations
C. the deviations
Correct Answer: A
Explanation: Correct! The variance is the mean of the squared deviations.
