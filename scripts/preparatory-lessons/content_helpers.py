import re
def P(a, e):
    return [a, e]

def C(a, e, ba, be):
    return [P(a, e), P(ba, be)]

def V(a, e, da, de, xa, xe):
    return dict(term=P(a, e), meaning=P(da, de), example=P(xa, xe))

def Q(a, e, opts, n, wa, we):
    return [P(a, e), [P(*o) for o in opts], n, P(wa, we)]

def Task(a, e, opts, rows):
    return dict(title=P(a, e), instruction=P('اربط كل موقف بالمفهوم الأدق.', 'Match each situation to the most accurate concept.'), options=[P(*o) for o in opts], rows=[dict(q=P(*q), a=n, why=P(*w)) for (q, n, w) in rows])

def Demo(a, e, nodes, steps):
    return dict(title=P(a, e), note=P('شاهد انتقال الفكرة خطوة بخطوة، ثم غيّر الاختيارات في المعمل.', 'Watch the idea unfold step by step, then change the workbench controls.'), nodes=[P(*p) for p in nodes], steps=[P(*p) for p in steps])

def isolate_pairs(x):
    if isinstance(x, list):
        if len(x) == 2 and all((isinstance(v, str) for v in x)) and re.search('[\u0600-ۿ]', x[0]):

            def protect(m):
                v = m.group(0)
                if not re.search('[A-Za-z0-9]', v):
                    return v
                return v[:len(v) - len(v.lstrip())] + '\u2066' + v.strip() + '\u2069' + v[len(v.rstrip()):]
            x[0] = re.sub('[A-Za-z0-9_"\'\\[\\]()=.,+<>{}@#$%&:/?!\\- ]+', protect, x[0])
        else:
            for v in x:
                isolate_pairs(v)
    elif isinstance(x, dict):
        for v in x.values():
            isolate_pairs(v)
