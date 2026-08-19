# Information Technology for Safety [1]

What is Encryption?

Protecting Messages in Transit

### Basic Encryption Terms

When sending information, we must ensure no one but the intended recipient can read it — click each term:

Encryption

A method used when sending information to prevent it from being intercepted by anyone other than the intended recipient.

💡 After encryption the text becomes unreadable to anyone without the key.

Ciphertext

The encrypted text — this is what gets sent over the network.

💡 Example:

Plaintext

The original, unencrypted text before encryption.

💡 This is the real message you want to deliver.

Decryption

The process of converting ciphertext back into its original plaintext form.

💡 Happens at the receiver so they can read the real message.

Key

The specific procedure or data used for encryption and decryption.

💡 Without the right key, ciphertext cannot be turned back into plaintext.

### Test yourself: the secure sending flow

Choose the correct statement from each pair:

The sender encrypts the plaintext and sends the ciphertext

Correct — encryption happens at the sender before sending

✅ Correct — plaintext is encrypted first, then sent

The sender sends the plaintext as-is without encryption

Wrong — then anyone can read the message

❌ Wrong — encryption is needed so the message is not sent exposed

The recipient decrypts the ciphertext using the key

Correct — decryption happens at the recipient

✅ Correct — the recipient restores the ciphertext to plaintext with the key

The recipient stores the ciphertext as-is without decryption

Wrong — the recipient needs to decrypt to read the message

❌ Wrong — without decryption the message can't be read

Types of Encryption

Symmetric and Public Key

### Two types of encryption — click each type

Symmetric key encryption

An encryption method where the same shared key is used for both encryption and decryption.

💡 The message is encrypted with the sender's shared key and decrypted with the sender's shared key sent in advance.

Public key encryption

An encryption method that uses a publicly shared encryption key (public key) and a private encryption key (private key).

💡 The message is encrypted with the recipient's public key sent in advance, and decrypted with the recipient's private key, which only the recipient possesses.

### Merits and Demerits

Merit of symmetric key

Compared to public-key encryption, the encryption and decryption processing speed is faster.

💡 Its demerit: since anyone with the key can decrypt, a different shared key is needed for each sender.

Demerit of public key

Compared to symmetric-key encryption, the encryption and decryption processing speed is slower.

💡 Its merit: because the public key can be shared freely, key management is easier.

### The Session Key Method

An encryption method that combines symmetric key encryption and public key encryption.

### Why hybrid?

We use the speed of symmetric keys with the easy management of public keys — the best of both worlds.

### ⚠️ Common Mistakes

Confusing the two keys — in public key encryption: encryption uses the public key and only the recipient holds the private one; in symmetric: the same shared key for both.

Forgetting which is faster — symmetric is faster, public key is slower in processing.

Exercises & Quizzes

Final Challenge

### 🔥 Warm Up — Page 36

Try by yourself first, then open the solution.

When sending information, the technology used to prevent it from being leaked or tampered with by anyone other than the intended recipient is called (   [1]   ) — choose the right term:

A  Encryption

B  Decryption

C  Plaintext

D  Ciphertext

✅ Answer: [1] = Encryption — encryption prevents leaks and tampering during transmission. (Decryption converts ciphertext back, plaintext is the original message, and ciphertext is the output — none are the protection itself.)

The original data before encryption is called (   [2]   ) — choose the right term:

A  Ciphertext

B  Plaintext

C  Encryption

D  Key

✅ Answer: [2] = Plaintext — the original unencrypted text.

The act of converting the ciphertext back into plaintext is called (   [3]   ) — choose the right term:

A  Encryption

B  Ciphertext

C  Decryption

D  Plaintext

✅ Answer: [3] = Decryption — decryption converts ciphertext back to plaintext.

During both encryption and decryption, something called a (   [4]   ) is used — choose the right term:

A  Plaintext

B  Ciphertext

C  Encoding

D  Key

✅ Answer: [4] = Key — the key is used for both encryption and decryption. (Plaintext is the original message, ciphertext is the encryption output, and encoding is data representation — none are the tool that encrypts and decrypts.)

Statement A: the encryption key is made public, encryption uses the public key while decryption uses the private key — is it S (symmetric) or P (public)?

S  Symmetric

P  Public

✅ Answer: A = P — encrypting with a public key and decrypting with a private key is public key encryption.

Statement B: encryption uses separate keys held by the recipient — one for encryption and one for decryption — is it S or P?

S  Symmetric

P  Public

✅ Answer: B = P — a public key for everyone and a private key only for the recipient are two separate keys.

Statement C: compared to the other method, the encryption and decryption processing speed is faster — is it S or P?

S  Symmetric

P  Public

✅ Answer: C = S — symmetric encryption is faster in processing than public key.

Statement D: compared to the other method, exchanging the key is more difficult — is it S or P?

S  Symmetric

P  Public

✅ Answer: D = S — in symmetric encryption a secure shared key is needed for each sender, so key exchange is harder than public key.

What is the name of the hybrid encryption method that combines symmetric key encryption and public key encryption?

A  Symmetric key encryption

B  Session key method

C  Public key encryption

D  Decryption

✅ Answer: B — the session key method combines symmetric and public key encryption. (Symmetric and public key encryption are each alone, and decryption converts text back — none are the hybrid method.)

### 🎯 Try — Page 37

Look at the public key encryption diagram and solve by yourself first.

In the public key encryption diagram at the sender — the text before encryption (blank [1]) is called what?

A  Ciphertext

B  Plaintext

C  Encryption

D  Key

✅ Answer: [1] = Plaintext — the original

The process that turns the message into an unreadable form (blank [2]) is called what?

A  Decryption

B  Encoding

C  Encryption

D  Plaintext

