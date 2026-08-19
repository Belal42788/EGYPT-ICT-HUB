# HTML and JavaScript

What are we learning today?

Today we learn JavaScript, a language that runs in the browser and adds interactivity to the page, and how to change texts and control elements after pressing buttons.

### JavaScript in the browser

A language that runs inside the browser and moves page elements.

### Changing text with textContent

We use id and getElementById to change text inside any tag.

### Buttons and events

We link buttons to functions that run the moment the user presses them.

Common mistakes

Mixing up HTML which displays content and JavaScript which changes it.

Forgetting that JavaScript runs in the browser, not on the server.

What is JavaScript?

JavaScript is a programming language that runs in web browsers. By embedding it into a web page, we can add interactivity to the page or cause changes in response to user actions.

HTML provides structure and content, and JavaScript changes and moves elements inside the browser.

In the example above, an id was specified for the HTML p tag, and JavaScript used that id to change the text inside the tag. .textContent is used when specifying (or accessing) the text inside a tag.

Common mistakes

Writing a different id between HTML and JavaScript — it must be the same name.

Using textContent on non-text elements like images — it won't work.


### Questions

Q: Where does JavaScript run?
Options:
A. In the database
B. In the web browser
C. On the central server
Correct Answer: B
Explanation: Correct! JavaScript is a language that runs in the browser.

Q: What is JavaScript's role in the page?
Options:
A. Adds interactivity and movement
B. Builds the page structure
C. Stores user data permanently
Correct Answer: A
Explanation: Correct! It adds interactivity and changes elements.

Changing text with textContent

To change the text inside a tag, we first set an id for the tag in HTML, then use document.getElementById in JavaScript to find it and change its textContent.

getElementById returns the element by its id, then textContent changes the text inside it.

Try changing text with JavaScript

Press Run and you'll see the name Ichiro change to Ohtani.

Common mistakes

Writing a different id than in HTML — you'll get an error.

Forgetting the quotes around the text you assign in textContent.

Q: How do we find an element in JavaScript?
Options:
A. background-color
B. document.getElementById
C. document.createText
Correct Answer: B
Explanation: Correct! getElementById returns the element by id.

Q: What property sets the text inside a tag?
Options:
A. fontSize
B. className
C. textContent
Correct Answer: C
Explanation: Correct! textContent sets or reads the text inside the tag.

Buttons and events

We can link code to buttons so it runs the moment the user presses. We write const for variables, then set onclick on the button to run the function.

A button that changes text

Press Run then click the Change Text button inside the page.

In this example we use onclick: when the user presses the button, the code inside the function runs and changes the text. Also try changing the font size with style.fontSize.

A button that enlarges the font

Press Run then click the Change Size button — the font gets bigger.

Common mistakes

Forgetting const before defining variables — JavaScript will complain.

Writing onclick = () => { } without the curly braces — it won't work.

Forgetting the = sign in text.style.fontSize = 50 + "px".

Q: What makes the code run when the user presses the button?
Options:
A. btn.onclick
B. btn.mousemove
C. window.onload
Correct Answer: A
Explanation: Correct! onclick links the function to the button.

Q: To enlarge the font from JavaScript, what do we change?
Options:
A. text.textContent
B. text.src
C. text.style.fontSize
Correct Answer: C
Explanation: Correct! style.fontSize sets the font size.

Exercises

### Warm Up — Page 182

To change the name from Ichiro to Ohtani, what property do we use?

Answer: document.getElementById("name").textContent = "Ohtani".

When adding onClick to the button, how do we write the variable definition?

Answer: const p = document.getElementById("name"); then btn.onclick = () => { ... }.

### Exercise — Page 185

To change the font size from JavaScript, what do we write?

Answer: text.style.fontSize = 50 + "px"; inside onclick.

Improvement exercise: change text color and size together. Where do we change?

Answer: write text.style.color = "red"; and text.style.fontSize = 50 + "px"; inside the same function.

Recap

JavaScript is a language that runs in the browser and adds interactivity.

We set an id on the tag to find it from JavaScript.

document.getElementById returns the requested element.

textContent changes the text and style.fontSize changes the font size.

btn.onclick runs a function the moment the user presses the button.

Q: Where does JavaScript run?
Options:
A. On the server only
B. In the web browser
C. In the operating system
Correct Answer: B
Explanation: Correct! Inside the browser on the user's device.

Q: What property changes the text inside a tag?
Options:
A. fontSize
B. src
C. textContent
Correct Answer: C
Explanation: Correct! textContent sets the text.

Q: When the user presses the button, what runs the code?
Options:
A. btn.onclick
B. btn.onhover
C. btn.class
Correct Answer: A
Explanation: Correct! onclick links the event to the function.

Glossary

A programming language that runs in the browser and adds interactivity to the page.

A unique name we add to an HTML tag to find it from JavaScript.

A function that looks up an element by its id and returns it.

A property that sets or reads the text inside any tag.

An event that runs the moment the user clicks the element.

A property that sets the font size of the element from JavaScript.
