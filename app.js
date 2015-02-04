/* ALT WAY TO CHECK PAGE LOADED from snarechops

  function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
} */
  

  var list = document.getElementById("list");
  var listItems = " ";
  var f = "= Fizz";
  var b ="= Buzz";
  var fb ="= FIZZBUZZ";
  
  for (i = 1; i <= 100; i++) {
    listItems += "<li>";
    if ((i % 3 === 0) && (i % 5 === 0)) {
      listItems += fb;

    }
    else if (i % 3 === 0) {
      listItems += f;
   }
   else if (i % 5 === 0) {
      listItems += b
    }
    else {
      listItems += "= " + i;
    }
  }
  listItems += "</li>";
  list.innerHTML += listItems;


