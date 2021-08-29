$('.accordion__header').click(function (e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if (currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});

function requestAppointment(params)
{
	console.log("herre we go part 2")
	emailjs.send("service_rqonmsj","app_form",{
		name: document.getElementById("fname").value,
		surname: document.getElementById("lname").value,
		email: document.getElementById("email").value,
		contact: document.getElementById("number").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
		
		});
		

}


function sendMail(params) {
	console.log("here we go");
  let fromName = document.getElementById("fromName").value;
  console.log(fromName);
  let toName = document.getElementById("toName").value;
  let msg = document.getElementById("msg").value;

  emailjs.send("service_rqonmsj","template_vhpsjqa",{
to_name: toName,
from_name: fromName,
message: msg
}).then(function(res)
{
  console.log("success",res.status);
});
document.getElementById("fromName").value = "";
document.getElementById("toName").value = "";
document.getElementById("msg").value = "";

}

function makeTimer() {

		var endTime = new Date("29 April 2022 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);


	$('#menuToggle').click(function (e) {
		$('#menu').toggle();
		$('body');
	});

document.onreadystatechange = function () {
	var state = document.readyState
	if (state == 'complete') {
		setTimeout(function(){
			document.getElementById('interactive');
			   document.getElementById('preloader').style.visibility="hidden";
			},1000);
		}
}
document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {
		if (window.scrollY > 150) {
		  document.getElementById('navbarScroll').classList.add('fixed-top');
		  navbar_height = document.querySelector('.menu').offsetHeight;
		  document.body.style.paddingTop = navbar_height + 'px';
		} else {
		  document.getElementById('navbarScroll').classList.remove('fixed-top');
		  document.body.style.paddingTop = '0';
		} 
	});
}); 


AOS.init({
	duration: 1200,
})

// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 15;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span>« Prev</span></li>`;
  }

  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    // if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
    //   liTag += `<li class="dots"><span>...</span></li>`;
    // }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next »</span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}