

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
    let generalMessage = "Stacks use a FILO (First in last out) " +
        "procedure with accompanying nodes. The first subsequent node to be placed"
        + " on the stack will be the last node out.\n\n"
        + "Stacks use PUSH (to add a top element)"
        + " or POP (to remove a top element)\n\n"
        + "Imagine a stack like plates on top of one another."
    area.value = generalMessage;

    // Creating the push button and placing it beside the next step button
    let pushButton = document.createElement("button");
    pushButton.innerText = "PUSH";
    pushButton.style.backgroundColor = '#4CAF50'; // Green background
    pushButton.style.color = 'white'; // White text
    pushButton.style.border = 'none';
    pushButton.style.borderRadius = '8px';
    pushButton.style.padding = '10px 20px';
    pushButton.style.fontSize = '16px';
    pushButton.style.cursor = 'pointer';
    pushButton.style.transition = 'all 0.3s ease'; // Smooth transitions

    let button1div = document.getElementById("button1");
    button1div.appendChild(pushButton);

    // Creating the pop button and placing it beside the next step button
    let popButton = document.createElement("button");
    popButton.innerText = "POP";
    popButton.style.backgroundColor = "red"; // Green background
    popButton.style.color = 'white'; // White text
    popButton.style.border = 'none';
    popButton.style.borderRadius = '8px';
    popButton.style.padding = '10px 20px';
    popButton.style.fontSize = '16px';
    popButton.style.cursor = 'pointer';
    popButton.style.transition = 'all 0.3s ease'; // Smooth transitions

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
    let mainStructure =  document.getElementById("Main-Data-Structure");let fullStack = false;
    let nodeCreated = false;

    // On click of the Create Node button
    createNodes.addEventListener("click",function(){
        stepsContainer.style.position = "absolute";
        stepsContainer.style.top = "72%";
        stepsContainer.style.left = "48.4%";
        stepsContainer.style.right = "50%";

        area.value = generalMessage;

        if (counter === 5){
            while (mainStructure.firstChild) {
                mainStructure.removeChild(mainStructure.firstChild);
            }
            listOFNodes = [];
            currentIndex = 0;
            counter = 5;
        }

        // Created Nodes not in the current Stack yet
        let box = document.createElement("div");
        box.style.display = "flex";
        box.style.backgroundColor = "white";
        box.style.height = "40px";
        box.style.width = "110px";
        box.innerText = "Data Node " + counter;
        box.style.alignItems = "centre";
        box.style.lineHeight = "37px";
        box.style.border = "2px solid black";
        box.style.borderRadius = "10px";

        mainStructure.appendChild(box);
        lastCreatedNode = box;
        nodeCreated = true;
        console.log("Node created, at counter: " + counter);
    })

    pushButton.addEventListener("click", function (){
        // TODO: Put some data in the boxes
        if(nodeCreated === false){
            area.value = "No node created";
        }

        if (lastCreatedNode && currentIndex < TopPXArray.length && nodeCreated === true){
            lastCreatedNode.style.background = "grey";
            lastCreatedNode.style.position = "absolute";
            lastCreatedNode.style.top = TopPXArray[currentIndex];
            lastCreatedNode.style.left = "45%";
            lastCreatedNode.style.right = "50%";
            lastCreatedNode.style.borderColor = "red";
            lastCreatedNode.style.borderWidth = "5px";
            listOFNodes[counter] = lastCreatedNode;
            console.log("counter: " + counter);
            counter--;
            currentIndex++;
        }else if (currentIndex === TopPXArray.length) {
            // Reset stack if it's full
            area.value = "Resetting stack as it reached MAXIMUM capacity."
            while (mainStructure.firstChild) {
                mainStructure.removeChild(mainStructure.firstChild);
            }
            listOFNodes = [];
            currentIndex = 0;
            counter = 5;
        }
        nodeCreated = false;
    })

    popButton.addEventListener("click", function (){
        if (counter < 5) {  // Ensure that the counter is within a valid range before attempting to pop.
            let currentNode = listOFNodes[counter+1];
            if (currentNode) {
                console.log("Node being cloned")
                // Clone the current node to display it elsewhere
                let clonedNode = currentNode.cloneNode(true);
                clonedNode.style.background = "white";
                clonedNode.style.position = "absolute"; // Ensure the cloned node is positioned absolutely
                clonedNode.style.top = "10%";
                clonedNode.style.left = "80%";
                document.body.appendChild(clonedNode); // Append to the body or another specific element

                // Remove the current node from the DOM and update the array
                mainStructure.removeChild(currentNode);
                listOFNodes[counter] = null;
                currentIndex = currentIndex - 1;

                // Adjust the counter appropriately
                if (counter >= 5) { // Reset the counter if it goes out of bounds
                    counter = 4;
                }
            } else {
                console.log("No node available to pop at position: ", counter);
            }
        } else {
            console.log("No nodes to pop or counter out of bounds");
            counter = 4; // Resetting counter to maximum index when it's out of bounds
            area.value = "No nodes to pop!!"
        }
        counter++;
        console.log("counter: " + counter);
        nodeCreated = false;
    });

}

