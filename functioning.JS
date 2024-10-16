function search(){
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const RecipeList = document.getElementById("RecipeList");
    const li = document.getElementsByClassName("li1")
    
            console.log("filter:",filter);
    if( filter.length > 0)
    {
        RecipeList.style.display = "block"; 
    }
    else
    {
        RecipeList.style.display = "none";
    }
 
    for( let i=0; i< li.length; i++)
        {
            const item = li[i].textContent || li[i].innerText;
            if( item.toLowerCase().indexOf(filter) > -1)
            {

                li[i].style.display ="";
            }
            else
            {
                li[i].style.display = "none";
            }
        }

    }