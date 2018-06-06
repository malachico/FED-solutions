window.onload = function () {

        // Create a handler according to action
    function createHandler(action, element) {
        return () => {
            let current = Number(element.textContent);

            action === 'increase' ?
                element.innerHTML = current + 1 :
                element.innerHTML = current - 1;
        }
    }

        // Create button with event handler
    function createButton(name, eventHandler, parent) {
        let button = document.createElement("button");
        button.innerHTML = name;

        parent.appendChild(button);

        button.addEventListener("click", eventHandler);
    }

    // DOM references
    let counterText = document.createElement("p");
    let body = document.getElementsByTagName("body")[0];

    // Set initial counter
    counterText.innerHTML = '0';

    // Create buttons attached to handlers
    createButton("increase", createHandler('increase', counterText), body);
    createButton("decrease", createHandler('decrease', counterText), body);

    // Append to body
    body.appendChild(counterText);
};