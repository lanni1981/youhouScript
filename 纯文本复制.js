// ==UserScript==
// @name         ���ı�����
// @namespace    http://tampermonkey.net/
<<<<<<< HEAD
// @version      0.13
=======
// @version      0.11
>>>>>>> parent of ec41910 (version      0.2)
// @description  �����ƴ��ı���������ʽ
// @author       Lennie
// @match        *://*
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // ��ֹĬ�ϸ����¼�
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        // ��ȡ��ǰѡ�е��ı�
        var selectedText = window.getSelection().toString();
        // �����ʽ
        var div = document.createElement('div');
        div.innerHTML = selectedText;
        selectedText = div.textContent || div.innerText || '';
        // �������ʽ����ı���ӵ�������
        e.clipboardData.setData('text/plain', selectedText);
    });
})();