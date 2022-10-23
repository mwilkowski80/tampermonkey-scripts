// ==UserScript==
// @name         grammarly-keyboard-shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1-alpha
// @description  Grammarly Keyboard Shortcuts. It currently supports Ctrl+Shift+Enter to automatically apply suggested change.
// @author       Michael Wilkowski
// @match        http://app.grammarly.com/*
// @match        https://app.grammarly.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('body').onkeypress = (ke) => {
        var SELECTORS = [
            'div[data-name="card/apply-remove"]',
            'div[data-name="card/apply-insert"]',
            'div[data-name="card/update-all"]',
        ];
        for (var i = 0; i < SELECTORS.length; i++) {
            document.querySelector(SELECTORS[i])?.click();
        }
    };

    console.log('Script ' + GM_info.script.name + ', version ' + GM_info.script.version + ' started.\n\nPress Ctrl+Shift+Enter to apply suggested change.');
})();