// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navlinks');
if (bar) {
	bar.addEventListener('click', function () {
		nav.classList.toggle('active');
	});
}
const navActive = document.getElementsByClassName('nav-a');
for (let i = 0; i < navActive.length; i++) {
	navActive[i].addEventListener('click',function() {
		var current = document.getElementsByClassName('active');
		current[0] = current[0].className.replace('active');
		this.className += 'active';
	})
}


var MainImg = document.getElementById('main-img');
var Small = document.getElementsByClassName('small-img');
const changeEL = () => {
	Small[0].onclick = function () {
		MainImg.src = Small[0].src;
	};
	Small[1].onclick = function () {
		MainImg.src = Small[1].src;
	};
	Small[2].onclick = function () {
		MainImg.src = Small[2].src;
	};
	Small[3].onclick = function () {
		MainImg.src = Small[3].src;
	};
};
changeEL();
