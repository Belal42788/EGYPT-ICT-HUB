# Threats and Countermeasures [2]

What are Passwords and Authentication?

Core Definition

### The Password

A password is a string of characters used to verify that the user of a given user ID is the legitimate account holder.

Test yourself: what is a password?

A string of characters that verifies the identity of the account holder

That's the correct definition — the password confirms you are the legitimate holder

✅ Correct — that's the definition of a password

A fixed number that stays the same forever

No — a password should be managed and changed, not fixed forever

❌ Wrong — passwords must be managed carefully

How to Create a Strong Password?

Password Creation Guidelines

### Guidelines for Creating Passwords

To make your password hard to guess, follow these guidelines:

### 1. Length of the string

Use a string that is as long as possible.

### 2. Mixing characters

Combine uppercase letters, lowercase letters, numbers, and symbols.

### 3. No personal information

Do not use personal information such as your birthday, email address, or user ID.

### 4. No reuse

Do not reuse passwords used for other services.

### The One-Time Password

Click the card to understand the one-time password concept:

One-time password

A password that changes at regular intervals and can only be used once.

💡 Even if leaked, it becomes useless quickly because it is used once — this prevents unauthorized access using leaked passwords.

### ⚠️ Common Mistakes

Writing the password on paper or sticky notes — anyone nearby can see it.

Keeping the default password initially assigned — it must be changed immediately because it may have been leaked.

Authentication and Its Types

Verifying User Identity

### What is Authentication?

Authentication is the process of verifying the identity of a user on a computer or network — making sure you are who you claim to be.

There are 3 main types of authentication — click each one:

Knowledge-based authentication

Authentication using information known only to the individual.

💡 Examples: User ID and password, PIN code.

Biometric authentication

Authentication using the physical or behavioral characteristics of the individual.

💡 Examples: fingerprint, iris, vein pattern, handwriting.

Possession-based authentication

Authentication using an item that the individual possesses.

💡 Examples: IC card, one-time password, SMS-based verification.

### Two-Factor and Two-Step Authentication

Sometimes we combine more than one type for stronger security — click each card:

Two-factor authentication

A method that combines two different types of factors — knowledge, biometrics, and possession.

💡 Example: password + fingerprint = two different factor types.

Two-step authentication

A method that performs authentication in two steps using two pieces of information from the same type of factor.

💡 Example: password + PIN = both from the knowledge factor.

### ⚠️ Common Mistakes

Confusing two-factor and two-step authentication — the first combines two different factor types, the second uses two steps of the same type.

Thinking SMS is a knowledge factor — no, SMS is possession because it is something you own.

Information Security Measures

Defending Systems and Data

### Access Control and the Firewall

Click each measure to understand it:

Access control

A method of limiting access to computer systems or data so that only specific users, verified through authentication, are allowed to use them.

💡 Without authentication there is no access control — they work together.

Firewall

A system installed at network entry points to prevent unauthorized access from outside and to stop data leaks from within.

💡 It hides internal LAN computers from external networks.

### Countermeasures Against Computer Viruses

To protect yourself from viruses, there are 3 essential measures:

### 1. Antivirus software

Install antivirus software to remove or isolate viruses, and keep the virus definitions within the software up to date.

### 2. Keep everything updated

Always keep the OS and application software updated to prevent security holes (vulnerabilities).

### 3. Regular backups

Regularly create backups of your data to protect against loss.

### ⚠️ Common Mistakes

Thinking antivirus software alone is enough — no, you must keep definitions updated because new viruses appear daily.

Ignoring backups — if your data is lost or erased, the backup is your only safety net.

Exercises & Quizzes

Final Challenge

### 🔥 Warm Up — Page 29

Try by yourself first, then open the solution.

Choose the one incorrect statement regarding password best practices from A to D:

A  It is best to keep using the default password that was initially assigned

B  Do not reuse the same password across multiple services

C  Combine letters, numbers, and symbols when creating a password

D  Avoid easily guessable information such as your name or birthday

✅ Answer: A — if the initial password was assigned via email or memo, it may have been leaked to a third party, so it must be changed immediately. (Not reusing passwords, mixing letters and numbers, and avoiding guessable info are all correct practices — so the wrong statement is only A.)

Choose the one incorrect statement about one-time passwords (A is the false one):

A  Using a one-time password strengthens overall security

B  If a one-time password is leaked, it can easily lead to unauthorized access

C  A one-time password has a limited usage time and becomes invalid after expiration

D  It can prevent unauthorized access using leaked passwords

✅ Answer: B — a one-time password is used once and expires quickly, so even if leaked it cannot easily lead to unauthorized access. B, C, and D are correct.

Choose the one correct example of biometric authentication from A to D:

A  Authentication using a user ID and password assigned to each individual

B  Authentication by scanning a fingerprint on a sensor

