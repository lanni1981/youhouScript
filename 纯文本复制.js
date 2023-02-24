// ==UserScript==
// @name         ���ı�����
// @namespace    http://tampermonkey.net/
// @version      0.14
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