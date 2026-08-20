# Creating Dynamic Web Pages

What are we learning today?

Today we learn to ask AI to create dynamic (interactive) web pages with JavaScript — the page reacts to clicks like changing the background color and switching news.

### Changing the background color

A button that changes the background color when pressed.

### Switching between news

When we click a headline, the main text changes.

### New code from the AI

AI reveals things beyond our knowledge — we must understand them.

Common mistakes

Thinking a dynamic page doesn't need JavaScript — interactivity comes from it.

Leaving code you don't understand — take notes on what you don't get and look it up.

What is a dynamic page?

A static page has fixed content. A dynamic page interacts with the user: it changes the background color, switches texts, and reacts to clicks — all with JavaScript.

The click runs a function in JavaScript, which changes the page's look or content.

We ask the AI to separate the code into three files: HTML for structure, CSS for design, and JavaScript for interactivity. That way it's easier to modify each part separately.

Request separated code

We tell the AI: Please provide separate code for HTML, CSS, and JavaScript.

Understand new code

If there's a part we don't get, we take a note and look it up — AI reveals new things to us.

Common mistakes

Requesting all code in one file — better to split into HTML, CSS, and JS.

Ignoring code parts you don't understand — that's the moment for new learning.


### Questions

Q: What's the difference between static and dynamic pages?
Options:
A. Dynamic pages interact with the user
B. They are both static
C. The static one interacts more
Correct Answer: A
Explanation: Correct! Dynamic pages interact with the user.

Q: How do we ask the AI to separate the code?
Options:
A. We request everything in one file
B. We request explanation only, no code
C. We request separated code for HTML, CSS, and JS
Correct Answer: C
Explanation: Correct! We ask for separate code for HTML, CSS, and JavaScript.

A button that changes the background color

First example: a self-introduction page with a button that changes the page's background color each time the user presses it. We ask the AI for the code, then modify the colors.

Example: background color change

Press Run, then press the button several times — the color changes each time.

In this code we made an array of colors, and each press moves to the next color with document.body.style.backgroundColor. Modify the colors or increase their variety.

Common mistakes

Forgetting the quotes around the color name in the array.

Forgetting the counter wraps around with % — without it, it reaches the last color and stops.

Q: How do we change the page background from JavaScript?
Options:
A. document.body.textContent
B. document.body.style.backgroundColor
C. document.body.src
Correct Answer: B
Explanation: Correct! document.body.style.backgroundColor changes the background color.

Q: Why does the % operator make the counter wrap?
Options:
A. It returns the counter to the start when reaching the end
B. It multiplies the counter by 2
C. It always divides by 10
Correct Answer: A
Explanation: Correct! % returns the division remainder so the counter returns to the start when it reaches the end.

A news page that switches

Second example: a news page with headlines, and when the user clicks a headline, the main text switches to that news. The background color can also change based on the article.

Example: text switches by headlines

Press Run, then click Education or Sports — the text switches.

Each headline has its own onclick that sets its text in the main tag. Try adding more articles or changing the background color based on the displayed article.

Common mistakes

Forgetting to add onclick for each headline separately.

Writing a different id between HTML and JavaScript — they must match.

Q: To make the main text change by headline, what do we do?
Options:
A. We use CSS to switch
B. We link onclick to each headline
C. The page switches by itself
Correct Answer: B
Explanation: Correct! We link onclick to each headline and set the text in the main tag.

Q: What does AI reveal to us?
Options:
A. Code beyond our knowledge
B. It runs the code itself
C. It replaces understanding
Correct Answer: A
Explanation: Correct! It reveals code beyond our knowledge for us to learn from.

Exercises

### Warm Up — Page 190

How do we ask AI for a dynamic self-introduction page?

Answer: request the page with HTML, CSS, and JavaScript, ask that pressing a button changes the background color, with separated code.

How do we ask the AI to separate the code?

Answer: "Please provide separate code for HTML, CSS, and JavaScript".

### Exercise — Page 191

What does the dynamic news page do?

Answer: when we click a headline, the main text switches to that news.

If we don't understand part of the code, what do we do?

Answer: we take notes on what we don't understand and look it up, or ask "Explain this code".

Recap

A dynamic page interacts with the user with JavaScript.

We ask the AI for separated HTML, CSS, and JS code.

A button changes the background with document.body.style.backgroundColor.

Headlines switch the main text with onclick on each headline.

AI reveals new code — we understand it and deepen our knowledge.

Q: What makes a page dynamic?
Options:
A. HTML alone
B. CSS alone
C. Interactive JavaScript
Correct Answer: C
Explanation: Correct! JavaScript adds the interactivity.

Q: How do we change the background from JavaScript?
Options:
A. document.body.textContent
B. document.body.style.backgroundColor
C. document.body.src
Correct Answer: B
Explanation: Correct! document.body.style.backgroundColor.

Q: If the AI creates new code for us, what do we do?
Options:
A. We ignore it
B. We delete it immediately
C. We understand it and go deeper
Correct Answer: C
Explanation: Correct! We understand it and deepen our new knowledge.

Glossary

A web page that interacts with the user by changing content and look.

A property that sets the element's background color from CSS or JavaScript.

A list where we store multiple values like a set of colors.

Division remainder — makes a counter wrap around.

An event that runs when the user clicks the element.

A Prompt we ask the AI to explain the code it wrote.
