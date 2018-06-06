window.onload = function() {

    // Create a handler according to action
    function createHandler(action, element){
        return () => {
            let current = element.textContent;

            current = Number(current);
            console.log(current);
            if (action === 'increase') {
                element.innerHTML = current + 1;
            }
            else if (action === 'decrease') {
                element.innerHTML = current - 1;
            }
        };
    }

    // Create button with event handler
    function createButton (name, eventHandler) {
        let button = document.createElement("button");
        button.innerHTML = name;

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener ("click", eventHandler);
    }

    // Create paragraph to display counter
    let counterText = document.createElement("p");

    // Set initial counter
    counterText.innerHTML = '0';

    // Create buttons attached to handlers
    createButton("increase", createHandler('increase', counterText));
    createButton("decrease", createHandler('decrease', counterText));

    // Append to body
    document.getElementsByTagName("body")[0].appendChild(counterText);
};