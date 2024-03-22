let btn = document.getElementById('button-1');
let spn = document.getElementById('span-1');

btn.onclick = () => {
    spn.textContent = parseInt(spn.textContent) + 1;
}
