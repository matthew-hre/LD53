function thirdEmail() {
  return {
    id: 1,
    message: `
    Subject: BIG BOOZE SALE! 50% OFF ALL LIQUOR!

    Hello, valued customer! We here at Big Booze are proud to announce our annual sale! All liquor is <span class="corrupted" id="mNe43p0">[mNe43p0]</span>! That's right, <span class="corrupted" id="zZ34p09">[zZ34p09]</span>! This is a limited time offer, so come on down to Big Booze and get your liquor today!<br>
    <br>
    Come on down to Big Booze, just off Penn Street, and get your liquor today!<br>
    <br>
    We've <span class="corrupted" id="br50PLE">[br50PLE]</span> our selection of liquor, wines, and spirits! We've got everything you need to get your party started!<br>
    <br>
    Come on down to Big Booze, just off Penn Street, and <span class="corrupted" id="t34pP25">[t34pP25]</span>!
    `,
    keys: [
      {
        id: 1,
        key: "mNe43p0",
        values: ["50% off", "a sin", "so, so good..."],
        valid: "50% off",
      },
      {
        id: 2,
        key: "zZ34p09",
        values: [
          "all liquor is 50% off",
          "you fucking did it",
          "safe to drink",
          "just so tasty",
        ],
        valid: "all liquor is 50% off",
      },
      {
        id: 3,
        key: "br50PLE",
        values: ["expanded", "sold", "trashed", "guzzled down"],
        valid: "expanded",
      },
      {
        id: 4,
        key: "t34pP25",
        values: [
          "confess already",
          "turn yourself in",
          "off yourself",
          "get your liquor today",
        ],
        valid: "all liquor is 50% off",
      },
    ],
  };
}

export default thirdEmail;
