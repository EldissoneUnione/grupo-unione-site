const candidaturaBtn = document.querySelector(".CandidaturaBtn");
const candidaturaModal = document.querySelector(".Candidatura");
const ofertaModal = document.querySelector(".oferta");
const tabButtons = document.querySelectorAll(".tab");


function handleTabClick(selectedButton) {

  tabButtons.forEach(btn => btn.classList.remove("active"));

  selectedButton.classList.add("active");

  const tabName = selectedButton.textContent.trim();

  if (tabName === "Candidatura Espontânea") {
    candidaturaModal.classList.add("active");
    ofertaModal.classList.remove("active");
  } else {
    candidaturaModal.classList.remove("active");
    ofertaModal.classList.add("active");
  }
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => handleTabClick(button));
});
