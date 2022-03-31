window.onload = () => {
    console.log("loaded")

    let charsRef = document.getElementById("characters")

    for (let i = 65; i <= 90; i++) {
        charsRef.innerHTML += "<div class=\"letterBox\">\n" +
                        `        <p class=\"regular\">&#${i}&#${97 + (i - 65)}</p>\n` +
                        "     </div>"
    }
}