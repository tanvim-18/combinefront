---
title: Machine Learning for Attention Dataset
comments: True
layout: post
description: Made by Abby, Tanvi, and Aditi
author: John Mortensen
type: ccc
courses: {'csp': {'week': 28}}
---


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Probability Calculator</title>
</head>
<body>

<h2>Probability Calculator of Score above 9.0/10.0</h2>

<!-- Questions -->
<div>
  <label for="subjectInput">Subject: 0 for Science, 1 for Math, 2 for History, 3 for English</label><br>
  <input type="number" id="subjectInput" placeholder="text here"><br><br>

  <label for="attentionInput">Attention: type 'focused' or 'divided'</label><br>
  <input type="text" id="attentionInput" placeholder="text here"><br><br>

  <label for="solutionsInput">Solutions: number of solutions you found 0-4</label><br>
  <input type="number" id="solutionsInput" placeholder="text here"><br><br>

  <label for="SATinput">Score: SAT out of 1600</label><br>
  <input type="number" id="SATInput" placeholder="text here"><br><br>

</div>

<!-- Button to Calculate Probability -->
<div>
  <button onclick="calculateProbability()">Calculate Probability</button>
</div>

<!-- Display Probability -->
<div id="probabilityResult"></div>

<script>
function calculateProbability() {
  // Get inputs
  var subject = parseInt(document.getElementById("subjectInput").value);
  var attention = document.getElementById("attentionInput").value;
  var solutions = parseInt(document.getElementById("solutionsInput").value);
  var solutions = document.getElementById(document.getElementById("SATInput").value);

  // Validate inputs
  if (isNaN(subject) || isNaN(solutions) || (attention !== 'focused' && attention !== 'divided')) {
    alert("Please enter valid inputs.");
    return;
  }

  // Simulate calculation (replace with actual API call)
  var probability = Math.random() * 100; // Random probability between 0 and 100

  // Display result
  var resultElement = document.getElementById("probabilityResult");
  resultElement.innerHTML = "Probability of getting a score above 9.0: " + probability.toFixed(2) + "%";
}
</script>

</body>
</html>
