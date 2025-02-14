const challengeGreeting = (name) => {
  const generalMessage = "Welcome to Terrace Inn & Suites!";
  const seasonalMessage =
    "Need to cool off? Visite one of our three resort pools!";
  return `Hello ${name}! ${generalMessage} ${seasonalMessage}`;
};
console.log(challengeGreeting("Sarah"));
