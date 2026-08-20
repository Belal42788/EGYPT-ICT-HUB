# تمثيل الفيديو وضغط البيانات - Digital Representation and Compression Technology for Videos

What will we learn today?

Lesson introduction — videos and data compression

Just as images are stored as pixels, videos also have their own special way of digital representation and storage. Today we learn how a video is composed, how to calculate its data size, and how we compress data to save space and storage.

Think of it this way:

A video is a series of still images displayed one after another quickly — and because the human eye has the afterimage phenomenon, we feel the images are moving.

### ⚠️ Common Mistakes

Confusing Frame with Frame rate — the first is one still image, the second is the number of images displayed per second.

Confusing Compression with Decompression — the first reduces the data, the second restores it to its original state.

The Video Mechanism

how a video moves — book page 77

A video is an electronic medium that creates the illusion of movement by displaying a series of still images in succession — relying on the afterimage phenomenon that occurs due to the characteristics of human vision.

A frame is each still image that composes a video. The frame rate is the number of frames displayed per second, and its unit is fps.

Remember:

the higher the frame rate number, the smoother the video appears — but the data size becomes larger.

from still images to the illusion of movement

a series of still images

displayed in succession quickly

afterimage phenomenon → illusion of movement

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What does a video use to create the illusion of movement?
Options:
A. the light refraction phenomenon
B. the afterimage phenomenon
C. the thermal expansion phenomenon
Correct Answer: B
Explanation: Correct! A video uses the afterimage phenomenon.

Q: As the frame rate increases, what happens?
Options:
A. the video appears smoother but the data becomes larger
B. the video appears smoother and the data decreases
C. the video becomes choppy and smaller
Correct Answer: A
Explanation: Correct! The video appears smoother but the data size becomes larger.

Calculating the Video Data Amount

the amount formula — book page 77

The amount of video data = the amount of image data [B] × the frame rate [fps] × the time [seconds].

So we first calculate the size of one frame, then multiply by the number of frames per second, then by the number of seconds.

Example:

a 10-second video at 30 fps, each frame a 24-bit image at 500 × 200 resolution — its size: 500 × 200 × 24 ÷ 8 = 300,000 B, then 300,000 × 30 × 10 = 90,000,000 B ÷ 1000 ÷ 1000 = 90 MB.

the steps to calculate the video size

one frame = 300,000 B

× 30 fps × 10 seconds

= 90,000,000 B → 90 MB

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the formula for the amount of video data?
Options:
A. image data + frame rate + time
B. image data × frame rate × time
C. image data ÷ frame rate × time
Correct Answer: B
Explanation: Correct! The amount = image data × frame rate × time.

Q: A 10-second video at 30 fps with each frame = 300,000 B — its size in MB?
Options:
A. 90 MB
B. 9 MB
C. 900 KB
Correct Answer: A
Explanation: Correct! 300,000 × 30 × 10 = 90,000,000 B ÷ 1000 ÷ 1000 = 90 MB.

Data Compression

reduce the data while preserving the content — book page 77

Compression is a process of reducing the amount of data as much as possible while preserving the content of the data.

Decompression is a process of restoring compressed data to its original state. The compression ratio is the extent to which data has been compressed, and we calculate it by: Compression ratio [%] = (amount of data after compression ÷ original amount of data) × 100.

Example:

a video of 90 MB was converted to a compressed file of 30 MB — the compression ratio = 30 ÷ 90 × 100 = 33.3% ≈ 33%.

from compression to decompression

original data = 90 MB

after compression = 30 MB

compression ratio = 33%

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is decompression?
Options:
A. reducing the amount of data
B. deleting the data permanently
C. restoring compressed data to its original state
Correct Answer: C
Explanation: Correct! Decompression restores compressed data to its original state.

Q: Original data of 90 MB was converted to 30 MB — what is the compression ratio?
Options:
A. 33%
B. 300%
C. 133%
Correct Answer: A
Explanation: Correct! 30 ÷ 90 × 100 = 33.3% ≈ 33%.

Lossless and Lossy Compression

the two compression types and the main methods — book pages 77–78

Lossless compression is a compression method that allows the complete restoration of the original data from the compressed data — it is used for compressing text and program data.

Lossy compression is a compression method in which the original data cannot be completely restored — it is used for compressing audio, images, and video, because humans do not perceive a significant difference in quality.

Main types of lossless compression:

Run-length encoding replaces sequences of the same consecutive symbols with a number expressing the length (like A5B2A4B8A6), and Huffman coding assigns shorter bit sequences to the most frequent characters.

the two compression types and Run-length encoding

Lossless — full restoration (text and programs)

Lossy — no full restoration (audio, image, video)

Run-length encoding — A5B2A4B8A6

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: Which compression type allows complete restoration of the original data?
Options:
A. Lossy compression
B. Lossless compression
C. full compression
Correct Answer: B
Explanation: Correct! Lossless restores the data completely — and is used with text and programs.

Q: Audio, image, and video data are compressed with which type?
Options:
A. Lossless compression
B. no compression at all
C. Lossy compression
Correct Answer: C
Explanation: Correct! We use Lossy because humans do not perceive a significant difference in quality.

Exercises

Your book: pages 78–80

### ✍️ Exercise 1: calculating the video size

The size of a 10-second video at 30 fps, each frame a 24-bit image at 500 × 200 — in MB?

A  90 MB

B  9 MB

C  900 KB

✅ Answer: A — 90 MB

