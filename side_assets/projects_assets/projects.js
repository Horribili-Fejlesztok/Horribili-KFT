function toggleVideki() {
  var p_videki = document.getElementById("p_videki");
  var nyit_videki = document.getElementById("nyit_videki");
  var zar_videki = document.getElementById("zar_videki");
  if (p_videki.style.display === "none" || p_videki.style.display === "") {
    p_videki.style.display = "block";
    zar_videki.style.display = "block";
    nyit_videki.style.display = "none"; 
  } else {
    p_videki.style.display = "none";
    zar_videki.style.display = "none";
    nyit_videki.style.display = "block";
  }
}
