# قواعد البيانات العلائقية - Database [2]

What will we learn today?

Lesson introduction — the relational database

The relational database is the most widely used type — like school tables containing student data. Today we learn the table structure and its parts, the relationships between tables, the SQL language, and the relational algebra operations: selection, projection, and join.

Think of it this way:

A table is like an attendance sheet: each row holds one student's data (a record), and each column holds a certain type of data (a field) like the name.

### ⚠️ Common Mistakes

Confusing selection with projection — selection returns only rows (records) that meet a condition, while projection returns only certain columns (fields).

Forgetting that SQL is not a relational algebra operation — SQL is a language for manipulating data, while selection, projection, and join are the operations performed with it.

Relational Database

data organized across multiple tables — book page 115

A Relational Database (RDB) is a database where collected data is organized and managed across multiple tables.

Tables contain rows (records) and columns (fields), and establishing relationships between tables makes data handling more precise.

Think of it this way:

Instead of repeating the club name for each student, we make a club table and a student table, and link them by club code — that removes duplication.

what is the relational database?

relational — data in multiple tables

rows (records) and columns (fields)

relationships remove duplication and keep integrity

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is the database that organizes data across multiple tables?
Options:
A. Relational (RDB)
B. Hierarchical
C. Network
Correct Answer: A
Explanation: Correct! This is the relational database (RDB).

Q: Establishing relationships between multiple tables leads to what?
Options:
A. increasing duplicate data
B. eliminating duplicate data and handling with integrity
C. separating the tables from each other
Correct Answer: B
Explanation: Correct! Relationships eliminate duplicate data and handle data with integrity.

Table Structure

rows, columns, and relationships — book page 115

A table in a relational database consists of rows called records, and columns called fields.

Each row holds one complete record, and each column holds one type of data.

Think of it this way:

In a student table: a row holds one student's full data (name, code, and club), and a column like the name column holds one type of data.

the parts of a table

the table — rows (records) and columns (fields)

the row — a complete record

the column — one field

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What are the rows in a relational database called?
Options:
A. Fields
B. Tables
C. Records
Correct Answer: C
Explanation: Correct! Rows are called records.

Q: What are the columns in a relational database called?
Options:
A. Fields
B. Records
C. Relationships
Correct Answer: A
Explanation: Correct! Columns are called fields.

The SQL Language

the language for manipulating data — book page 115

SQL is a language used in relational databases to manipulate data.

It performs data registration, insertion, retrieval, and deletion.

Think of it this way:

SQL is like the command language for dealing with the database — want to add a record? retrieve data? delete? All that goes through SQL.

what is the SQL language?

SQL — a language to manipulate data

register, insert, retrieve, and delete data

used with relational databases

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is SQL?
Options:
A. a device for storing data
B. a language for manipulating data in relational databases
C. a program for drawing graphics
Correct Answer: B
Explanation: Correct! SQL is a language used in relational databases to manipulate data.

Q: Which is an SQL operation on data?
Options:
A. registering, inserting, retrieving, and deleting data
B. drawing geometric shapes
C. running games
Correct Answer: A
Explanation: Correct! SQL registers, inserts, retrieves, and deletes data.

Relational Algebra Operations

selection, projection, and join — book page 115

Selection: only rows that meet given conditions are extracted and displayed.

Projection: displaying only certain columns from a table.

Join: linking data from multiple tables according to specific conditions and displaying it as a single table.

Think of it this way:

Selection is like filtering rows by a condition, projection is like hiding columns except the ones you need, and join is like merging two tables into one using a shared relationship.

three essential operations

selection — the rows meeting the condition

projection — only certain columns

join — linking multiple tables into one

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Extracting the rows that meet given conditions is which operation?
Options:
A. Projection
B. Join
C. Selection
Correct Answer: C
Explanation: Correct! This is the selection operation.

Q: Displaying only certain columns from a table is which operation?
Options:
A. Selection
B. Projection
C. Join
Correct Answer: B
Explanation: Correct! This is the projection operation.

