/* Runtime mínimo das telas do Portal Operacional FM O Dia (demo estática).
   Compila o template da página — {{caminho}}, <sc-for>, <sc-if>, onClick — numa
   função que gera HTML, e redesenha a cada setState do componente. */
(function () {
  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var next = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = Object.assign({}, this.state, next);
    if (this.__render) this.__render();
  };
  DCLogic.prototype.forceUpdate = function () { if (this.__render) this.__render(); };
  window.DCLogic = DCLogic;

  function esc(v) {
    if (v === null || v === undefined || v === false) return '';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function compile(src) {
    var lit = function (s) { return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${'); };
    var out = '';
    var re = /<sc-for\b[^>]*\blist="\{\{\s*([^}]+?)\s*\}\}"[^>]*\bas="([\w$]+)"[^>]*>|<sc-for\b[^>]*\bas="([\w$]+)"[^>]*\blist="\{\{\s*([^}]+?)\s*\}\}"[^>]*>|<\/sc-for>|<sc-if\b[^>]*\bvalue="\{\{\s*([^}]+?)\s*\}\}"[^>]*>|<\/sc-if>|\b(on[A-Z]\w*)="\{\{\s*([^}]+?)\s*\}\}"|\b(checked|disabled|selected)="\{\{\s*([^}]+?)\s*\}\}"|\{\{\s*([^}]+?)\s*\}\}/g;
    var last = 0, m;
    while ((m = re.exec(src))) {
      out += lit(src.slice(last, m.index));
      last = re.lastIndex;
      if (m[1] || m[4]) { var list = m[1] || m[4], as = m[2] || m[3]; out += '${((' + list + ')||[]).map(function(' + as + ',$index){return `'; }
      else if (m[0] === '</sc-for>') { out += '`;}).join(\'\')}'; }
      else if (m[5]) { out += '${(' + m[5] + ')?`'; }
      else if (m[0] === '</sc-if>') { out += '`:\'\'}'; }
      else if (m[6]) { out += 'data-dc-' + m[6].slice(2).toLowerCase() + '="${__h(' + m[7] + ')}"'; }
      else if (m[8]) { out += '${(' + m[9] + ')?\'' + m[8] + '\':\'\'}'; }
      else { out += '${__e(' + m[10] + ')}'; }
    }
    out += lit(src.slice(last));
    /* eslint-disable-next-line no-new-func */
    return new Function('__v', '__e', '__h', 'with(__v){return `' + out + '`;}');
  }

  function mount() {
    var tpl = document.getElementById('dc-template');
    var app = document.getElementById('app');
    if (!tpl || !app || typeof Component === 'undefined') return;
    var render = compile(tpl.textContent);
    var comp = new Component({});
    var handlers = [];
    comp.__render = function () {
      handlers = [];
      var vals = comp.renderVals();
      app.innerHTML = render(vals, esc, function (fn) { handlers.push(fn); return handlers.length - 1; });
    };
    app.addEventListener('click', function (ev) {
      var el = ev.target.closest('[data-dc-click]');
      if (!el || el.disabled) return;
      var fn = handlers[+el.getAttribute('data-dc-click')];
      if (typeof fn === 'function') { ev.preventDefault(); fn(ev); }
    });
    comp.__render();
    if (typeof comp.componentDidMount === 'function') comp.componentDidMount();
  }
  window.DC = { mount: mount };
})();
