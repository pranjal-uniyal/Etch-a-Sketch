function createBoxes(numberPerRow) {
  const cdiv = document.querySelector(".container");
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;

  for (let i = 1; i < total; i++) {
    const div = document.createElement("div");
    if (i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      div.style.cssText = `border: 1px solid black; height: ${
        640 / numberPerRow
      }px; width:${640 / numberPerRow}px`;
    }

    cdiv.appendChild(div);
  }
}
function deleteBoxes() {
  const containerDiv = document.querySelector(".container");
  while (containerDiv.lastElementChild) {
    containerDiv.removeChild(containerDiv.lastElementChild);
  }
}

function etchEffect() {
  const containerDiv = document.querySelector(".container");
  let childDivs = containerDiv.getElementsByTagName("div");

  for (i = 0; i < childDivs.length; i++) {
    let childDiv = childDivs[i];
    childDiv.addEventListener("mouseover", () => {
      childDiv.classList.add("background");
    });
  }
}
function mainCreation() {
  createBoxes(16);
  etchEffect();
  const btn = document.querySelector("#square-btn");
  btn.addEventListener("click", () => {
    let sizePerRow = prompt("Enter a number upto 100");
    deleteBoxes();
    const squarePerRow = parseInt(sizePerRow);
    if (squarePerRow > 100) {
      squarePerRow = 100;
    }
    createBoxes(squarePerRow);
    etchEffect();
  });
}

mainCreation();
