# قواعد البيانات - Database [1]

What will we learn today?

Lesson introduction — Database

Everywhere around us huge amounts of data are stored — phone numbers, customer data, school records. Today we learn what a database is, the Database Management System (DBMS), its five functions, and the types of databases.

Think of it this way:

A database is like an organized cabinet with classified files — instead of scattered papers, everything is in its place and easy to find.

### ⚠️ Common Mistakes

Confusing the database with the DBMS — the database is the data itself, while the DBMS is the system that manages it.

Forgetting that NoSQL is not a special kind of table — it is any database management system other than the relational one.

Defining a Database

an organized collection of data — book page 111

A database is an organized collection of data, stored in a format that makes it easy to access for specific purposes.

In addition to collecting data, it makes it easy to search, process, and share.

Think of it this way:

Smartphone contact lists and company customer information — these are real-life examples of databases.

what is a database?

a database — an organized collection of data

makes search, processing, and sharing easy

examples: contacts and customer data

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is a database?
Options:
A. an organized collection of data
B. a group of connected devices
C. a program that draws graphics
Correct Answer: A
Explanation: Correct! A database is an organized collection of data stored in a format that makes it easy to access for specific purposes.

Q: Which is an example of a database?
Options:
A. a single notes paper
B. the smartphone contact list
C. the mouse
Correct Answer: B
Explanation: Correct! The smartphone contact list is an example of a database.

Database Management System

the system that creates, operates, and manages databases — book page 111

A Database Management System (DBMS) is a system that creates, operates, and manages databases.

Without the DBMS, nobody keeps the data organized and consistent.

Think of it this way:

The DBMS is like the manager of a library — the one who organizes the books, knows who can read what, and makes backups.

what is the DBMS?

the DBMS — a system that creates, operates, and manages databases

operates the database and keeps it organized

performs functions: consistency, integrity, independence, confidentiality, and availability

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the DBMS?
Options:
A. the stored data itself
B. a network linking
                  devices
C. a system that creates, operates, and manages databases
Correct Answer: C
Explanation: Correct! The DBMS is a system that creates, operates, and manages databases.

Q: Managing the database separately from the programs is which function?
Options:
A. Data independence
B. Data integrity
C. Data confidentiality
Correct Answer: A
Explanation: Correct! This is the data independence function.

DBMS Functions

five essential functions — book page 111

The DBMS provides five essential data functions: consistency, integrity, independence, confidentiality, and availability.

Consistency ensures that concurrent operations on shared data do not cause inconsistencies, and integrity prevents duplication, tampering, and unauthorized registration.

Independence manages data separately from programs, confidentiality sets access permissions and performs authentication, and availability performs backups, restoration, and recovery.

Think of it this way:

Five functions are like five guards: one prevents duplication, one prevents tampering, one separates data from programs, one checks who enters, and one keeps backups.

five DBMS functions

consistency & integrity — no inconsistencies or duplication

independence & confidentiality — separate from programs with permissions

availability — backups and recovery

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Preventing duplication, tampering, and unauthorized registration is which function?
Options:
A. Data consistency
B. Data availability
C. Data integrity
Correct Answer: C
Explanation: Correct! This is the data integrity function.

Q: Performing backups and recovery to prepare for failures is which function?
Options:
A. Data availability
B. Data confidentiality
C. Data independence
Correct Answer: A
Explanation: Correct! This is the data availability function.

Types of Databases

four main types — book page 111

Hierarchical database: data is represented in a tree-like hierarchical structure.

Network database: data is represented in a structure similar to a web or mesh.

Relational database: collected data is organized and managed across multiple tables.

NoSQL: database management systems other than relational database management systems.

Think of it this way:

The hierarchical is like a family tree, the network is like a web of roads, and the relational is like interconnected account books.

the types of databases

hierarchical — a tree-like structure

network — a web or mesh

relational and NoSQL — multiple tables / non-relational systems

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the database where data has a tree-like structure called?
Options:
A. Network
B. Hierarchical
C. Relational
Correct Answer: B
Explanation: Correct! This is the hierarchical database.

