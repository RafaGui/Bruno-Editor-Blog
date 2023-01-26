let imag1 = document.getElementById('imagem01');
function TogifConv(){
    imag1.setAttribute('src', 'assets/midia/Medusa-110877.gif');
}
function ToimgConv(){
    imag1.setAttribute('src', 'assets/midia/3.jpg');
}
imag1.addEventListener('mouseenter', TogifConv);
imag1.addEventListener('mouseout', ToimgConv);

// break ---------------------------------------------------------

let imag2 = document.getElementById('imagem02');
function TogifConv2(){
    imag2.setAttribute('src', 'assets/midia/Papel-De-Parede-Ao-Vivo-112722.gif');
}
function ToimgConv2(){
    imag2.setAttribute('src', 'assets/midia/4.jpg');
}
imag2.addEventListener('mouseenter', TogifConv2);
imag2.addEventListener('mouseout', ToimgConv2);

// break ---------------------------------------------------------