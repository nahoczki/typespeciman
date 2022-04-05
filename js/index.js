
const navItems = [
    "topNav",
    "weightNav",
    "bodyNav",
    "largeNav",
    "experimentsNav",
    "getNav",
]

window.onload = () => {
    console.log("loaded")

    let charsRef = document.getElementById("characters")

    for (let i = 65; i <= 90; i++) {
        charsRef.innerHTML += "<div class=\"letterBox\">\n" +
                        `        <p class=\"regular\">&#${i}&#${97 + (i - 65)}</p>\n` +
                        "     </div>"
    }

    document.addEventListener("scroll", scrollFunc);
}

const selectNav = (locator) => {
    document.getElementById(locator).classList.add("selected");
    for (let navItem of navItems) {
        if (navItem !== locator) document.getElementById(navItem).classList.remove("selected");
    }
}

const scrollFunc = () => {
    console.log(scrollY)
}
