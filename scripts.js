const effectivenessChart = {
    "Blood": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Strong", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Weak", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Bubble": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Weak", "Ice_Wedge": "Weak", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Weak", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Weak", "Poison": "Strong", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Cloud": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Weak", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Dark": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Strong", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Weak", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Weak", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Earth": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Strong", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Weak", "Poison": "Neutral", "Pressure": "Strong", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Weak", "World_Tree": "Neutral" },
    "Feather": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Strong", "Ice_Wedge": "Strong", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Weak", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Wind", "World_Tree": "Neutral" },
    "Fire": { "Blood": "Weak", "Bubble": "Weak", "Cloud": "Strong", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Strong", "Fire": "Neutral", "Gel": "Strong", "Gold": "Strong", "Ice": "Strong", "Ice_Wedge": "Weak", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Neutral", "Pressure": "Weak", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Weak", "Wind": "Strong", "World_Tree": "Strong" },
    "Gel": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Weak", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Strong", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Weak", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Gold": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Ice": { "Blood": "Neutral", "Bubble": "Strong", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Weak", "Fire": "Weak", "Gel": "Strong", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Strong" },
    "Ice_Wedge": { "Blood": "Strong", "Bubble": "Strong", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Weak", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Strong", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Weak", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Strong" },
    "Leviathan": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Weak", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Weak", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Neutral", "Pressure": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Strong" },
    "Light": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Strong", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Weak", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Weak", "Moon": "Strong", "Nightmare": "Strong", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Lightning": { "Blood": "Neutral", "Bubble": "Strong", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Weak", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Memory": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Strong", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Mineral": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Strong", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Weak", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Mirror": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Strong", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Moon": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Strong", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Weak", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Nightmare": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Weak", "Lightning": "Neutral", "Memory": "Weak", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Plant": { "Blood": "Neutral", "Bubble": "Strong", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Strong", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Weak", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Poison": { "Blood": "Weak", "Bubble": "Weak", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Neutral", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Strong" },
    "Pressure": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Weak", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Weak", "Wind": "Strong", "World_Tree": "Neutral" },
    "Spatial": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Strong", "Dark": "Weak", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Strong", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Strong", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Star": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Strong", "Dark": "Weak", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Strong", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Strong", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Sun": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Strong", "Dark": "Weak", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Strong", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Strong", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Water": { "Blood": "Strong", "Bubble": "Neutral", "Cloud": "Weak", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Strong", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Weak", "Memory": "Neutral", "Mineral": "Strong", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Weak", "Poison": "Neutral", "Pressure": "Strong", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Weak", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "Wind": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Strong", "Feather": "Strong", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Neutral", "Ice_Wedge": "Neutral", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Neutral", "Poison": "Neutral", "Pressure": "Strong", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Neutral", "Wind": "Neutral", "World_Tree": "Neutral" },
    "World_Tree": { "Blood": "Neutral", "Bubble": "Neutral", "Cloud": "Neutral", "Dark": "Neutral", "Earth": "Neutral", "Feather": "Neutral", "Fire": "Weak", "Gel": "Neutral", "Gold": "Neutral", "Ice": "Weak", "Ice_Wedge": "Weak", "Leviathan": "Neutral", "Light": "Neutral", "Lightning": "Neutral", "Memory": "Neutral", "Mineral": "Neutral", "Mirror": "Neutral", "Moon": "Neutral", "Nightmare": "Neutral", "Plant": "Strong", "Poison": "Weak", "Pressure": "Neutral", "Spatial": "Neutral", "Star": "Neutral", "Sun": "Neutral", "Water": "Strong", "Wind": "Neutral", "World_Tree": "Neutral" }
};

function checkEffectiveness() {
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;

    const result1 = effectivenessChart[type1] && effectivenessChart[type1][type2]
        ? effectivenessChart[type1][type2]
        : "Error";
    const result2 = effectivenessChart[type2] && effectivenessChart[type2][type1]
        ? effectivenessChart[type2][type1]
        : "Error";

    // Defines color classes for results
    const colorClass1 = getColorClass(result1);
    const colorClass2 = getColorClass(result2);

    // Displays results with color coding
    document.getElementById("result").innerHTML = `
        <p class="${colorClass1}">Type 1: ${type1} is ${result1} against Type 2: ${type2}.</p>
        <p class="${colorClass2}">Type 2: ${type2} is ${result2} against Type 1: ${type1}.</p>
    `;

    // Appends the result to the history section
    const history = document.getElementById("history");
    const historyEntry = document.createElement("p");
    historyEntry.innerHTML = `<strong>Type 1: ${type1}</strong> is <span class="${colorClass1}">${result1}</span> against <strong>Type 2: ${type2}</strong>. <br>
                              <strong>Type 2: ${type2}</strong> is <span class="${colorClass2}">${result2}</span> against <strong>Type 1: ${type1}</strong>.`;
    history.appendChild(historyEntry);
}

// Function gets the appropriate color class based on result
function getColorClass(result) {
    if (result === "Neutral") return "neutral";
    if (result === "Weak") return "weak";
    if (result === "Strong") return "strong";
    return "";
}
