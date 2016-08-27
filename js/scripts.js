(function() {


	var start = document.querySelector(".button-1"),
		end = document.querySelector(".button-2");

	var anim = document.querySelectorAll(".anim");


	start.addEventListener("click", function() {
 
 		for (var i=0; i<anim.length; i++) {
			anim[i].style.animationPlayState="running"; 
		}

	}, false)

	end.addEventListener("click", function() {
 
 		for (var i=0; i<anim.length; i++) {
			anim[i].style.animationPlayState="paused"; 
		}

	}, false)


})();


