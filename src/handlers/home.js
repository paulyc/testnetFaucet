const { getWallet, getDepositAddress } = require("../util/wallet.js");
const { calculateWithdraw } = require("../util/util.js");

async function homeHandler(request, h) {
  const wallet = getWallet();

  let balanceData = await wallet.getBalance();
  let balance = balanceData.confirmed;

  //Calculate available to withdraw
  let available = calculateWithdraw(balance);

  let addressData = await getDepositAddress();
  let address = addressData.address;

  return h.view("home.pug", {
    balance,
    available,
    address
  });
}

module.exports = homeHandler;
