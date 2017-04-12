// ==UserScript==
// @name        Recaptcha v1 on Desuarchive
// @namespace   https://github.com/ccd0
// @description Use Recaptcha v1 on https://desuarchive.org/.
// @include     http://desuarchive.org/*
// @include     https://desuarchive.org/*
// @version     0.0.1
// @grant       none
// @license     MIT; https://opensource.org/licenses/MIT
// ==/UserScript==

var form = document.querySelector('.thread_form');
function loadRecaptcha() {
	form.removeEventListener('focus', loadRecaptcha, true);
	var s = document.createElement('script');
	s.addEventListener('load', createCaptcha, false);
	s.src = 'https://www.google.com/recaptcha/api/js/recaptcha_ajax.js';
	document.head.appendChild(s);
}
function createCaptcha() {
	var container = document.createElement('div');
	document.querySelector('.thread_form > form').appendChild(container);
	Recaptcha.create(window.recaptcha2.pubkey, container);
}
if (form) {
	form.addEventListener('focus', loadRecaptcha, true);
}
