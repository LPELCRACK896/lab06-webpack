window.onload =  () => {
    document.getElementById("container_4").addEventListener("click", createCard("container_4"), false);
    document.getElementById("container_5").addEventListener("click", createCard("container_5"), false);
    document.getElementById("container_6").addEventListener("click", createCard("container_6"), false);
    document.getElementById("container_7").addEventListener("click", createCard("container_7"), false);
    document.getElementById("container_8").addEventListener("click", createCard("container_8"), false);
    document.getElementById("container_9").addEventListener("click", createCard("container_9"), false);
    document.getElementById("container_10").addEventListener("click", createCard("container_10"), false);
    document.getElementById("container_11").addEventListener("click", createCard("container_11"), false);
    document.getElementById("container_12").addEventListener("click", createCard("container_12"), false);
    document.getElementById("container_13").addEventListener("click", createCard("container_13"), false);
    function createCard(id){
        console.log(id)
    }
}