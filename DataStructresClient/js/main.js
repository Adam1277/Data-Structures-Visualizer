function stacks(){

    // An stack of 6 elements
    let atackArray = new Array(6);

    // To set the container of PUSH, next step and POP to fixed
    let stepsContainer = document.getElementById("next-step");
    stepsContainer.style.position = "relative";
    stepsContainer.style.justifyContent = "centre";
    stepsContainer.style.alignItems = "centre";

    // To initialize some basics on the Stack Data Structure
    let area = document.getElementById("text-area");
    area.textContent = "Stacks use a FILO (First in last out) " +
        "procedure with accompanying nodes. The first subsequent node to be placed"
        + " on the stack will be the last node out.\n\n"
        + "Stacks use PUSH (to add a top element)"
        + " or POP (to remove a top element)"

    // Creating the push button and placing it beside the next step button
    let pushButton = document.createElement("button");
    pushButton.innerText = "PUSH";
    let button1div = document.getElementById("button1");
    button1div.appendChild(pushButton);

    // Creating the pop button and placing it beside the next step button
    let popButton = document.createElement("button");
    popButton.innerText = "POP";
    let button2div = document.getElementById("button2");
    button2div.appendChild(popButton);

    // Creating the lines for the stack
    let container = document.getElementById("line-container");
    let newlineLeft = document.createElement("div");
    let newlineRight = document.createElement("div");

    newlineLeft.style.borderLeft = "6px solid black";
    newlineLeft.style.height = "48%";
    newlineLeft.style.top = "25%";
    newlineLeft.style.left = "42%";
    newlineLeft.style.position = "absolute";

    newlineRight.style.borderLeft = "6px solid black";
    newlineRight.style.height = "48%";
    newlineRight.style.top = "25%";
    newlineRight.style.left = "57.9%";
    newlineRight.style.position = "absolute";

    container.appendChild(newlineLeft);
    container.appendChild(newlineRight);

    // To create a random number to be the data value of the node
    let min = Math.ceil(1);
    let max = Math.floor(100);
    let randomNumber = (Math.random() * (max-min+1)) + min;

    console.log("The Node data is = " + randomNumber);

    // Now on Node creation, a box will be created with a random data value
    // Creating the UI Node box
    let createNodes = document.getElementById("Create-Node");
    let mainStructure =  document.getElementById("Main-Data-Structure");

    createNodes.addEventListener("click",function(){
        let box = document.createElement("div");
        box.style.background = "grey";
        box.style.borderColor = "black"; // not working
        box.style.width = "100px"; // not working
        box.style.height = "50px";
        mainStructure.appendChild(box);


        pushButton.addEventListener("click", function (){
            // Make a POST request to the backend, when the node has been created
            let url = "http://localhost:8080/DataStructure-1.0/api/structure/stack";
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify("new node")
            })
                .then(response=>response.json())
                .then(data =>{
                    console.log("Successful node creation");
                })
                .catch((error) =>{
                    console.error("Error " + error);
                });

            // TODO: Put some data in the boxes

            // Now to change the subsequent UI
            box.style.background = "blue";
            box.style.position = "relative"
            box.style.left = "45%";
            box.style.width = "15%"
        })


    })

}

function queues(){

}

function linkedList(){

}

function binaryTree(){

}