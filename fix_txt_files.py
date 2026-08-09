import fitz
import os
import re
import sys

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

# Correct page mapping from PDF scan (printed page numbers)
# doc index = printed_page - 1
LESSONS = {
    "13-1": (175, 176),
    "13-2": (177, 179),
    "13-3": (180, 184),
    "13-4": (185, 188),
    "13-5": (189, 190),
    "13-6": (191, 191),
    "13-7": (192, 193),
    "13-8": (194, 194),
    "13-9": (195, 196),
    "13-10": (197, 198),
    "13-11": (199, 200),
    "13-12": (201, 202),
    "12-5": (172, 174),
}

PDF_PATH = r"D:\شغل\EGYPT-ICT-HUB\Secondary\Year 1\The Book\ICT_En_Sec1_T1.pdf"
ROOT = r"D:\شغل\EGYPT-ICT-HUB\Secondary\Year 1"

doc = fitz.open(PDF_PATH)

for code, (start, end) in LESSONS.items():
    # Find the directory
    lesson_dir = None
    for unit in os.listdir(ROOT):
        unit_path = os.path.join(ROOT, unit)
        if not os.path.isdir(unit_path):
            continue
        for lesson in os.listdir(unit_path):
            lesson_path = os.path.join(unit_path, lesson)
            if os.path.isdir(lesson_path) and lesson.startswith(code + " "):
                lesson_dir = lesson_path
                break
        if lesson_dir:
            break
    
    if not lesson_dir:
        print(f"NOT FOUND: {code}")
        continue
    
    # Extract text from PDF
    text_parts = []
    for p in range(start, end + 1):
        idx = p - 1
        if idx < doc.page_count:
            page_text = doc[idx].get_text("text") or ""
            text_parts.append(f"=== PAGE {p} ===\n\n{page_text}")
    
    full_text = "\n\n".join(text_parts)
    
    # Clean up: remove the next lesson's "Information Study Point!" header if present
    # Find all lesson headers in the extracted text
    headers = list(re.finditer(r'Information Study\s+Point!\s+(\d+-\d+)', full_text))
    if len(headers) > 1:
        # Keep only content up to the second lesson header
        second_header_pos = headers[1].start()
        full_text = full_text[:second_header_pos].rstrip()
        print(f"  Trimmed bleed from {code} at position {second_header_pos}")
    
    # Write the corrected file
    txt_file = os.path.join(lesson_dir, f"{code} {os.path.basename(lesson_dir).split(' ', 1)[1]}.txt")
    # Actually the filename format is "13-1 About Generative AI.txt"
    # Let's find the existing txt file
    for f in os.listdir(lesson_dir):
        if f.endswith(".txt") and f.startswith(code):
            txt_file = os.path.join(lesson_dir, f)
            break
    
    with open(txt_file, "w", encoding="utf-8") as f:
        f.write(f"# {code} {os.path.basename(lesson_dir).split(' ', 1)[1]}\n\n")
        f.write(f"Source: ICT_En_Sec1_T1.pdf, pages {start}-{end} (book numbering)\n\n")
        f.write(full_text)
    
    print(f"Fixed: {code} -> {txt_file}")

doc.close()
print("\nDone!")