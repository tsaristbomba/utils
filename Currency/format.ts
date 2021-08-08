function format(currency: string, amount: number) {
  const decimal = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    amount
  );

  if (currency === "usd") {
    return `$` + decimal;
  }
  if (currency === "brl") {
    return `R$` + decimal;
  }
}

// console.log(format("brl", 122000.12)); // R$122,000.12

module.exports = format;
