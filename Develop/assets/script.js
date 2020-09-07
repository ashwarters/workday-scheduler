(function () {});
var today = moment().format("dddd, MMMM Do");
var current = moment().format();

var toDo = JSON.parse(localStorage.getItem("workDay"));
if (toDo) {
  userInput = toDo;
}

$("#currentDay").text(today);

function colorRow(time) {
	var planCurrent = moment(current,);
	var planEntry = moment(time,);
	if (planCurrent.isBefore(planEntry) === true) {
		return "future";
	} else if (planNow.isAfter(planEntry) === true) {
		return "past";
	} else {
		return "present";
	}
}

$(".saveBtn").on("click", function() {
	var blockID = parseInt(
		$(this)
			.closest(".time-block")
			.attr("id")
	);
  
	localStorage.setItem("workDay", JSON.stringify(userInput));
});