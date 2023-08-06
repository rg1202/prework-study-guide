var topics = ['HTML', 'CSS', 'GIT', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];



/* 
if (condition) {
    block of code to be executed if condition is truthy
} else if (second condition) {
    block of code to executed if second condition it truthy
}
*/

//var x = 0;

//x < topics.length;

//x++

// for (initializer; condition (will keep running if true); final-expression) {
//   code to run each time the loop iterates
// }

function listTopics() {
	for (var x = 0; x < topics.length; x++) {
		console.log(topics[x]);
	}
}

/*function selectTopic() {
	if (topics === "HTML") {
		console.log("Let's study HTML!");
	} else if (topics === "CSS") {
		console.log("Let's study CSS!");
	} else if (topics === "GIT") {
		console.log("Let's study GIT!");
	} else if (topics === "JavaScript") {
		console.log("Let's study JavaScipt!");
	} else {
		console.log("Please pick a topic!");
	}
}
*/

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();