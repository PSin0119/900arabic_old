function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_exploit(){
msgs.innerHTML="Loading Jailbreak... Please Wait !!!..";
setTimeout(poc, 1500);
}

function load_exploit_done(){
msgs.innerHTML="Jailbreak Loaded !!!";
}

function load_goldhen222(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.2.2 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.2.2 Loaded... Press OK Now !!!";
PLfile = "goldhen222.bin";
exec_type = "payload";
toogle_payload();
}