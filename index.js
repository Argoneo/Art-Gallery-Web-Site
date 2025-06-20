    const button = document.querySelector("#boxLocationButton a");
    const arrow = document.querySelector("#boxLocationButton a #spanImg");
    const buttonTwo = document.querySelector("#map a");
    const arrowTwo = document.querySelector("#map a .arrow");
  
    button.addEventListener("mouseover", function(){
    button.style.backgroundColor = "#D5966C";
    arrow.style.backgroundColor = "black";
    })

    button.addEventListener("mouseout", function() {
    button.style.backgroundColor = ""
    arrow.style.backgroundColor = ""; // Torna al colore originale (da CSS)
    });

    buttonTwo.addEventListener("mouseover", function(){
    buttonTwo.style.backgroundColor = "#D5966C";
    arrowTwo.style.backgroundColor = "black";
    })

    buttonTwo.addEventListener("mouseout", function() {
    buttonTwo.style.backgroundColor = "";
    arrowTwo.style.backgroundColor = ""; // Torna al colore originale (da CSS)
    });