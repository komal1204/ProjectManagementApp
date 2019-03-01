function toggleMenu(){
    var x = document.getElementsByClassName('menu')[0].style.display;
    if(x === 'none'){
        document.getElementsByClassName('menu')[0].style.display='';
    }else{
        document.getElementsByClassName('menu')[0].style.display='none';   
    }
}
// document.getElementById('menuBtn').addEventListener('click',function(){
    // toggleMenu();
// }
// );