var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
	//receiving parameters from user and multiplying by weight from sylabus and adding to the finalgrade variable
	finalGrade = Math.round(document.getElementById("assignments").value * .5) +
	Math.round(document.getElementById("project").value * .1) +
	Math.round(document.getElementById("quizzes").value * .1) +
	Math.round(document.getElementById("exams").value * .2) +
	Math.round(document.getElementById("intex").value * .1);
	//getting lettergrade from the value of final grade according to syllabus using if statements.
	if (finalGrade >= 94) {
		letterGrade = "A";
	}
	else if (finalGrade >= 90) {
		letterGrade = "A-";
	}
	else if (finalGrade >= 87) {
		letterGrade = "B+";
	}
	else if (finalGrade >= 84) {
		letterGrade = "B";
	}
	else if (finalGrade >= 80) {
		letterGrade = "B-";
	}
	else if (finalGrade >= 77) {
		letterGrade = "C+";
	}
	else if (finalGrade >= 74) {
		letterGrade = "C";
	}
	else if (finalGrade >= 70) {
		letterGrade = "C-";
	}
	else if (finalGrade >= 67) {
		letterGrade = "D+";
	}
	else if (finalGrade >= 64) {
		letterGrade = "D";
	}
	else if (finalGrade >= 60) {
		letterGrade = "D-";

	}
	else {
		letterGrade = "E";
	}
	//alerting our results to the user
	alert(finalGrade + "% Letter Grade " + letterGrade);

});