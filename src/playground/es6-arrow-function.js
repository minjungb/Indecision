// const square = function(x){
// 	return x*x;
// };

// //const squareArrow = (x) => {
// //	return x*x;
// //};



// const squareArrow = (x) => x*x; 

// console.log(squareArrow());


// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Mike Smith'));

// const add = function(a, b) {
// 	console.log(arguments);
// 	return a+b;
// }

const user = {
	name:'Andrew',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
}

console.log(user.printPlacesLived());

const multiplier = {
	number: [2,3,5,7,10],
	multiplyBy: 2,
	multiply(){
		return this.number.map((num) => this.multiplyBy * num);
	}
};

console.log(multiplier.multiply());

