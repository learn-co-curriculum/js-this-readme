console.log(this === window);
// returns true

function checkThis(){
  'use strict';
  console.log(this);
}
checkThis();
// outputs Window object
//
function Chair(style, color) {
  console.log(this);
  this.style = style;
  this.color = color;
}
sofa = new Chair("sofa", "green");

var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};

console.log(couch.f());
// outputs object
