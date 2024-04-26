function stacks(){
    // To initialize some basics on the Stack Data Structure
    let area = document.getElementById("text-area");
    area.textContent = "Stacks use a FIFO (First in first out) " +
        "procedure with accompanying nodes. The first subsequent node to be placed"
        + "on the stack will be the first node out.\n\n"
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








    // Now to create boxes for the implementation
    //let box = document.getElementById("box");
    //box.style.background = "grey";
    //box.style.borderColor = "black"; // not working
    //box.style.borderWidth = "20px"; // not working
}

function queues(){

}

function linkedList(){

}

function binaryTree(){

}