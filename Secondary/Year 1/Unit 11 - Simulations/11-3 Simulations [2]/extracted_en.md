# محاكاة النماذج الاحتمالية - Simulations [2]

Simulating Probabilistic Models

In this lesson we use spreadsheet functions — like SUM, IF, and RAND — to simulate probabilistic models, and the Monte Carlo method, which solves problems using random numbers, and its most famous application: simulating the approximate value of pi π without measuring circumference or diameter.

Because probabilistic models do not have a fixed result, we use random numbers to sample from them — that is the idea behind the Monte Carlo method.

Random Numbers

A random number is a number that can appear with equal probability within a certain range, and we generate it in spreadsheets with the RAND() function, which gives a random number between 0 and 1.

Random Numbers

The definition

A number that appears with equal probability within a range

Equal probability

All numbers in the range have the same chance

Generating

With RAND(), which gives a number between 0 and 1

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is a random number?
Options:
A. A number that appears with equal probability within a range
B. A fixed number that never changes
C. The sum of two numbers
Correct Answer: A
Explanation: Correct! A number that can appear with equal probability within a certain range.

Q: Between what and what does RAND() generate a random number?
Options:
A. Between 1 and 100
B. Between 0 and 1
C. Between 0 and 100
Correct Answer: B
Explanation: Correct! RAND() generates a random number between 0 and 1.

Spreadsheet Functions

Simulation in spreadsheets relies on ready-made functions: SUM to calculate totals, IF for logical branching, and RAND to generate random numbers.

Spreadsheet Functions

SUM

Calculates the sum of cells from range1 to range2

IF

If the expression is true show value1, otherwise show value2

RAND

Generates a random number between 0 and 1

Score

Pass/Fail

=IF(A2>=70, "Pass", "Fail") → Pass

=IF(A2>=70, "Pass", "Fail")

=IF(A3>=70, "Pass", "Fail") → Fail

=IF(A3>=70, "Pass", "Fail")

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the correct IF function syntax?
Options:
A. IF(logical_expression, value_if_true, value_if_false)
B. IF(value_if_false, logical_expression, value_if_true)
C. IF(logical_expression, value_if_true)
Correct Answer: A
Explanation: Correct! The logical expression first, then value_if_true, then value_if_false.

Q: What does the SUM function do?
Options:
A. Generates a random number
B. Compares two values
C. Calculates the sum of cells from range1 to range2
Correct Answer: C
Explanation: Correct! SUM calculates the sum of cells from one range to another.

The Monte Carlo Method

The Monte Carlo method is a method for solving problems by using random numbers in probabilistic models, and it is used to approximate hard-to-calculate values like pi π.

The Monte Carlo Method

The definition

A method to solve problems using random numbers

Probabilistic models

It works on models whose results are not fixed

Approximation

Approximates values like pi π with accuracy growing with points

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the Monte Carlo method?
Options:
A. A method to sum cells
B. A method to solve problems using random numbers
C. A method to draw charts
Correct Answer: B
Explanation: Correct! A method for solving problems by using random numbers.

Q: On which type of model does the Monte Carlo method mainly work?
Options:
A. Probabilistic models
B. Static models
C. Deterministic models
Correct Answer: A
Explanation: Correct! It works on probabilistic models.

Simulating the Approximate Value of Pi π

We approximate pi π with random numbers without measuring circumference or diameter: we draw random points in a square, calculate the ratio of points inside a quarter circle, and approximate π with the formula π ≈ 4n ÷ N.

Calculating Pi π

1. Generate points

Random points with X and Y between 0 and 1 using RAND

2. Count points

We count points inside the quadrant using IF

3. Calculate pi

π ≈ 4n ÷ N and accuracy increases with the number of points

Cell

Formula

Purpose

=RAND()

=RAND()

Random X coordinate

Distance from the origin

=IF(D3<=1, 1, 0)

=IF(D3<=1, 1, 0)

Inside (1) or outside (0) the quadrant

=SUM(E3:E102)/100

=SUM(E3:E102)/100

Probability of being inside the circle

Approximate value of pi

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: In the pi simulation, which formula determines whether a point is inside the quadrant?
Options:
A. =B3^2+C3^2
B. =G3*4
C. =IF(D3<=1, 1, 0)
Correct Answer: C
Explanation: Correct! If the distance is <= 1 the point is inside the quadrant (1), otherwise outside (0).

Q: How does the accuracy of pi change as the number of points increases?
Options:
A. It decreases
B. It increases
C. It does not change
Correct Answer: B
Explanation: Correct! The more points inside the square, the more accurate the approximation.

Exercises

### Exercise 1 — Random Numbers and Functions

[1] What is a random number?

[2] RAND() generates a random number between?

[3] What does SUM(range1:range2) do?

### Exercise 2 — The IF Function

[1] The correct order of IF arguments is?

[2] We want 1 if the score in A3 is >= 60, otherwise 0. The correct formula is?

[3] We want Pass if the score is >= 70, otherwise Fail. The correct formula is?

### Exercise 3 — The Monte Carlo Method

[1] In the pi simulation, the model we use is?

[2] What is the method that solves problems using random numbers?

[3] The formula that generates the random X coordinate is?

### Exercise 4 — Approximating Pi

[1] With 1,000 points in the square and 750 inside the quadrant, the approximate pi is?

[2] With 10,000 points in the square and 8,000 inside the quadrant, the approximate pi is?

[3] The formula that calculates pi from the probability is?

### Exercise 5 — Pi Simulation Steps

[1] After generating the random points, we determine whether each point is inside or outside the circle — we determine?

[2] We use the points inside the circle and the total points to determine?

[3] The main objective of the pi simulation is?

Recap

Q: Which function calculates the sum of a range of cells?
Options:
A. SUM
B. IF
C. RAND
Correct Answer: A
Explanation: Correct! SUM calculates the range total.

Q: The Monte Carlo method relies mainly on?
Options:
A. Cell colors
B. Printing files
C. Random numbers
Correct Answer: C
Explanation: Correct! It relies on random numbers.

Q: In the pi simulation, the more random points we use?
Options:
A. The approximation became less accurate
B. The approximate pi became more accurate
C. There is no change
Correct Answer: B
Explanation: Correct! The approximate pi became more accurate.
