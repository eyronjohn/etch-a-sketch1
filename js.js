// const para = document.createElement("p");
// para.textContent = " Hello there";

// container.appendChild(para);

// const div1 = document.createElement("div");
// container.appendChild(div1);

const container = document.getElementById("container");

function createGrid(){
    for(let i = 0; i<16; i++){
        for(let j = 0; j<16; j++){
            const div1 = document.createElement("div");
            container.appendChild(div1);

            //click
            div1.addEventListener("mouseover", () =>{
                div1.style.backgroundColor = "red";
            })
        }
    }
}

createGrid();

function resetGrid(){
    for(let i = 0; i<16; i++){
        for(let j = 0; j<16; j++){
            const div1 = document.querySelectorAll("div");
            div1.style.backgroundColor = "red";
        }
    }
}

function resetGrid2(){
    const div1 = document.querySelectorAll("div")
    div1.forEach(div =>{
        div.style.backgroundColor = "";
    });
}

const reset = document.getElementById("reset-btn");
reset.addEventListener("click", resetGrid2);
// createGrid2();

function changeGrid(){
    let size = prompt("Enter grid size: ");
    container.innerHTML ="";

    if (size > 100 || size < 1) {
        alert("Size must be between 1 and 100. Try again.");
        return;
    }

    let divSize = 960/size + "px";
    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            const div1 = document.createElement("div");
            div1.style.width = divSize;
            div1.style.height = divSize;
            div1.style.display = "inline-block"; 
            div1.style.boxSizing = "border-box"; 
            container.appendChild(div1);

            //click
            div1.addEventListener("mouseover", () =>{
                div1.style.backgroundColor = "red";
            })
        }
    }
}