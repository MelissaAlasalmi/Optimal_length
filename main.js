function getPrompt() {
	var input = document.getElementById("input").value;
	var charCount = input.length;
	var remainder;
	var selected = document.querySelector('input[name = "option"]:checked');

	if (selected != null)
	{
		if (selected.value === "85") 
			remainder = 85 - charCount;
		else if (selected.value === "160") 
			remainder = 160 - charCount;
		else if (selected.value === "300") 
			remainder = 300  - charCount;
		else
			remainder = 360 - charCount;
		document.getElementById("prompt").innerHTML = "Your character count is  " + charCount + ", you have " + remainder + " characters left";
	}
	else
	{
		alert("Error. Please choose the optimal length");
	}
}