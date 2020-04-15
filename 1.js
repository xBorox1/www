var elements = document.getElementsByClassName("passenger");
var el = elements[0];
for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
    var val = elements_1[_i];
    if (val.getAttribute('data-identyfikator-pasazera') < el.getAttribute('data-identyfikator-pasazera')) {
        el = val;
    }
}
console.log(el.innerHTML);
