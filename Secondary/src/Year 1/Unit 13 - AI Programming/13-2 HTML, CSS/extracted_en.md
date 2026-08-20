# HTML and CSS

What are we learning today?

Today we learn two languages used to build web pages: HTML which creates the page structure, and CSS which defines its look and design.

### What is HTML

A language that creates the page structure: headings, tables, bullet points.

### What is CSS

A language that defines the design: text size, colors, backgrounds.

### The Class in CSS

A way to style specific elements only, even of the same type.

Common mistakes

Mixing up HTML and CSS — the first is for structure, the second for design.

Forgetting to close tags like </h1> — the page may break.

What is HTML?

HTML stands for HyperText Markup Language, a language used to display web pages in a web browser. Its role is to create the page structure: headings, tables, and bullet points.

HTML writes the structure, and the browser translates it and displays it as a web page.

Try a simple HTML page

Press Run and see the page render in the browser inside the page.

We notice HTML code is written inside tags like h1 for the main heading. The tag comes open <h1> and closed </h1>.

Common mistakes

Forgetting to close the tag — every open tag must be closed.

Writing the DOCTYPE wrong — it's the first line of the page.


### Questions

Q: What is HTML's role?
Options:
A. Defines design and colors
B. Creates the page structure
C. Stores database data
Correct Answer: B
Explanation: Correct! HTML creates the page structure.

Q: What does HTML stand for?
Options:
A. HyperText Markup Language
B. High Text Machine Language
C. HyperTool Markup Logic
Correct Answer: A
Explanation: Correct! HyperText Markup Language.

What is CSS?

CSS stands for Cascading Style Sheets, a language that defines the design of a web page. It allows detailed specification of designs like text size, fonts, and background colors. By combining HTML and CSS you can create web pages efficiently.

HTML provides structure and content, and CSS adds design like text color.

In the example above, the text color inside the p tag was set to Red using CSS. This lets us change the color of all p tags in the page from a single location in the CSS file.

Try HTML + CSS with a Class

Press Run and you'll see the name Ichiro in blue.

Here we set a class named name inside the h1 tag, and defined its design in CSS by writing .name. This way we can style specific elements even of the same type.

Common mistakes

Writing the class name without the dot in CSS — it must be .name not name.

Forgetting the braces { } around CSS rules.

Forgetting the link line that connects the CSS file to the page.

Q: What is CSS's role?
Options:
A. Creates the page structure
B. Defines the page design
C. Runs program logic
Correct Answer: B
Explanation: Correct! CSS defines design, colors and fonts.

Q: In CSS, how do we style a class named name?
Options:
A. name
B. #name
C. .name
Correct Answer: C
Explanation: Correct! We write .name and the dot matters.

Exercises

### Warm Up — Page 178

In HTML code, what tag do we use for the main heading?

Answer: the h1 tag.

How do we link an external CSS file to the page?

Answer: with a link tag inside head writing rel="stylesheet" and href="style.css".

### Exercise — Page 179

We set a class named name inside the h1 tag. How do we write its design in CSS?

Answer: we write .name { color: blue; }.

The advantage of using a class is that we can...?

Answer: style specific elements only, even of the same type, from one place in CSS.

Recap

HTML is a language that builds the web page structure.

CSS is a language that defines the page design.

Combining them builds web pages efficiently.

The class styles specific elements in CSS with the dot .

You can change the design of all tags from one place in the CSS file.

Q: How are HTML and CSS different?
Options:
A. HTML for structure and CSS for design
B. HTML for runtime and CSS for storage
C. They are the same thing
Correct Answer: A
Explanation: Correct! HTML for structure and CSS for design.

Q: In CSS how do we write the design for a class named name?
Options:
A. #name { }
B. name { }
C. .name { }
Correct Answer: C
Explanation: Correct! The dot before the name identifies it as a class.

Q: To change the color of all p tags in the page, what do we do?
Options:
A. We set the color once in CSS
B. We change each p tag individually in HTML
C. We change the browser settings
Correct Answer: A
Explanation: Correct! We set the color once in CSS.

Glossary

A language that builds the web page structure: headings, tables, bullet points.

A language that defines the page design: text size, fonts, background colors.

A tag in HTML like h1 or p, comes open and closed.

A name we add to an element to style it in CSS with a dot.

The CSS file containing the design rules for the page.

The program that translates HTML and CSS and displays the page.
