const buttons = document.querySelectorAll(".btn");
const resultat = document.getElementById("resultat");

buttons.forEach((button)=>{
button.addEventListener(("click"), (e) => {
resultat.textContent += (e.target.id);

})
equal.addEventListener("click",() => {
resultat.textContent = eval(resultat.textContent);

})
CLEAR.addEventListener("click", () =>{

    resultat.textContent = "";
})


})
buttons.forEach((button)=> {
button.addEventListener(("click"),)





})
       
