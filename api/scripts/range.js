let range = (x) => {
    var list = [];
    for (var i = 0; i < (x+1); i++) {
      list.push(-i);
    }
    return list;
}

module.exports = {
    range
}