C  Authentication using an SMS sent to a smartphone

D  Authentication using a one-time password

✅ Answer: B — biometric authentication uses physical or behavioral characteristics like fingerprint, iris, vein, or handwriting. A is knowledge-based; B and D are possession-based.

If a password can use the digits 0 to 9 and lowercase letters a to z, how many combinations are there for a 3-character password? (Answer in the form aⁿ)

A  36³

B  36×3

C  3×36

D  36×36

✅ Answer: A — there are 10 digits (0–9) and 26 letters (a–z) = 36 possible characters. Each of the 3 characters can be any of the 36, so the total is 36×36×36 = 36³ combinations. (36×3 or 3×36 add repetitions, and 36×36 is only 2-character combos — not 3.)

### 🎯 Try — Page 30

Put your solution by yourself first, then open the solution.

Choose the one incorrect statement regarding password best practices from A to D:

A  Do not use information such as phone numbers, birthdays, email addresses, or user IDs

B  Do not reuse the same password across different services

C  Use a mix of uppercase and lowercase letters, numbers, and symbols

D  It is best to continue using the initial password without changing it

✅ Answer: D — the initial password must be changed immediately, not kept.

Choose the one thing that can be prevented by using a one-time password from A to D:

A  Password theft during transmission over a network

B  Tampering with confidential files after unauthorized access

C  Unauthorized access using a leaked password

D  Infection by a virus through malicious software

✅ Answer: C — a one-time password becomes useless after use, so a leaked password cannot be used for unauthorized access. (Theft during transmission, tampering after access, and virus infection are not prevented by a one-time password — it only blocks use of a leaked password.)

Choose the one correct example of biometric authentication from A to D:

A  Authentication using a digital certificate

B  Authentication using the shape of a fingerprint or vein pattern

C  Authentication based on whether the user can correctly read distorted text in an image

D  Authentication using a one-time password

✅ Answer: B — fingerprint and vein pattern are physical characteristics = biometric authentication. (A digital certificate is possession, a distorted text is a CAPTCHA visual test, and a one-time password is knowledge — none are biological body traits.)

To protect computers and networks from threats, security measures are needed — choose the term for blank [1]: determining whether a person is authorized to access is called (   [1]   ).

A  Firewall

B  Antivirus software

C  Authentication

D  Encryption

✅ Answer: C — Authentication: verifying whether a person is authorized to access is called authentication. (A firewall guards the network, antivirus protects against viruses, and encryption hides data — none determine identity and permission.)

From the same paragraph — choose the term for blank [2]: as a countermeasure against computer viruses, install (   [2]   ).

A  Encryption

B  Antivirus software

C  Firewall

D  Security hole

✅ Answer: B — installing antivirus software is a countermeasure against computer viruses. (Encryption protects data, not viruses; a firewall blocks access; and a security hole is the problem itself, not its solution.)

From the same paragraph — choose the term for blank [3]: the (   [3]   ) of hardware and operating systems fights viruses.

A  Encryption

B  Security hole

C  Firewall

D  Update

✅ Answer: D — updating hardware and operating systems prevents security holes.

From the same paragraph — choose the term for blank [4]: the system that hides internal LAN computers from external networks and prevents unauthorized access is called (   [4]   ).

A  Antivirus software

B  Encryption

C  Firewall

D  Update

✅ Answer: C — the firewall hides internal LAN computers and prevents unauthorized access. (Antivirus fights viruses, encryption hides data, and updates patch holes — none hide the internal network.)

What is the term for restricting access so that only specific users can operate a computer system or network?

A  Access control

B  Authentication

C  Firewall

D  Encryption

✅ Answer: A — access control restricts access to specific users only. (Authentication verifies identity, a firewall filters network traffic, and encryption prevents reading data — none restrict who reaches a system.)

If a password uses 26 characters (A to Z), how many times greater is the maximum number of brute-force attempts required when increasing the length from 4 characters to 6 characters?

A  26 times

B  26² times

C  2 times

D  26⁴ times

✅ Answer: B — attempts for 6 characters = 26⁶, for 4 characters = 26⁴. Ratio = 26⁶ ÷ 26⁴ = 26² times. (The length difference is 2 characters, so the factor is 26²; 26 alone is one character, 26⁴ is the ratio inverted, and 2× is far too small — the rest are wrong.)

### 💪 Exercise — Page 31

Final challenge — build the answer by yourself then check.

Choose the one incorrect statement regarding password creation from A to D:

A  Use the shortest possible string to make it easy to remember

B  Do not reuse passwords used for other services

C  Do not write passwords down in a notebook or on sticky notes

D  Combine uppercase and lowercase letters, numbers, and symbols

✅ Answer: A — a password should be as long as possible, not the shortest.

Choose the one threat that can be prevented by using a one-time password from A to D:

