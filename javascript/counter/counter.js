window.onload = function() {
    function createButton (name, eventHandler) {
        // 1. Create the button
        let button = document.createElement("button");
        button.innerHTML = name;

        // 2. Append somewhere
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", eventHandler);
    }

    // Create buttons
    createButton("increase", function() {

        let current = document.getElementsByTagName('p')[0].textContent;
        current = Number(current);

        document.getElementsByTagName('p')[0].innerHTML = current+1;
    });

    createButton("decrease", function() {

        let current = document.getElementsByTagName('p')[0].textContent;
        current = Number(current);

        document.getElementsByTagName('p')[0].innerHTML = current-1;
    });

    // Create paragraph to display counter
    let text = document.createElement("p");

    // set initial counter
    text.innerHTML = '0';

    // appent to body
    document.getElementsByTagName("body")[0].appendChild(text);
};