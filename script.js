document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = Array.from(document.querySelectorAll("button"));
    buttons.map(button => {
        button.addEventListener("click", (e) => {
            if (e.target.innerText === "C") {
                display.value = "";
            } else if (e.target.innerText === "=") {
                try {
                    display.value = eval(display.value
                        .replace(/π/g, Math.PI)
                        .replace(/e/g, Math.E)
                        .replace(/sin/g, "Math.sin")
                        .replace(/cos/g, "Math.cos")
                        .replace(/tan/g, "Math.tan")
                        .replace(/sqrt/g, "Math.sqrt")
                        .replace(/log/g, "Math.log10")
                        .replace(/ln/g, "Math.log")
                        .replace(/\^/g, "**")
                    );
                } catch {
                    display.value = "Error";
                }
            } else if (e.target.innerText === "sin" || e.target.innerText === "cos" || e.target.innerText === "tan") {
                display.value += `${e.target.innerText}(`;
            } else if (e.target.innerText === "!") {
                display.value += "factorial(";
            } else {
                display.value += e.target.innerText;
            }
        });
    });

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
});
