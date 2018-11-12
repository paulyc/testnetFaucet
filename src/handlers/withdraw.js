async function withdrawHandler(request, h) {
  let data = {
    hash: "d0b9cc990b1b026aebd988ae367b5cc3d00ce42429634d56880d139516e8ad98"
  };
  return h.response(data).code(200);
}

module.exports = withdrawHandler;
