const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/dashboard', (req, res) => {
  res.json({
    name: "Prakriti Pandey",
    referralCode: "prakriti2025",
    totalDonations: 5000
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});