const inputField = document.querySelector("#item");
const list = document.querySelector("ul");
const addBtn = document.querySelector("#addBtn");


function addItem() {
    const inputValue = inputField.value;
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;
    list.appendChild(listItem);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.textContent = "Remove Item";
    removeBtn.style.display = "inline";
    listItem.appendChild(removeBtn);

    function removeItem() {
        const removeBtn = document.querySelector(".removeBtn");
        listItem.remove();
        removeBtn.remove();
    }
    removeBtn.addEventListener("click", removeItem);
    inputField.focus();
}

addBtn.addEventListener("click", addItem);