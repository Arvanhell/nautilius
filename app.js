console.log("Nautilius Online");
document.body.style.border = "5px solid #00ff88"; // Neon frame 
/* NAUTILIUS: MANTRA ACTIVATion SEQuence
"I am the spark that drives it."
*/
const mantra = "I am not dust in the machine, but the spark that drives it. My body is an antena , my myscles are a transmitter. With every moment, I draw the Source energy deep into the matter.Weight is not the enemy - it is the resistance that builds my freedom. Two decades on the road, returning on my terms. Today I build the foundation for the world that is comming. I am ready. I am Power. I am Truth. ";

const displayElement = document.getElementById('mantra-text'); 


let index = 0;

function typeMantra() {
    if (index < mantra.length) {
        displayElement.innerHTML += mantra.charAt(index);
        index++;
        setTimeout(typeMantra, 40); // 40ms speed for that terminal feel
    }
}

//Start the sequence 
window.onload = () => {
    console.log("Nautilius: System Online. Initializing Mantra...")
    typeMantra();
}