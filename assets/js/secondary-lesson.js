/* Shared Secondary lesson helpers. Each function was identical in several lesson scripts and moved here unchanged. */

    function tr(ar, en) {
      return window.currentLang === 'en' ? en:ar;
    }

    function pyTopColon(s) { var depth = 0, inStr = null; for (var i = 0; i < s.length; i++) { var c = s[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '(' || c === '[') depth++; if (c === ')' || c === ']') depth--; if (c === ':' && depth === 0) return i; } return -1; }

    function pyStripComment(line) { var inStr = null; for (var i = 0; i < line.length; i++) { var c = line[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '#') return line.slice(0, i); } return line; }

    function PStr(v) { return { t:'str', v: String(v) }; }

      function recallStart(quiz) {
        var s = quiz.querySelector('[data-start]');
        if (!s) {
          var p = quiz.previousElementSibling;
          if (p && p.hasAttribute('data-start')) s = p;
        }
        return s;
      }

    function PBool(v) { return { t:'bool', v: !!v }; }

    function pstr(x) {
      if (x.t === 'int') return String(x.v);
      if (x.t === 'float') { return Number.isInteger(x.v) ? x.v + '.0' : String(x.v); }
      if (x.t === 'str') return x.v;
      if (x.t === 'bool') return x.v ? 'True' : 'False';
      if (x.t === 'none') return 'None';
      if (x.t === 'type') return "<class '" + x.name + "'>";
      if (x.t === 'list') return '[' + x.v.map(function (e) { return e.t === 'str' ? "'" + e.v + "'" : pstr(e); }).join(', ') + ']';
      return '';
    }

    function opName(o) { return (window.currentLang === 'en') ? o.nameEn:o.name; }

    function pySplitStmts(code) { var out = [], depth = 0, inStr = null, cur = ''; for (var i = 0; i < code.length; i++) { var c = code[i]; if (inStr) { cur += c; if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; cur += c; continue; } if (c === '(' || c === '[') { depth++; cur += c; continue; } if (c === ')' || c === ']') { depth--; cur += c; continue; } if (c === ';' && depth === 0) { out.push(cur); cur = ''; continue; } cur += c; } if (cur.trim() !== '') out.push(cur); return out; }

    function pErr(msg) { var e = new Error(msg); e.msg = msg; return e; }

      function normIdx(v, len) { var i = v.v; return i < 0 ? i + len:i; }

    function wireNav() {
      var links = document.querySelectorAll('#navLinks a');
      var ies = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + id); });
          }
        });
      }, { rootMargin:'-45% 0px -45% 0px' });
      document.querySelectorAll('section[id]').forEach(function (s) { ies.observe(s); });
    }

    function wireVarBox() {
      var box = document.getElementById('varBox'), val = document.getElementById('varVal');
      var store = document.querySelector('[data-id="storeBtn"]'), reset = document.querySelector('[data-id="resetBox"]');
      var flyAncestor = document.querySelector('.var-anim'), srcEl = document.querySelector('.var-src');
      if (!box || !val) return;
      if (store) store.addEventListener('click', function () {
        box.classList.remove('live');
        val.textContent = '...';
        var fly = null;
        if (srcEl && flyAncestor) {
          fly = document.createElement('div');
          fly.className = 'var-fly'; fly.textContent = 'Cairo';
          var ar = flyAncestor.getBoundingClientRect();
          var sr = srcEl.getBoundingClientRect();
          fly.style.left = (sr.left - ar.left) + 'px';
          fly.style.top = (sr.top - ar.top) + 'px';
          flyAncestor.appendChild(fly);
          fly.offsetHeight;
          var vr = val.getBoundingClientRect();
          fly.style.left = (vr.left - ar.left) + 'px';
          fly.style.top = (vr.top - ar.top) + 'px';
          fly.style.opacity = '0';
        }
        setTimeout(function () {
          if (fly) fly.remove();
          val.textContent = '"Cairo"'; box.classList.add('live');
        }, 650);
      });
      if (reset) reset.addEventListener('click', function () {
        val.textContent = '...'; box.classList.remove('live');
      });
    }

    function divZeroMsg() { return window.currentLang === 'en' ? 'Cannot divide by zero' : 'ممنوع القسمة على صفر'; }

    function PNum(v, f) { return { t:f ? 'float' : 'int', v: v }; }

    function isNum(x) { return x.t === 'int' || x.t === 'float'; }

    function pyTopEq(s) { var depth = 0, inStr = null; for (var i = 0; i < s.length; i++) { var c = s[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '(' || c === '[') depth++; if (c === ')' || c === ']') depth--; if (c === '=' && depth === 0) { var pr = s[i - 1], nx = s[i + 1]; if (pr === '=' || pr === '>' || pr === '<' || pr === '!' || nx === '=') continue; return i; } } return -1; }

    function byId(id) {
      return document.querySelector('[data-id="' + id + '"]') || document.getElementById(id);
    }

      function binPrec(t) {
        if (t.k === 'id') { if (t.v === 'or') return 1; if (t.v === 'and') return 2; return null; }
        if (t.k === 'op') { var m = { '==': 4, '!=': 4, '<': 4, '>': 4, '<=': 4, '>=': 4, '+': 5, '-': 5, '*': 6, '/': 6, '//': 6, '%': 6, '**': 7 }; return m[t.v] !== undefined ? m[t.v] : null; }
        return null;
      }

    function wireReveal() {
      var els = document.querySelectorAll('.section-inner');
      if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('visible'); }); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
        });
      }, { threshold:.08 });
      els.forEach(function (e) { io.observe(e); });
    }

    function PType(n) { return { t:'type', name: n }; }

    function ptype(x) { return x.t === 'int' ? 'int' : x.t === 'float' ? 'float' : x.t === 'str' ? 'str' : x.t === 'bool' ? 'bool' : x.t === 'none' ? 'NoneType' : x.t === 'list' ? 'list' : 'object'; }

    function pyEscape(ch) { if (ch === 'n') return '\n'; if (ch === 't') return '\t'; if (ch === '\\') return '\\'; return ch; }

    function paintOpDetail(data) {
      var d = document.getElementById('opDetail');
      if (!d) return; /* 'opDetail' removed by design - skip safely */ if (!d || !data) return;
      d.innerHTML =
        '<div class="body"><div style="color:var(--text);font-weight:700">' + opName(data) + ' <span style="color:var(--dim);font-weight:400;font-size:.85rem">(' + data.desc + ')</span></div>' +
        '<div class="exp">print(' + data.ex + ')</div>' +
        '<div class="out">&gt;&gt; ' + data.out + '</div></div>';
    }

    function truthy(x) { if (x.t === 'bool') return x.v; if (isNum(x)) return x.v !== 0; if (x.t === 'str') return x.v.length > 0; if (x.t === 'list') return x.v.length > 0; return false; }

      function rqFb(el) {
        return tr(el.getAttribute('data-fb-ar'), el.getAttribute('data-fb-en'));
      }

    function repaintQuizBtns() {
      document.querySelectorAll('.recall').forEach(function (quiz) {
        var start = recallStart(quiz);
        if (!start) return;
        start.textContent = quiz.classList.contains('show')
          ? tr('إخفاء الاختبار', 'Hide the quiz')
          : tr('💡 ابدأ الاختبار', '💡 Start the Quiz');
      });
    }

      function wireRecall() {
        document.querySelectorAll('.recall').forEach(function (quiz) {
          var start = recallStart(quiz);
          function paintQuizBtn() {
            if (!start) return;
            start.textContent = quiz.classList.contains('show')
              ? tr('إخفاء الاختبار', 'Hide the quiz')
              : tr('💡 ابدأ الاختبار', '💡 Start the Quiz');
          }
          if (start) start.addEventListener('click', function () {
            quiz.classList.toggle('show');
            paintQuizBtn();
          });
          quiz.querySelectorAll('.rq').forEach(function (q) {
            var opts = q.querySelectorAll('.rq-opt');
            var skip = q.querySelector('.rq-skip');
            var fb = q.querySelector('.rq-fb');
            function lock(qq) {
              qq.classList.add('done');
              opts.forEach(function (o) { o.classList.add('disabled'); });
              if (skip) skip.style.display = 'none';
            }
            function showFb(ok, text, correctKey) {
              fb.classList.add('show');
              fb.classList.toggle('ok', ok);
              fb.classList.toggle('no', !ok);
              fb.textContent = (ok ? '✅ ' : '❌ ') +
                (correctKey ? (window.currentLang === 'en' ? 'The correct answer is ' + correctKey + '. ' : 'الإجابة الصحيحة ' + correctKey + '. ') : '') + text;
            }
            opts.forEach(function (o) {
              o.addEventListener('click', function () {
                if (q.classList.contains('done')) return;
                var ok = o.getAttribute('data-ok') === '1';
                opts.forEach(function (x) { x.classList.remove('correct', 'wrong'); });
                if (ok) o.classList.add('correct');
                else {
                  o.classList.add('wrong');
                  var co = q.querySelector('.rq-opt[data-ok="1"]');
                  if (co) co.classList.add('correct');
                }
                lock(q);
                showFb(ok, rqFb(o), ok ? null:(q.querySelector('.rq-opt[data-ok="1"]').getAttribute('data-key')));
              });
            });
            if (skip) skip.addEventListener('click', function () {
              if (q.classList.contains('done')) return;
              var co = q.querySelector('.rq-opt[data-ok="1"]');
              opts.forEach(function (x) { x.classList.remove('correct', 'wrong'); });
              if (co) co.classList.add('correct');
              lock(q);
              showFb(true, rqFb(co), co.getAttribute('data-key'));
            });
          });
        });
      }

      function index(x, a, b, hasColon) {
        if (x.t !== 'str' && x.t !== 'list') throw pErr("TypeError:'" + ptype(x) + "' object is not subscriptable");
        var s = x.v;
        if (hasColon) {
          if (x.t === 'list') throw pErr("TypeError:list indices must be integers or slices, not 'slice'");
          var st = a === null ? 0:normIdx(a, s.length), en = b === null ? s.length : normIdx(b, s.length);
          st = Math.max(0, Math.min(st, s.length)); en = Math.max(0, Math.min(en, s.length));
          return PStr(s.slice(st, en));
        }
        var idx = normIdx(a, s.length);
        if (idx < 0 || idx >= s.length) throw pErr("IndexError:list index out of range");
        return x.t === 'list' ? s[idx] : PStr(s[idx]);
      }

      function binOp(t, a, b) {
        var op = t.k === 'id' ? t.v:t.v;
        if (op === 'and') return truthy(a) ? b:a;
        if (op === 'or') return truthy(a) ? a:b;
        if (op === '==' || op === '!=') {
          var eq = false;
          if (isNum(a) && isNum(b)) eq = a.v === b.v;
          else if (a.t === 'str' && b.t === 'str') eq = a.v === b.v;
          else if (a.t === 'bool' && b.t === 'bool') eq = a.v === b.v;
          else if (a.t === 'none' && b.t === 'none') eq = true;
          return PBool(op === '==' ? eq:!eq);
        }
        if (op === '<' || op === '>' || op === '<=' || op === '>=') { var r = op === '<' ? a.v < b.v:op === '>' ? a.v > b.v : op === '<=' ? a.v <= b.v : a.v >= b.v; return PBool(r); }
        if (op === '+') {
          if (a.t === 'str' && b.t === 'str') return PStr(a.v + b.v);
          if (a.t === 'str' || b.t === 'str') throw pErr("TypeError:can only concatenate str (not '" + ptype(isNum(a) ? b : a) + "') to str");
          return PNum(a.v + b.v, a.t === 'float' || b.t === 'float');
        }
        if (op === '*' && a.t === 'str' && b.t === 'int') return PStr(a.v.repeat(b.v));
        if (op === '*' && a.t === 'int' && b.t === 'str') return PStr(b.v.repeat(a.v));
        if (!isNum(a) || !isNum(b)) throw pErr("TypeError:unsupported operand type(s) for " + op + ": '" + ptype(a) + "' and '" + ptype(b) + "'");
        var x = a.v, y = b.v, fl = a.t === 'float' || b.t === 'float';
        if (op === '-') return PNum(x - y, fl);
        if (op === '*') return PNum(x * y, fl);
        if (op === '/') { if (y === 0) throw pErr("ZeroDivisionError:division by zero"); return PNum(x / y, true); }
        if (op === '//') { if (y === 0) throw pErr("ZeroDivisionError:integer division or modulo by zero"); return PNum(Math.floor(x / y), fl); }
        if (op === '%') { if (y === 0) throw pErr("ZeroDivisionError:integer division or modulo by zero"); return PNum(x % y, fl); }
        if (op === '**') return PNum(Math.pow(x, y), fl);
        throw pErr("SyntaxError:unknown operator " + op);
      }
