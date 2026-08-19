# تحليل الانحدار ومعادلة خط التوقع - Data Analysis [5]

What will we learn today?

Lesson introduction — regression analysis and the prediction line

After learning to examine the relationship between two variables with the scatter plot and the correlation coefficient, now we learn to predict outcomes: regression analysis, which studies the relationship between a resulting value and a causal value, simple regression analysis, the regression line and its equation y = ax + b, and the least squares method, which minimizes the residual.

Think of it this way:

If you know there is a relationship between the number of steps and sleep duration, the regression line gives us an equation we substitute into to predict the expected sleep duration.

### ⚠️ Common Mistakes

Confusing causality with regression — regression is used to predict outcomes, not to prove that one causes the other.

Forgetting that the equation is a first-degree function y = ax + b — not squares or roots.

Confusing the vertical error (residual) with the mean — the least squares method minimizes the residual between the points and the line.

Regression Analysis

investigating the relationship between a resulting value and a causal value — book page 140

Regression analysis is a method to investigate and clarify the relationship between a resulting value and a causal value.

Simple regression analysis predicts the outcome variable y using the causal variable x — and it is used in predictions and simulations.

Think of it this way:

x is the causal variable (like the number of steps) and y is the resulting variable (like sleep duration) — regression describes the relationship between them.

what is regression analysis?

a method to study the relationship between a resulting and a causal value

predicts y using x — simple regression

used in predictions and simulations

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: Regression analysis studies the relationship between what and what?
Options:
A. two resulting values and one causal value
B. a resulting value and a causal value
C. the mean of two values
Correct Answer: B
Explanation: Correct! Between a resulting value and a causal value.

Q: What is regression analysis used in?
Options:
A. drawing and sorting
B. only adding and subtracting
C. predictions and simulations
Correct Answer: C
Explanation: Correct! It is used in predictions and simulations.

Regression Line

the line that gives the predicted values in a scatter plot — book page 140

The regression line is the line used to determine predicted values in a scatter plot.

The regression line is expressed with the regression line equation as a first-degree function y = ax + b.

Think of it this way:

In the steps-and-sleep example, the equation is y = 0.0287x + 297.86 — we substitute x with the number of steps to get the expected sleep duration.

what is the regression line?

the line that determines predicted values in a scatter plot

its equation is a first-degree function y = ax + b

passes between the points with the least possible error

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the regression line used to determine?
Options:
A. predicted values in a scatter plot
B. deviations of values from the mean
C. frequencies of values
Correct Answer: A
Explanation: Correct! It determines predicted values in a scatter plot.

Q: What form does the regression line equation take?
Options:
A. a second-degree function y = ax² + bx + c
B. a first-degree function y = ax + b
C. the square root of x
Correct Answer: B
Explanation: Correct! A first-degree function y = ax + b.

Least Squares Method

minimizing the residual between the points and the regression line — book page 140

The least squares method is a method used to minimize the vertical error, or the residual, between the actual data points and the regression line.

The residual is the vertical difference between each data point and the regression line — and the least squares method chooses the line that makes the sum of the squared residuals as small as possible.

Think of it this way:

No single line passes through every point, so the least squares method picks the line where the vertical distances to the points are as small as possible.

what is the least squares method?

a method for determining the line of best fit

minimizes the vertical error between the points and the line

the vertical error is called the residual

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The least squares method minimizes the vertical error between what?
Options:
A. the actual data points and the regression line
B. two columns in a data table
C. values in histogram bars
Correct Answer: A
Explanation: Correct! Between the actual data points and the regression line.

Q: What is the vertical error between a point and the regression line called?
Options:
A. the deviation
B. the residual
C. the variance
Correct Answer: B
Explanation: Correct! It is called the residual.

Predicting with the Equation

substitute x to get the predicted value — book pages 140–141

To predict the value of the resulting variable, we take the regression line equation y = ax + b, substitute the given value into x, and the result y is the predicted value.

Example: the sleep equation y = 0.0287x + 297.86 and the step count x = 5,000 — so y = 0.0287 × 5,000 + 297.86 = 441.36 ≈ 441 minutes.

Think of it this way:

The equation is a machine: you put in x (the causal variable) and it gives y (the resulting variable) — rounded to the nearest whole number.

how do we predict with the equation?

we write the line equation y = ax + b

we substitute the value of x into the equation

the result y is the predicted value

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: To predict the resulting variable, what do we substitute?
Options:
A. into x in the equation y = ax + b
B. into y in the equation
C. into the mean x̄
Correct Answer: A
Explanation: Correct! We substitute the given value into x in the equation y = ax + b.

Q: After substituting into the regression line equation, what is the result y?
Options:
A. the variance
B. the residual
C. the predicted value
Correct Answer: C
Explanation: Correct! The result is the predicted value — rounded to the nearest whole number.

Exercises

Your book: pages 140–141

### ✍️ Exercise 1: Step Count and Sleep Duration

What is the term for the process of determining the equation of a straight line in the form y = ax + b representing the relationship between two variables?

A  simple regression analysis

B  a histogram

C  cross tabulation

✅ Answer: A — simple regression analysis

