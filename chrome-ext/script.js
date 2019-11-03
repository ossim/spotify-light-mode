// console.log("lets go bnitch");

var body = document.getElementsByTagName("body")[0];

body.classList.add("lightmode");

// console.log(body, body.classList);

console.log("hello");

document.querySelectorAll("body *").forEach(function(node) {
  // const textColor = getComputedStyle(node).color
  // if (textColor.length === 7 || textColor.length === 4 ) {
  //   node.style.color = invertHex(getComputedStyle(node).color);
  // } else {
  //   node.style.color = invertRgb(getComputedStyle(node).color);
  // }

});





function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function invertRgb(rgb) {
    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
    for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

function invertHex(hex) {

    if (hex.length !== 6) {
        console.log(hex, "hex not 6 char");
        return;
    }
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}