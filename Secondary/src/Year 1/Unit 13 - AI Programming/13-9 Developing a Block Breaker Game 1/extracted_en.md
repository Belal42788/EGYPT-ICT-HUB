# Developing a Block Breaker Game 1

What are we learning today?

Today we get from AI the code for a Block Breaker game with JavaScript, run it in WebDen, understand it, then modify it by ourselves without using AI.

### Requesting the game from AI

We write a prompt that makes AI create a simple block breaker game.

### Running it in WebDen

We paste the code into the HTML, CSS, and JavaScript tabs and run the game.

### Modifying it by ourselves

Without AI: we enlarge the ball, change block colors, and increase their number.

Common mistakes

Thinking AI gives the same code — the result differs from person to person.

Using AI for the modification — the modification here must be by your own hand.

Generating the code

First step: open copilot.microsoft.com in the browser, sign in, and launch Copilot. Then we write the prompt that produces the game.

Open copilot.microsoft.com and sign in.

Write the prompt: Create a simple block breaker game. Please provide separate code for HTML, CSS, and JavaScript.

Copy the code and paste it into the HTML, CSS, and JS tabs in WebDen.

Common mistakes

Forgetting to ask for separated HTML, CSS, and JavaScript code.

Forgetting to open Copilot's site and sign in first.


### Questions

Q: The prompt that produces the game?
Options:
A. Create a simple block breaker game
B. Make the ball change its angle
C. There is no prompt
Correct Answer: A
Explanation: Correct! We ask for a block breaker game with separated code.

Q: How do we ask AI to separate the code?
Options:
A. All the code in one file
B. Without separation
C. separate code for HTML, CSS, and JavaScript
Correct Answer: C
Explanation: Correct! Please provide separate code for HTML, CSS, and JavaScript.

Running the game

After AI gives us the code, we paste it into the HTML, CSS, and JavaScript tabs in WebDen and run it. The code inside is one example — AI gives different code each time.

Example: a simple Block Breaker game

Press Run, then move the mouse over the game to catch the ball and break the blocks.

In this code we find: the paddle that follows the mouse, the ball that moves with vx and vy speeds, and the blocks that disappear when the ball hits them.

Common mistakes

Forgetting the code differs per person — a different result is normal.

Thinking WebDen writes the code — we paste it.

Q: The paddle in the game follows what?
Options:
A. the ball
B. the mouse
C. fixed, no movement
Correct Answer: B
Explanation: Correct! The paddle moves with the mouse.

Q: The ball moves with how many speeds?
Options:
A. vx and vy
B. one speed only
C. it doesn't move
Correct Answer: A
Explanation: Correct! With vx horizontally and vy vertically.

Understanding the code

To understand the code AI made, we ask: Explain this code and read the explanation. Then we ask ourselves: how much of this code can I understand?

We ask for the explanation, read the parts, then judge our understanding ourselves.

We also rename the Copilot chat to Block Breaker Development so it's easy to return to it in future lessons.

Common mistakes

Leaving the code without asking Explain this code.

Forgetting to rename the chat — its name helps in future lessons.

Q: The prompt that makes AI explain the game?
Options:
A. Create a simple block breaker game
B. There is no prompt
C. Explain this code
Correct Answer: C
Explanation: Correct! Explain this code.

Q: What do we name the Copilot chat?
Options:
A. My Game
B. Block Breaker Development
C. without a name
Correct Answer: B
Explanation: Correct! Block Breaker Development.

Exercises

### Try — Page 196

Try modifying the game without AI — figure out the logic and modify the program by yourself.

How do we make the ball larger?

Answer: we find the ball variable and increase the radius r value in the code that draws it.

How do we change the color of the blocks?

Answer: in the draw function, change the fillStyle that draws the blocks (e.g. from #193cff to another color).

How do we increase the number of blocks?

Answer: in the loop that builds the blocks, increase the number of rows or columns so the blocks increase.

### Exercise — Page 196

What was difficult in the modification?

Answer: e.g. "I didn't know which value to change to make the ball bigger" or "It was hard to find where the ball was drawn".

What strategies did you use?

Answer: e.g. "I guessed the meaning from variable names" or "I changed values little by little and adjusted them while checking the movement".

Recap

Open Copilot and ask for a block breaker game with separated code.

Paste the code into WebDen and run the game.

Ask Explain this code and judge your understanding.

Rename the chat to Block Breaker Development.

Modify the game yourself: enlarge the ball, change colors, add blocks.

Q: We run the game in what?
Options:
A. Paint
B. By itself, no platform
C. WebDen
Correct Answer: C
Explanation: Correct! In the HTML, CSS, and JS tabs in WebDen.

Q: To enlarge the ball we change what?
Options:
A. the number of rows
B. the radius r
C. no change
Correct Answer: B
Explanation: Correct! The radius value r.

Q: In the modification task, do we use AI or not?
Options:
A. by hand, without AI
B. we ask AI to modify
C. modification isn't required
Correct Answer: A
Explanation: Correct! The modification is by hand, without AI, to understand the logic.

Glossary

A game where the player breaks blocks with a ball and a paddle.

The paddle that moves at the bottom to catch the ball.

An HTML element we draw the game on with JavaScript.

The ball's radius — increasing its value makes it larger.

A canvas property that sets the color we draw with.

A function that creates a continuous drawing loop for the game every frame.
