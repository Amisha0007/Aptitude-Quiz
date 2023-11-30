const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

const myQuestions = [
  {
    question: "प्रश्न 1:एक निश्चित राशि $5000 का 8% प्रति वर्ष साधारण ब्याज दर पर निवेश किया गया है। 3 वर्षों के बाद कुल राशि क्या होगी?2?",
    answers: {
      a: "5360₹",
      b: "5362₹",
      c: "5355₹",
      d: "5365₹",
    },
    correctAnswer: "a"
  },
  {
    question: "प्रश्न 2:यदि किसी निश्चित राशि पर 10% प्रति वर्ष दो वर्षों के लिए चक्रवृद्धि ब्याज $441 है, तो वह राशि क्या है?",
    answers: {
      a: "2200₹",
      b: "2500₹",
      c: "2100₹",
      d: "2150₹",
    },
    correctAnswer: "c"
  },
  {
    question: "प्रश्न 3:यदि मूल राशि का अनुपात 2 वर्षों के बाद 4% प्रति वर्ष है, तो 25:27 है, तो मूल राशि क्या है?",
    answers: {
      a: "26₹",
      b: "27₹",
      c: "25₹",
      d: "21₹",
    },
    correctAnswer: "b"
  },
  
  {
    question: "प्रश्न 4:यदि किसी निश्चित राशि पर 2 वर्षों के लिए 12.5% प्रति वर्ष चक्रवृद्धि ब्याज $410 है, तो उसी राशि पर एक ही दर और समान अवधि के लिए साधारण ब्याज क्या होगा?",
    answers: {
      a: "1540₹",
      b: "1544.40₹",
      c: "1555₹",
      d: "1545.45₹",
    },
    correctAnswer: "d"
  },
  {
    question: "प्रश्न 5:यदि एक व्यक्ति 3 वर्षों में प्रायोजित रूप से ₹ 36000 का समान धनाद्ययन करता है, तो 4 वर्षों में समान धनाद्ययन के लिए प्रायोजित की गई राशि क्या होगी, यदि उसकी ब्याज दर 10% हो?",
    answers: {
      a: "45000₹",
      b: "46000₹",
      c: "48000₹",
      d: "47000₹",
    },
    correctAnswer: "c"
  },
  {
    question: "प्रश्न 6:यदि x+1/x=6, तो x3+1/x3का मान क्या होगा?",
    answers: {
      a: "198₹",
      b: "200₹",
      c: "199₹",
      d: "197₹",
    },
    correctAnswer: "a"
  },
  {
    question: "प्रश्न 7:एक व्यक्ति ₹ 40000 को 4% ब्याज दर पर 2 वर्षों के लिए कितनी धनराशि प्राप्त करेगा?",
    answers: {
      a: "3500₹",
      b: "3000₹",
      c: "3300₹",
      d: "3200₹",
    },
    correctAnswer: "d"
  },
  {
    question: "प्रश्न 8:यदि x+1/x=5, तो x2+1/x2 का मान क्या होगा?",
    answers: {
      a: "22₹",
      b: "23₹",
      c: "24₹",
      d: "21₹",
    },
    correctAnswer: "b"
  },
  {
    question: "प्रश्न 9:एक व्यक्ति ने 2 वर्षों के लिए ₹ 20,000 पर 10% ब्याज दर से पैसे जमा किए हैं। इस समय के बाद वह राशि कितनी हो जाएगी?",
    answers: {
      a: "21000₹",
      b: "23000₹",
      c: "25000₹",
      d: "24000₹",
    },
    correctAnswer: "d"
  },
  {
    question: "प्रश्न 10:एक व्यक्ति ₹ 12,000 को 2 वर्षों के लिए प्रायोजित रूप से धन लगाता है। ब्याज दर 12.5% प्रति वर्ष है। उस धन की निवेश राशि क्या होगी?",
    answers: {
      a: "9,904.64₹",
      b: "9,905₹",
      c: "9,905.05₹",
      d: "9,904.05₹",
    },
    correctAnswer: "a"
  },
  
  
  // Add more questions here
];

function generateQuiz() {
  const output = [];
  
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    
    for (const option in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${option}">
          ${option}: ${currentQuestion.answers[option]}
        </label>`
      );
    }
    
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });
  
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;
  
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  
  resultContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length}`;
}

submitButton.addEventListener("click", showResults);

generateQuiz();