500 × 200 × 24 = 2,400,000 bits ÷ 8 = 300,000 B. Then 300,000 × 30 × 10 = 90,000,000 B ÷ 1000 ÷ 1000 = 90 MB.

This video was converted to a compressed file of 30 MB — what is the compression ratio?

A  30%

B  33%

C  300%

✅ Answer: B — 33%

30 ÷ 90 × 100 = 33.3% ≈ 33%.

The size of a 1-minute video at 30 fps, each frame a 24-bit image at 640 × 360 — in MB?

A  1244 MB

B  124 MB

C  622 MB

✅ Answer: A — 1244 MB

640 × 360 × 24 = 5,529,600 bits ÷ 8 = 691,200 B. Then 691,200 × 30 × 60 = 1,244,160,000 B ÷ 1000 ÷ 1000 ≈ 1244 MB.

The size of a 1-second video at 60 fps, each frame a 24-bit image at 1,920 × 1,080 — in MB?

A  186.6 MB

B  747.5 MB

C  373.2 MB

✅ Answer: C — 373.2 MB

1920 × 1080 × 24 = 49,766,400 bits ÷ 8 = 6,220,800 B. Then 6,220,800 × 60 × 1 = 373,248,000 B ÷ 1000 ÷ 1000 ≈ 373.2 MB.

### ✍️ Exercise 2: video and compression concepts

The terms that complete the sentence: a video displays a series of still images, the phenomenon of (...) creates the illusion of movement, each image is called (...), and its number per second is (...).

A  afterimage — Frame — Frame rate

B  refraction — Frame rate — Frame

C  expansion — Compression — Decompression

✅ Answer: A

the afterimage phenomenon creates the illusion of movement, one image is a Frame, and its number per second is the Frame rate.

The compression that saves space while keeping the data exactly the same?

A  Lossy compression

B  Decompression

C  Lossless compression

✅ Answer: C — Lossless

Lossless restores the original data completely — it is used with text and programs.

21 MB of compressed data was decompressed and expanded to 50 MB — what is the compression ratio?

A  24%

B  42%

C  21%

✅ Answer: B — 42%

21 ÷ 50 × 100 = 42%.

### ✍️ Exercise 3: true or false

Which statement about the video mechanism is incorrect?

A  each still image composing a video is called a Frame

B  a video uses the afterimage phenomenon

C  the lower the frame rate, the smoother the video appears

✅ Answer: C

the opposite is true: the higher the frame rate, the smoother the video appears.

Which statement about compression is incorrect?

A  Decompression restores compressed data to its original state

B  Lossless improves compression efficiency by allowing slight changes to the data

C  data compressed with Lossy is not exactly identical to the original

✅ Answer: B

this statement describes Lossy, not Lossless — Lossless restores the data exactly as it was.

When recording a video with the same resolution and frame rate — the size of a 1-second video versus 60 seconds?

A  the 60-second video is 60 times larger

B  the two sizes are equal

C  the 60-second video is smaller

✅ Answer: A

time is multiplied in the formula — so the longer the time, the larger the size by the same factor.

### ✍️ Exercise 4: image decompression and compression methods

The compressed image data 'B4WBW3B5WBW4BW4' represents which alphabet letter after decompression?

A  the letter H

B  the letter S

C  the letter P

✅ Answer: C — P

Decompressing gives BBBBWBWWWBBBBBWBWWWWBWWWW — placed in a 5 × 5 grid it draws the letter P.

The compressed image data 'BW3B2W3B7W3B2W3B' represents which letter?

A  the letter P

B  the letter H

C  the letter Z

✅ Answer: B — H

Decompressing: B WWW BB WWW BBBBBBB WWW BB WWW B = BWWWBBWWWBBBBBBBWWWBBWWWB — placed in a 5 × 5 grid it draws the letter H.

The compressed image data 'BW3BWBWBW3BW4BW4BW2' represents which letter?

A  the letter P

B  the letter T

C  the letter S

✅ Answer: C — S

Decompressing: B WWW B W B W B WWW B WWWW B WWWW B WW = BWWWBWBWBWWWBWWWWBWWWWBWW — placed in a 5 × 5 grid it draws the letter S.

The compression method that represents repeated data by listing the data and the number of consecutive occurrences is called?

A  Huffman coding

B  Run-length encoding

C  LZ encoding

✅ Answer: B — Run-length encoding

Run-length encoding converts sequences of repeated symbols (like BBBBB → B5) into one symbol and a number expressing the count.

Recap

a quick journey through everything we learned today

### The video mechanism

a series of still images (Frames) displayed in succession quickly, and the afterimage phenomenon creates the illusion of movement.

### The video data amount

the amount = image data [B] × frame rate [fps] × time [seconds].

### Compression

the ratio = (after ÷ original) × 100, and Lossless restores data completely while Lossy does not.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a frame?
Options:
A. the number of images displayed per second
B. each still image that composes a video
C. the illusion of movement itself
Correct Answer: B
Explanation: Correct! A frame is each still image that composes a video.

Q: What formula calculates the video size?
Options:
A. image data × frame rate × time
B. image data ÷ frame rate ÷ time
C. image data + frame rate + time
Correct Answer: A
Explanation: Correct! The amount = image data × frame rate × time.

Q: Audio, image, and video data are compressed with which type?
Options:
A. Lossless compression
B. random compression
C. Lossy compression
Correct Answer: C
Explanation: Correct! We use Lossy because humans do not perceive a big difference.
