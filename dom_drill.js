document.addEventListener('DOMContentLoaded', function () {

    // option 1

    let div = document.createElement("div");
    div.className = "header-container";
    document.body.appendChild(div);

    //or option 2, per Josh. You'd have to replace div with header-container

    //let header-container = document.createElement("div");
    //header-container.className = "header-container";


    //step 4
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1.");
    h1.className = "h1";
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement("h2")
    let h2Text = document.createTextNode("This is an h2.")
    h2.className = "h2"
    h2.appendChild(h2Text)
    div.appendChild(h2)

    let h3 = document.createElement("h3")
    let h3Text = document.createTextNode("This is an h3.")
    h3.className = "h3"
    h3.appendChild(h3Text)
    div.appendChild(h3)

    let h4 = document.createElement("h4")
    let h4Text = document.createTextNode("This is an h4.")
    h4.className = "h4"
    h4.appendChild(h4Text)
    div.appendChild(h4)

    let h5 = document.createElement("h5")
    let h5Text = document.createTextNode("This is an h5.")
    h5.className = "h5"
    h5.appendChild(h5Text)
    div.appendChild(h5)

    let h6 = document.createElement("h6")
    let h6Text = document.createTextNode("This is an h6.")
    h6.className = "h6"
    h6.appendChild(h6Text)
    div.appendChild(h6)

    //create an array of 8 colors
    let colors = ["red", "blue", "orange", "black", "green", "purple", "yellow", "pink"];

    function getRandomColor() {
        let getRandomColor = colors[Math.floor(Math.random() * colors.length)];
        return getRandomColor;
    }

    h1.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener("dblclick", function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    let l = 1
    let button = document.getElementsByClassName("button");
    button[0].addEventListener("click", function () {
        let ul = document.createElement("ul")
        div.appendChild(ul);
        let li = document.createElement("li")
        //template literal - string interpolation
        ul.appendChild(li)
        let liText = document.createTextNode(`This is list item ${l}.`);
        li.appendChild(liText);
        l++;
        li.addEventListener("click", liClicked);
        li.addEventListener("dblclick", liDoubleClick);

    });

    function liClicked(e) {
        let randomColor = getRandomColor();
        e.currentTarget.style.color = randomColor;
    };

    function liDoubleClick(e) {
        element = e.currentTarget
        element.parentNode.removeChild(element)
    }


});

// should have done 2 arrays: one for colors and one for headers,
// then you can do:
// headers.forEach(function(element) {
//     element.addEventListener("dblclick", function() {
//         changeColor(element)
//     })
// });