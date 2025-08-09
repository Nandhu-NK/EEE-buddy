function calculatePower() {
    let voltage = document.getElementById("voltage").value;
    let current = document.getElementById("current").value;

    if (voltage === "" || current === "") {
        alert("Please enter both voltage and current");
        return;
    }

    let power = voltage * current;
    document.getElementById("result").innerText = `Power = ${power} W`;
}