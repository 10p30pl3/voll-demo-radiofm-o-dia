/* Artes fictícias dos patrocinadores (demo): SVGs animados gerados em código.
   Marcas e ofertas inventadas — não representam empresas reais. */
(function () {
  var W = 600, H = 340;
  var CSS = '<style>' +
    '*{transform-box:fill-box;transform-origin:center}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:0}15%{opacity:.9}100%{transform:translateY(-120px);opacity:0}}' +
    '@keyframes fall{0%{transform:translateY(-60px) rotate(-12deg);opacity:0}15%{opacity:1}100%{transform:translateY(360px) rotate(14deg);opacity:1}}' +
    '@keyframes twinkle{0%,100%{transform:scale(.2) rotate(0);opacity:0}50%{transform:scale(1) rotate(45deg);opacity:1}}' +
    '@keyframes slide{0%{transform:translateX(-40px);opacity:0}25%,100%{transform:translateX(0);opacity:1}}' +
    '@keyframes wiggle{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}' +
    '@keyframes bar{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}' +
    '@keyframes drive{0%{transform:translateX(-90px)}100%{transform:translateX(640px)}}' +
    '</style>';
  function svg(inner, w, h) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + (w || W) + ' ' + (h || H) + '" font-family="Arial Black,Arial,sans-serif">' + CSS + inner + '</svg>';
  }
  function uri(s) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s); }
  function anim(d, i) { return 'animation:' + d.replace('$', (i || 0) + 's'); }

  var ART = [
    /* 0 — Supermercados Guanabara */
    function () {
      var tags = '';
      [60, 150, 240, 330, 420, 510].forEach(function (x, i) {
        tags += '<g style="animation:fall ' + (3.4 + (i % 3) * .6) + 's linear ' + (i * .55) + 's infinite"><rect x="' + x + '" y="0" width="46" height="28" rx="5" fill="#FFD23F"/><circle cx="' + (x + 8) + '" cy="8" r="3" fill="#1B7F3B"/><text x="' + (x + 27) + '" y="21" font-size="13" text-anchor="middle" fill="#B3261E">R$</text></g>';
      });
      return svg(
        '<rect width="600" height="340" fill="#1B7F3B"/><circle cx="520" cy="60" r="150" fill="#249A49"/><circle cx="40" cy="320" r="130" fill="#146A31"/>' + tags +
        '<g style="animation:drive 5s linear infinite"><path d="M30 215h20l22 70h118l18-52H78" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="100" cy="305" r="12" fill="#fff"/><circle cx="178" cy="305" r="12" fill="#fff"/><rect x="95" y="238" width="30" height="30" rx="4" fill="#FFD23F"/><rect x="132" y="228" width="30" height="40" rx="4" fill="#E8542E"/></g>' +
        '<text x="300" y="70" font-size="30" fill="#fff" text-anchor="middle">SUPERMERCADOS</text><text x="300" y="112" font-size="40" fill="#FFD23F" text-anchor="middle">GUANABARA</text>' +
        '<g style="animation:pulse 1.4s ease-in-out infinite"><circle cx="470" cy="215" r="82" fill="#E8302A"/><circle cx="470" cy="215" r="70" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/><text x="470" y="212" font-size="56" fill="#fff" text-anchor="middle">30%</text><text x="470" y="248" font-size="26" fill="#FFD23F" text-anchor="middle">OFF</text></g>' +
        '<text x="300" y="325" font-size="17" fill="#fff" text-anchor="middle" font-family="Arial,sans-serif">Ofertas da semana · toque para ver o encarte</text>');
    },
    /* 1 — Cervejaria Região Oceânica */
    function () {
      var bub = '';
      for (var i = 0; i < 12; i++) {
        var x = 80 + (i % 4) * 22 + (i > 7 ? 330 : (i > 3 ? 0 : 0));
        bub += '<circle cx="' + (95 + (i % 4) * 20) + '" cy="270" r="' + (3 + i % 3) + '" fill="#FFF4C2" style="animation:rise ' + (2 + (i % 4) * .4) + 's ease-in ' + (i * .25) + 's infinite"/>';
        bub += '<circle cx="' + (275 + (i % 4) * 20) + '" cy="270" r="' + (3 + i % 3) + '" fill="#FFF4C2" style="animation:rise ' + (2.2 + (i % 4) * .4) + 's ease-in ' + (i * .3) + 's infinite"/>';
      }
      function mug(x, d) {
        return '<g style="animation:wiggle 2.4s ease-in-out ' + d + 's infinite"><rect x="' + x + '" y="150" width="100" height="140" rx="12" fill="#F6A81B"/><rect x="' + x + '" y="150" width="100" height="140" rx="12" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="5"/><path d="M' + (x + 100) + ' 175h26a14 14 0 0 1 14 14v52a14 14 0 0 1-14 14h-26" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="10"/><ellipse cx="' + (x + 20) + '" cy="150" rx="30" ry="22" fill="#fff"/><ellipse cx="' + (x + 55) + '" cy="142" rx="34" ry="26" fill="#fff"/><ellipse cx="' + (x + 86) + '" cy="152" rx="24" ry="20" fill="#fff"/></g>';
      }
      return svg(
        '<rect width="600" height="340" fill="#16284B"/><circle cx="520" cy="70" r="46" fill="#F6A81B" style="animation:pulse 3s ease-in-out infinite"/><path d="M0 300q75-24 150 0t150 0 150 0 150 0v40H0z" fill="#1E4F8A" opacity=".8"/>' +
        mug(70, 0) + mug(250, .5) + bub +
        '<text x="300" y="52" font-size="26" fill="#F6A81B" text-anchor="middle">CERVEJARIA</text><text x="300" y="92" font-size="30" fill="#fff" text-anchor="middle">REGIÃO OCEÂNICA</text>' +
        '<g style="animation:pulse 1.6s ease-in-out infinite"><rect x="420" y="170" width="160" height="96" rx="14" fill="#F6A81B"/><text x="500" y="205" font-size="17" fill="#16284B" text-anchor="middle">HAPPY HOUR</text><text x="500" y="240" font-size="25" fill="#16284B" text-anchor="middle">EM DOBRO</text><text x="500" y="258" font-size="11" fill="#16284B" text-anchor="middle" font-family="Arial,sans-serif">quinta a sábado</text></g>' +
        '<text x="300" y="330" font-size="14" fill="#fff" text-anchor="middle" font-family="Arial,sans-serif">Beba com moderação. Venda proibida para menores de 18 anos.</text>');
    },
    /* 2 — Clínica Sorriso Carioca */
    function () {
      var sp = '';
      [[170, 90, 0], [330, 120, .6], [250, 60, 1.1], [360, 220, 1.6], [150, 230, .3]].forEach(function (s) {
        sp += '<path d="M' + s[0] + ' ' + (s[1] - 16) + 'L' + (s[0] + 4) + ' ' + (s[1] - 4) + 'L' + (s[0] + 16) + ' ' + s[1] + 'L' + (s[0] + 4) + ' ' + (s[1] + 4) + 'L' + s[0] + ' ' + (s[1] + 16) + 'L' + (s[0] - 4) + ' ' + (s[1] + 4) + 'L' + (s[0] - 16) + ' ' + s[1] + 'L' + (s[0] - 4) + ' ' + (s[1] - 4) + 'Z" fill="#fff" style="animation:twinkle 2s ease-in-out ' + s[2] + 's infinite"/>';
      });
      return svg(
        '<rect width="600" height="340" fill="#0E8FB5"/><circle cx="90" cy="40" r="120" fill="#13A5CE"/><circle cx="560" cy="330" r="140" fill="#0A7596"/>' +
        '<g style="animation:bob 2.6s ease-in-out infinite"><path d="M250 80c-45-25-100 5-90 60 8 45 25 55 32 100 4 22 18 22 24 4l16-48c3-8 15-8 18 0l16 48c6 18 20 18 24-4 7-45 24-55 32-100 10-55-45-85-72-60z" fill="#fff" stroke="#BFE7F2" stroke-width="6" stroke-linejoin="round"/><path d="M205 120q10 14 28 8" fill="none" stroke="#BFE7F2" stroke-width="6" stroke-linecap="round"/></g>' + sp +
        '<text x="470" y="95" font-size="22" fill="#fff" text-anchor="middle">CLÍNICA</text><text x="470" y="130" font-size="30" fill="#FFE27A" text-anchor="middle">SORRISO</text><text x="470" y="160" font-size="22" fill="#fff" text-anchor="middle">CARIOCA</text>' +
        '<g style="animation:slide 3s ease-out infinite"><rect x="360" y="190" width="220" height="90" rx="16" fill="#fff"/><text x="470" y="225" font-size="17" fill="#0A7596" text-anchor="middle">AVALIAÇÃO</text><text x="470" y="262" font-size="34" fill="#E8542E" text-anchor="middle">GRATUITA</text></g>' +
        '<text x="300" y="322" font-size="15" fill="#fff" text-anchor="middle" font-family="Arial,sans-serif">Exclusivo para ouvintes da FM O Dia</text>');
    },
    /* 3 — Shopping Plaza Niterói */
    function () {
      function bag(x, c, d) {
        return '<g style="animation:bob 1.8s ease-in-out ' + d + 's infinite"><path d="M' + (x + 20) + ' 60v-14a22 22 0 0 1 44 0v14" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/><rect x="' + x + '" y="58" width="84" height="104" rx="8" fill="' + c + '"/><circle cx="' + (x + 42) + '" cy="110" r="14" fill="#fff" fill-opacity=".85"/></g>';
      }
      return svg(
        '<rect width="600" height="340" fill="#5B2A86"/><rect y="250" width="600" height="90" fill="#431F66"/><circle cx="520" cy="60" r="100" fill="#7A3CAD"/>' +
        '<g transform="translate(0 100)">' + bag(40, '#FF4F9A', 0) + bag(140, '#FFD23F', .3) + bag(240, '#27D3C0', .6) + '</g>' +
        '<text x="470" y="62" font-size="24" fill="#fff" text-anchor="middle">SHOPPING PLAZA</text><text x="470" y="96" font-size="28" fill="#FFD23F" text-anchor="middle">NITERÓI</text>' +
        '<g style="animation:pulse 1.5s ease-in-out infinite"><rect x="350" y="120" width="230" height="110" rx="18" fill="#FF4F9A"/><text x="465" y="155" font-size="14" fill="#fff" text-anchor="middle">LIQUIDAÇÃO DE INVERNO</text><text x="465" y="205" font-size="40" fill="#fff" text-anchor="middle">ATÉ 50%</text></g>' +
        '<g style="animation:slide 3s ease-out infinite"><text x="300" y="295" font-size="22" fill="#fff" text-anchor="middle">Neste fim de semana · todas as lojas</text></g>' +
        '<text x="300" y="325" font-size="13" fill="#CDB3E6" text-anchor="middle" font-family="Arial,sans-serif">Ofertas válidas enquanto durarem os estoques</text>');
    }
  ];
  var BRAND = [['#1B7F3B', '#FFD23F', 'GUANABARA'], ['#16284B', '#F6A81B', 'REGIÃO OCEÂNICA'], ['#0E8FB5', '#FFE27A', 'CLÍNICA SORRISO'], ['#5B2A86', '#FFD23F', 'SHOPPING PLAZA']];

  /* Card de áudio (spot de rádio): player com barras animadas */
  function audio(i) {
    var b = BRAND[i], bars = '';
    for (var k = 0; k < 28; k++) {
      var h = 30 + ((k * 37) % 50);
      bars += '<rect x="' + (150 + k * 15) + '" y="' + (70 - h / 2) + '" width="8" height="' + h + '" rx="4" fill="' + b[1] + '" style="animation:bar ' + (0.7 + (k % 5) * .15) + 's ease-in-out ' + (k * .06) + 's infinite"/>';
    }
    return svg('<rect width="600" height="140" rx="14" fill="' + b[0] + '"/><circle cx="70" cy="70" r="36" fill="' + b[1] + '"/><path d="M60 52l28 18-28 18z" fill="' + b[0] + '"/>' + bars +
      '<text x="150" y="128" font-size="13" fill="#fff" font-family="Arial,sans-serif">Spot 30s · ' + b[2] + '</text><text x="570" y="128" font-size="13" fill="#fff" text-anchor="end" font-family="Arial,sans-serif">0:30</text>', 600, 140);
  }
  window.ANUNCIOS = {
    image: function (i) { return uri(ART[i]()); },
    audio: function (i) { return uri(audio(i)); }
  };
})();
