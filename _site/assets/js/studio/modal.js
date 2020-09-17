function showHide(id){
    var modal = document.getElementById(id);
    //show
    if (modal.style.display=='block'){
        modal.style.display='none';
    }else{
        modal.style.display='block';
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    }
}