function queues(){

    let PXArrayHorz = ["10%","30%","50%","70%","90%"];

    // Creating the push button and placing it beside the next step button
    let pushButton1 = document.createElement("button");
    pushButton1.innerText = "PUSH";
    pushButton1.style.backgroundColor = '#4CAF50'; // Green background
    pushButton1.style.color = 'white'; // White text
    pushButton1.style.border = 'none';
    pushButton1.style.borderRadius = '8px';
    pushButton1.style.padding = '10px 20px';
    pushButton1.style.fontSize = '16px';
    pushButton1.style.cursor = 'pointer';
    pushButton1.style.transition = 'all 0.3s ease'; // Smooth transitions

    let button1div1 = document.getElementById("button1");
    button1div1.appendChild(pushButton1);

    // Creating the pop button and placing it beside the next step button
    let popButton1 = document.createElement("button");
    popButton1.innerText = "POP";
    popButton1.style.backgroundColor = "red"; // Green background
    popButton1.style.color = 'white'; // White text
    popButton1.style.border = 'none';
    popButton1.style.borderRadius = '8px';
    popButton1.style.padding = '10px 20px';
    popButton1.style.fontSize = '16px';
    popButton1.style.cursor = 'pointer';
    popButton1.style.transition = 'all 0.3s ease'; // Smooth transitions

    let button2div = document.getElementById("button2");
    button2div.appendChild(popButton1);










    // Create Container for main structure
    let container = document.getElementById("Horz-line-container");
    container.style.position = "absolute";
    container.style.height = "400px";
    container.style.width = "50%";
    container.style.left = "25%";
    container.style.top = "30%";
    //container.style.border = "5px solid black";  //TO see the container if needed

    let newlinetop = document.createElement("div");
    newlinetop.style.borderTop = "6px solid black";
    newlinetop.style.top = "0%";
    newlinetop.style.left = "0%";
    newlinetop.style.width = "100%";
    newlinetop.style.position = "absolute";

    let newlinebottom = document.createElement("div");
    newlinebottom.style.borderTop = "6px solid black";
    newlinebottom.style.top = "30%";
    newlinebottom.style.left = "0%";
    newlinebottom.style.width = "100%";
    newlinebottom.style.position = "absolute";

    container.appendChild(newlinetop);
    container.appendChild(newlinebottom);

    let createNodeButton = document.getElementById("Create-Node");
    let NodeCreation = document.getElementById("Main-Data-Structure");
    NodeCreation.style.position = "absolute";
    NodeCreation.style.top = "20%";
    NodeCreation.style.width = "20%";

    let NodeData = "Data Node";
    let areaText = "";

    createNodeButton.addEventListener("click", function (){
        console.log("Create Node pressed");
        // Now to create Nodes (div boxes) with some data
        let NodeBox = document.createElement("div");
        NodeBox.style.position = "absolute";
        NodeBox.style.background = "Green";
        NodeBox.style.width = "50px";
        NodeBox.style.height = "50px";
        NodeBox.style.border = "8px";
        NodeBox.value = "";
        NodeCreation.appendChild(NodeBox);
    })

    moveQueue.addEventListener("click", function (){

    })

}

function linkedList(){

}

function binaryTree(){

}