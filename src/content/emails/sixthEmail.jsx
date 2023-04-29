function sixthEmail() {
  return {
    id: 1,
    message: `
          Subject: CRA Notice of Penalties <br>
          <br>
          Hello {USER}, <br>
          <br>
            Due to three or more failures to report <span class="corrupted" id="tZe0924">[tZe0924]</span> in the last four years, you have been selected for a review. <br>
            <br>
            This review was triggered by the following: <br>
            <br>
            - You have not reported income from any of your employers in the last four years. <br>
            - You have not reported income from any of your investments in the last four years. <br>
            - You have not reported income from any of your rental properties in the last four years. <br>
            - You've recently become the suspect of a <span class="corrupted" id="peSa320">[peSa320]</span>. <br>
            <br>
            Please respond to this email with the following information: <br>
            <br>
            - <span class="corrupted" id="gGre20p">[gGre20p]</span> <br>
            - Your current phone number <br>
            - Your current employer <br>
            - Your current income <br>
            <br>
            Failure to respond within 30 days will result in a penalty of $100,000 and up to three months in prison. <br>
            <br>
            <span class="corrupted" id="3201EEA">[3201EEA]</span> you, <br>
            <br>
            Canada Revenue Agency.`,
    keys: [
      {
        id: 1,
        key: "tZe0924",
        values: ["income", "your crimes", "to the police"],
        valid: "income",
      },
      {
        id: 2,
        key: "peSa320",
        values: [
          "criminal investigation",
          "murder you fucking murderer",
          "complete lapse in sanity",
        ],
        valid: "criminal investigation",
      },
      {
        id: 3,
        key: "gGre20p",
        values: [
          "Your current address",
          "Where are you psycho?",
          "Your victim's home",
          "her kids miss her",
        ],
        valid: "Your current address",
      },
      {
        id: 4,
        key: "3201EEA",
        values: ["Thank", "Fuck", "Screw"],
        valid: "Thank",
      },
    ],
  };
}

export default sixthEmail;
