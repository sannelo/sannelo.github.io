var myWS

function generateGrid() {
    let element = document.getElementById("game_grid");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    for (let count = 0; count < 1008; count++) {
        var grid_element = document.createElement("div")
        grid_element.id = count
        document.getElementById("game_grid").appendChild(grid_element)
    }
}

function connect() {
    generateGrid();

    myWS = new WebSocket(document.getElementById('url').value);

    document.title = myWS.readyState;
    console.log(myWS.readyState);

    myWS.onopen = function (_event) {
        document.title = myWS.readyState;
        console.log(myWS.readyState)
    }
    
    myWS.onmessage = function (event) {
        var data = event.data.split('&')
        if (data[0] === '0') {
            console.log(data);
        } else if (data[0] === '1') {
            draw(data);
        }
    }

    myWS.onerror = function (event) {
        console.log(event)
    } 
}

function move(param) {
    myWS.send(param.toString())
}

function draw(data) {
    for (let i = 1; i < data.length; i++) {

        var gridElement = document.getElementById((i-1).toString())

        gridElement.style.backgroundColor = data[i]
    }
}
