function calculateWithdraw(balance) {
  if (balance === 0) {
    return 0;
  }

  // Hardcode this number into config or somewhere so it's not magic.
  if (balance < 1000000000) {
    return 0;
  }

  return balance / 1000;
}

module.exports = {
  calculateWithdraw: calculateWithdraw
};
