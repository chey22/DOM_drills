document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement("button")
    let btnText = document.createTextNode("Add Square")
    button.appendChild(btnText);
    document.body.appendChild(button)
    button.className = "button"

    
    let d = 0
    button.addEventListener("click", function() {
        let div = document.createElement("div")
        div.className = "boxes"
        div.id = d
        div.innerText = d
        // let divText = document.createTextNode(`${d}`)
        document.body.appendChild(div)
        // div.appendChild(divText)
        d++
        div.addEventListener("click", btnClicked)
    });
    
    function btnClicked (e) {
        element = e.target
        element.parentNode.appendChild(element)
    };




});