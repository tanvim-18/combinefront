<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Planner</title>
    <style>
        body {
            background-image: url({{site.baseurl}}/images/celloplaying.gif);
            background-size: contain;
            background-repeat: no-repeat;
            background-attachment: fixed;
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            text-align: center;
            padding: 50px;
            background-color: rgb(255, 182, 193);
            border-radius: 10px;
            margin: 50px auto;
            max-width: 600px;
        }
        h1 {
            color: #333;
        }
        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
        }
        #save-button {
            background-color: #8257B4;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
        #weekly-log {
            text-align: left;
            margin-top: 20px;
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        }
        #weekly-log table {
            width: 100%;
            border-collapse: collapse;
        }
        #weekly-log th, #weekly-log td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }
        .dropdown {
            display: inline-block;
            width: 100%;
        }
        .dropdown select {
            width: 100%;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Name</h1>
        <input type="text" id="name" placeholder="Enter your name" required>
        <h1>Food</h1>
        <input type="text" id="food" placeholder="Enter Food Name" required>
        <h1>Calorie Intake</h1>
        <input type="number" id="calories" placeholder="Enter # of Calories Gained" required>
        <h1>Exercise</h1>
        <input type="text" id="exercise" placeholder="Enter Name of Exercise" required>
        <h1>Calories Burned</h1>
        <input type="number" id="calories-burned" placeholder="Enter # of Calories Burned" required>
        <br><br>
        <button id="save-button">Log Entry</button>
        <!-- Weekly Planner Display -->
        <div id="weekly-planner">
            <h2>Planner</h2>
            <div id="weekly-log">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Food</th>
                            <th>Calorie intake</th>
                            <th>Exercise</th>
                            <th>Calories Burned</th>
                        </tr>
                    </thead>
                    <tbody id="log-body">
                        <!-- Log entries will be displayed here -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script>
        // JavaScript to save log entries to local storage and display weekly log
        document.getElementById("save-button").addEventListener("click", function () {
            const name = document.getElementById("name").value;
            const food = document.getElementById("food").value;
            const calories = document.getElementById("calories").value;
            const exercise = document.getElementById("exercise").value;
            const caloriesBurned = document.getElementById("calories-burned").value;
            const currentDate = new Date().toLocaleDateString();
            if (name !== "" && food !== "" && calories !== "" && exercise !== "" && caloriesBurned !== "") {
                const entry = {
                    name: name,
                    food: food,
                    calories: calories,
                    exercise: exercise,
                    caloriesBurned: caloriesBurned
                };
                const weeklyLog = JSON.parse(localStorage.getItem("weeklyLog")) || [];
                weeklyLog.push(entry);
                localStorage.setItem("weeklyLog", JSON.stringify(weeklyLog));
                // Clear input fields
                document.getElementById("name").value = "";
                document.getElementById("food").value = "";
                document.getElementById("calories").value = "";
                document.getElementById("exercise").value = "";
                document.getElementById("calories-burned").value = "";
                displayWeeklyLog();
                alert("Entry logged successfully!");
            } else {
                alert("Please fill in all fields.");
            }
        });
        function displayWeeklyLog() {
            const weeklyLog = JSON.parse(localStorage.getItem("weeklyLog")) || [];
            const tableBody = document.getElementById("log-body");
            tableBody.innerHTML = ""; // Clear previous entries
            weeklyLog.forEach(entry => {
                const row = tableBody.insertRow();
                row.insertCell().textContent = entry.name;
                row.insertCell().textContent = entry.food;
                row.insertCell().textContent = entry.calories;
                row.insertCell().textContent = entry.exercise;
                row.insertCell().textContent = entry.caloriesBurned;
            });
        }
        displayWeeklyLog();
    </script>
</body>
</html>