

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerText = previewPic.alt
     
}
   
function unDo(){
    document.getElementById("image").style.backgroundImage = '';
    document.getElementById("image").style.backgroundColor = '#8e68ff';
    document.getElementById("image").style.color = '#FFFFFF';
    document.getElementById("image").innerText = 'Hover over an image below to display here.'
           
}