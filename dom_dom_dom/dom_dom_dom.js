document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement("button")
    let btnText = document.createTextNode("Add Square")
    let counter = 0
    let container = document.createElement('div')

    container.className = 'container'
    button.className = "button"
    
    button.appendChild(btnText);
    document.body.appendChild(button)
    document.body.appendChild(container)

    button.addEventListener("click", function () {
        let div = document.createElement("div")
        div.className = "boxes"
        div.id = counter
        div.innerText = counter
        container.appendChild(div)
        counter++

        div.addEventListener("click", btnClicked)
        div.addEventListener("dblclick", btnDoubleClicked)

        let colors = ["red", "blue", "orange", "green", "purple", "yellow", "pink"];

        function getRandomColor() {
            let getRandomColor = colors[Math.floor(Math.random() * colors.length)];
            return getRandomColor;
        }

        function btnClicked(e) {
            let randomColor = getRandomColor()
            e.currentTarget.style.backgroundColor = randomColor
        };

        function btnDoubleClicked(e) {
            if (div.id % 2 == 0) {
                if (document.body.contains(div.nextSibling)) {
                    div.nextSibling.remove()
                } else {
                    alert('There is no square after this')
                }
            } else {
                if (document.body.contains(div.previousSibling)) {
                    div.previousSibling.remove()
                } else {
                    alert('There is no square before this')
                }

            }
        }
    })

});