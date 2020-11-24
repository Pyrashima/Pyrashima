function validerFormulairePhone() {

    let codeRegional = document.getElementById("phone")

    let codeRegionalPermis = false

    if(codeRegional.value === "514") {
        codeRegionalPermis = true;
    }
    if(codeRegional.value === "418") {
        codeRegionalPermise = true;
    }
    if(codeRegional.value === "450") {
        codeRegionalPermise = true;
    }

    if(codeRegional.value === "819") {
        codeRegionalPermise = true;
    }

    if(codeRegionalPermis === false){
        alert("Code régional non permis!!")
    }

    return codeRegionalPermis;
}