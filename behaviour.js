var str;
setTimeout(logoview,4900);
function logoview(){
  document.getElementById('logo_corner').style.display = 'block';
  document.getElementById('full_logo').style.display = 'none';
}
function background_text_change(str){
  document.getElementById('background_text').innerHTML = str;
}
