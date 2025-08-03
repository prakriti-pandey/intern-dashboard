document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:3000/dashboard");
    const data = await res.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("referral").textContent = data.referralCode;
    document.getElementById("donations").textContent = "₹" + data.totalDonations;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to load dashboard");
  }
});