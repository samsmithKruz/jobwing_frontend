document.addEventListener("DOMContentLoaded", () => {
  const categories = {
    Construction: [
      "Construction Laborer",
      "Site Support",
      "Site Manager",
      "Foreman",
    ],
    Decorating: ["Furniture", "Window Treatment Installation"],
    Design: [
      "3-D Modeling",
      "Building Information Modeling (BIM)",
      "BIM Manager",
      "Architect",
      "Interior Design",
      "Landscape Design",
      "Sustainability",
    ],
    Drafting: ["Architectural"],
    CAD: ["AutoCAD", "CAD Manager", "Watchtower CAD"],
    Electrical: [
      "Commercial",
      "Data Cabling",
      "Generators",
      "Industrial",
      "Lighting",
      "Lightning Protection",
      "Power Line, Substation",
      "Residential",
      "Solar Photovoltaic Electrician",
    ],
    Plumbing: [
      "Boiler",
      "Commercial",
      "Fire Sprinkler",
      "Gas Service",
      "Hydronics",
      "Pipe Fitting",
      "Pipe Insulation",
      "Residential",
      "Solar Thermal Installer",
      "Water Well, Borehole",
    ],
    Painting: [
      "Exterior",
      "Faux Finish",
      "Furniture Finishing",
      "Interior",
      "Signs, Lettering",
      "Spraying",
    ],
    Welding: [
      "General Welding",
      "Pipe Welding",
      "Stainless Steel",
      "Structural, Red Iron",
      "Wrought Iron",
    ],
    Carpentry: [
      "Doors and Frames",
      "Finish, Trim",
      "Rough, Framing",
      "Siding",
      "Truss Installation",
      "Window Installation",
    ],
    Mechanic: [
      "Automotive",
      "Buses",
      "Engines (Gas, Diesel)",
      "Heavy Equipment",
      "Hydraulics",
      "Small Engine",
    ],
    Logistics: ["Loading", "Logistics Manager", "Packaging", "Planning"],
    Safety: ["Firefighter", "Flagger", "Banksman"],
    Other: ["General", "Fiberglass Repair", "Mechanical Systems"],
    Aviation: [
      "Aircraft Maintenance",
      "Avionics Technician",
      "Pilot",
      "Air Traffic Controller",
    ],
    Agriculture: ["Farming", "Agri-Tech", "Food Production", "Soil Analyst"],
    "Architecture & Construction": ["Urban Planning", "Structural Engineering"],
    "Arts & Literature": [
      "Painter",
      "Sculptor",
      "Photographer",
      "Writer",
      "Editor",
    ],
    "Banking & Finance": [
      "Accountant",
      "Auditor",
      "Tax Consultant",
      "Stockbroker",
      "Financial Advisor",
    ],
    "Business Administration & Accountancy": [
      "Business Manager",
      "HR Specialist",
      "Entrepreneur",
    ],
    Communications: [
      "PR Specialist",
      "Journalist",
      "Marketing Manager",
      "Social Media Manager",
    ],
    Education: [
      "Primary School Teacher",
      "High School Teacher",
      "University Lecturer",
      "Curriculum Developer",
    ],
    "Food & Natural Resources": ["Chef", "Forester", "Wildlife Biologist"],
    "Government & Public Administration": [
      "Government Official",
      "Policy Analyst",
      "Law Enforcement",
    ],
    "Health & Medicine": ["Doctor", "Nurse", "Paramedic", "Radiologist"],
    "Hospitality & Tourism": [
      "Hotel Manager",
      "Event Planner",
      "Tour Guide",
      "Travel Agent",
    ],
    "Human Services & Human Resources": [
      "Psychologist",
      "Social Worker",
      "Recruiter",
    ],
    "Information Technology": [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Cybersecurity Specialist",
    ],
    "Legal Services & Public Safety": [
      "Lawyer",
      "Paralegal",
      "Judge",
      "Emergency Responder",
    ],
    Manufacturing: [
      "Factory Worker",
      "Assembly Line Operator",
      "Product Designer",
    ],
    "Marketing, Sales & Service": [
      "Sales Representative",
      "Brand Strategist",
      "SEO Specialist",
    ],
    "Science, Technology, Engineering & Mathematics": [
      "Mechanical Engineer",
      "Civil Engineer",
      "Biochemist",
      "Data Scientist",
    ],
    "Transportation, Distribution & Logistics": [
      "Truck Driver",
      "Delivery Driver",
      "Logistics Coordinator",
      "Warehouse Manager",
    ],
    Other: ["General", "Fiberglass repair", "Mechanical systems"],
  };

  const categorySelect = document.getElementById("categorySelect");
  const skillSelect = document.getElementById("skillSelect");
  const categoryList = document.getElementById("categoryList");

  // Populate the category dropdown
  Object.keys(categories).forEach((category) => {
    let option = new Option(category, category);
    categorySelect.appendChild(option);
    categoryList.innerHTML += `<span class="bg-t_orange py-0.5 px-2 text-white/80 rounded-lg">${category}</span>`;
  });

  // Update skills when category changes
  categorySelect.addEventListener("change", function () {
    skillSelect.innerHTML = '<option value="">-- Select a Skill --</option>'; // Reset skill options
    const selectedCategory = this.value;

    if (selectedCategory && categories[selectedCategory]) {
      categories[selectedCategory].forEach((skill) => {
        let option = new Option(skill, skill);
        skillSelect.appendChild(option);
      });
    }
  });
});
