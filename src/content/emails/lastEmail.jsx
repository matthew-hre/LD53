function sixthEmail() {
  return {
    id: 1,
    message: `
            Subject: <span class="corrupted" id="t1Tle41">[t1Tle41]</span><br>
            To: The Philadelphia Police Department<br>
            Date: 1/20/1988<br><br>

            Good afternoon,<br><br>
            I need to inform you that the accusations against me <span class="corrupted" id="h32EWla">[h32EWla]</span>.<br><br>

            I <span class="corrupted" id="bFFe40q">[bFFe40q]</span> my meds, and have <span class="corrupted" id="3201EEA">[3201EEA]</span> drinking.<br><br>

            I was <span class="corrupted" id="gGr2e4a">[gGr2e4a]</span> at the intersection of McMichael Street and Penn Street, and have <span class="corrupted" id="lwW23p0">[lwW23p0]</span> the nearby Liquor Store.<br><br>

            I need to make it clear, for the record, that I <span class="corrupted" id="hDLa24p">[hDLa24p]</span>.<br><br>

            Sincerely,<br>
            {USER}.
            `,
    keys: [
      {
        id: 1,
        key: "t1Tle41",
        values: ["My Confession", "My Defense"],
        bad: "My Defense",
        good: "My Confession",
      },
      {
        id: 2,
        key: "h32EWla",
        values: ["are absolutely false", "are unfortunately true"],
        bad: "are absolutely false",
        good: "are unfortunately true",
      },
      {
        id: 3,
        key: "bFFe40q",
        values: ["have been off", "have been taking"],
        bad: "have been taking",
        good: "have been off",
      },
      {
        id: 4,
        key: "3201EEA",
        values: ["not been", "been"],
        bad: "not been",
        good: "been",
      },
      {
        id: 5,
        key: "gGr2e4a",
        values: ["never", "driving"],
        bad: "never",
        good: "driving",
      },
      {
        id: 6,
        key: "lwW23p0",
        values: ["never been to", "been frequenting"],
        bad: "never been to",
        good: "been frequenting",
      },
      {
        id: 7,
        key: "hDLa24p",
        values: ["did commit this crime", "am innocent"],
        bad: "am innocent",
        good: "did commit this crime",
      },
    ],
  };
}

export default sixthEmail;
