const introData = [
  {
    id: 1,
    type: "text",
    message: "Hello, and welcome to the North American Email Recovery Center.",
    delay: 3000,
  },
  {
    id: 2,
    type: "value",
    message: "Please input your name into the input below.",
  },
  {
    id: 3,
    type: "text",
    message:
      "Fantastic, thanks {USER}. Just a few more questions to finalize your employment at NAERC.",
    delay: 3000,
  },
  {
    id: 4,
    type: "yn",
    message:
      "Do you understand that you will be working with sensitive information?",
    yes: "Great, thanks for your understanding.",
    no: "That's unfortunate. Please refamiliarize yourself with the employee handbook on your next break.",
    delay: 4000,
  },
  {
    id: 5,
    type: "yn",
    message: "Do you have any experience with email recovery?",
    yes: "Great, you'll be a natural.",
    no: "That's unfortunate. Please refamiliarize yourself with the employee handbook on your next break.",
    delay: -1,
  },
  {
    id: 6,
    type: "yn",
    message:
      "Do you consent to any and all necessary information being collected for customer satisfaction purposes?",
    yes: "Great, thanks for your understanding.",
    no: "Data will still be collected. Thanks for your understanding.",
    delay: 4000,
  },
  {
    id: 7,
    type: "text",
    message: "Alright, thanks {USER}. Let's get started.",
    delay: 10000,
  },
];

export default introData;
