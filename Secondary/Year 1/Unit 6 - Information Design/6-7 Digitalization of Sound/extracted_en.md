# رقمنة الصوت - Digitalization of Sound

What will we learn today?

Lesson introduction — digitalizing sound

Sound is naturally analog waves — but digital devices like CDs and DVDs store sound digitally. Today we learn how sound is converted from an analog wave to digital data — using a method called PCM — and how to calculate the data volume.

Think of it this way:

The wave is like a continuous line, and the computer takes points from it at regular intervals and turns them into numbers — that is how the whole wave gets stored.

### ⚠️ Common Mistakes

Mixing up analog and digital — the wave that travels through the air is analog, and what is stored on a CD is digital.

Confusing frequency with period — frequency is the number of waves in one second, and period is the time of a single wave.

Frequency and Period

basic sound concepts — book page 69

Sound is a phenomenon that travels through the vibration of air, and its shape is a wave. That wave is analog data — and to store it on a CD it must be converted to digital data.

The frequency is the number of waves contained in one second, and its unit is the hertz [Hz]. The period is the time it takes for one wave to propagate, and its unit is seconds.

Remember:

When the frequency increases, the period decreases — they are opposites.

the sound wave: frequency and period

the original sound wave

frequency = number of waves per second

period = time of one wave

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is the frequency?
Options:
A. the number of waves in one second
B. the time a single wave takes
C. the vibration of the air we hear
Correct Answer: A
Explanation: Correct! The frequency = the number of waves in one second, and its unit is the hertz.

Q: What is the unit of frequency?
Options:
A. the byte B
B. the hertz Hz
C. the second
Correct Answer: B
Explanation: Correct! The hertz [Hz] is the unit of frequency.

### ⚠️ Common Mistakes

Confusing frequency with period — frequency is the number of waves per second (Hz), and period is the time of one wave (seconds).

Forgetting that frequency and period are opposites — when one increases the other decreases.

The PCM Method

Sampling → Quantization → Encoding — book page 69

The Pulse Code Modulation (PCM) method is a way to convert analog audio data into a binary code — and it consists of 3 steps in order.

The steps in order:

① Sampling → ② Quantization → ③ Encoding.

the three steps to digitalize sound

① Sampling

② Quantization

③ Encoding

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the correct order of the steps to digitalize sound?
Options:
A. Encoding → Quantization → Sampling
B. Quantization → Sampling → Encoding
C. Sampling → Quantization → Encoding
Correct Answer: C
Explanation: Correct! Sampling first, then quantization, then encoding.

Q: In the sampling step, what do we divide?
Options:
A. the horizontal axis (time)
B. the vertical axis (voltage)
C. a third axis for speed
Correct Answer: A
Explanation: Correct! We divide the horizontal axis (time) at regular intervals and take the wave height.

### ⚠️ Common Mistakes

Reversing the order of the steps — sampling must come first on the horizontal axis, then quantization on the vertical, then encoding.

Confusing the sampling period with the sampling frequency — the first is the interval time, the second is the number of samples per second.

Amount of Sound Data

the formula: frequency × quantization bit depth × channels — book page 70

Channels are the number of signals used to transmit sound. Playback with a single signal is called monaural, and with two different signals it is called stereo.

The formula:

data amount [bits] per second = sampling frequency × quantization bit depth × number of channels.

Increasing the sampling frequency and the quantization bit depth makes the sound closer to the original wave (better quality), but the data amount also increases.

Worked example: 44,100 Hz × 16 bits × 2 channels = how much?

we multiply: 44100 × 16 × 2

= 1,411,200 bits per second

divide by 8 then 1000 → 176 KB

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the formula for the audio data amount per second?
Options:
A. frequency ÷ bit depth
B. frequency × bit depth × channels
C. period × frequency
Correct Answer: B
Explanation: Correct! The amount = sampling frequency × quantization bit depth × channels.

Q: What is playback with two different signals called?
Options:
A. Monaural
B. Binaural
C. Stereo
Correct Answer: C
Explanation: Correct! With two different signals it is called stereo.

### ⚠️ Common Mistakes

Forgetting that the result is in bits — to convert it to bytes we divide by 8.

Forgetting to multiply by the duration in seconds — if the duration is in minutes, we multiply by 60.

The Sampling Theorem

the condition: the sampling frequency exceeds twice the highest frequency — book page 69

The sampling theorem says: if the sampling frequency exceeds twice the highest frequency contained in the original analog waveform, the original waveform can be accurately reconstructed from the digitized data.

Think of it this way:

If the highest frequency in the wave is 40 Hz, the sampling frequency must be greater than 80 Hz to reconstruct the wave exactly.

why the sampling frequency must be twice the original frequency

the highest frequency in the wave (f)

we sample at more than 2×f

the original wave is restored accurately

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: To reconstruct the original wave accurately, the sampling frequency must be?
Options:
A. greater than twice the highest frequency
B. less than twice the highest frequency
C. equal to the highest frequency only
Correct Answer: A
Explanation: Correct! It must be greater than twice the highest frequency of the original wave.

