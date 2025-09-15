
const body = document.body;
for(let i=0; i<150; i++){
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random()*100+'%';
    star.style.left = Math.random()*100+'%';
    star.style.width = star.style.height = Math.random()*3 + 'px';
    body.appendChild(star);
}
console.log("ثيم Milky Way ✨ النجوم جاهزة");
