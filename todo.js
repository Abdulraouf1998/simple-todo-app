const btn = document.querySelector(".input-area button ");
btn.addEventListener("click", function () {
    const input = document.querySelector(".input-area input");
    const todo = document.querySelector(".todo-area");
    const p = document.createElement('p');
    p.innerText = input.value;
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Delete";
    div.appendChild(p);
    div.appendChild(button);
    todo.appendChild(div);
    runDeleteButtons();
});
function runDeleteButtons() {
    const remove = document.querySelectorAll(".delete");
    for (let index = 0; index < remove.length; index++) {
        remove[index].addEventListener("click", function (_event) {
            _event.srcElement.parentElement.remove();
        })
    }
}
runDeleteButtons();
