function fourthEmail() {
  return {
    id: 1,
    message: `
        Subject: RE: Your Prescription<br><br>
        
        Unfortunately, we are unable to refill your prescription for 
        <span class="corrupted" id="nXt43z7">[nXt43z7]</span>, 
        <span class="corrupted" id="p87eE54">[p87eE54]</span>, or 
        <span class="corrupted" id="Hal0431">[Hal0431]</span> at this time.
        <br><br>
        Last session, you suddenly became agressive near the end of our time together. You were able to be restrained, but you were <span class="corrupted" id="BeA3R2a">[BeA3R2a]</span>. You were sedated and taken to the hospital for further evaluation. You were released the next day, but we are unable to refill your prescription until we can be sure that you are not a danger to yourself or others.
        <br><br>
        Your previous prescription was for 2mg of Risperidone, 100mg of Chlorpromazine, and 5mg of Haloperidol. Please let us know if you have any questions.
        <br><br>
        Thank you,
        <br>
        Dr. S. K. Choi.
        `,
    keys: [
      {
        id: 1,
        key: "nXt43z7",
        values: ["Risperidone", "Advil", "A Stiff Drink"],
        valid: "Risperidone",
      },
      {
        id: 2,
        key: "p87eE54",
        values: ["Chlorpromazine", "Cocaine", "A pound of flesh"],
        valid: "Chlorpromazine",
      },
      {
        id: 3,
        key: "Hal0431",
        values: ["Haloperidol", "a video camera", "a jar of blood"],
        valid: "Haloperidol",
      },
      {
        id: 4,
        key: "BeA3R2a",
        values: [
          "unable to be calmed down",
          "scaring me and my family",
          "threatening to kill me",
          "too far gone",
        ],
        valid: "unable to be calmed down",
      },
    ],
  };
}

export default fourthEmail;
