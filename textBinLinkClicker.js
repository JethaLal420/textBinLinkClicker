// ==UserScript==
// @name         textBin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JethaLal_420
// @match        https://textbin.xyz/*
// @match        https://cryptobin.co/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.window.location.href.includes('https://textbin.xyz/'))
    {
        setTimeout(() => {
            console.log('textbin script running')
            var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            var textContent = document.getElementsByTagName('pre')[0].innerText;
            var url = textContent.match(urlRegex)[0]
            console.log(url)

            if(textContent.includes('PASSWORD')){
                var password = textContent.split('PASSWORD: ')[1]
                navigator.clipboard.writeText(password)
                console.log(password)
            }
            window.open(url, '_self')
        }, 3000)
    } else {
        var inputField = document.getElementsByTagName('input')[0]
        var btn = document.getElementsByTagName('button')[1]

        navigator.clipboard.readText().then(clipText => {
            inputField.value = clipText
            btn.click()
            setTimeout(() => {
                var link = document.getElementsByName('pasteText')[0].value
                link = link.split('-')[0]
                window.open(link, '_self')
            }, 3000)
        })
    }

})();
