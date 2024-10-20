function search() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const RecipeList = document.getElementById("RecipeList");
    const li = document.getElementsByClassName("li1");

    let matchFound = false;

    console.log("filter:", filter);
    if (filter.length > 0) {
        RecipeList.style.display = "block";
    } else {
        RecipeList.style.display = "none";
    }

    for (let i = 0; i < li.length; i++) {
        const item = li[i].textContent || li[i].innerText;
        if (item.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            matchFound = true; 
        } else {
            li[i].style.display = "none";
        }
    }
}


document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        const input = document.getElementById("search").value.toLowerCase();
        const li = document.getElementsByClassName("li1");
        let matchFound = false;

        for (let i = 0; i < li.length; i++) {
            const item = li[i].textContent || li[i].innerText;
            if (item.toLowerCase().indexOf(input) > -1) {
                matchFound = true;
                break;
            }
        }


        if (!matchFound && input.length > 0) {
            window.location.href = "errorSearch.html"; 
        }
    }
});
