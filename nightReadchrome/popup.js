
newFunction();
function newFunction() {
    document.getElementById("hi").addEventListener("click", ()=>{
        chrome.tabs.executeScript(null,{
            code:`
            var cover = document.createElement("div");
            
            let css = \`
                position: fixed;
                pointer-events: none;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: white;
                mix-blend-mode: difference;
                z-index: 1;
            \`
            cover.setAttribute("style", css);
            document.body.appendChild(cover);
            `
        });
    });
 /*   document.getElementById("hii").addEventListener("click", ()=>{
        chrome.tabs.executeScript(null,{
            code:`
            var cover = document.createElement("div");
            
            let css = \`
                position: fixed;
                pointer-events: none;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: black;
                mix-blend-mode: lighten;
                opacity: 1;
                z-index: 1;
            \`
            cover.setAttribute("style", css);
            document.body.appendChild(cover);
            `
        });
    });*/
    document.getElementById("ii").addEventListener("click", ()=>{
        chrome.tabs.executeScript(null,{
            code:`
            var cover = document.createElement("div");
            
            let css = \`
                position: fixed;
                pointer-events: none;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: white;
                mix-blend-mode: difference;
                opacity: 0.85;
                z-index: 1;
            \`
            cover.setAttribute("style", css);
            document.body.appendChild(cover);
            `
        });
    });
}