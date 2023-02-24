// ==UserScript==
// @name         纯文本复制
// @namespace    http://tampermonkey.net/
<<<<<<< HEAD
// @version      0.13
=======
// @version      0.11
>>>>>>> parent of ec41910 (version      0.2)
// @description  仅复制纯文本，不带格式
// @author       Lennie
// @match        *://*
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // 阻止默认复制事件
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        // 获取当前选中的文本
        var selectedText = window.getSelection().toString();
        // 清除格式
        var div = document.createElement('div');
        div.innerHTML = selectedText;
        selectedText = div.textContent || div.innerText || '';
        // 将清除格式后的文本添加到剪贴板
        e.clipboardData.setData('text/plain', selectedText);
    });
})();