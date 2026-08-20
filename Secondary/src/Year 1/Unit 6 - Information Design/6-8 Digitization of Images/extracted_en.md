# رقمنة الصور - Digitization of Images

What will we learn today?

Lesson introduction — digitizing images

Just as sound is converted to digital data, so are images. Today we learn how an image taken by a camera or scanner is converted to binary numbers — and how to calculate its data size, and the difference between two important formats.

Think of it this way:

An image in the computer is nothing more than a grid of tiny dots called pixels, and each dot has a number expressing its color.

### ⚠️ Common Mistakes

Confusing resolution with gradation — the first is the number of pixels, the second is the number of color levels per pixel.

Confusing the Raster format with Vector — the first is made of pixels and looks jagged when enlarged, the second uses coordinates and looks smooth.

Pixel and Resolution

the smallest unit of an image — book page 73

A pixel is the smallest unit that composes an image. A digital image is represented by an arrangement of pixels — and each pixel has a color and a value.

The resolution is the degree of fineness of pixels when sampling, and its unit is dpi, and it is sometimes expressed as vertical pixels × horizontal pixels.

Remember:

resolution and gradation relate to the image data amount — the more they increase, the bigger the size.

an image is made of a grid of pixels

the original image

divided into pixels

each pixel has a color value

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.


### Questions

Q: What is a pixel?
Options:
A. the number of waves per second
B. the time of a single wave
C. the smallest unit that composes an image
Correct Answer: C
Explanation: Correct! A pixel is the smallest unit that composes an image.

Q: What is the unit of resolution?
Options:
A. Hz
B. dpi
C. the second
Correct Answer: B
Explanation: Correct! The unit of resolution is dpi.

### ⚠️ Common Mistakes

Confusing resolution with gradation — resolution is the number of pixels, and gradation is the number of levels per pixel.

Forgetting that increasing the resolution increases the image data size.

Procedure for Digitization of Images

Sampling → Quantization → Encoding — book page 73

An image captured by a digital camera or scanner is converted to digital in 3 steps: dividing the image into pixels, converting each pixel's brightness to numbers, and encoding the numbers in binary.

The steps in order:

① Sampling → ② Quantization → ③ Encoding.

the three steps to digitize an image

① Sampling — dividing the image

② Quantization — converting brightness to numbers

③ Encoding — binary encoding

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the correct order to digitize an image?
Options:
A. Quantization → Encoding → Sampling
B. Encoding → Quantization → Sampling
C. Sampling → Quantization → Encoding
Correct Answer: C
Explanation: Correct! Sampling first, then Quantization, then Encoding.

Q: What do we do in the quantization step?
Options:
A. converting brightness to numerical values
B. dividing the image into pixels
C. representing numbers in binary
Correct Answer: A
Explanation: Correct! We convert each pixel's brightness to a numerical value divided into several levels.

### ⚠️ Common Mistakes

Reversing the order of the steps — the image must be divided first, then brightness converted, then encoded.

Forgetting that values are rounded to the nearest level — we do not keep every exact value.

Data Amount of an Image

the formula: number of pixels × bits of color — book page 73

The data amount of an image in bits = number of pixels (vertical × horizontal) × the number of bits for color information.

The higher the resolution and gradation values, the smoother the image and the better the quality — but the data amount increases.

Remember:

In 24-bit full color, each of red, green and blue takes 8 bits, meaning 24 bits in total.

Worked example: a 1,280 × 720 image in 24-bit color

we multiply: 1280 × 720 × 24

= 22,118,400 bits

divide by 8 then 1000 → 2.76 MB

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is the formula for the image data amount?
Options:
A. number of pixels + color bits
B. number of pixels × color bits
C. pixels × channels
Correct Answer: B
Explanation: Correct! Number of pixels × the number of bits for color information.

Q: With 8 bits per pixel, how many color levels do we have?
Options:
A. 8 levels
B. 24 levels
C. 256 levels
Correct Answer: C
Explanation: Correct! 2 to the power of 8 = 256 levels (from 0 to 255).

### ⚠️ Common Mistakes

Forgetting that the result is in bits — to convert to bytes we divide by 8.

Forgetting to multiply the vertical × horizontal pixels — not add them.

Formats and Colors

Raster and Vector, and the three primary colors — book pages 73–74

In the Raster format, the image is an arrangement of pixels and appears jagged (jaggies) when enlarged, and it is drawn with painting software. In the Vector format, the image contains information about the coordinates of points and the angles and thickness of the connecting lines, and it is drawn with drawing software.

The three primary colors of light are red, green and blue — mixing them increases brightness and approaches white, and they are used in computer displays (additive mixing). The three primary colors of pigment are cyan, magenta and yellow — mixing them approaches black, and they are used in printers (subtractive mixing).

Remember:

In 24-bit full color, each RGB color takes 8 bits: 8 × 3 = 24 bits.

the two image formats: Raster and Vector

the original image

Raster — jagged pixels when enlarged

Vector — coordinates and smooth lines

the part active in this step

the other parts

### Test yourself — a quick recall

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: How does the Raster format appear when enlarged?
Options:
A. jagged (jaggies)
B. smooth and continuous
C. the image disappears
Correct Answer: A
Explanation: Correct! It shows jagged edges called jaggies.

Q: What color mixing do computer displays use?
Options:
A. subtractive mixing
B. additive mixing
C. static mixing
Correct Answer: B
Explanation: Correct! They use additive mixing with the three primary colors of light.

