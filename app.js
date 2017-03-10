window.onload = function(){

    console.log('App loaded');

    // textarea
    var text = document.querySelector('#text');

    var saveLocal = document.querySelector('#saveLocal');
    var loadLocal = document.querySelector('#loadLocal');
    var saveServer = document.querySelector('#saveServer');
    var loadServer = document.querySelector('#loadServer');

    var saveLocalFn = function(){
        console.log('saveLocal');
        localStorage.setItem('content', text.value);
    };

    var loadLocalFn = function(){
        console.log('loadLocal');
        text.value = localStorage.getItem('content');
    };

    var saveServerFn = function(){
        console.log('saveServer');

        // POST server.php save=mingivaartus
        var xmlDoc = new XMLHttpRequest();
        xmlDoc.open('POST', 'server.php', true);
        xmlDoc.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xmlDoc.onreadystatechange = function() {
            if (xmlDoc.readyState === 4 && xmlDoc.status === 200) {
                console.log(xmlDoc.responseText);
            }
        };

        xmlDoc.send('save='+text.value);


    };

    var loadServerFn = function(){
        console.log('loadServer');

        // POST server.php save=mingivaartus
        var xmlDoc = new XMLHttpRequest();
        xmlDoc.open('GET', 'database.txt', true);

        xmlDoc.onreadystatechange = function() {
            if (xmlDoc.readyState === 4 && xmlDoc.status === 200) {
                console.log(xmlDoc.responseText);

                // tekstifaili sisu teen objektiks ja võtan väärtuse sisse
                var JSobject = JSON.parse(xmlDoc.responseText);
                text.value = JSobject.text;
            }
        };

        xmlDoc.send();

    };


    saveLocal.addEventListener('click',saveLocalFn);
    loadLocal.addEventListener('click',loadLocalFn);
    saveServer.addEventListener('click',saveServerFn);
    loadServer.addEventListener('click',loadServerFn);

};