A  Theft of user ID through social engineering

B  Unauthorized access through brute-force attacks

C  Virus infection through a security hole

D  Unauthorized access using a leaked password

✅ Answer: D — a one-time password becomes useless after use, preventing access with a leaked password. (Theft via social engineering, brute-force attacks, and virus infection are not prevented — it only blocks a leaked password.)

Choose the one correct example of biometric authentication from A to D:

A  Authentication using physical characteristics such as fingerprints or irises

B  Authentication using a personal ID or password

C  Authentication based on an individual's problem-solving ability

D  Authentication using physical performance such as grip strength or flexibility

✅ Answer: A — physical characteristics like fingerprints and irises are biometric authentication.

System administrators must install a (   [1]   ) to prevent unauthorized access from outside and minimize tampering or leakage — choose the term for blank [1]:

A  Antivirus software

B  Access control

C  Firewall

D  Security

✅ Answer: C — a firewall prevents unauthorized access from outside and minimizes tampering or leakage. (Antivirus fights viruses, access control restricts to specific users, and the word security is too general — none are the external network barrier, so the rest are wrong.)

From the same paragraph — to deal with the constant emergence of new (   [2]   ), it is essential to introduce (   [3]   ) and patch (   [4]   ) — choose the term for blank [2]:

A  Access control

B  Firewall

C  Security hole

D  Computer virus

✅ Answer: D — new computer viruses constantly emerge; to deal with them we introduce antivirus software and patch security holes. (Access control restricts users, a firewall is a network barrier, and a security hole is a system weakness — none are what constantly emerges and needs countermeasures.)

From the same paragraph — choose the term for blank [3]: it is essential to introduce (   [3]   ) to deal with new viruses:

A  Access control

B  Security hole

C  Antivirus software

D  Firewall

✅ Answer: C — introducing antivirus software is essential against new viruses. (Access control restricts users, a security hole is the problem, and a firewall blocks external access — none fight viruses.)

From the same paragraph — choose the term for blank [4]: and patch (   [4]   ):

A  Antivirus software

B  Security hole

C  Computer virus

D  Firewall

✅ Answer: B — we patch security holes to close the doors viruses use to enter.

From the same paragraph — choose the term for blank [5]: to prevent unauthorized access, (   [5]   ) is useful for restricting system or network usage to specific users only:

A  Security hole

B  Computer virus

C  Security

D  Access control

✅ Answer: D — access control restricts system or network usage to specific users only. (A security hole is a system weakness, a virus is malicious software, and

What is the name of the authentication method that combines two different elements from

A  Two-factor authentication

B  Two-step authentication

C  Access control

D  Biometric authentication

✅ Answer: A — two-factor authentication combines two different types of the three factors. (Two-step authentication uses two steps of the same type, access control is general restriction, and biometric is just one factor — none combine two different types.)

If a password can use the digits 0–9 and lowercase letters a–z, how many possible combinations are there for a 4-character password? (Answer in the form aⁿ)

A  36×4

B  4×36

C  36⁴

D  36×36

✅ Answer: C — there are 36 possible characters and each of the 4 characters can be any of them, so the total is 36×36×36×36 = 36⁴ combinations.

Summary

Today's Journey

### What did we learn today?

### 1. The password

A string of characters that verifies the account holder — keep it long, mixed, and free of personal info.

### 2. The one-time password

Changes at regular intervals and is used once — prevents access with leaked passwords.

### 3. Types of authentication

Knowledge-based, biometric, and possession-based — they can be combined in two-factor or two-step authentication.

### 4. Information security measures

Access control, firewall, antivirus software, constant updates, and regular backups.

### Key Terms

A string that verifies the account holder's identity

A password used only once

Verifying the user's identity

Physical or behavioral characteristics of a person

Prevents unauthorized access

Only authorized users are allowed

### 🎉 Well done! You completed Threats and Countermeasures in Information Security [2]

Always remember: create a strong password, keep authentication strong, and put a firewall between you and the risks!

Glossary

Lesson Terms

Search any term or use the filters to narrow down.


## Recall Quiz


### Questions

Q: What is a Password?
Options:
A. A string verifying the legitimate account holder
B. A password that changes, used once
C. The process of verifying user identity
Correct Answer: A
Explanation: Correct! A password is a string of characters used to verify the user is the legitimate account holder.

Q: What is a One-time-password (OTP)?
Options:
A. A fixed password
B. Changes periodically, usable once
C. Fingerprint/iris verification
Correct Answer: B
Explanation: Correct! An OTP changes at regular intervals and can be used only once.

Q: What is an example of Biometric authentication?
Options:
A. PIN code
B. User ID + password
C. Fingerprint / iris / voice
Correct Answer: C
Explanation: Correct! Biometric authentication uses physical traits like fingerprint, iris, voice.
