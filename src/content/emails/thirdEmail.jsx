function thirdEmail() {
  return {
    id: 1,
    message: `
        Subject: NAMAD Advanced Mining Vehicle <br>
        <br>
        The Remote-Operated Compact Tunneller is the vehicle to revolutionize mining.  Controlled entirely via <span class="corrupted" id="lPeR31a">[lPeR31a]</span>, the ROCT makes it safe to traverse areas normally inhospitable to humans.
        <br><br>
        Equipped with 4 treads on the vehicle's body, difficult terrain is no longer an issue. With highly advanced maneuverability, there's no need to worry if you get caught <span class="corrupted" id="b3eR0PA">[b3eR0PA]</span>!
        <br><br>
        A compact microphone provides live audio of the ROCT's surroundings. This is especially handy for listening for hazards such as running water or nests.
        <br><br>
        The ROCT is equipped with a <span class="corrupted" id="qQ3z0rd">[qQ3z0rd]</span>, capable of boring through even the toughest of rocks. The drill is also equipped with <span class="corrupted" id="ljo083f">[ljo083f]</span>, allowing you to see exactly where you're going.
        <br><br>
        Available in a variety of colors, the ROCT is sure to <span class="corrupted" id="sOr482p">[sOr482p]</span>. Order yours today!`,
    keys: [
      {
        id: 1,
        key: "lPeR31a",
        values: ["a computer", "your home phone", "a neural link"],
        valid: "a computer",
      },
      {
        id: 2,
        key: "b3eR0PA",
        values: ["between a rock and a hard place", "in its nest", "alone"],
        valid: "between a rock and a hard place",
      },
      {
        id: 3,
        key: "qQ3z0rd",
        values: [
          "powerful drill",
          "weapon of mass destruction",
          "human arm for burrowing",
        ],
        valid: "powerful drill",
      },
      {
        id: 4,
        key: "ljo083f",
        values: [
          "a camera",
          "a set of eyes",
          "the user's eyes",
          "a single lens",
        ],
        valid: "a camera",
      },
      {
        id: 5,
        key: "sOr482p",
        values: [
          "be a hit with your mining crew",
          "find what's looking for you",
          "see right through you",
          "dig until it can't dig anymore",
        ],
        valid: "be a hit with your mining crew",
      },
    ],
  };
}

export default thirdEmail;
