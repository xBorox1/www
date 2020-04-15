let elements = document.getElementsByClassName("passenger");
let el = elements[0];
for(const val of elements) {
	if(val.getAttribute('data-identyfikator-pasazera') < el.getAttribute('data-identyfikator-pasazera')) {
		el = val;
	}
}
console.log(el.innerHTML);
