// add classes for mobile navigation toggling
var body = document.querySelector('body');
const navbarMenu = document.querySelector('#navigation');
const hamburgerMenu = document.querySelector('#navigation .cs-toggle');

hamburgerMenu.addEventListener('click', function () {
	hamburgerMenu.classList.toggle('active');
	navbarMenu.classList.toggle('active');
	body.classList.toggle('open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const UL = document.querySelector('#cs-expanded');
	const Expanded = UL.getAttribute('aria-expanded');

	if (Expanded === 'false') {
		UL.setAttribute('aria-expanded', 'true');
	} else {
		UL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('active');
	};
	item.addEventListener('click', onClick);
}
