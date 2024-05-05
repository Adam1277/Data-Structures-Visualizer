function stacks(){
    // An array storing each UI's position for the box on the stack
    // Using the style.top = " px";
    let TopPXArray = ["535px","470px","405px","340px","275px","210px"];
    let listOFNodes = [];
    let currentIndex = 0;
    let counter = 5;
    let lastCreatedNode = null;

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
        + " or POP (to remove a top element)\n\n"
        + "Imagine a stack like plates on top of one another."

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

    // On click of the Create Node button
    createNodes.addEventListener("click",function(){
        stepsContainer.style.position = "absolute";
        stepsContainer.style.top = "72%";
        stepsContainer.style.left = "48.4%";
        stepsContainer.style.right = "50%";

        // Created Nodes not in the current Stack yet
        let box = document.createElement("div");
        box.style.background = "black";
        box.style.height = "60px";
        box.style.width = "100px";
        mainStructure.appendChild(box);
        lastCreatedNode = box;
    })

    pushButton.addEventListener("click", function (){
        // Make a POST request to the backend, when the node has been created
        // This is to facilitate a real stack on the backend
        let url = "http://localhost:8080/DataStructure-1.0/api/structure/stack";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify("push node")
        })
            .then(response=>response.json())
            .then(data =>{
                console.log("Successful node push");
            })
            .catch((error) =>{
                console.error("Error " + error);
            });


        // TODO: Put some data in the boxes

        if (lastCreatedNode && currentIndex < TopPXArray.length){
            lastCreatedNode.style.background = "red";
            lastCreatedNode.style.position = "absolute";
            lastCreatedNode.style.top = TopPXArray[currentIndex];
            lastCreatedNode.style.left = "502px";
            lastCreatedNode.style.borderColor = "green";
            lastCreatedNode.style.borderWidth = "10px";
            currentIndex++;
            listOFNodes[counter] = lastCreatedNode;
            console.log("counter: " + counter);
            counter--;
        }else{
            area.innerText = "MAXIMUM number of nodes!!"
            currentIndex = 0;
        }
    })

    popButton.addEventListener("click", function (){
        // To update the data structure in the backend
        let url = "http://localhost:8080/DataStructure-1.0/api/structure/stack";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify("pop node")
        })
            .then(response=>response.json())
            .then(data =>{
                console.log("Successful node pop");
            })
            .catch((error) =>{
                console.error("Error " + error);
            });

        //lastCreatedNode.style.background = "black";
        //lastCreatedNode.style.top = "10%";
        //lastCreatedNode.style.left = "80%";

        if (counter < 0){counter = 0;}
        console.log("Delete Counter :" + counter);
        let selectNode = listOFNodes[counter];
        selectNode.style.background = "black";
        selectNode.style.top = "10%";
        selectNode.style.left = "80%";
        counter++;
    })

}

function queues(){

}

function linkedList(){

}

function binaryTree(){

}