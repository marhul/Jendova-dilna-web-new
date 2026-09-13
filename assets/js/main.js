// Jendova dílna – drobné interakce bez knihoven
(function () {
  // Mobilní menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('hlavni-menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Nejbližší akce: skryje proběhlé, seřadí podle data, nechá prvních N
  document.querySelectorAll('[data-upcoming]').forEach(function (list) {
    var today = new Date();
    var todayKey = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    var limit = parseInt(list.getAttribute('data-limit') || '3', 10);
    var items = Array.prototype.slice.call(list.querySelectorAll('[data-date]'));
    items
      .filter(function (li) { return li.getAttribute('data-date') >= todayKey; })
      .sort(function (a, b) { return a.getAttribute('data-date') < b.getAttribute('data-date') ? -1 : 1; })
      .forEach(function (li, i) { list.appendChild(li); li.dataset.keep = i < limit ? '1' : ''; });
    var shown = 0;
    items.forEach(function (li) {
      if (li.dataset.keep === '1') { shown++; } else { li.remove(); }
    });
    if (shown === 0) {
      var empty = list.parentNode.querySelector('[data-upcoming-empty]');
      if (empty) empty.hidden = false;
      list.remove();
    }
  });

  // Filtr kroužků podle kategorie
  var filters = document.querySelector('[data-filters]');
  var cards = document.querySelector('[data-cards]');
  if (filters && cards) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var value = btn.getAttribute('data-filter');
      filters.querySelectorAll('[data-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      cards.querySelectorAll('.card').forEach(function (card) {
        card.hidden = value !== '' && card.getAttribute('data-kategorie') !== value;
      });
    });
  }

  // Galerie s lightboxem přes <dialog>
  var gallery = document.querySelector('[data-gallery]');
  var dialog = document.querySelector('[data-lightbox]');
  if (gallery && dialog && typeof dialog.showModal === 'function') {
    var buttons = Array.prototype.slice.call(gallery.querySelectorAll('[data-src]'));
    var img = dialog.querySelector('img');
    var index = 0;
    var show = function (i) {
      index = (i + buttons.length) % buttons.length;
      img.src = buttons[index].getAttribute('data-src');
    };
    buttons.forEach(function (b, i) {
      b.addEventListener('click', function () { show(i); dialog.showModal(); });
    });
    dialog.addEventListener('click', function (e) {
      var action = e.target.getAttribute && e.target.getAttribute('data-lb');
      if (action === 'prev') show(index - 1);
      else if (action === 'next') show(index + 1);
      else if (action === 'close' || e.target === dialog) dialog.close();
    });
    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }
})();
