function addTask() {
    let input = document.getElementById("i-1").value;
    let list = document.getElementById("t-1");
    let item = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Х"; 
    deleteButton.style.marginLeft = "10px"; //СКІЛЬКИ ЧАСУ Я ПОТРАТИВ НА ЦЕЙ РЯДОК ААААААААА
    deleteButton.addEventListener("click", function() { 
        list.removeChild(item);
    });
    item.textContent = input;
    item.appendChild(deleteButton); //кнопка видаленя біля кожного пункту (Х)
    list.appendChild(item);
    document.getElementById("i-1").value = "";
}