✅ Answer: [2] = Encryption — encryption turns the message into an unreadable form. (Decryption restores text, encoding is readable data representation, and plaintext is the original message — none hide the message.)

In public key encryption, encryption (blank [3]) is done using the (   [3]   ) key of the recipient — choose the right term:

A  Private key

B  Shared key

C  Ciphertext

D  Public key

✅ Answer: [3] = Public key — public key encryption uses the recipient's public key. (The private key is used for decryption, the shared key in symmetric encryption, and ciphertext is the output — none are the public-key encryption key.)

In public key encryption, the text after encryption (blank [5]) is called what?

A  Ciphertext

B  Plaintext

C  Decryption

D  Encoding

✅ Answer: [5] = Ciphertext — the encrypted text

At the recipient, the process of returning the ciphertext to its original form (blank [7]) is called what?

A  Encryption

B  Decryption

C  Encoding

D  Key

✅ Answer: [7] = Decryption — the recipient decrypts the message to read it. (Encryption hides the message, encoding is data representation, and a key is a tool — none restore the text to its original form.)

In public key encryption, decryption (blank [8]) is done using the (   [8]   ) key of the recipient — choose the right term:

A  Public key

B  Shared key

C  Private key

D  Plaintext

✅ Answer: [8] = Private key — decryption uses the private key only the recipient holds. (The public key is used for encryption, the shared key in symmetric encryption, and plaintext is the original message — none are the secret decryption key.)

Statement A: a separate key must be prepared for each sender — is it S or P?

S  Symmetric

P  Public

✅ Answer: A = S — in symmetric encryption anyone with the key can decrypt, so a separate key is needed for each sender.

Statement B: the same key is used by the sender for both encryption and decryption — is it S or P?

S  Symmetric

P  Public

✅ Answer: B = S — symmetric encryption uses the same shared key for both.

Statement C: encryption and decryption are slower compared to the other method — is it S or P?

S  Symmetric

P  Public

✅ Answer: C = P — public key encryption is slower than symmetric.

Statement D: exchanging the key is easier compared to the other method — is it S or P?

S  Symmetric

P  Public

✅ Answer: D = P — the public key is shared freely so key exchange is easier.

### 💪 Exercise — Page 37

Look at the symmetric key encryption diagram — final challenge!

In the symmetric key encryption diagram at the sender — the text before encryption (blank [1]) is called what?

A  Ciphertext

B  Decryption

C  Encoding

D  Plaintext

✅ Answer: [1] = Plaintext — the original

The process that encrypts the message (blank [2]) is called what?

A  Encryption

B  Decryption

C  Encoding

D  Key

✅ Answer: [2] = Encryption — encryption turns plaintext into ciphertext.

In symmetric encryption, encryption (blank [3]) is done using the (   [3]   ) key of the sender — choose the right term:

A  Public key

B  Shared key

C  Private key

D  Ciphertext

✅ Answer: [3] = Shared key — symmetric encryption uses the sender's shared key.

In symmetric encryption, the text after encryption (blank [5]) is called what?

A  Plaintext

B  Encryption

C  Ciphertext

D  Encoding

✅ Answer: [5] = Ciphertext — the encrypted text sent over the network.

At the recipient, the process of returning the ciphertext to its original form (blank [7]) is called what?

A  Encryption

B  Encoding

C  Key

D  Decryption

✅ Answer: [7] = Decryption — the recipient decrypts the message to read it. (Encryption hides the message, encoding is data representation, and a key is a tool — none restore the text to its original form.)

In symmetric encryption, decryption (blank [8]) is done using the (   [8]   ) key of the sender — choose the right term:

A  Shared key

B  Public key

C  Private key

D  Plaintext

✅ Answer: [8] = Shared key — the same shared key is used for decryption too.

Among options A to D, choose the one that best describes a characteristic of symmetric key encryption when compared to public key encryption:

A  Allows fast encryption and decryption

B  Uses different keys for encryption and decryption

C  Enables safer distribution of keys

D  Makes key management easier even when communicating with many different parties

✅ Answer: A — symmetric encryption is faster in processing than public key. (Symmetric uses the same key for encryption and decryption, so it is fast; but key distribution is safer in public-key and its management is easier with many parties — so the rest are wrong.)

Summary

Today's Journey

### What did we learn today?

### 1. Encryption

A method that prevents interception — plaintext becomes ciphertext and is restored with the key.

### 2. Symmetric key encryption

The same shared key for encryption and decryption — faster but needs a separate key for each sender.

### 3. Public key encryption

A public key for everyone and a private key only for the recipient — easier management but slower.

### 4. Session key

A hybrid method combining symmetric speed with public-key management ease.

### Key Terms

Protecting a message while sending

The encrypted text

The original text before encryption

Used for encryption and decryption

The shared key in symmetric encryption

The public and private keys in public key encryption

### 🎉 Well done! You completed Information Technology for Safety [1]

Always remember: encrypt your messages to keep them safe — and only the right key opens the right door!

Glossary

Lesson Terms

Search any term or use the filters to narrow down.


## Recall Quiz


### Questions

Q: What is 'Encryption'?
Options:
A. Method preventing interception by non-recipients
B. Decryption
C. The Key
Correct Answer: A
Explanation: Correct! Encryption prevents interception by anyone but the recipient; the encrypted text is ciphertext.

Q: What is the difference between ciphertext and plaintext?
Options:
A. Key and data
B. Encryption and decryption
C. plaintext = original, ciphertext = encrypted
Correct Answer: C
Explanation: Correct! Plaintext is the original unencrypted text; ciphertext is the encrypted result.

Q: What is 'Symmetric key encryption'?
Options:
A. Public + private key
B. Same shared key for both
C. Hash function
Correct Answer: B
Explanation: Correct! Symmetric encryption uses the SAME shared key for both encryption and decryption.
