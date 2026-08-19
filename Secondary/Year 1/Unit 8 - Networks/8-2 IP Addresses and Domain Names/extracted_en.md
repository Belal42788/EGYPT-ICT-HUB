# عناوين IP وأسماء النطاقات - IP Addresses and Domain Names

What will we learn today?

Lesson introduction — IP Addresses and Domain Names

Every device on a network needs an address that identifies it — exactly like a house number. Today we learn what an IP address is, its Global and Private types, the IP address exhaustion problem and its solution with IPv6, the Domain name, and the DNS system that translates names into addresses.

Think of it this way:

An IP address is like your house number, a Domain name is like an easy-to-remember house name, and the DNS is like a phone book that takes you from the name to the number.

### ⚠️ Common Mistakes

Confusing the Domain name with the IP address — the Domain name is a character string for humans, and the IP is a unique number for the device.

Confusing the DNS with the Domain name — the DNS is a system that translates between names and addresses, not the name itself.

The IP Address

a unique address for every device — book page 99

An IP address is a unique identification number, like an address, assigned to every device on an information and communication network.

Representing an IP address in binary using 32 bits is called IPv4 — it is written in four blocks of 8 bits each, separated by a dot (.), expressed in decimal from 0 to 255.

Think of it this way:

IPv4 is like a house address with 4 parts: street + district + city + governorate — with the parts separated by dots like 192.168.0.1.

from the binary number to an IPv4 address

a unique identification number for each device

IPv4 — binary using 32 bits

four blocks from 0 to 255 separated by dots

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is an IP address?
Options:
A. a unique identification number like an address for each device
B. a decorative color string
C. a device that makes sound
Correct Answer: A
Explanation: Correct! An IP is a unique identification number like an address for each device.

Q: How many blocks, separated by dots, is an IPv4 address written in?
Options:
A. two blocks
B. four blocks
C. six blocks
Correct Answer: B
Explanation: Correct! IPv4 is written in four blocks separated by dots.

Global and Private IP

on the Internet or in the local network — book page 99

A Global IP address is an address used on the Internet — unique and never duplicated.

A Private IP address is an address used within a local network like a LAN — freely usable within the same company.

Think of it this way:

The Global is like a passport number unique worldwide, and the Private is like an internal phone extension that can repeat inside each company.

from the local network to the Internet

the Private — inside the LAN

the Global — on the Internet

each address serves a specific place

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the address used on the Internet called?
Options:
A. the Private IP
B. the DNS
C. the Global IP
Correct Answer: C
Explanation: Correct! The Global IP is used on the Internet.

Q: What is the address freely usable inside a local network called?
Options:
A. the Private IP
B. the Global IP
C. IPv6
Correct Answer: A
Explanation: Correct! The Private IP is freely used inside the LAN.

IP Exhaustion and IPv6

the problem and the solution — book page 99

Due to the rapid proliferation of the Internet, there are almost no new IPv4 addresses available for allocation.

That is why we are currently transitioning to IPv6 — IP addresses expanded to 128 bits.

Think of it this way:

IPv4 is like a city running out of house numbers, and IPv6 is like a new city with plenty of numbers for all the new houses.

from 32 bits to 128 bits

the exhaustion problem — IPv4 addresses ran out

the solution — IPv6 with 128 bits

many more addresses for the future

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the IPv4 address problem happening now?
Options:
A. too many addresses
B. a color problem
C. almost no new addresses available
Correct Answer: C
Explanation: Correct! Due to rapid proliferation there are almost no new IPv4 addresses.

Q: IPv6 addresses are expanded to how many bits?
Options:
A. 128 bits
B. 32 bits
C. 64 bits
Correct Answer: A
Explanation: Correct! IPv6 was expanded to 128 bits.

The Domain Name

a name built for humans instead of numbers — book page 99

A Domain name is a string of characters assigned to make the numerical IP address more understandable for humans.

Think of it this way:

Instead of remembering numbers like 203.216.206.63, we remember an easy name like example.com — that name is the Domain name.

from a hard number to an easy name

the IP number — hard for humans

the Domain name — an easy name

we must map the name to the number

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a Domain name?
Options:
A. a unique number for the device
B. an easy character string for humans instead of numbers
C. the system translating between names and numbers
Correct Answer: B
Explanation: Correct! A Domain name is a character string that makes the IP address easier for humans.

Q: Which of these is an example of a Domain name?
Options:
A. 192.168.0.1
B. 555-1234-5678
C. example.com
Correct Answer: C
Explanation: Correct! example.com is a character string — that is a Domain name.

The DNS System

associates names with addresses — book page 99

