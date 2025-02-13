const challengeGreeting = (generalMessage, seasonalMessage) => {
  generalMessage = "Hello! Welcome to Terrace Inn & Suites!";
  seasonalMessage = "Need to cool off? Visit one of our three resort pools!";
  return `${generalMessage} ${seasonalMessage}`;
};
console.log(challengeGreeting());
