function firstEmail() {
  return {
    id: 1,
    message: `
      Subject: Let's Get Together for Dinner! <br>
      <br>
      Hi Joan, How are you doing? It's been ages since we all <span class="corrupted" id="X3rgJ04">[X3rgJ04]</span>, and I miss seeing you and
      your family. I was thinking that it would be great to have you over for
      dinner next Tuesday at round 5 at my place.<br><br>
      I'm planning to cook up some of your favorites, including my
      mouth-watering lasagna, and for dessert, we'll have apple pie with vanilla
      ice cream - YUM! I promise you won't leave with an <span class="corrupted" id="7Qo0e35">[7Qo0e35]</span>.<br><br>
      Also, I'd love to catch up with you and hear about what's new in your
      lives. It's always a treat to hear about your latest <span class="corrupted" id="1pEr4gx">[1pEr4gx]</span> and accomplishments. If
      you're available, let me know and I'll make sure to accommodate any
      dietary needs you have.<br><br>
      Looking forward to seeing you soon and having a great time!<br><br>
      Lots of <span class="corrupted" id="94gGd42">[94gGd42]</span>,
      <br>Granny Betty.`,
    keys: [
      {
        id: 1,
        key: "X3rgJ04",
        values: ["met up", "fell out", "joined"],
        valid: "met up",
      },
      {
        id: 2,
        key: "7Qo0e35",
        values: ["empty stomach", "empty wallet", "empty house"],
        valid: "empty stomach",
      },
      {
        id: 3,
        key: "1pEr4gx",
        values: ["adventures", "failures", "pains"],
        valid: "adventures",
      },
      {
        id: 4,
        key: "94gGd42",
        values: ["Love", "Endearment", "Affection"],
        valid: "Love",
      },
    ],
  };
}

export default firstEmail;
