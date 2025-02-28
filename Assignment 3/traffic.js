
function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 50;
    } else if (density === "Moderate Traffic") {
        return 30;
    } else if (density === "Light Traffic") {
        return 20;
    } else {
        return "Invalid traffic density";
    }
}
console.log(trafficLightControl("Heavy Traffic"));
console.log(trafficLightControl("Moderate Traffic"));
console.log(trafficLightControl("Light Traffic"));
console.log(trafficLightControl("Unknown Traffic"));
