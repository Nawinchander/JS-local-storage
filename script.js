// Load saved name on page load
window.onload = function() {
  let savedName = localStorage.getItem("username");

  if (savedName) {
    document.getElementById("displayName").innerText = "Saved Name: " + savedName;
  }
};

// Save name to local storage
function saveName() {
  let name = document.getElementById("nameInput").value;

  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("displayName").innerText = "Saved Name: " + name;
  }
}

// Clear stored name
function clearName() {
  localStorage.removeItem("username");
  document.getElementById("displayName").innerText = "Name cleared!";
}