Q: If the highest frequency of the wave is 40 Hz, what sampling frequency do we use?
Options:
A. just 40 Hz
B. greater than 80 Hz
C. less than 20 Hz
Correct Answer: B
Explanation: Correct! Greater than 80 Hz = twice 40 Hz.

### ⚠️ Common Mistakes

Confusing doubling the frequency with equaling it — the sampling frequency must be greater than double, not equal to it.

Forgetting that increasing frequency and depth increases the data size — high quality has a cost.

Exercises

Your book: pages 70–72

### ✍️ Exercise 1: the order of the conversion steps

What is the correct order to digitalize an analog sound signal?

A  Encoding → Quantization → Sampling

B  Quantization → Sampling → Encoding

C  Sampling → Quantization → Encoding

✅ Answer: C

sampling first, then quantization, then encoding.

Which one allows the most accurate reconstruction of the original wave?

A  increase frequency and increase bit depth

B  increase frequency and decrease bit depth

C  decrease frequency and increase bit depth

✅ Answer: A

increasing both the frequency and the bit depth gives the closest representation to the original wave.

### ✍️ Exercise 2: calculating the data amount (seconds)

Music at 44,100 Hz, 16 bits, and 2 channels — the data for 1 second in KB?

A  88 KB

B  352 KB

C  176 KB

✅ Answer: C — 176 KB

44100 × 16 × 2 = 1,411,200 bits, ÷8 = 176,400 bytes, ÷1000 ≈ 176 KB.

The same music in 1-channel monaural — the data for 1 second in KB?

A  176 KB

B  88 KB

C  44 KB

✅ Answer: B — 88 KB

44100 × 16 × 1 = 705,600 bits, ÷8 = 88,200 bytes, ÷1000 ≈ 88 KB.

44,100 Hz, 16 bits, 1 channel — the data for 10 seconds in KB?

A  882 KB

B  8820 KB

C  88 KB

✅ Answer: A — 882 KB

44100 × 16 × 1 × 10 = 7,056,000 bits, ÷8 = 882,000 bytes, ÷1000 = 882 KB.

### ✍️ Exercise 3: calculating the data amount (minutes)

44.1 kHz, 24 bits, 2 channels — the data for 1 minute in MB?

A  8 MB

B  16 MB

C  32 MB

✅ Answer: B — 16 MB

44100 × 24 × 2 × 60 = 127,008,000 bits, ÷8 = 15,876,000 bytes, ÷1000 ÷ 1000 ≈ 16 MB.

192 kHz, 24 bits, 2 channels — the data for 1 minute in KB?

A  34,560 KB

B  138,240 KB

C  69,120 KB

✅ Answer: C — 69,120 KB

192,000 × 24 × 2 × 60 = 552,960,000 bits, ÷8 = 69,120,000 bytes, ÷1000 = 69,120 KB.

96 kHz, 24 bits, 2 channels — the data for 1 minute in MB?

A  70 MB

B  35 MB

C  17 MB

✅ Answer: B — 35 MB

96,000 × 24 × 2 × 60 = 276,480,000 bits, ÷8 = 34,560,000 bytes, ÷1000 ÷ 1000 ≈ 35 MB.

### ✍️ Exercise 4: songs on a CD

44.1 kHz, 16 bits, 2 channels — the data for 3 minutes in MB?

A  32 MB

B  16 MB

C  64 MB

✅ Answer: A — 32 MB

44100 × 16 × 2 × 180 = 254,016,000 bits, ÷8 = 31,752,000 bytes, ÷1000 ÷ 1000 ≈ 32 MB.

How many songs (3 minutes each) fit on a 650 MB CD?

A  about 40 songs

B  about 10 songs

C  about 20 songs

✅ Answer: C — about 20 songs

650 ÷ 32 ≈ 20.3, meaning about 20 songs.

Recap

a quick journey through everything we learned today

### Frequency and Period

frequency is the number of waves per second (Hz), and period is the time of one wave (seconds).

### The PCM method

Sampling → Quantization → Encoding — it converts the analog wave to a binary code.

### Data amount and quality

frequency × bit depth × channels — and higher quality needs more data.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the order of the steps to digitalize sound?
Options:
A. Encoding → Sampling → Quantization
B. Quantization → Encoding → Sampling
C. Sampling → Quantization → Encoding
Correct Answer: C
Explanation: Correct! Sampling, then Quantization, then Encoding.

Q: 44,100 Hz, 16 bits, 2 channels — the data for 1 second in KB?
Options:
A. 88 KB
B. 176 KB
C. 352 KB
Correct Answer: B
Explanation: Correct! 44100 × 16 × 2 = 1,411,200 bits ÷8 ÷1000 ≈ 176 KB.

Q: If the highest frequency of the wave is 40 Hz, the sampling frequency must be?
Options:
A. greater than 80 Hz
B. exactly 40 Hz
C. less than 20 Hz
Correct Answer: A
Explanation: Correct! Greater than twice the frequency, meaning greater than 80 Hz.
