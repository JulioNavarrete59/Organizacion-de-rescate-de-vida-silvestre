inputSearch = document.getElementById("input-search");

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = input_search.getElementByTagName("li");
    
    //Recorriendo elementos a filtrar mediante los "LI"
    for (i=0; i<li.length; i++){
        a = li[i].getElementByTagName("a")[0];
        textValue = a.textContent || a.innetText;
        
    }

}