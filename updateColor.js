updateColor = (item) => {
    if (item.colour == "grey") {
      //console.log("NE");
    }
    if (item.resQuantity == 0) {
      item.color = "red";
    }
    if (item.resQuantity == item.reqQuantity) {
      item.color = "green";
      //console.log("green");
    } else {
      item.color = "yellow";
    }
    return item;
  };

module.exports = updateColor; 