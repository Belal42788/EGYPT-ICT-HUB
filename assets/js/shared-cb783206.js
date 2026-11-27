/* Shared page script, moved verbatim out of the inline <script> blocks. */
/* Keep absolutely positioned diagram captions inside the card at phone widths. */
(function(){
  function clamp(){
    if (window.innerWidth > 640) return;
    document.querySelectorAll('.diagram-wrap').forEach(function(w){
      var W = w.clientWidth;
      w.querySelectorAll('.svg-label').forEach(function(l){
        var r = l.getBoundingClientRect();
        var half = r.width/2;
        var minC = half + 3, maxC = W - half - 3;
        if (minC > maxC) return;
        var cur = parseFloat(l.style.left);
        if (isNaN(cur)) return;
        var curPx = cur/100*W;
        var t = Math.min(Math.max(curPx, minC), maxC);
        if (Math.abs(t-curPx) > 0.5) l.style.left = (t/W*100).toFixed(3)+'%';
      });
    });
  }
  window.addEventListener('load', function(){ setTimeout(clamp,50); setTimeout(clamp,400); });
  window.addEventListener('resize', function(){ setTimeout(clamp,120); });
})();
