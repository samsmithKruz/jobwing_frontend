document.addEventListener("DOMContentLoaded", () => {
    const categories = {
        "Construction": ["Construction laborer", "Site Support", "Site manager, Foreman"],
        "Decorating": ["Furniture", "Window treatment installation"],
        "Design": ["3-D Modeling", "Building Information Modeling (BIM)", "BIM Manager", "Architect", "Interior design", "Landscape design", "Sustainability"],
        "Drafting": ["Architectural"],
        "CAD": ["AutoCAD", "CAD Manager", "Watchtower CAD"],
        "Electrical": ["Commercial", "Data cabling", "Generators", "Industrial", "Lighting", "Lightning protection", "Power line, Substation", "Residential", "Solar photovoltaic electrician"],
        "Plumbing": ["Boiler", "Commercial", "Fire sprinkler", "Gas service", "Hydronics", "Pipe fitting", "Pipe insulation", "Residential", "Solar thermal installer", "Water well, Borehole"],
        "Painting": ["Exterior", "Faux finish", "Furniture finishing", "Interior", "Signs, Lettering", "Spraying"],
        "Welding": ["General welding", "Pipe", "Stainless steel", "Structural, Red iron", "Wrought iron"],
        "Carpentry": ["Doors and frames", "Finish, Trim", "Rough, Framing", "Siding", "Truss installation", "Window installation"],
        "Mechanic": ["Automotive", "Buses", "Engines (gas, diesel)", "Heavy equipment", "Hydraulics", "Small Engine"],
        "Logistics": ["Loading", "Logistics manager", "Packaging", "Planning"],
        "Safety": ["Firefighter", "Flagger, Banksman"],
        "Other": ["General", "Fiberglass repair", "Mechanical systems"]
    };

    const categorySelect = document.getElementById("categorySelect");
    const skillSelect = document.getElementById("skillSelect");
    const categoryList = document.getElementById("categoryList");

    // Populate the category dropdown
    Object.keys(categories).forEach(category => {
        let option = new Option(category, category);
        categorySelect.appendChild(option);
        categoryList.innerHTML += `<span class="bg-t_orange py-0.5 px-2 text-white/80 rounded-lg">${category}</span>`;
    });

    // Update skills when category changes
    categorySelect.addEventListener("change", function() {
        skillSelect.innerHTML = '<option value="">-- Select a Skill --</option>'; // Reset skill options
        const selectedCategory = this.value;

        if (selectedCategory && categories[selectedCategory]) {
            categories[selectedCategory].forEach(skill => {
                let option = new Option(skill, skill);
                skillSelect.appendChild(option);
            });
        }
    });
});
