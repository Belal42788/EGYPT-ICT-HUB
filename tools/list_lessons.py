#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""list_lessons.py — print all lesson html paths grouped by Unit folder."""
import os
YEAR = 'Secondary/Year 1'
rows = []
for dp, _, fs in os.walk(YEAR):
    for fn in fs:
        if fn.endswith('.html'):
            parts = dp.split(os.sep)
            # find the Unit folder: the one starting with 'Unit '
            unit = next((p for p in parts if p.startswith('Unit ')), '?')
            rows.append((unit, dp, fn))
rows.sort()
for unit, dp, fn in rows:
    print(unit, '|', os.path.join(dp, fn))
print('TOTAL', len(rows))
