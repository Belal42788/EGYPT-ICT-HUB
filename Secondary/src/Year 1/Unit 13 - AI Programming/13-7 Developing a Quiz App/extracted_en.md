# Developing a Quiz App

What are we learning today?

Today we get from AI the code for a simple Quiz App with JavaScript — a question with choices, then we develop it to 3 questions and customize it.

### Requesting the app from AI

We write a prompt that makes AI create a one-question quiz app.

### Running the code in WebDen

We paste the code into the HTML, CSS, and JavaScript tabs and run it.

### Developing the app

We change the question and answers, increase to 3 questions, and add new features.

Common mistakes

Thinking AI gives the same code every time — the result changes each time.

Requesting the app without asking to separate the HTML, CSS, and JS code.

What is a quiz app?

A quiz app shows the user a question with choices, and after choosing, tells them if their answer is right or wrong. It's written with HTML for structure, CSS for design, and JavaScript for logic.

JavaScript compares the chosen answer with the correct one and shows the result.

When asking the AI, we must say: Create a simple multiple-choice quiz app. Include only one question. Please provide separate code for HTML, CSS, and JavaScript.

Common mistakes

Forgetting to specify the number of questions in the first request — we specify one question.

Forgetting to request separated HTML, CSS, and JavaScript code.


### Questions

Q: A quiz app is written with what?
Options:
A. HTML, CSS, and JavaScript
B. Python alone
C. Without any code
Correct Answer: A
Explanation: Correct! HTML, CSS, and JavaScript together.

Q: In the first request, how many questions do we ask AI for?
Options:
A. 10 questions
B. Without a count
C. Only one question
Correct Answer: C
Explanation: Correct! We start with only one question.

A one-question quiz app

After AI gives us the code, we paste it into the HTML, CSS, and JavaScript tabs in WebDen and run it. The code inside is one example — AI gives different code each time.

Example: one-question quiz

Press Run, then pick an answer — the app tells you right or wrong.

We can modify the HTML, CSS, and JavaScript code to change the question text or the correct answer. Then we ask the AI: Explain this code to understand it.

Common mistakes

Forgetting to update the correct variable when you change the correct answer.

Leaving the code without asking Explain this code to understand it.

Q: What form is the code in this approach?
Options:
A. The code is always fixed
B. One example that changes each time
C. The code is from the book
Correct Answer: B
Explanation: Correct! AI gives you one example, not repeated.

Q: The prompt that makes AI explain the code?
Options:
A. Explain this code
B. Make it 3 questions
C. There is no prompt
Correct Answer: A
Explanation: Correct! Explain this code.

Developing it to 3 questions

Next step: we ask AI with a new prompt: Make it 3 questions. AI writes code that shows the questions one by one and counts the result at the end.

Example: 3-question quiz

Press Run and answer the three questions — the score is counted at the end.

Notice the code now uses an array of questions, an index to move between them, and a score to count the result. Changing the number of questions is easy: add items to the array.

Common mistakes

Forgetting to add the correct answer index (a) when adding a new question.

Forgetting the index must advance after each answer so the question changes.

Q: The prompt that increases the questions?
Options:
A. Explain this code
B. There is no prompt
C. Make it 3 questions
Correct Answer: C
Explanation: Correct! Make it 3 questions.

Q: We store the questions in what?
Options:
A. array
B. image
C. In the AI itself
Correct Answer: A
Explanation: Correct! We store them in an array.

Exercises

### Warm Up — Pages 192–193

The first prompt we send to Copilot?

Answer: "Create a simple multiple-choice quiz app. Include only one question. Please provide separate code for HTML, CSS, and JavaScript."

After running the code, what do we modify?

Answer: we modify the HTML, CSS, and JavaScript code to change the question text or the answer.

What do we rename the Copilot chat thread to?

Answer: we rename the thread to Developing a Quiz App.

The prompt that makes the app 3 questions?

Answer: "Make it 3 questions."

### Exercise — Page 193

How do we increase the number of choices?

Answer: we add new option tags in HTML, add the new choices to the array, and fix the correct answer index.

How do we display the percentage of correct answers?

Answer: we divide the correct count (score) by the number of questions and multiply by 100, then show the percentage on screen.

How do we randomize the order of questions?

Answer: we shuffle the questions array using Math.random (or a shuffle helper) so the questions come in a different order each time.

Recap

We ask AI for a one-question quiz app with separated HTML, CSS, and JS code.

We paste the code into WebDen and run it.

We modify the question and answers and ask Explain this code.

We ask Make it 3 questions and run the new code.

We customize the app: more choices, correct percentage, random order.

Q: What does the first prompt include?
Options:
A. 3 questions from the start
B. One question and separated code
C. Explanation only
Correct Answer: B
Explanation: Correct! One question and separated HTML, CSS, and JS code.

Q: We run the app code in what?
Options:
A. a printer
B. By itself, no platform
C. WebDen
Correct Answer: C
Explanation: Correct! In the HTML, CSS, and JS tabs in WebDen.

Q: How do we compute the percentage of correct answers?
Options:
A. wrong count ÷ score
B. score ÷ questions × 100
C. There is no percentage
Correct Answer: B
Explanation: Correct! score divided by question count times 100.

Glossary

An app that shows a question with choices and checks the answer.

A question type with multiple choices where we pick the correct one.

A list where we store multiple values like a set of questions.

A number that identifies an element's position inside an array.

A counter that records the number of correct answers.

A JavaScript function that returns a random number — used for shuffling questions.
