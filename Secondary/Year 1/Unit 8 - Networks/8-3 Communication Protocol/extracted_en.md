# بروتوكول الاتصال - Communication Protocol

What will we learn today?

Lesson introduction — Communication Protocol

When you send a message on the Internet, the data is divided and placed into small chunks and sent to the destination. Today we learn what a Packet is, what a Protocol means, the difference between TCP and UDP, the role of IP, the 4-layer TCP/IP model, and the mechanism of communication on the Internet.

Think of it this way:

A mail shipment is like data: it is divided into packets like envelopes, each envelope has the destination address, and the protocol is the traffic rules the whole network agrees on.

### ⚠️ Common Mistakes

Confusing TCP with UDP — TCP guarantees order and retransmission of lost data, while UDP focuses on real-time speed without guaranteeing order.

Confusing the Packet with the header — the Packet is the part holding the data, and the header is the part holding the destination information.

The Packet

the unit that data is divided into — book page 101

A Packet is the unit used when data is divided into small chunks to be transmitted over a network.

Each Packet is sent with a header that includes the destination information.

Think of it this way:

A big file is like a book, the packets are like divided pages, and the header is like the name and address written on each page.

from a big file to small packets

data is divided into small chunks

each chunk is a Packet

sent with a header containing the destination info

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is the unit that data is divided into to be transmitted over a network called?
Options:
A. the header
B. the Packet
C. the router
Correct Answer: B
Explanation: Correct! The Packet is the unit data is divided into.

Q: What contains the destination information in a Packet?
Options:
A. the header
B. the Router
C. the Domain name
Correct Answer: A
Explanation: Correct! The header holds the destination information.

Protocol, TCP and UDP

common rules on the network — book page 101

A Communication protocol is a common agreement in information and communication networks.

TCP is a protocol that divides the data to be sent into packets, arranges the received packets in order, and requests the retransmission of any packets lost during communication.

UDP is a protocol that emphasizes sending data in real time — used for voice calls and streaming video.

Think of it this way:

TCP is like guaranteed shipping that makes sure everything arrived in order, and UDP is like a live broadcast that arrives fast even if a part is lost.

from the common agreement to two different protocols

the protocol — a common agreement on the network

TCP — divide, arrange, retransmit

UDP — real-time speed

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a Communication protocol?
Options:
A. a device connecting cables
B. a common agreement in information and communication networks
C. a number identifying devices
Correct Answer: B
Explanation: Correct! A protocol is a common agreement in information and communication networks.

Q: Which protocol divides data into packets and requests retransmission of lost ones?
Options:
A. UDP
B. IP
C. TCP
Correct Answer: C
Explanation: Correct! TCP divides, arranges, and requests retransmission.

The IP Protocol

the one assigning addresses and delivering packets — book page 101

IP is the protocol that assigns IP addresses to deliver packets to the correct destination.

Think of it this way:

IP is like a postman who knows every house address — it writes the address on each packet and delivers it to the right place.

how IP delivers each packet

assigns IP addresses

delivers packets to the correct destination

part of TCP/IP on the Internet

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the protocol that assigns IP addresses to deliver packets to the correct destination?
Options:
A. the TCP
B. the IP
C. the UDP
Correct Answer: B
Explanation: Correct! IP assigns IP addresses and delivers packets.

Q: What does IP deliver packets to?
Options:
A. any random place
B. a device making sound
C. the correct destination
Correct Answer: C
Explanation: Correct! IP delivers packets to the correct destination.

The 4-Layer TCP/IP Model

data passes through 4 layers — book page 101

TCP/IP is a set of protocols used on the Internet, and the sending and receiving is controlled across four layers.

The Application layer allows communication between applications (like HTTP and SMTP), and the Transport layer handles communication control, error detection, and retransmission (like TCP and UDP).

The Internet layer handles IP address allocation and routing decisions (like IP), and the Network interface layer handles physical connection and interaction between devices (like Ethernet).

Think of it this way:

The four layers are like a delivery company: the office understands your request (Application), shipping checks the packaging (Transport), roads determine the route (Internet), and the truck and road are the physical medium (Network interface).

the journey of data through the four layers

Application — communication between applications

Transport — control, error detection, retransmission

Internet and Network interface — routing and physical connection

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Which layer is responsible for communication between applications?
Options:
A. the Application layer
B. the Transport layer
C. the Internet layer
Correct Answer: A
Explanation: Correct! The Application layer handles communication between applications.

Q: Which layer handles the physical connection between devices?
Options:
A. the Application layer
B. the Transport layer
C. the Network interface layer
Correct Answer: C
Explanation: Correct! The Network interface layer handles the physical connection.

Mechanism of Communication on the Internet

from dividing into packets to arrival — book page 101

The mechanism of sending data on the Internet: (1) divide the data into packets, (2) attach the sender or recipient IP address to the header of each packet, (3) select the optimal route for each packet (called routing) and deliver it to the destination.

