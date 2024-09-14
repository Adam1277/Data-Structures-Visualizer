


function stacks(){
    // An array storing each UI's position for the box on the stack
    // Using the style.top = " px";
    let TopPXArray = ["75%","68%","61%","54%","47%","40%"];
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
    area.style.fontSize = "15px";
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
    pushButton.style.transition = 'all 0.3s ease'; // Smooth

    // For push button click, up and down
    pushButton.addEventListener('mousedown', function() {
        pushButton.style.transform = 'translateY(2px)';
    });

    pushButton.addEventListener("mouseup", function (){
        pushButton.style.transform = 'translateY(-2px)';
    })

    // Appending the push button
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

    // Pop button aesthetics
    popButton.addEventListener('mousedown', function() {
        popButton.style.transform = 'translateY(2px)';
    });

    popButton.addEventListener("mouseup", function (){
        popButton.style.transform = 'translateY(-2px)';
    })

    // To append the pop button to the button2 position
    let button2div = document.getElementById("button2");
    button2div.appendChild(popButton);

    // Creating the lines and container for the stack
    let container = document.getElementById("line-container");
    let newlineLeft = document.createElement("div");
    let newlineRight = document.createElement("div");
    container.style.margin = "20px";
    //container.style.border = "2px solid black";
    container.style.height = "40%";

    newlineLeft.style.borderLeft = "6px solid black";
    newlineLeft.style.height = "50%";
    newlineLeft.style.top = "28%";
    newlineLeft.style.left = "42%";
    newlineLeft.style.position = "absolute";
    newlineLeft.style.marginTop = "30px";

    newlineRight.style.borderLeft = "6px solid black";
    newlineRight.style.height = "50%";
    newlineRight.style.top = "28%";
    newlineRight.style.left = "57.9%";
    newlineRight.style.position = "absolute";
    newlineRight.style.marginTop = "30px";

    container.appendChild(newlineLeft);
    container.appendChild(newlineRight);

    // Now on Node creation, a box will be created with a random data value
    // Creating the UI Node box
    let createNodes = document.getElementById("Create-Node");
    let mainStructure =  document.getElementById("Main-Data-Structure");
    let nodeCreated = false;

    // On click of the Create Node button
    createNodes.addEventListener("click",function(){
        stepsContainer.style.position = "absolute";
        stepsContainer.style.top = "82%";
        stepsContainer.style.left = "48.4%";
        stepsContainer.style.right = "50%";

        area.value = generalMessage;

        // To clear the Data Structure if the stack is full
        //if (counter === 5){
            //while (container.firstChild) {
                //container.removeChild(mainStructure.firstChild);
            //}
            //listOFNodes = [];
            //currentIndex = 0;
            //counter = 5;
        //}

        // Created Nodes not in the current Stack yet
        let box = document.createElement("div");
        box.style.display = "flex";
        box.style.backgroundColor = "lightgrey";
        box.style.height = "35px";
        box.style.width = "110px";
        box.innerText = "Data Node " + counter;
        box.style.lineHeight = "37px";
        box.style.border = "2px solid black";
        box.style.borderRadius = "10px";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";

        container.appendChild(box)
        lastCreatedNode = box;
        nodeCreated = true;
        console.log("Node created, at counter: " + counter);
    })

    pushButton.addEventListener("click", function (){
        if(nodeCreated === false){
            area.value = "No node created";
        }

        if (lastCreatedNode && currentIndex < TopPXArray.length && nodeCreated === true){
            lastCreatedNode.style.background = "transparent";
            lastCreatedNode.style.position = "absolute";
            lastCreatedNode.style.top = TopPXArray[currentIndex];
            lastCreatedNode.style.left = "calc(50% - 58px)";
            lastCreatedNode.style.borderColor = "red";
            lastCreatedNode.style.borderWidth = "5px";
            listOFNodes[counter] = lastCreatedNode;
            console.log("counter: " + counter);
            counter--;
            currentIndex++;
        }else if (currentIndex === TopPXArray.length) {
            // Reset stack if it's full
            area.value = "Stack is full!!";
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
                container.removeChild(currentNode);
                listOFNodes[counter] = null;
                currentIndex = currentIndex - 1;

                // Adjust the counter appropriately
                if (counter >= 5) { // Reset the counter if it goes out of bounds
                    counter = 4;
                }
            } else {
                console.log("No node available to pop at position: " + counter);
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

    // Setting the queue node positioning
    let PerArrayHorz = ["5%","15%","25%","35%","45%","55%","65%","75%","85%","95%"];
    let NodeArray = []; // Set an array for the Nodes
    let counter = 0; // Counter to track number of clicks

    let OpenMessage = "Queue's make use of nodes in a formation, and follow a first in; first out process." +
        "Nodes can only be pushed or popped, and never removed if not the head of the Queue.";

    // Creating the push button and placing it beside the next step button
    let pushButton1 = document.createElement("button");
    pushButton1.innerText = "Enqueue";
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
    popButton1.innerText = "Dequeue";
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

    // To create the top line for the Queue
    let newlinetop = document.createElement("div");
    newlinetop.style.borderTop = "6px solid black";
    newlinetop.style.top = "0%";
    newlinetop.style.left = "0%";
    newlinetop.style.width = "100%";
    newlinetop.style.position = "absolute";

    // To create the bottom line for the Queue
    let newlinebottom = document.createElement("div");
    newlinebottom.style.borderTop = "6px solid black";
    newlinebottom.style.top = "30%";
    newlinebottom.style.left = "0%";
    newlinebottom.style.width = "100%";
    newlinebottom.style.position = "absolute";

    container.appendChild(newlinetop);
    container.appendChild(newlinebottom);
    container.style.marginTop = "20px";

    let createNodeButton = document.getElementById("Create-Node");
    let NodeCreation = document.getElementById("Main-Data-Structure");
    NodeCreation.style.position = "absolute";
    NodeCreation.style.top = "20%";
    NodeCreation.style.width = "20%";

    let HeadTailContainer = document.createElement("div");
    HeadTailContainer.style.display = 'flex';
    HeadTailContainer.style.justifyContent = 'center';
    HeadTailContainer.style.alignItems = 'center';
    //HeadTailContainer.style.border = "8px solid black";
    HeadTailContainer.style.height = "100px";
    HeadTailContainer.style.width = "300px";
    HeadTailContainer.style.padding = "20px";
    HeadTailContainer.style.margin = "auto";
    HeadTailContainer.style.marginTop = "220px";

    container.appendChild(HeadTailContainer);

    let Head = document.createElement("div");
    Head.style.backgroundColor = "#e0f8e0";
    Head.style.height = "50px";
    Head.style.width = "120px";
    Head.style.display = 'flex';
    Head.style.justifyContent = 'center'; // Align text horizontally
    Head.innerText = "Head";
    Head.style.fontSize = "15px";
    Head.style.textAlign = "center";
    Head.style.border = "2px solid black";
    Head.style.borderRadius = "10px";

    let Tail = document.createElement("div");
    Tail.style.backgroundColor = "#e0f8e0";
    Tail.style.height = "50px";
    Tail.style.width = "120px";
    Tail.style.display = 'flex';
    Tail.style.justifyContent = 'center';
    Tail.innerText = "Tail";
    Tail.style.fontSize = "15px";
    Tail.style.textAlign = "center";
    Tail.style.border = "2px solid black";
    Tail.style.borderRadius = "10px";

    HeadTailContainer.appendChild(Head);
    HeadTailContainer.appendChild(Tail);

    let areaText = document.getElementById("text-area");
    let DataCount = 0;
    let createdNode = false;


    createNodeButton.addEventListener("click", function (){
        areaText.value = OpenMessage;
        areaText.style.fontSize = "15px";
        // Now to create Nodes (div boxes) with some data
        let NodeBox = document.createElement("div");
        NodeBox.style.position = "absolute";
        NodeBox.style.display = "flex";
        NodeBox.style.background = "#e0f8e0";
        NodeBox.style.width = "50%";
        NodeBox.style.height = "46px";
        NodeBox.style.textAlign = "center";
        NodeBox.style.alignItems = "center"; // For vertical centering
        NodeBox.style.justifyContent = "center"; // For horizontal centering
        NodeBox.style.border = "2px solid black";
        NodeBox.style.borderRadius = "20px";
        NodeBox.innerText = "Data Element " + DataCount;
        NodeArray[counter] = NodeBox;
        console.log("Node created at counter: " + counter);
        NodeCreation.appendChild(NodeBox);
        DataCount++;
        createdNode = true;
    })


    pushButton1.addEventListener("click", function (){
        // To move the Queue
        console.log("Push button");
        if(!createdNode){
            document.getElementById("text-area").value = "Please create a node!!";
            return;
        }
        if(counter >= 9){
            let area = document.getElementById("text-area");
            area.innerText = "Queue is full!!";
        }else{
            NodeArray[counter].style.border = "2px solid red";
            NodeArray[counter].style.width = "8.7%";
            Head.innerText = "Head\n" + NodeArray[0].innerText;
            Tail.innerText = "Tail\n" + NodeArray[NodeArray.length-1].innerText;
            container.appendChild(NodeArray[counter]);
            NodeArray[counter].style.left = PerArrayHorz[counter];
            NodeArray[counter].style.top = "9.7%";
            console.log("Counter = " + counter + "|| At percentage = " + PerArrayHorz[counter]);
            counter++;
        }
        createdNode = false;
    })


    popButton1.addEventListener("click", function (){
        if (NodeArray.length === 0) {
            console.log("Queue is empty");
            areaText.value = "Queue is empty!";
            return;
        }if(createdNode){ //Created node but haven't pushed
            areaText.value = "Can't dequeue a node if you haven't pushed one!"
            return;
        }

        let dequeuedElement = NodeArray.shift();
        dequeuedElement.style.left = "80%"; // To move the Node top right
        dequeuedElement.style.border = "2px solid black";
        document.body.appendChild(dequeuedElement); // Appending the popped node to the top right

        // Shift remaining nodes on the UI and Array
        NodeArray.forEach((node, index) => {
            node.style.left = PerArrayHorz[index]; // Update each node's position to the next forward position
        });

        console.log("Node was dequeued. Remaining nodes: " + NodeArray.length);
        counter--;
        Head.innerText = "Head\n" + NodeArray[0].innerText;
        Tail.innerText = "Tail\n" + NodeArray[NodeArray.length-1].innerText;
    })
}

function linkedList(){
    // Create a main container
    // Place multiple Nodes with two boxes one data one pointer
    let area = document.getElementById("text-area");
    area.style.fontSize = "15px";
    area.value =  "Linked List Selected! Please create a node to get started";

    let openingMessage = "Each Node has its data value (Integer, String, Class reference, Ect...)"
        + " and a pointer to the next node, for which the newly created node's next pointer is set to NULL\n\n"
        + "Hover over each button for a description!";


    let SearchButton = document.createElement("button");
    SearchButton.style.backgroundColor = 'black';
    SearchButton.style.color = 'white';
    SearchButton.style.border = 'none';
    SearchButton.style.borderRadius = '8px';
    SearchButton.style.padding = '10px 20px';
    SearchButton.style.fontSize = '16px';
    SearchButton.style.cursor = 'pointer';
    SearchButton.style.transition = 'all 0.3s ease';
    SearchButton.innerText = "Search for Node";
    SearchButton.id = "search-button";

    SearchButton.addEventListener('mouseover', function() {
        SearchButton.style.backgroundColor = 'blue';
        SearchButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        area.value = "Searching for nodes involves checking all nodes starting from index 0, a simple linear search.\n\n"
            + "Subsequently, the program will highlight the preceding nodes up till the node needed to be found and then disappear when the node is found.";
    });

    SearchButton.addEventListener('mouseout', function() {
        SearchButton.style.backgroundColor = 'black'; // Reset to original
        SearchButton.style.boxShadow = 'none';
        area.value = openingMessage;
    });

    // Active styles
    SearchButton.addEventListener('mousedown', function() {
        SearchButton.style.backgroundColor = 'red';
        SearchButton.style.transform = 'translateY(2px)';
    });

    SearchButton.addEventListener('mouseup', function() {
        SearchButton.style.transform = 'translateY(0px)';
    });

    let ButtonContainer = document.getElementById("Node-Button-Container");
    let DeleteNode = document.createElement("button");

    DeleteNode.style.backgroundColor = 'black';
    DeleteNode.style.color = 'white';
    DeleteNode.style.border = 'none';
    DeleteNode.style.borderRadius = '8px';
    DeleteNode.style.padding = '10px 20px';
    DeleteNode.style.fontSize = '16px';
    DeleteNode.style.cursor = 'pointer';
    DeleteNode.style.transition = 'all 0.3s ease';
    DeleteNode.innerText = "Delete Node";
    DeleteNode.id = "delete-button";

    DeleteNode.addEventListener('mouseover', function() {
        DeleteNode.style.backgroundColor = 'red';
        DeleteNode.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        area.value = "Delete Node will remove the smallest index if no index is given in the text box. \n\n"
            + "If the index is given then subsequently the program will remove at the index given.";
    });

    DeleteNode.addEventListener('mouseout', function() {
        DeleteNode.style.backgroundColor = 'black'; // Reset to original
        DeleteNode.style.boxShadow = 'none';
        area.value = openingMessage;
    });

    // Active styles
    DeleteNode.addEventListener('mousedown', function() {
        DeleteNode.style.backgroundColor = 'red';
        DeleteNode.style.transform = 'translateY(2px)';
    });

    DeleteNode.addEventListener('mouseup', function() {
        DeleteNode.style.transform = 'translateY(0px)';
    });

    ButtonContainer.appendChild(SearchButton);
    ButtonContainer.appendChild(DeleteNode);

    let counter = 0;
    let NodeArray = [];
    let ArrowArray = [];
    let PointerArray = [];
    let NodeIDs = [];

    let LinkedContainer = document.getElementById("Main-Data-Structure");
    LinkedContainer.style.position = "relative";
    LinkedContainer.style.top = "5%";
    LinkedContainer.style.width = "70%";
    LinkedContainer.style.height = "40%";
    LinkedContainer.style.left = "5%";
    //LinkedContainer.style.border = "4px solid black";
    LinkedContainer.style.display = "flex";
    LinkedContainer.style.justifyContent = "center"; // For horizontal centering

    let CreateNode = document.getElementById("Create-Node");
    let TextIndex = "";

    document.getElementById("text-area").innerText = "";

    let TextInput = document.createElement("input");
    TextInput.style.width = "100px";
    TextInput.type = "text";
    TextInput.placeholder = "Index: or Data";
    TextInput.id = "InputIndex";
    TextIndex = TextInput;
    let NodeButtonContainer = document.getElementById("Node-Button-Container");
    NodeButtonContainer.appendChild(TextInput);


    CreateNode.addEventListener("click", function(){

        if(counter === 0){
            area.value = "Each Node has its data value (Integer, String, Class reference, Ect...)"
                + " and a pointer to the next node, for which the newly created node's next pointer is set to NULL\n\n"
                + "Hover over each button for a description!";
        }

        NodeIDs[counter] = "Node" + counter;
        console.log("Node ID " + NodeIDs[counter]);
        // Node creation
        let Node = document.createElement("div");
        Node.style.position = "relative";
        Node.style.background = "green";
        Node.style.color = "white";
        Node.style.width = "120px";
        Node.style.height = "50px";
        Node.style.border = "2px solid black";
        Node.style.display = "flex";
        Node.style.alignItems = "center";
        Node.style.margin = "20px";
        Node.className = "NodesInStructure";
        Node.id = NodeIDs[counter];

        // Node data text
        let textDiv = document.createElement("div");
        textDiv.innerText = "Data";
        textDiv.style.width = "50%";
        textDiv.style.textAlign = "center";

        // Node pointer text
        let NextTextDiv = document.createElement("div");
        NextTextDiv.innerText = "Null";
        NextTextDiv.style.width = "50%";
        NextTextDiv.style.textAlign = "center";

        // Line separating the data and pointer to the next node
        let NodeLine = document.createElement("div");
        NodeLine.style.position = "absolute";
        NodeLine.style.left = "50%";
        NodeLine.style.top = "0";
        NodeLine.style.bottom = "0";
        NodeLine.style.width = "2px";
        NodeLine.style.backgroundColor = "black";

        Node.appendChild(textDiv);
        Node.appendChild(NextTextDiv);
        Node.appendChild(NodeLine);

        let arrow = document.createElement("div");
        arrow.style.width = "0";
        arrow.style.height = "0";
        arrow.style.borderTop = "10px solid transparent";
        arrow.style.borderBottom = "10px solid transparent";
        arrow.style.borderLeft = "20px solid black";  // Pointing the arrow right
        arrow.style.position = "relative";
        arrow.style.marginTop = "40px";

        Node.appendChild(NodeLine);
        LinkedContainer.appendChild(Node);
        LinkedContainer.appendChild(arrow);

        ArrowArray.push(arrow);
        NodeArray.push(Node);
        PointerArray.push(NextTextDiv);

        // To set the Next pointer data. Null until a following node has been made.
        if(counter > 0){
            NextTextDiv.innerText = "Null";
            PointerArray[counter-1].innerText = "Address at Node index " + (counter);
        }
        counter++;
    })

    SearchButton.addEventListener("click", function (){
        let Input = document.getElementById("InputIndex");
        let InputValue = Input.value.trim();
        console.log("Index received as " + InputValue);

        // To show a classic iterative search to find that index
        for(let i = 0; i-1 < InputValue; i++){
            setTimeout(()=>{
                document.querySelector("#Node" + i).style.borderColor = "red";
            }, 1000 * i);
        }

        /**
         * To return the border on all previous nodes to black
         */
        for(let x = 0; x < InputValue; x++){
            setTimeout(() => {
                document.querySelector("#Node" + x).style.borderColor = "black";
            }, 4000);
        }

    })

    DeleteNode.addEventListener("click", function (){
        // To either remove the first element in the linked list or the specified index
        if(TextIndex.value.trim() >= NodeArray.length){
            area.value = "That index is not available!";
        }
        if(TextIndex && TextIndex.value.trim() === ""){
            // To remove the first element in the linked list
            console.log("No index given. Removing the first element...")
            let removedNode = NodeArray.shift();
            removedNode.parentNode.removeChild(removedNode);
            removedNode = ArrowArray.shift();
            removedNode.parentNode.removeChild(removedNode);
        }else{
            // To remove at the given index
            let removedNodes = NodeArray.splice(TextIndex.value.trim(),1);
            removedNodes[0].parentNode.removeChild(removedNodes[0]);
            removedNodes = ArrowArray.splice(TextIndex.value.trim(), 1);
            removedNodes[0].parentNode.removeChild(removedNodes[0]);
        }
    })

}

function binaryTree(){

    let openMessage = "Each node is similar to that of a linked list. In a binary tree the key difference is that"
        + " each node has a left and right pointer instead of one single next pointer."
        + " They still have data for each node.\n\n"
        + "Left children are when the data value is less then the parent node, "
        + "and right children are when the data value is more then the parent node"
        + "\n\nPlease create a node to get started!";

    let area = document.getElementById("text-area");
    area.value = openMessage;
    area.style.fontSize = "15px";

    let createNode = document.getElementById("Create-Node");

    let BSTContainer = document.getElementById("Main-Data-Structure");
    BSTContainer.style.display = "flex";
    BSTContainer.style.position = "relative";
    BSTContainer.style.marginTop = "10px";
    BSTContainer.style.width = "30%";
    BSTContainer.style.height = "60%";
    BSTContainer.style.left = "40%";
    //BSTContainer.style.border = "4px solid black";
    BSTContainer.style.flexDirection = "column";
    BSTContainer.style.alignItems = "center";

    let counter = 0;
    let buttonContainer = document.getElementById("Node-Button-Container");

    let ButtonContainer = document.getElementById("Node-Button-Container");
    let Delete_Node = document.createElement("button");

    Delete_Node.style.backgroundColor = 'black';
    Delete_Node.style.color = 'white';
    Delete_Node.style.border = 'none';
    Delete_Node.style.borderRadius = '8px';
    Delete_Node.style.padding = '10px 20px';
    Delete_Node.style.fontSize = '16px';
    Delete_Node.style.cursor = 'pointer';
    Delete_Node.style.transition = 'all 0.3s ease';
    Delete_Node.innerText = "Delete Node";
    Delete_Node.id = "delete-button";

    Delete_Node.addEventListener('mouseover', function() {
        Delete_Node.style.backgroundColor = 'red';
        Delete_Node.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        area.value = "Delete Node will remove the smallest index if no index is given in the text box. \n\n"
            + "If the index is given then subsequently the program will remove at the index given.";
    });

    Delete_Node.addEventListener('mouseout', function() {
        Delete_Node.style.backgroundColor = 'black';
        Delete_Node.style.boxShadow = 'none';
        area.value = openMessage;
    });

    Delete_Node.addEventListener('mousedown', function() {
        Delete_Node.style.backgroundColor = 'red';
        Delete_Node.style.transform = 'translateY(2px)';
    });

    Delete_Node.addEventListener('mouseup', function() {
        Delete_Node.style.transform = 'translateY(0px)';
    });

    ButtonContainer.appendChild(Delete_Node);

    let TextInput = document.createElement("input");
    TextInput.style.width = "100px";
    TextInput.style.height = "40px";
    TextInput.placeholder = "Data Number: ";
    TextInput.id = "DataNumber";

    buttonContainer.appendChild(TextInput);

    let NodeArray = [];
    let InputArray = [];
    let RightArrayHorz = ["5%","15%","25%","35%","45%","55%","65%","75%","85%","95%"];
    let LeftArrayHorz = ["-5%","-15%","-25%","-35%","-45%","-55%","-65%","-75%","-85%","-95%"];

    createNode.addEventListener("click", function (){
        let InputText = document.getElementById("DataNumber").value.trim();
        // To only create a subsequent node if the root has been created
        if(InputText === "" && typeof(InputText) !== "number"){
            area.value = "Please enter a data value for the new node!";
            return;
        }
        InputArray.push(InputText);
        let NodeBST = document.createElement("div");
        NodeBST.style.position = "relative";
        NodeBST.style.background = "green";
        NodeBST.style.color = "white";
        NodeBST.style.width = "60px";
        NodeBST.style.height = "50px";
        NodeBST.style.border = "2px solid black";
        NodeBST.style.display = "flex";
        NodeBST.style.alignItems = "center";
        NodeBST.style.margin = "20px";
        NodeBST.className = "NodesInStructure";
        NodeBST.innerText = "Data: " + InputText;
        NodeBST.style.textAlign = "center";

        // For subsequent new nodes horizontal placement
        if(counter > 0){
            if(InputText < InputArray[counter-1]){
                console.log("Less then " + LeftArrayHorz[counter])
                NodeBST.style.left = LeftArrayHorz[counter];
            }else{
                console.log("More then " + RightArrayHorz[counter])
                NodeBST.style.right = RightArrayHorz[counter];
            }
        }

        BSTContainer.appendChild(NodeBST);

        let ChildLine = document.createElement("div");
        ChildLine.style.borderLeft = "7px solid black";
        ChildLine.style.position = "relative";
        ChildLine.style.height = "50px";
        ChildLine.style.width = "5px";
        ChildLine.style.margin = "2px";

        BSTContainer.appendChild(ChildLine);

        NodeArray.push(NodeBST);

        counter++;
    })
}

function returnToIndex(){
    window.location.href = "index.html";
}

function sortingPage(){
    window.location.href = "sorting.html";
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("start-button").disabled = true;
})

function reloadOnNumChange(){

}

function loadContainerSort(){
    let container = document.getElementById("container");
    let dataArray = []; // For all data elements
    let numElements = document.getElementById("value-number").value;
    let elementWidth = 0;
    let selected = "";
    document.getElementById("load-container-button").disabled = true;

    let bubble = document.getElementById("bubbleSort-button");
    let selection = document.getElementById("selectionSort-button");
    let insertion = document.getElementById("insertionSort-button");

    // To populate the container with the data
    for(let counter = 0; counter < numElements; counter++){
        let data = document.createElement("div");
        elementWidth = 120 / numElements; // Container width is 80, so we divide by number of elements
        data.style.width = elementWidth.toString() + "%";
        let num = Math.floor(Math.random() * (29 - 2 + 1)) + 2;
        if(numElements <= 62){
            data.textContent = num;
            data.style.border = "2px solid black";
        }else{
            data.style.border = "0.5px solid black";
        }
        data.title = num // To assign a random number
        data.style.height = num * 3.3333333 + "%";
        data.style.textAlign = "center";
        dataArray.push(data);
        container.appendChild(data);
    }

    document.getElementById("start-button").disabled = false;
    console.log("Container Loaded");

    document.getElementById("bubbleSort-button").addEventListener("click", function (){
        selection.disabled = true;
        insertion.disabled = true;
        document.getElementById("start-button").addEventListener("click", function (){
            bubbleSort(dataArray,speed).then(()=>{
                console.log("Bubble Sort has completed");
            }).catch((error) =>{
                console.log("Error during Bubble Sort Method");
            });
        })
    })

    document.getElementById("selectionSort-button").addEventListener("click", function (){
        bubble.disabled = true;
        insertion.disabled = true;
        document.getElementById("start-button").addEventListener("click", function (){
            selectionSort(dataArray,speed).then(()=>{
                console.log("Selection Sort has completed");
            }).catch((error) =>{
                console.log("Error during Selection Sort Method");
            });
        })
    })

    document.getElementById("insertionSort-button").addEventListener("click", function (){
        selection.disabled = true;
        bubble.disabled = true;
        document.getElementById("start-button").addEventListener("click", function (){
            insertionSort(dataArray,speed).then(()=>{
                console.log("Insertion Sort has completed");
            }).catch((error) =>{
                console.log("Error during Insertion Sort Method");
            });
        })
    })

    // To reset on every change of the data element number
    document.getElementById("value-number").addEventListener("input", function(){
        window.location.reload();
        document.getElementById("load-container-button").disabled = false;
        selected = "";
    })
}
let speed = 200;
document.getElementById("slow-algo").addEventListener("click", function(){
    console.log("Slow is clicked");
    speed = speed + 20;
    console.log(speed);
})
document.getElementById("fast-algo").addEventListener("click", function(){
    console.log("fast is clicked");
    speed = speed - 20;
    console.log(speed);
})

async function bubbleSort(dataArray){
    // To create the bubble sort algorithm and use the .insertBefore keyword to swap divs
    let container = document.getElementById("container");
    document.getElementById("image-time").textContent = "O(n)";

    console.log("BubbleSort Initiated!");
    let count = 0;
    let loopCount = 0;
    let swapCount = 0;
    console.log("Data Array Length = " + dataArray.length);
    do {
        if (count === dataArray.length - 1) {
            count = 0;
            swapCount = 0;
            console.log("Count resetting");
            dataArray[dataArray.length - 1].style.backgroundColor = "transparent";
        }
        // To slow the algorithm after time progresses
        await new Promise(resolve => setTimeout(resolve, speed));
        if (parseInt(dataArray[count].title) > parseInt(dataArray[count + 1].title)) {
            swapCount = 0;
            container.insertBefore(dataArray[count + 1], dataArray[count]);
            let temp = dataArray[count + 1];
            dataArray[count + 1] = dataArray[count];
            dataArray[count] = temp;
        }else{
            swapCount++;
        }
        loopCount++;
        dataArray[count].style.backgroundColor = "transparent";
        count++;
        dataArray[count].style.backgroundColor = "red";
    } while (swapCount !== dataArray.length - 1);
    // To account for last node being coloured
    dataArray[dataArray.length - 1].style.backgroundColor = "transparent";
    console.log("BubbleSort completed");
}

async function selectionSort(dataArray) {
    console.log("Selection Sort Selected");
    let container = document.getElementById("container");
    let size = dataArray.length;

    for(let step = 0; step < size - 1; step++){
        let min = step;
        dataArray[step].style.backgroundColor = "transparent";

        for(let i = step + 1; i < size; i++){
            if(parseInt(dataArray[i].title) < parseInt(dataArray[min].title)){
                min = i;
            }
        }
        dataArray[min].style.backgroundColor = "blue";
        console.log("Step: " + step + ", Min: " + min);
        await new Promise(resolve => setTimeout(resolve, speed));
        let temp = document.createElement("div");
        container.insertBefore(temp, dataArray[step]);
        container.insertBefore(dataArray[step], dataArray[min]);
        container.insertBefore(dataArray[min], temp);
        container.removeChild(temp);

        dataArray[step].style.backgroundColor = "transparent";

        //dataArray[step].style.backgroundColor = "transparent";

        // Correct implementation of swapping divs in the Array
        let tempArray = dataArray[step];
        dataArray[step] = dataArray[min];
        dataArray[min] = tempArray;
    }

    console.log("Selection Sort Completed");
}

async function insertionSort(dataArray){
    let container = document.getElementById("container");

    let length = dataArray.length;
    let current = dataArray[0]; // First number in the list
    let j = 0;

    console.log("Insertion Sort Started");

    for(let sorted = 1; sorted < length; sorted++){
        dataArray[sorted].style.backgroundColor = "orange";
        current = dataArray[sorted];
        j = sorted - 1;

        while(j>= 0 && parseInt(current.title) < parseInt(dataArray[j].title)){
            dataArray[j + 1] = dataArray[j]; // To shift all elements past the element
            j--;
        }
        dataArray[j + 1] = current;
        dataArray[sorted].style.backgroundColor = "transparent";

        dataArray.innerHTML = '';
        dataArray.forEach(div => container.appendChild(div));

        await new Promise(resolve => setTimeout(resolve, speed));
    }
    console.log("Insertion Sort end");
}

async function quickSort(){
}

function loadContainerSearch(){
    let container1 = document.getElementById("container-search");
    let dataArray = []; // For all data elements

    // To populate the container with the data
    for(let counter = 0; counter < 40; counter++){
        let data1 = document.createElement("div");
        data1.style.width = "2.5%";
        let num = Math.floor(Math.random() * (29 - 2 + 1)) + 2;
        data1.textContent = num // To assign a random number
        data1.style.border = "3px solid rgba(255, 255, 255, 0.8)";
        data1.style.color = "white";
        data1.style.height = num * 3.3333333 + "%";
        data1.style.textAlign = "center";
        dataArray.push(data1);
        container1.appendChild(data1);
    }

    console.log("Search Container Loaded");

    document.getElementById("linear-search-button").addEventListener("click", function (){
        console.log("Linear Search Selected");
        linearSearch(dataArray).then(()=>{
            console.log("Linear Search has completed");
        }).catch((error) =>{
            console.log("Error in Linear Search Method");
        });
    })
}

async function linearSearch(dataArray){
    let container = document.getElementById("container");

    let target = document.getElementById("num-input").value;
    target = parseInt(target, 10);

    console.log("Linear Search Started");

    for(let i = 0; i < dataArray.length; i++){
        await new Promise(resolve => setTimeout(resolve, 100));
        if(parseInt(dataArray[i].textContent) === target){
            console.log("Target Found");
            dataArray[i].style.background = "green";
        }else{
            dataArray[i].style.border = "3px solid orange";
        }
        console.log("Element: " + parseInt(dataArray[i].textContent));
    }

    console.log("Linear Search Complete");
}

function searchingPage(){
    window.location.href = "searching.html";
}