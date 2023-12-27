/* 메인페이지 심볼 */
const symbolContent = ['&#9834;','&#9786;','&#10059;'];
const symbolContainer = document.querySelector('#effect-container')

const random = (num) => Math.floor(Math.random() * num);

const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const duration = random(10) + 10;
    const size = random(25)+25;
    return `
        top: -${top}%;
        left: ${left}%;
        font-size: ${size}px;
        animation-duration: ${duration}s;
    `;
}

//심볼 생성 함수
const createSymbol = (num) => {
    for (let i=num; i>0; i--){
        let symbol = document.createElement('div');
        symbol.className = 'symbols';
        symbol.style.cssText = getRandomStyles();
        symbol.innerHTML = symbolContent[random(3)];
        symbolContainer.append(symbol);
    }
  
}

window.addEventListener('load', ()=>{
    createSymbol(30);
    setTimeout(removeSymbol,20000);
});

const removeSymbol = ()=>{
    symbolContainer.style.opacity = 0;
    setTimeout( ()=>{
        symbolContainer.remove();
    },500);
};

symbolContainer.addEventListener('click',function(){
    removeSymbol();
});