Finally, if any packets are missing upon receipt, a retransmission is requested, then the packets are rearranged in order to complete the data in its entirety.

Think of it this way:

The optimal route for a packet is like choosing the fastest street for each delivery car — each car can take a different road with the same result.

the steps of sending data on the Internet

divide the data into packets

attach the IP address to the header

select the optimal route (routing) and reorder the lost

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the first step in sending data on the Internet?
Options:
A. divide the data into packets
B. reorder the packets
C. select the optimal route
Correct Answer: A
Explanation: Correct! The first step is dividing the data into packets.

Q: What is the name of selecting the optimal route for each packet?
Options:
A. encryption
B. dividing into packets
C. Routing
Correct Answer: C
Explanation: Correct! Selecting the optimal route is called routing.

Exercises

Your book: pages 102–104

### ✍️ Exercise 1: Protocols

What is a Communication protocol?

A  a hub connecting devices like computers and printers

B  common rules for communication over a network

C  a description of where information is in a browser and how to fetch it

✅ Answer: B — common rules for communication

A protocol is a common agreement in information and communication networks.

What is the protocol that assigns IP addresses to deliver packets to the correct destination?

A  IP

B  TCP

C  UDP

✅ Answer: A — IP

IP is the protocol that assigns IP addresses and delivers packets to the destination.

What is the protocol that divides data into packets and requests retransmission of lost ones?

A  UDP

B  IP

C  TCP

✅ Answer: C — TCP

TCP divides the data, arranges it, and requests retransmission of any lost packets.

### ✍️ Exercise 2: The TCP/IP Layers

Which layer handles communication control, error detection, and retransmission?

A  the Transport layer

B  the Application layer

C  the Network interface layer

✅ Answer: A — the Transport layer

The Transport layer handles communication control, error detection, and retransmission.

Which layer handles IP address allocation and routing decisions?

A  the Application layer

B  the Internet layer

C  the Transport layer

✅ Answer: B — the Internet layer

The Internet layer handles IP address allocation and routing decisions.

Which layer handles physical connection and interaction between devices?

A  the Application layer

B  the Internet layer

C  the Network interface layer

✅ Answer: C — the Network interface layer

The Network interface layer handles physical connection and interaction between devices.

### ✍️ Exercise 3: Protocol Examples

HTTP and SMTP are examples of which layer?

A  the Application layer

B  the Transport layer

C  the Network interface layer

✅ Answer: A — the Application layer

HTTP and SMTP are examples of the Application layer.

The IP protocol is an example of which layer?

A  the Application layer

B  the Network interface layer

C  the Internet layer

✅ Answer: C — the Internet layer

The IP protocol is an example of the Internet layer.

The Ethernet protocol is an example of which layer?

A  the Application layer

B  the Network interface layer

C  the Transport layer

✅ Answer: B — the Network interface layer

The Ethernet protocol is an example of the Network interface layer.

### ✍️ Exercise 4: The Communication Mechanism

What is the first step in sending data on the Internet?

A  reordering the packets

B  requesting retransmission

C  dividing the data into packets

✅ Answer: C — dividing the data into packets

The first step is dividing the data to be sent into packets.

What is attached to the header of each packet?

A  the sender or recipient IP address

B  the MAC address

C  the site Domain name

✅ Answer: A — an IP address

The sender or recipient IP address is attached to the header of each packet.

If packets are missing upon receipt, what is done?

A  the packets are discarded

B  retransmission is requested, then they are reordered in sequence

C  the data is sent from scratch

✅ Answer: B — retransmit and reorder

Retransmission of missing packets is requested, then they are reordered in sequence.

Recap

a quick journey through everything we learned today

### The Packet

the unit data is divided into — each Packet is sent with a header containing the destination info.

### The Protocol, TCP and UDP

the protocol is a common agreement — TCP guarantees order and retransmission, UDP prefers speed.

### The IP Protocol

assigns IP addresses and delivers packets to the correct destination.

### The TCP/IP Model

four layers: Application, Transport, Internet, and Network interface.

### The Communication Mechanism

divide into packets, attach the IP address to the header, select the optimal route (routing), and reorder the lost.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Over how many layers does TCP/IP control sending and receiving?
Options:
A. four layers
B. six layers
C. two layers
Correct Answer: A
Explanation: Correct! TCP/IP controls across four layers.

Q: Which protocol emphasizes real-time data transmission?
Options:
A. TCP
B. UDP
C. IP
Correct Answer: B
Explanation: Correct! UDP emphasizes real-time transmission.

Q: Which layer contains the HTTP and SMTP protocol examples?
Options:
A. the Application layer
B. the Transport layer
C. the Network interface layer
Correct Answer: A
Explanation: Correct! HTTP and SMTP are examples of the Application layer.