Simple regression analysis is the term describing the determination of the straight line equation for the relationship between two variables.

In the [1] method, a straight line is determined to [2] the error, called [3], between each data point and the line — what is the correct order?

A  mean, calculate, deviation

B  variance, increase, spread

C  least squares, minimize, residual

✅ Answer: C — least squares, minimize, residual

Least squares minimizes the vertical error called the residual.

The line equation is y = 0.0287x + 297.86 — if the daily step count is 5,000, what is the expected sleep duration in minutes? (to the nearest whole number)

A  400

B  441

C  500

✅ Answer: B — 441

y = 0.0287 × 5,000 + 297.86 = 143.5 + 297.86 = 441.36 ≈ 441.

### ✍️ Exercise 2: Smartphone Usage Time and Exercise Time

What is the term for the equation of a straight line in the form y = ax + b representing the relationship between the causal variable x and the resulting variable y?

A  the histogram equation

B  the standard deviation equation

C  the regression line equation

✅ Answer: C — the regression line equation

That is exactly the definition of the regression line equation.

The line equation is y = -0.9337x + 12.94 — if smartphone usage is 10 hours, what is the expected exercise time? (to the nearest whole number)

A  3

B  4

C  10

✅ Answer: B — 4

y = -0.9337 × 10 + 12.94 = -9.337 + 12.94 = 3.603 ≈ 4.

In the least squares method, the error between the straight line and the actual data is called [1] — and if the absolute value of the correlation coefficient is [2], the value obtained from the line is considered an estimate — what is the correct order?

A  residual, other than 1

B  deviation, 1

C  variance, 0

✅ Answer: A — residual, other than 1

The error is the residual, and if the correlation coefficient is other than 1, we consider the result an estimate.

### ✍️ Exercise 3: Height and Weight

When weight tends to increase as height increases, when [1] it is referred to as a [2] between the two variables — what is the correct order?

A  one increases as the other decreases, a negative correlation

B  values are constant, no correlation

C  both values increase, a positive correlation

✅ Answer: C — both values increase, a positive correlation

Both values increasing together is the sign of a positive correlation.

The line equation is y = 0.5511x - 32.958 — if the height is 173 cm, what is the approximate weight in kg? (to the nearest whole number)

A  58

B  62

C  70

✅ Answer: B — 62

y = 0.5511 × 173 - 32.958 = 95.34 - 32.958 = 62.382 ≈ 62.

What is regression analysis used in?

A  predictions and simulations

B  only graphing

C  counting frequencies

✅ Answer: A — predictions and simulations

Regression analysis is used in predictions and simulations.

### ✍️ Exercise 4: Predicting with the Equation

Simple regression analysis predicts the outcome variable y using what?

A  the residual

B  the causal variable x

C  the variance

✅ Answer: B — the causal variable x

Simple regression uses x (the cause) to predict y (the outcome).

The sleep equation is y = 0.0287x + 297.86 — if x = 6,000 steps, what is the expected sleep duration in minutes? (to the nearest whole number)

A  470

B  450

C  500

✅ Answer: A — 470

y = 0.0287 × 6,000 + 297.86 = 172.2 + 297.86 = 470.06 ≈ 470.

What do we round the predicted value from the regression line equation to?

A  the nearest thousand

B  without rounding

C  the nearest whole number

✅ Answer: C — the nearest whole number

After substitution, we round the result to the nearest whole number.

### ✍️ Exercise 5: Regression Concepts

What form does the regression line equation take?

A  a second-degree function y = ax² + bx + c

B  a first-degree function y = ax + b

C  the mean of x times the mean

✅ Answer: B — a first-degree function y = ax + b

That is the form of the regression line equation.

What does the least squares method minimize?

A  the vertical error (the residual)

B  the arithmetic mean

C  the number of data values

✅ Answer: A — the vertical error (the residual)

Least squares minimizes the vertical error called the residual.

The relationship between a resulting value and a causal value is the subject of which study?

A  a histogram

B  cross tabulation

C  regression analysis

✅ Answer: C — regression analysis

Regression analysis studies the relationship between the resulting value and the causal value.

Recap

a quick journey through everything we learned today

### Regression Analysis

a method to investigate and clarify the relationship between a resulting value and a causal value — used in predictions and simulations.

### The Regression Line

the line used to determine predicted values in a scatter plot — with the equation y = ax + b.

### The Least Squares Method

it minimizes the vertical error (the residual) between the actual data points and the regression line.

### Predicting with the Equation

we substitute into x in y = ax + b and get the predicted value rounded to the nearest whole number.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What form does the regression line equation take?
Options:
A. y = ax² + bx + c
B. y = ax + b
C. y = √(ax + b)
Correct Answer: B
Explanation: Correct! A first-degree function y = ax + b.

Q: The residual is the vertical error between what?
Options:
A. two table columns
B. two values and the mean
C. the points and the regression line
Correct Answer: C
Explanation: Correct! Between the actual data points and the regression line.

Q: Regression analysis studies the relationship between what and what?
Options:
A. a resulting value and a causal value
B. two columns in a data table
C. different opinion categories
Correct Answer: A
Explanation: Correct! Between a resulting value and a causal value.
