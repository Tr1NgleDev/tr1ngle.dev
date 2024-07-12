document.addEventListener("mousemove", (event) =>
{
	const cursorX = event.clientX;
	const cursorY = event.clientY;
});


const myTimeEls = document.getElementsByClassName("my-time");

var myTimeUpdate = window.setInterval(updateMyTime, 10000);

function updateMyTime()
{
	for (let i = 0; i < myTimeEls.length; i++)
	{
		let options = {
			timeZone: '+08',
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hourCycle: 'h24'
		},
		formatter = new Intl.DateTimeFormat([], options);

		myTimeEls.item(i).textContent = "My current time is: " + formatter.format(new Date());
	}
}

updateMyTime();
