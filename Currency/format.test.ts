const currencyFormat = require("./format");

test("returns formatted data as a single string", () => {
  expect(currencyFormat("brl", 122000.12)).toBe("R$122,000.12");
  expect(currencyFormat("usd", 122000.12)).toBe("$122,000.12");
});
