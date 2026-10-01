/* One Stop Property Solutions – small page scripts (no libraries needed) */
(function () {
  'use strict';

  // ----- Mobile menu -----
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // ----- Before & after sliders -----
  document.querySelectorAll('.ba-slider').forEach(function (slider) {
    var range = slider.querySelector('.ba-range');
    if (!range) return;
    var update = function () { slider.style.setProperty('--pos', range.value + '%'); };
    range.addEventListener('input', update);
    update();
  });

  // ----- "Partner With Us" pre-selects the job type in the quote form -----
  var serviceSelect = document.getElementById('f-service');
  document.querySelectorAll('[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (serviceSelect) serviceSelect.value = link.getAttribute('data-service');
    });
  });

  // ----- Quote form (sends to Formspree without leaving the page) -----
  var form = document.getElementById('quote-form');
  if (form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        status.className = 'form-status error';
        status.textContent = 'This form isn\'t connected yet. Please call or text us instead! (Site owner: add your Formspree ID in index.html.)';
        return;
      }

      button.disabled = true;
      button.textContent = 'Sending…';
      status.className = 'form-status';
      status.textContent = '';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        status.className = 'form-status success';
        status.textContent = 'Thanks! Your request was sent. We\'ll get back to you shortly with your quote.';
      }).catch(function () {
        status.className = 'form-status error';
        status.textContent = 'Sorry, something went wrong sending your request. Please call or text us instead.';
      }).finally(function () {
        button.disabled = false;
        button.textContent = 'Send My Free Quote Request';
      });
    });
  }

  // ----- Keep the footer year current -----
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