Q: What is the database that organizes data across multiple tables called?
Options:
A. Hierarchical
B. NoSQL
C. Relational
Correct Answer: C
Explanation: Correct! This is the relational database.

Exercises

Your book: pages 112–114

### ✍️ Exercise 1: Database Basics

What is the term for information organized and stored in a format that makes it easy to access for a specific purpose?

A  a Database Management System DBMS

B  a presentation program

C  a Database

✅ Answer: C — a Database

A database is an organized collection of data stored in a format that makes it easy to access for specific purposes.

Choose one correct statement regarding data integrity.

A  preventing duplication, tampering, and unauthorized registration or updating

B  managing the database separately from the programs

C  granting access rights to the data and limiting users

✅ Answer: A — preventing duplication, tampering, and unauthorized registration or updating

Data integrity prevents duplication, tampering, and unauthorized registration or updating.

What is the term for a database with a tree-like structure?

A  Relational

B  NoSQL

C  Hierarchical

✅ Answer: C — Hierarchical

Data is represented in a tree-like hierarchical structure, which is the hierarchical database.

### ✍️ Exercise 2: DBMS Functions

Managing the database separately from the programs that use it is which function?

A  Data confidentiality

B  Data independence

C  Data availability

✅ Answer: B — Data independence

Data independence manages the database separately from the programs that use it.

Setting access permissions and performing authentication is which function?

A  Data consistency

B  Data integrity

C  Data confidentiality

✅ Answer: C — Data confidentiality

Data confidentiality sets access permissions and performs authentication.

Performing backups and recovery to prepare for failures is which function?

A  Data independence

B  Data availability

C  Data consistency

✅ Answer: B — Data availability

Data availability performs backups, restoration, and recovery to prepare for failures.

### ✍️ Exercise 3: Types of Databases

What is the database where collected data is organized and managed across multiple tables?

A  Hierarchical

B  Network

C  Relational

✅ Answer: C — Relational

The relational database organizes collected data across multiple tables.

What is the database where data is represented in a web or mesh-like structure?

A  Relational

B  Network

C  Hierarchical

✅ Answer: B — Network

The network database represents data in a web or mesh-like structure.

What is the term for database management systems other than relational ones?

A  NoSQL

B  the DBMS

C  HTTP

✅ Answer: A — NoSQL

NoSQL is any database management system other than the relational one.

### ✍️ Exercise 4: A Mix from the Book

Choose one correct statement regarding data availability.

A  managing the database separately from the programs

B  backing up and restoring to prepare for data failures

C  granting access rights to the data and limiting users

✅ Answer: B — backing up and restoring

Data availability performs backups, restoration, and recovery to prepare for failures.

Data confidentiality involves setting data access rights and implementing authentication — true or false?

A  correct — ○

B  incorrect — ×

✅ Answer: A — correct

Data confidentiality sets access permissions and performs authentication — so the statement is correct.

What is the database that represents data in a tree-like hierarchical structure?

A  Hierarchical

B  Network

C  NoSQL

✅ Answer: A — Hierarchical

The hierarchical database represents data in a tree-like hierarchical structure.

Recap

a quick journey through everything we learned today

### The Database

an organized collection of data, stored in a format that makes search, processing, and sharing easy.

### The DBMS

a system that creates, operates, and manages databases.

### The DBMS Functions

consistency, integrity, independence, confidentiality, and availability.

### The Types

hierarchical, network, relational, and NoSQL.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does the DBMS do?
Options:
A. creating networks between devices
B. creating, operating, and managing databases
C. drawing images and videos
Correct Answer: B
Explanation: Correct! The DBMS creates, operates, and manages databases.

Q: Preventing duplication, tampering, and unauthorized registration is which function?
Options:
A. Data integrity
B. Data consistency
C. Data availability
Correct Answer: A
Explanation: Correct! This is the data integrity function.

Q: What is the database with a web or mesh-like structure called?
Options:
A. Hierarchical
B. Network
C. Relational
Correct Answer: B
Explanation: Correct! This is the network database.
