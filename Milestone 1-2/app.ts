const toggleButton = document.getElementById("toggle") as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLElement;
toggleButton.addEventListener("click", () => {
  
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block"
  }
  else{
    skillsList.style.display = "none"
  }})


