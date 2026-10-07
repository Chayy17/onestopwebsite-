/* One Stop Property Solutions – small page scripts (no libraries needed) */
(function () {
  'use strict';

  // ----- ZIP check -----
  // TODO: Most ZIP codes in the Houston area start with "77". If you only serve
  // certain ZIPs, list them here instead, e.g. ['77536', '77502', '77571'].
  var SERVICE_ZIPS = null;
  function zipStatus(zip) {
    if (!/^\d{5}$/.test(zip)) return 'invalid';
    if (SERVICE_ZIPS) return SERVICE_ZIPS.indexOf(zip) !== -1 ? 'ok' : 'outside';
    return zip.slice(0, 2) === '77' ? 'ok' : 'outside';
  }
  function showZipMsg(el, status) {
    if (!el) return;
    el.className = 'zip-msg ' + (status === 'ok' ? 'ok' : 'warn');
    el.textContent =
      status === 'ok' ? '✓ Great news, we serve your area!' :
      status === 'outside' ? 'That ZIP may be outside our usual area, but send your request and we\'ll let you know.' :
      'Please enter a 5-digit ZIP code.';
  }

  // ----- Multi-step quote form -----
  var form = document.getElementById('quote-form');
  if (!form) return;
  var panels = form.querySelectorAll('.step-panel');
  var stepLabel = form.querySelector('[data-step-label]');
  var status = form.querySelector('.form-status');
  var formZip = document.getElementById('f-zip');
  var formZipMsg = form.querySelector('[data-step="1"] .zip-msg');
  var current = 1;

  function showStep(n, focus) {
    current = n;
    panels.forEach(function (p) { p.classList.toggle('active', Number(p.dataset.step) === n); });
    if (stepLabel) stepLabel.textContent = 'Step ' + n + ' of ' + panels.length;
    if (focus) {
      var first = form.querySelector('.step-panel.active input:not([type="hidden"]), .step-panel.active select, .step-panel.active textarea');
      if (first) first.focus({ preventScroll: true });
    }
  }

  function stepIsValid(n) {
    var panel = form.querySelector('[data-step="' + n + '"]');
    var ok = true;
    panel.querySelectorAll('[required]').forEach(function (field) {
      var valid = field === formZip ? zipStatus(field.value.trim()) !== 'invalid' : field.value.trim() !== '';
      field.setAttribute('aria-invalid', String(!valid));
      if (!valid && ok) { field.focus(); ok = false; }
    });
    if (n === 1) showZipMsg(formZipMsg, zipStatus(formZip.value.trim()));
    return ok;
  }

  form.addEventListener('click', function (e) {
    if (e.target.closest('[data-next]')) {
      if (stepIsValid(current)) showStep(current + 1, true);
    } else if (e.target.closest('[data-back]')) {
      showStep(current - 1, true);
    }
  });

  // Pressing Enter in the ZIP box moves to the next step instead of submitting
  formZip.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); if (stepIsValid(1)) showStep(2, true); }
  });

  showStep(1, false);

  // Hero ZIP box: check the ZIP, carry it into the form, and jump to step 2
  document.querySelectorAll('[data-zip-form]').forEach(function (zipForm) {
    var input = zipForm.querySelector('input');
    var msg = zipForm.parentNode.querySelector('.zip-msg');
    zipForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var zip = input.value.trim();
      var s = zipStatus(zip);
      showZipMsg(msg, s);
      if (s === 'invalid') { input.focus(); return; }
      formZip.value = zip;
      showZipMsg(formZipMsg, s);
      showStep(2, false);
      document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
      setTimeout(function () { document.getElementById('f-items').focus({ preventScroll: true }); }, 600);
    });
  });

  // "Get a Quote" buttons next to a service pre-select that job type
  var serviceSelect = document.getElementById('f-service');
  document.querySelectorAll('[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (serviceSelect) serviceSelect.value = link.getAttribute('data-service');
    });
  });

  // Send to Formspree without leaving the page
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!stepIsValid(3)) return;

    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      status.className = 'form-status error';
      status.textContent = 'This form isn\'t connected yet. Please call or text us instead! (Site owner: add your Formspree ID in index.html.)';
      return;
    }

    var button = form.querySelector('button[type="submit"]');
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
      panels.forEach(function (p) { p.classList.remove('active'); });
      if (stepLabel) stepLabel.textContent = 'Done';
      status.className = 'form-status success';
      status.textContent = 'Thanks! Your request was sent. We\'ll reach out shortly with your upfront price.';
    }).catch(function () {
      status.className = 'form-status error';
      status.textContent = 'Sorry, something went wrong. Please call or text us instead.';
    }).finally(function () {
      button.disabled = false;
      button.textContent = 'Get My Free Quote';
    });
  });

  // Keep the footer year current
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
