# المخططات النقطية والارتباطات والجداول التقاطعية - Data Analysis [4]

What will we learn today?

Lesson introduction — scatter plots, correlations, and cross tabulation

The previous descriptive measures deal with a single variable, but now we learn how to examine the relationship between two variables: the scatter plot, positive, negative, and no correlation, the correlation coefficient, the causal relationship and pseudo-correlation, and finally cross tabulation.

Think of it this way:

The scatter plot is like a map that shows each student as a point on two axes (x, y) so we can see whether there is a clear tendency between them or not.

### ⚠️ Common Mistakes

Confusing correlation with causality — correlation says there is a tendency between the variables, but one does not necessarily cause the other.

Forgetting the range of the correlation coefficient r — it is always between -1 and 1, and closer to 1 means a stronger positive correlation.

Confusing pseudo-correlation with real causality — pseudo-correlation looks causal but is not.

Scatter Plot

a graph representing each pair (x, y) as a point — book page 136

A scatter plot is a graph that represents points on a plane using pairs of variables x and y as coordinates.

If x and y tend to increase together it is a positive correlation, if x increases as y decreases it is a negative correlation, and if there is no tendency it is no correlation.

Think of it this way:

Points gathered along a line rising from left to right = positive correlation, if falling = negative, and if scattered with no tendency = none.

what is the scatter plot?

points representing pairs (x, y)

x and y increase together — positive

one increases as the other decreases, or no tendency

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What does a scatter plot represent?
Options:
A. only one variable
B. pairs (x, y) as points
C. bars with frequencies
Correct Answer: B
Explanation: Correct! It represents each pair (x, y) as a point on the plane.

Q: When x increases as y decreases, what is the correlation called?
Options:
A. a negative correlation
B. a positive correlation
C. no correlation
Correct Answer: A
Explanation: Correct! That is a negative correlation.

Correlation Coefficient

an indicator measuring the strength of the correlation — book page 136

The correlation coefficient is an indicator to measure the strength of a correlation — denoted by r.

The value of r is between -1 and 1 — it indicates a stronger positive correlation as it approaches 1, and a stronger negative correlation as it approaches -1 — and to determine it in spreadsheet software we use the CORREL function.

Think of it this way:

r = 1 means a perfect positive correlation, r = -1 means a perfect negative one, and r = 0 means no correlation.

what is the correlation coefficient?

an indicator measuring the strength of the correlation

between -1 and 1 — closer to 1 is stronger positive

the CORREL function in spreadsheets

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The correlation coefficient r is always between what and what?
Options:
A. -10 and 10
B. 0 and 0
C. -1 and 1
Correct Answer: C
Explanation: Correct! The value of r is between -1 and 1.

Q: The correlation coefficient in spreadsheet software is determined with which function?
Options:
A. AVERAGE
B. CORREL
C. STDEV.P
Correct Answer: B
Explanation: Correct! The correlation coefficient uses the CORREL function.

Causal Relationship and Pseudo-correlation

cause and effect, and an apparent relationship that is not real — book page 136

A causal relationship is a relationship where one of the two things is the cause and the other is the effect — like when the temperature rises, shaved ice sales increase.

Pseudo-correlation is when two things appear to have a causal relationship even though there is none — like 'as the temperature rises, shaved ice sales increase' and 'as the temperature rises, heatstroke cases increase' — they are correlated but there is no causal relationship.

Think of it this way:

Ice cream sales and heatstroke cases both depend on temperature — so they share a pseudo-correlation, not a causal relationship.

what is the difference between causality and pseudo-correlation?

a relationship with a clear cause and effect

appears causal but is not real

temperature → ice cream sales · and heatstroke

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: When the temperature rises, ice cream sales increase — what is this?
Options:
A. a causal relationship
B. a pseudo-correlation
C. the correlation coefficient
Correct Answer: A
Explanation: Correct! This is a causal relationship — temperature is the cause and ice cream sales are the effect.

Q: Ice cream sales and heatstroke cases both increase with temperature — what is this?
Options:
A. a causal relationship
B. a pseudo-correlation
C. no correlation
Correct Answer: B
Explanation: Correct! There is a pseudo-correlation — both depend on temperature, not on each other.

Cross Tabulation

comparing data among two or more categories — book page 136

Cross tabulation is an aggregation method for comparing data among two or more categories.

Example: a survey of 400 people (agree / oppose / neither) split into males and females — the table shows the distribution of opinions among each group.

Think of it this way:

Cross tabulation combines more than one dimension in a single table — rows for gender and columns for opinion — so you can compare them at a glance.

what is cross tabulation?

an aggregation method to compare categories

two or more categories — agree, oppose, neither

the distribution of opinions among groups in one table

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is cross tabulation?
Options:
A. points representing pairs (x, y)
B. the square root of the variance
C. comparing data among categories
Correct Answer: C
Explanation: Correct! An aggregation method for comparing data among two or more categories.

Q: Cross tabulation compares data among what?
Options:
A. two or more categories
B. only one category
C. items in stock
Correct Answer: A
Explanation: Correct! It compares among two or more categories.

