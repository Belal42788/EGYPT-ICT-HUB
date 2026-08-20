# Developing a Block Breaker Game 2

What are we learning today?

Today we update the Block Breaker game we made: make the ball change its angle when it hits the paddle, then add new features like score and lives.

### Changing the ball angle

The ball changes its angle based on where it hits the paddle.

### New features

We add speed, score, lives, and block durability.

### Summarizing our work

We prepare the next presentation summary: game type, our creativity, and difficulties.

Common mistakes

Thinking the update doesn't need the old Block Breaker Development chat — we continue from it.

Forgetting AI gives different code each time — this example is just one.

Updating the code

We open Copilot and access the Block Breaker Development chat we made last lesson, then write a prompt that updates the game.

Open Copilot and access the old chat.

Write: Make the ball change its angle every time it hits the player.

Paste the new code into WebDen and run it.

Common mistakes

Starting a new chat instead of continuing the old one — keeping it together matters for review.

Forgetting to update all the code (HTML, CSS, and JS) in WebDen.


### Questions

Q: We update the game from which chat?
Options:
A. Block Breaker Development
B. a new chat
C. without Copilot
Correct Answer: A
Explanation: Correct! We continue on Block Breaker Development.

Q: The prompt that makes the ball change its angle?
Options:
A. Create a block breaker game
B. change its angle every time it hits the player
C. There is no prompt
Correct Answer: B
Explanation: Correct! Make the ball change its angle every time it hits the player.

The updated game

New code: when the ball hits the paddle, we compute a new angle based on the hit spot — hitting the middle sends it up, hitting the edge makes it tilt.

Example: the game after the update (angle + score + lives)

Press Run and catch the ball with the paddle edges — the angle changes by the hit spot.

We notice we added score and lives, and the ball angle changes by hit computed from the paddle hit spot. We also notice the speed is preserved in each hit with speed().

Common mistakes

Forgetting the angle depends on the hit position, not fixed.

Forgetting to update the score and lives text on the page after each change.

Q: The ball angle after a paddle hit changes based on what?
Options:
A. the hit spot on the paddle
B. an always-fixed angle
C. the screen size
Correct Answer: A
Explanation: Correct! Based on the hit spot on the paddle.

Q: What did we add to the old game?
Options:
A. nothing
B. sound only
C. angle + score + lives
Correct Answer: C
Explanation: Correct! Changing angle, score, and lives.

Exercises

### Try — Page 198

Try making further changes to the game — you may use AI or modify it yourself manually.

How do we change the ball speed?

Answer: we change the ball's initial vx and vy values (e.g. vx: 2 → vx: 4) so the speed increases.

How do we display a score?

Answer: we add a score variable and an element on the page, and update its text after each block breaks.

How do we set a number of lives?

Answer: we add a lives variable starting at 3, it decreases each time the ball falls, and at zero the game stops.

How do we make the blocks harder to break?

Answer: we add a durability property to each block, each hit decreases it, and the block breaks when it reaches zero.

### Exercise — Page 198

The first question in preparing your next presentation?

Answer: what kind of game did you create? e.g. a Block Breaker game with blocks, score, and lives.

The second one?

Answer: what were the creative points (strategies you used) and what difficulties did you face?

The third one?

Answer: what can AI do and what can it not do? e.g. AI writes code fast, but understanding and editing it is on us.

Recap

Open the old Block Breaker Development chat.

Ask AI to make the ball change its angle when hitting the paddle.

Run the new code in WebDen.

Add features: speed, score, lives, block durability.

Summarize your work for your next presentation: game type, creativity, and difficulties.

Q: The ball angle is determined by what?
Options:
A. the paddle hit spot
B. random
C. fixed
Correct Answer: A
Explanation: Correct! Based on the paddle hit spot.

Q: How many lives do we start with?
Options:
A. 10 lives
B. no lives
C. 3 lives
Correct Answer: C
Explanation: Correct! It starts at 3 and decreases when the ball falls.

Q: In the presentation summary we mention what?
Options:
A. colors only
B. game type, creativity, difficulties, and AI's abilities
C. no summary
Correct Answer: B
Explanation: Correct! Game type, creativity, difficulties, and AI's abilities.

Glossary

The ball's movement angle — it changes based on the paddle hit spot.

The point counter that increases when a block breaks.

The number of tries — it decreases when the ball falls.

A block's toughness — how many hits it takes before breaking.

Math functions we use to compute the ball's movement direction from the angle.

A full conversation with AI — we continue it in future lessons.
