
const questions = [
  {
    text: "You find yourself alone in an ancient forest. What do you do?",
    options: [
      { text: "Explore quietly and look for signs of history.", dimension: "N" },
      { text: "Climb a tree to scout the area.", dimension: "S" }
    ]
  },
  {
    text: "You’re offered a position in a council deciding realm-wide laws. Do you:",
    options: [
      { text: "Accept to enforce order and structure.", dimension: "J" },
      { text: "Decline, preferring freedom and improvisation.", dimension: "P" }
    ]
  },
  {
    text: "During a realm festival, you're more likely to:",
    options: [
      { text: "Meet and chat with many new people.", dimension: "E" },
      { text: "Stick with close friends and observe quietly.", dimension: "I" }
    ]
  },
  {
    text: "Faced with a creature in need of help, you:",
    options: [
      { text: "Assess logically before acting.", dimension: "T" },
      { text: "Respond with empathy and care.", dimension: "F" }
    ]
  },
  {
    text: "In a strategy meeting, your voice is:",
    options: [
      { text: "Dominant and focused on goals.", dimension: "T" },
      { text: "Supportive, ensuring all feel heard.", dimension: "F" }
    ]
  },
  {
    text: "An ancient puzzle guards a door. You:",
    options: [
      { text: "Look for patterns and symbols.", dimension: "N" },
      { text: "Try combinations based on experience.", dimension: "S" }
    ]
  },
  {
    text: "You’ve been assigned a complex quest. You:",
    options: [
      { text: "Plan each step and track progress.", dimension: "J" },
      { text: "Let the journey unfold as it comes.", dimension: "P" }
    ]
  },
  {
    text: "Which appeals more to you?",
    options: [
      { text: "A bustling realm marketplace.", dimension: "E" },
      { text: "A quiet night under the stars.", dimension: "I" }
    ]
  },
  {
    text: "You receive criticism from a mentor. You:",
    options: [
      { text: "Analyze their points rationally.", dimension: "T" },
      { text: "Take it personally and reflect deeply.", dimension: "F" }
    ]
  },
  {
    text: "You prefer your adventures to be:",
    options: [
      { text: "Unfolding spontaneously.", dimension: "P" },
      { text: "Well-organized and prepared.", dimension: "J" }
    ]
  },
  {
    text: "In times of trouble, you:",
    options: [
      { text: "Rely on trusted facts.", dimension: "S" },
      { text: "Follow your gut and visions.", dimension: "N" }
    ]
  },
  {
    text: "You’re best described as:",
    options: [
      { text: "Warm and emotional.", dimension: "F" },
      { text: "Detached and rational.", dimension: "T" }
    ]
  },
  {
    text: "Your favorite type of tale is:",
    options: [
      { text: "Philosophical and abstract.", dimension: "N" },
      { text: "Grounded and realistic.", dimension: "S" }
    ]
  },
  {
    text: "How do you tackle a riddle?",
    options: [
      { text: "By talking it through aloud.", dimension: "E" },
      { text: "By working it out silently.", dimension: "I" }
    ]
  },
  {
    text: "You are drawn to:",
    options: [
      { text: "Structure, rules, and authority.", dimension: "J" },
      { text: "Possibility, chaos, and freedom.", dimension: "P" }
    ]
  },
  {
    text: "In a group quest, you tend to:",
    options: [
      { text: "Lead and organize the group.", dimension: "E" },
      { text: "Work solo or in small groups.", dimension: "I" }
    ]
  },
  {
    text: "Which feels more natural?",
    options: [
      { text: "Taking initiative immediately.", dimension: "J" },
      { text: "Waiting until you feel ready.", dimension: "P" }
    ]
  },
  {
    text: "When reading ancient lore, you:",
    options: [
      { text: "Interpret meaning and themes.", dimension: "N" },
      { text: "Note down facts and dates.", dimension: "S" }
    ]
  },
  {
    text: "Others see you as:",
    options: [
      { text: "Empathetic and passionate.", dimension: "F" },
      { text: "Pragmatic and clever.", dimension: "T" }
    ]
  },
  {
    text: "You are more likely to trust:",
    options: [
      { text: "Your instincts.", dimension: "N" },
      { text: "Your senses.", dimension: "S" }
    ]
  }
];

let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question-text").innerText = q.text;
  const buttons = document.getElementById("options");
  buttons.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.className = "option-btn";
    btn.onclick = () => {
      scores[opt.dimension]++;
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showEmailCapture();
      }
    };
    buttons.appendChild(btn);
  });
}

function showEmailCapture() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("email-capture").style.display = "block";
}

function processResults() {
  const mbti = 
    (scores.E > scores.I ? "E" : "I") +
    (scores.S > scores.N ? "S" : "N") +
    (scores.T > scores.F ? "T" : "F") +
    (scores.J > scores.P ? "J" : "P");

  const realms = {
    ENFJ: "Nesrin",
    ESTP: "Nesrin",
    ENTJ: "Sorin",
    ISTJ: "Sorin",
    INFJ: "Prisca",
    ESFP: "Niji Archipelagoes",
    INTJ: "Harmaa",
    INTP: "Harmaa",
    ENTP: "Aceso",
    ISFP: "Aceso",
    INFP: "Kural",
    ESFJ: "Kural",
    ENFP: "Cozen",
    ISFJ: "Niran",
    ESTJ: "Nagam",
    ISTP: "Ascian"
  };

  const realm = realms[mbti] || "Unknown";
  document.getElementById("email-capture").style.display = "none";
  document.getElementById("results").innerHTML = `
    <h2>You belong to: ${realm}</h2>
    <p>MBTI Type: ${mbti}</p>
    <a href="#" onclick="downloadCertificate('${realm}', '${mbti}')">Download Certificate</a>
  `;
  document.getElementById("results").style.display = "block";
}

function downloadCertificate(realm, mbti) {
  const element = document.createElement("a");
  const content = `You have been sorted into the Realm of ${realm} as an ${mbti}.`;
  const file = new Blob([content], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "ataraxia_certificate.txt";
  document.body.appendChild(element);
  element.click();
}
