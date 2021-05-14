const textFrom = document.querySelector('.textForm');
const textArea = document.querySelector('#textArea');
const counter = document.querySelector('.counting');

textFrom.addEventListener('keyup', function() {
	let value = textArea.value;

	//* make temporary array to store  value entered
	let arr = [];

	//*condition to cehck if value is empty or not
	if (value) {
		arr = [ value ];
		loopToCheck(arr);
	}
});

//* function to loop ad check the letter count

function loopToCheck(array) {
	//*temporary variable to count the no character
	let count = 0;

	//* loop to iterate over all array characters
	for (let char of array) {
		char = char.toLowerCase();
		//* loop to check the character length
		for (let i = 0; i < char.length; i++) {
			count++;
		}
	}
	counter.innerHTML = count;
}
