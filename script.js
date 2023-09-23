var container = document.querySelector('.container');
var btn = document.querySelector('.refreshBtn');
var rgbOutput = document.querySelector('.rgbOutput');
var copyBtn = document.querySelector('.copyBtn');




function changeBackground(){
    var x = Math.round(Math.random() * 226);
    var y = Math.round(Math.random() * 226);
    var z = Math.round(Math.random() * 226);
    container.style.backgroundColor = 'rgb('+x+','+y+','+z+')';
    rgbOutput.innerHTML = 'RGB('+x+', '+y+', '+z+')';
    
}

function copyRgb(){
    var textToCopy = rgbOutput.innerHTML;
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

}



btn.addEventListener('click', changeBackground);
copyBtn.addEventListener('click', copyRgb);