Exercises

Your book: pages 116–118

### ✍️ Exercise 1: RDB Basics

What is the name of the database where data is managed in a table?

A  Hierarchical

B  Relational

C  Network

✅ Answer: B — Relational

The relational database is the one that stores data in a table.

In a relational database, rows are called what and columns are called what?

A  fields and records

B  tables and relationships

C  records and fields

✅ Answer: C — records and fields

Rows are records, and columns are fields.

Establishing relationships between multiple tables leads to what?

A  eliminating duplicate data and handling data with integrity

B  only increasing the number of tables

C  preventing all data access

✅ Answer: A — eliminating duplication and handling with integrity

Relationships allow data to be handled with integrity by eliminating duplicate data.

### ✍️ Exercise 2: Relational Algebra Operations

Extracting multiple columns from a table to create a new table is which operation?

A  Join

B  Selection

C  Projection

✅ Answer: C — Projection

Projection displays only certain columns from a table.

Extracting only the rows that meet given conditions to create a new table is which operation?

A  Projection

B  Selection

C  Join

✅ Answer: B — Selection

Selection extracts and displays only the rows meeting given conditions.

Linking multiple tables based on a relationship between certain items to create a new table is which operation?

A  Join

B  Projection

C  Selection

✅ Answer: A — Join

Join links data from multiple tables and displays it as a single table.

### ✍️ Exercise 3: Identify the Operation

A new table combines student data with the club activity from two different tables — which operation is it?

A  Selection

B  Join

C  Projection

✅ Answer: B — Join

The table combined data from the student table and the club table — that is a join.

A new table contains only the records of students whose club code is C2 — which operation is it?

A  Join

B  Projection

C  Selection

✅ Answer: C — Selection

Extracting the rows meeting the condition club code C2 — that is the selection operation.

A new table contains only the student name column — which operation is it?

A  Projection

B  Selection

C  Join

✅ Answer: A — Projection

Showing only a certain column (names) — that is the projection operation.

### ✍️ Exercise 4: Correct Statements

Choose one correct statement regarding relational databases.

A  the operation of extracting records meeting specific conditions is called projection

B  a table consists of records and fields, and allows data to be managed in a table format

C  to maintain data integrity, it is not possible to link data from multiple tables

✅ Answer: B — a table consists of records and fields

A table consists of records (rows) and fields (columns) and allows data management in a table format.

Choose one correct statement regarding SQL.

A  a programming language for manipulating relational databases

B  a mechanism that ensures the integrity of stored data

C  eliminating duplicate data from a relational database

✅ Answer: A — a programming language for manipulating relational databases

SQL is a language used to manipulate data in relational databases.

Choose one correct statement regarding the join operation.

A  using a language called SQL to register or delete data

B  extracting only the records meeting specific conditions

C  creating a new table by linking information from multiple tables based on certain conditions

✅ Answer: C — creating a new table by linking info from multiple tables

Join links data from multiple tables according to specific conditions and displays it as a single table.

Recap

a quick journey through everything we learned today

### The Relational Database

data organized and managed across multiple tables, with relationships eliminating duplicate data.

### The Table Structure

rows are records and columns are fields.

### The SQL Language

a language to manipulate data: register, insert, retrieve, and delete.

### Relational Algebra Operations

selection (rows), projection (columns), and join (linking tables).

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does establishing relationships between tables lead to?
Options:
A. eliminating duplicate data and handling with integrity
B. increasing data chaos
C. slowing data
                  storage
Correct Answer: A
Explanation: Correct! Relationships eliminate duplicate data and handle data with integrity.

Q: What is SQL?
Options:
A. a data protection mechanism
B. a language for manipulating data in relational databases
C. a data storage device
Correct Answer: B
Explanation: Correct! SQL is a language to manipulate data in relational databases.

Q: Displaying only certain columns from a table is which operation?
Options:
A. Selection
B. Join
C. Projection
Correct Answer: C
Explanation: Correct! This is the projection operation.