### ⚠️ Common Mistakes

Confusing light colors with pigment colors — the first is RGB and approaches white, the second is CMY and approaches black.

Confusing the software — painting is for Raster, drawing is for Vector.

Exercises

Your book: pages 74–76

### ✍️ Exercise 1: order and formats

What is the correct order to convert an image into digital data?

A  encode → divide the image → convert brightness

B  convert brightness → encode → divide the image

C  divide the image → convert brightness to numbers → encode in binary

✅ Answer: C

we divide the image first (Sampling), then convert brightness to numbers (Quantization), then encode (Encoding).

Which statements are correct about the digital representation of images?

A  Raster is suitable for logos with clear contours

B  Raster looks jagged when enlarged, and Vector uses point coordinates

C  painting software creates Vector graphics

✅ Answer: B

Raster looks jagged when enlarged, and Vector stores point coordinates and line thickness.

### ✍️ Exercise 2: basic concepts

Representing one color with 8 bits gives how many levels?

A  256 levels

B  24 levels

C  8 levels

✅ Answer: A — 256 levels

2 to the power of 8 = 256 levels, from 0 to 255.

The format that stores point coordinates and lines is called?

A  Raster format

B  Pixel format

C  Vector format

✅ Answer: C — Vector format

Vector uses mathematical expressions and the coordinates of points and lines.

Which statement is incorrect?

A  the smaller the resolution and gradation, the smoother the image

B  the dpi unit expresses the degree of pixel density

C  gradation is determined by the number of bits allocated per pixel

✅ Answer: A

the opposite is true: the higher the resolution and gradation, the smoother the image.

### ✍️ Exercise 3: calculating image data

An 800 × 600 image with 8-bit color — its size in KB?

A  240 KB

B  480 KB

C  960 KB

✅ Answer: B — 480 KB

800 × 600 × 8 = 3,840,000 bits, ÷8 = 480,000 bytes, ÷1000 = 480 KB.

A 1,280 × 720 image in 24-bit color — its size in MB?

A  2.76 MB

B  5.52 MB

C  1.38 MB

✅ Answer: A — 2.76 MB

1280 × 720 × 24 = 22,118,400 bits, ÷8 = 2,764,800 bytes, ÷1000 ÷ 1000 ≈ 2.76 MB.

A 720 × 480 image in 24-bit color — its size in MB?

A  2.07 MB

B  1.04 MB

C  0.52 MB

✅ Answer: B — 1.04 MB

720 × 480 × 24 = 8,294,400 bits, ÷8 = 1,036,800 bytes, ÷1000 ÷ 1000 ≈ 1.04 MB.

A 3,820 × 2,160 image in 24-bit color — its size in MB?

A  12.38 MB

B  49.50 MB

C  24.75 MB

✅ Answer: C — 24.75 MB

3820 × 2160 × 24 = 198,028,800 bits, ÷8 = 24,753,600 bytes, ÷1000 ÷ 1000 ≈ 24.75 MB.

### ✍️ Exercise 4: colors and size

In printers, the three primary colors of pigment are?

A  red, green, blue — approaching white

B  cyan, magenta, yellow — approaching black

C  cyan, magenta, yellow — approaching white

✅ Answer: B

the pigment colors are CMY, and mixing them approaches black — subtractive mixing.

A 1,080 × 720 image with 8-bit color — its size in KB?

A  389 KB

B  1555 KB

C  778 KB

✅ Answer: C — 778 KB

1080 × 720 × 8 = 6,220,800 bits, ÷8 = 777,600 bytes, ÷1000 ≈ 778 KB.

A 320 × 480 image in 24-bit color — its size in KB?

A  461 KB

B  922 KB

C  230 KB

✅ Answer: A — 461 KB

320 × 480 × 24 = 3,686,400 bits, ÷8 = 460,800 bytes, ÷1000 ≈ 461 KB.

A 1,920 × 1,080 image in 24-bit color — its size in MB?

A  3.11 MB

B  6.22 MB

C  12.44 MB

✅ Answer: B — 6.22 MB

1920 × 1080 × 24 = 49,766,400 bits, ÷8 = 6,220,800 bytes, ÷1000 ÷ 1000 ≈ 6.22 MB.

Recap

a quick journey through everything we learned today

### Pixel and Resolution

a pixel is the smallest unit of an image, and resolution measures pixel fineness in dpi.

### The conversion steps

Sampling → Quantization → Encoding — and the image becomes binary numbers.

### Size and colors

size = pixels × color bits, and RGB screens versus CMY printers.

### Test yourself at the end — a quick recap

The quiz is hidden at first — open it when you're ready, click your answer to see the result and explanation, or skip the question.

Q: What is a pixel?
Options:
A. the smallest unit that composes an image
B. the number of waves per second
C. the time of a single wave
Correct Answer: A
Explanation: Correct! A pixel is the smallest unit that composes an image.

Q: An 800 × 600 image with 8-bit color — its size in KB?
Options:
A. 240 KB
B. 480 KB
C. 960 KB
Correct Answer: B
Explanation: Correct! 800 × 600 × 8 = 3,840,000 bits ÷8 ÷1000 = 480 KB.

Q: What colors do computer displays use?
Options:
A. the three primary colors of light RGB
B. the three primary colors of pigment CMY
C. only black and white
Correct Answer: A
Explanation: Correct! They use the three primary colors of light RGB with additive mixing.