DNS is a system that associates domain names with IP addresses and vice versa. The DNS server is responsible for fulfilling that role.

Think of it this way:

When you type a website name, DNS translates the name to its IP and gets you there — like a giant phone book.

how the name reaches the address

the DNS — a system linking the name to the address

the DNS server — the one that executes

the result — we reach the requested site

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What does DNS translate between?
Options:
A. colors and sounds
B. domain names and IP addresses
C. files and folders
Correct Answer: B
Explanation: Correct! DNS maps domain names to IP addresses and vice versa.

Q: What is responsible for associating domain names with IP addresses?
Options:
A. the DNS server
B. the Router
C. the Hub
Correct Answer: A
Explanation: Correct! The DNS server is the one that does this role.

Exercises

Your book: pages 99–100

### ✍️ Exercise 1: IPv4

Which of these is a correct example of an IPv4 address?

A  192.168.0.1

B  kantei.go.jp

C  555-1234-5678

✅ Answer: A — 192.168.0.1

IPv4 is written in four blocks separated by dots, each from 0 to 255.

Which of these is a correct example of an IPv4 address?

A  00.00.11.aa.bb.cc

B  10.123.45.67

C  050-1234-5678

✅ Answer: B — 10.123.45.67

IPv4 is written in four blocks separated by dots, each from 0 to 255.

Which of these is a correct example of an IPv4 address?

A  saiyo@example.co.jp

B  070-1234-5678

C  203.216.206.63

✅ Answer: C — 203.216.206.63

IPv4 is written in four blocks separated by dots, each from 0 to 255.

### ✍️ Exercise 2: Global and Private

What is the address uniquely assigned on the Internet with no duplication called?

A  the Global IP

B  the Private IP

C  the Domain name

✅ Answer: A — the Global IP

The Global IP is unique on the Internet with no duplication.

What is the address freely used within a local network like a LAN called?

A  the Global IP

B  the Private IP

C  IPv6

✅ Answer: B — the Private IP

The Private IP is freely used inside the LAN.

Can a Global IP be freely used within a local network?

A  yes, normally

B  it is not used at all

C  no — that is the Private

✅ Answer: C — no

The one freely used inside a local network is the Private IP.

### ✍️ Exercise 3: IPv4 and IPv6

What solved the IP address exhaustion problem?

A  IPv4 with 32 bits

B  IPv6 with 128 bits

C  the DNS

✅ Answer: B — IPv6

IPv6 was expanded to 128 bits, providing more addresses.

Which statement is correct?

A  exhaustion was solved by IPv6 with 128 bits

B  IPv4 is four numbers from 0 to 256

C  the Global IP is freely used inside the LAN

✅ Answer: A — IPv6 with 128 bits

The exhaustion solution is IPv6 with 128 bits — that is the correct statement.

In how many bits is IPv4 represented in binary?

A  128 bits

B  32 bits

C  64 bits

✅ Answer: B — 32 bits

IPv4 is represented in binary using 32 bits.

### ✍️ Exercise 4: DNS and the Domain name

What is the character string that makes an IP address easier for humans called?

A  the IP address

B  the DNS

C  the Domain name

✅ Answer: C — the Domain name

The Domain name is a character string that makes the address easier for humans.

What is the system that maps domain names to IP addresses and vice versa?

A  the Domain name

B  the DNS

C  IPv6

✅ Answer: B — the DNS

DNS is the system that maps domain names to IP addresses.

What is responsible for executing the name-to-address mapping?

A  the DNS server

B  the Hub

C  the Router

✅ Answer: A — the DNS server

The DNS server is responsible for mapping names to addresses.

Recap

a quick journey through everything we learned today

### The IP address

a unique identification number for each device — IPv4 is 32 bits in four blocks from 0 to 255.

### The Global and the Private

the Global is unique on the Internet, and the Private is freely used inside the LAN.

### The exhaustion

IPv4 addresses are running out — the solution is IPv6 with 128 bits.

### The Domain name

a character string that makes IP addresses easier for humans to understand.

### The DNS

a system linking domain names to IP addresses and vice versa — its server executes the role.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How many bits are IPv6 addresses expanded to?
Options:
A. 32 bits
B. 64 bits
C. 128 bits
Correct Answer: C
Explanation: Correct! IPv6 has addresses expanded to 128 bits.

Q: What translates a site name into its IP?
Options:
A. the DNS
B. the Domain name
C. IPv6
Correct Answer: A
Explanation: Correct! DNS translates a site name into its IP.

Q: An IPv4 address is written in four blocks, each from 0 to what?
Options:
A. 256
B. 255
C. 999
Correct Answer: B
Explanation: Correct! Each IPv4 block is from 0 to 255.
