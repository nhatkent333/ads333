// Get the quiz form element
            const quizForm = document.getElementById("quiz-form");

            // Get the results section element
            const results = document.getElementById("results");

            // Get the score element
            const scoreElement = document.getElementById("score");

            // Get the feedback element
            const feedbackElement = document.getElementById("feedback");

            // Get the answers element
            const answersElement = document.getElementById("answers");

            

            // Define the correct answers - SỬA
            const correctAnswers = {
q1:"a",
q2:"c",

            };

            // Add an event listener for the submit event
            quizForm.addEventListener("submit", function (event) {
              // Prevent the default form submission behavior
              event.preventDefault();

              // Get the user's answers
              const userAnswers = {
                q1:quizForm.q1.value,
                q2:quizForm.q2.value,

              };

              // Initialize a variable to store the score
              let score = 0;

              // Initialize a variable to store the feedback message
              let feedback = "";

              // Initialize an array to store the correct answers list items
              let correctAnswersListItems = [];

              // Loop over the user's answers and compare them with the correct answers
              for (let question in userAnswers) {
                // If the user's answer is correct, increment the score by one
                if (userAnswers[question] === correctAnswers[question]) {
                  score++;
                }

                // Create a list item element for the correct answer
                let listItem = document.createElement("li");

                // Set the text content of the list item to show the question and the correct answer
                listItem.textContent =
                  question.toUpperCase() + ": " + correctAnswers[question];

                // Append the list item to the correct answers list items array
                correctAnswersListItems.push(listItem);
              }

              // XÁC ĐỊNH CÂU ĐIỂM LIỆT
              if (userAnswers.q10 === correctAnswers.q10) {
                // If yes, check if the score is at least 3 out of 5
                if (score >= 32) {
                  // If yes, set the feedback message to say that the user has passed
                  feedback = "Chúc mừng, bạn đã hoàn thành bài thi xuất sắc!";
                } else {
                  // If no, set the feedback message to say that the user has failed
                  feedback = "KHÔNG ĐẠT - bạn cần phải có tối thiểu 32 câu đúng để đạt điểm đậu";
                }
              } else 
        {        // If no, set the feedback message to say that the user has failed regardless of their score
                feedback =
                  "Kết quả: KHÔNG ĐẠT - Sai câu điểm liệt";
              }

              // Set the text content of the score element to show the user's score out of 5
              scoreElement.textContent = "Bạn đã làm đúng: " + score + "/35" + " câu";

              // Set the text content of the feedback element to show the feedback message
              feedbackElement.textContent = feedback;

              // Remove any existing children of the answers element
              while (answersElement.firstChild) {
                answersElement.removeChild(answersElement.firstChild);
              }

              // Loop over the correct answers list items array and append each list item to the answers element
              for (let listItem of correctAnswersListItems) {
                answersElement.appendChild(listItem);
              }
              
              
              // Show the results section
              results.style.display = "block";
              
              // Show thông báo
              let thongbao = document.getElementById("thongbaokequa");
              thongbao.textContent = "Kéo lên trên để xem kết quả đúng của từng câu";
              
              // SHOW ĐÚNG SAI CÂU 1
              // Get the feedback element
              const feedbackElement1 = document.getElementById("feedback1");
              // Initialize a variable to store the feedback message
              let feedback1 = "";
              // Check if the user has answered the important sentence correctly
              if (userAnswers.q1 === correctAnswers.q1) { 
                // If yes 
                feedback1= "Bạn đã trả lời đúng";
                feedbackElement1.style.color = "blue";
              } else 
              {  // If no, set the feedback message to say that the user has failed regardless of their score
                feedback1 = "Bạn đã trả lời sai, câu trả lời đúng là: " + correctAnswers.q1;
                feedbackElement1.style.color = "red";
              }
              // Set the text content of the feedback element to show the feedback message
              feedbackElement1.textContent = feedback1;
              // end SHOW ĐÚNG SAI CÂU 1
              
              // SHOW ĐÚNG SAI CÂU 2
              // Get the feedback element
              const feedbackElement2 = document.getElementById("feedback2");
              // Initialize a variable to store the feedback message
              let feedback2 = "";
              // Check if the user has answered the important sentence correctly
              if (userAnswers.q2 === correctAnswers.q2) { 
                // If yes 
                feedback2= "Bạn đã trả lời đúng"; 
                feedbackElement2.style.color = "blue";
              } else 
              {  // If no, set the feedback message to say that the user has failed regardless of their score
                feedback2 = "Bạn đã trả lời sai, câu trả lời đúng là: " + correctAnswers.q2;
                feedbackElement2.style.color = "red";
              }
              // Set the text content of the feedback element to show the feedback message
              feedbackElement2.textContent = feedback2;
              // end SHOW ĐÚNG SAI CÂU 2
              
              
              
              // Show the answers key
              let note = document.getElementById("answerkeyq1");
              note.textContent = "Câu trả lời đúng là: a";
              note.style.display = "block";
              
              
            });
        // Get the span element by its id
        var timerElement = document.getElementById("timer");

        // A function to start the timer with a given duration in minutes
        function startTimer(duration) {
          // Get the current time in milliseconds
          var now = new Date().getTime();
          
          // Calculate the end time in milliseconds
          var endTime = now + (1000 * 60 * duration);
          
          // Set the timer interval to update every second
          timer = setInterval(function () {
            // Get the current time in milliseconds
            var now = new Date().getTime();
            
            // Calculate the remaining time in milliseconds
            var remainingTime = endTime - now;
            
            // If the remaining time is less than or equal to zero, clear the timer and display "Time's up!"
            if (remainingTime <= 0) {
              clearInterval(timer);
              timerElement.textContent = "HẾT GIỜ LÀM BÀI";
              return;
            }
            
            // Convert the remaining time to minutes and seconds
            var minutes = Math.floor(remainingTime / (60 * 1000));
            var seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
            
            // Format the minutes and seconds with leading zeros if needed
            var formattedMinutes = minutes.toString().padStart(2, "0");
            var formattedSeconds = seconds.toString().padStart(2, "0");
            
            // Update the span element with the formatted time
            timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
            
          }, 1000); // Update every second
        }

        // Call the startTimer function with a duration of 30 minutes
        startTimer(22);
