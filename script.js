let count = 0;

function updateCount (){
    document.getElementById("count").innerHTML = count;
}
//function to increase the counter

function increaseCounter(){
        count++;
        updateCount();
};
document.querySelector(".increase").addEventListener("click",() =>{
    increaseCounter();
});

//function ot decrease the counter
function decreaseCounter(){
    count--;
    updateCount();
};
document.querySelector(".decrease").addEventListener("click", () => {
    decreaseCounter();
});

//function to reset the counter
function resetCounter (){
    count = 0;
    updateCount();
};
document.querySelector(".reset").addEventListener("click", () =>{
    resetCounter();
})