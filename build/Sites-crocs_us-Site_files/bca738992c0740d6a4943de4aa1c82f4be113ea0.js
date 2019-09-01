(function (emailSignupGroup) { 
    if (emailSignupGroup == ""){ 
		var groups = ["groupa", "groupb"], 
			rnd = BrightTag.Random.integer() % groups.length, 
			date = new Date(),
			days = 365;
			 
		date.setTime(date.getTime()+(days*86400000)); // 86400000 milliseconds in a day 

		var expires = date.toGMTString(); 

		document.cookie = "emailSignupGroup=" + groups[rnd] + ";path=/;expires=" + expires; 
	} 
}(bt_cookie("emailSignupGroup")))