Exercises

Your book: pages 137–139

### ✍️ Exercise 1: Scatter Plot Tendency

Data of two variables x and y: x from 1 to 9 and y decreases as x increases — what tendency is expected?

A  a positive correlation

B  no correlation

C  a negative correlation

✅ Answer: C — a negative correlation

As x increases, y decreases — that is the sign of a negative correlation.

When x and y increase together, what is the correlation called?

A  a positive correlation

B  a negative correlation

C  no correlation

✅ Answer: A — a positive correlation

Increment together is the sign of a positive correlation.

Points scattered on the plane with no clear tendency indicate what?

A  a strong positive correlation

B  no correlation

C  a strong negative correlation

✅ Answer: B — no correlation

With no clear tendency, there is no correlation.

### ✍️ Exercise 2: Temperature and Ice Cream Expenditures

The plot between mean temperature and ice cream expenditures forms an upward line — what is the tendency?

A  a strong positive correlation

B  a weak negative correlation

C  a strong negative correlation

D  a weak positive correlation

✅ Answer: A — a strong positive correlation

The upward straight line is strong and positive.

The most suitable correlation coefficient between temperature and ice cream expenditures is?

A  0.9

B  -0.9

C  -0.4

D  0.4

✅ Answer: A — 0.9

The correlation is strong and positive, so the coefficient is close to 1.

The correlation coefficient in spreadsheet software is determined with which function?

A  AVERAGE

B  VARP

C  CORREL

✅ Answer: C — CORREL

The CORREL function determines the correlation coefficient.

### ✍️ Exercise 3: Study Time, Commuting Time, and Test Scores

Figure 1 (study time and test scores) has a strong upward tendency, and Figure 2 (commuting time and test scores) has a weak downward tendency — which choice is correct?

A  Figure 1 strong positive and Figure 2 strong negative

B  Figure 1 strong positive and Figure 2 weak negative

C  Figure 1 weak positive and Figure 2 strong negative

✅ Answer: B — Figure 1 strong positive and Figure 2 weak negative

The upward tendency is strong and the downward is weak.

The most suitable correlation coefficient between study time and test scores is?

A  -0.9

B  -0.4

C  0.4

D  0.9

✅ Answer: D — 0.9

Strong positive correlation → a coefficient close to 1.

The most suitable correlation coefficient between commuting time and test scores is?

A  -0.9

B  0.4

C  0.9

D  -0.4

✅ Answer: D — -0.4

Weak negative correlation → a negative coefficient close to 0.

### ✍️ Exercise 4: Pseudo-correlation and Causality

'As the temperature rises, ice cream sales increase' — what kind of relationship is this?

A  a pseudo-correlation

B  no correlation

C  a causal relationship

✅ Answer: C — a causal relationship

Temperature is the cause and ice cream sales are the effect.

'Ice cream sales and heatstroke cases both increase with temperature' — what is this?

A  a pseudo-correlation

B  a direct causal relationship

C  no correlation

✅ Answer: A — a pseudo-correlation

Both depend on temperature, not on each other — there is no causality.

Pseudo-correlation is when two things appear to have what?

A  no correlation

B  a causal relationship that does not exist

C  a strong negative correlation

✅ Answer: B — a causal relationship that does not exist

That is exactly the definition of pseudo-correlation.

### ✍️ Exercise 5: Cross Tabulation of Opinions

In a cross tabulation: males 57 agree and 97 oppose, and females 73 agree — what is the total number who agree?

A  57

B  172

C  130

✅ Answer: C — 130

The total who agree = 57 + 73 = 130.

The total who oppose is 172, and the opposing females are 75 — what is the number of opposing males?

A  97

B  75

C  172

✅ Answer: A — 97

172 - 75 = 97.

Cross tabulation compares data among what?

A  one variable

B  two or more categories

C  only the five values

✅ Answer: B — two or more categories

That is the basic role of cross tabulation.

Recap

a quick journey through everything we learned today

### The Scatter Plot

a graph representing each pair (x, y) as a point — positive if x and y increase together, and negative if one increases as the other decreases.

### The Correlation Coefficient

an indicator between -1 and 1 — closer to 1 is stronger positive and to -1 stronger negative — with the CORREL function.

### Causality and Pseudo-correlation

causality has a clear cause and effect, and pseudo-correlation appears causal but is not real.

### Cross Tabulation

an aggregation method for comparing data among two or more categories in one table.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: The correlation coefficient r is always between what and what?
Options:
A. 0 and 100
B. -1 and 1
C. 0 and 1
Correct Answer: B
Explanation: Correct! The value of r is between -1 and 1.

Q: When x and y increase together, what is the correlation called?
Options:
A. a negative correlation
B. no correlation
C. a positive correlation
Correct Answer: C
Explanation: Correct! That is a positive correlation.

Q: Pseudo-correlation is when two things appear to have a causal relationship that is?
Options:
A. not real
B. actually real
C. a direct relationship
Correct Answer: A
Explanation: Correct! It is not actually real.
