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

const logContainer = document.getElementById('system-logs');

const possibleLogs = [
    "CORE_TEMP: 36.6°C [STABLE]",
    "SPARK_SYNC: 98,4%",
    "OXYGEN_LEVEL: 100%",
    "PRESURE: 1013 hPa",
    "SOURCE_ENRG: CONNECTED",
    "MATTER_INT: OPTIMAL",
    "ANTENNA_SIG: OPTIMAL"
];

function addLog() {
    const randomLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];

    const logEntry = document.createElement("div");
    logEntry.className = 'log-entry';
    logEntry.innerText = `>${new Date().toLocaleTimeString()} | ${randomLog}`;

    logContainer.prepend(logEntry); // Add to top the list 
    if (logContainer.childNodes.length > 5) {
        logContainer.removeChild(logContainer.lastChild);
    }
}
setInterval(addLog, 3000);

const systemStatuses = [
    "OPTIMAl", "SYNCHRONIZING", "POWER FLOW: HIGH", "SPARK_CORE: ACTIVE", "SCANNING..."
];
// Function is swapping text each in 5sec
function updateFooterStatus() {
    const statusText = systemStatuses[Math.floor(Math.random() * systemStatuses.length)];
    // footer 
    document.getElementById('system-status-text').innerText = `SYSTEM STATUS: ${statusText}`;
}

setInterval(updateFooterStatus, 5000);
//Start the sequence 
window.onload = () => {
    console.log("Nautilius: System Online. Initializing Mantra...")
    typeMantra();
}