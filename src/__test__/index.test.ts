const ankiScheduler = require("../index");

test("test anki scheduler", () => {
  const config = {
    defaultFactor: 2.5,
    firstFewIntervals: [1, 6],
    factorModifier: 0.15,
    easeBonus: 1.3,
    hardFactor: 1.2,
    minFactor: 1.3,
    jitterPercentage: 0.05,
    maxInterval: 50 * 365,
    responseTexts: ["Again.", "Hard.", "Good.", "Easy."],
  };

  const history = [
    {
      date: new Date(),
      signal: "3",
    },
  ];

  const responses = [
    {
      responseText: config.responseTexts[0],
      signal: 1,
      interval: 0,
    },
    {
      responseText: config.responseTexts[2],
      signal: 3,
      interval: 1,
    },
  ];

  expect(ankiScheduler(config)(history)).toEqual(responses);
});
