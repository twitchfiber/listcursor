const streams = ["Hulu", "Netflix", "CBS Now", "YouTube", "Vudu"];
const list = document.querySelector("ul");

// populate DOM with list items from streams array
streams.forEach((element) => {
    let provider = document.createElement("li");
    provider.textContent = element;
    list.appendChild(provider);
});

// by default, the first streamer is highlighted
let children = list.children;
let length = streams.length;
let currPtr = 0;
children[0].className = "highlight";

// add highlight class to li of interest
// if key down, remove and apply class to next element in array (li)
document.addEventListener("keydown", function(e){
    if (e.code === "ArrowDown")
    {
        if (currPtr+1 < length) {
            children[currPtr].classList.remove("highlight");
            currPtr++;
            children[currPtr].className = "highlight";
        }
    }
    else if (e.code === "ArrowUp") {
        if (currPtr-1 >= 0) {
            children[currPtr].classList.remove("highlight");
            currPtr--;
            children[currPtr].className = "highlight";
        }
    }
});