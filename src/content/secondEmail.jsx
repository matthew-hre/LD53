function secondEmail() {
  return {
    id: 1,
    message: `
    Subject: Police Report - Car Crash<br>
    From: Philadelphia Police Department<br>
    Date: January 18, 1988
    <br><br>
    Afternoon,
    <br><br>
    I am writing to provide you with a police report regarding a <span class="corrupted" id="t03FhE5">[t03FhE5]</span> that occurred on January 17th at the intersection of McMichael Street and Penn Street. The details of the accident are as follows:
    <br><br>
    At approximately 2:36pm, a blue 1979 Camaro driven by an <span class="corrupted" id="mM3fl03">[mM3fl03]</span> was traveling westbound on Penn Street and failed to stop at a red light at the intersection of McMichael. As a result, the Camaro collided with a black Dodge vehicle. The make was not identified.
    <br><br>
    There were no witnesses to the accident, and the Camaro was found abandoned with <span class="corrupted" id="V04Fq27">[V04Fq27]</span> on the driver's seat. The Dodge was rammed off the road, and rolled down the hill into Queen Lake Resevoir. A body has <span class="corrupted" id="bB3e527">[bB3e527]</span>.
    <br><br>
    We have not been able to find or contact <span class="corrupted" id="pIRd320">[pIRd320]</span>. If you have any information regarding his whereabouts, please contact the Philadelphia Police Department, or myself, as soon as possible.
    <br><br>
    Sincerely,<br>
    Detective Alexei Kunetriev.`,
    keys: [
      {
        id: 1,
        key: "t03FhE5",
        values: ["car crash", "robbery", "shooting", "suicide"],
        valid: "car crash",
      },
      {
        id: 2,
        key: "mM3fl03",
        values: ["unknown suspect", "ignorant teen", "ASSHOLE"],
        valid: "unknown suspect",
      },
      {
        id: 3,
        key: "V04Fq27",
        values: ["blood stains", "nothing", "human feces", "a rotting corpse"],
        valid: "blood stains",
      },
      {
        id: 4,
        key: "bB3e527",
        values: [
          "yet to be recovered",
          "descecrated",
          "taken too soon",
          "relieved of duty",
        ],
        valid: "yet to be recovered",
      },
      {
        id: 5,
        key: "pIRd320",
        values: ["your son", "you", "{USER}", "the monster"],
        valid: "your son",
      },
    ],
  };
}

export default secondEmail;
