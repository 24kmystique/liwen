


var intViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var intViewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var homeHiContainer = document.getElementById('homeHiContainerId');


window.onscroll = function() {
	changeHeader();
};

function changeHeader() {
	// when scroll window, header background become solid
	let headerBkg = document.getElementById('headerBkgId');
	let navMenuContainerId = document.getElementById('navMenuContainerId');
	let navSideMenuImageId = document.getElementById('navSideMenuImageId');
	let MainImageContainer = document.querySelectorAll('.MainImageContainer');

	// if main background image is out of view, nav header will have background
	if ( ( (window.pageYOffset > intViewportHeight) || (window.pageYOffset > MainImageContainer[0].offsetHeight) ) && (intViewportWidth >= 768) ) {
		headerBkg.classList.add('headerBkgAfter');
		navSideMenuImageId.style.visibility = 'visible';
		navMenuContainerId.style.visibility = 'hidden';
	} else if (intViewportWidth >= 768) {
		headerBkg.classList.remove('headerBkgAfter');
		navSideMenuImageId.style.visibility = 'hidden';
		navMenuContainerId.style.visibility = 'visible';
	} else if ( ( (window.pageYOffset > intViewportHeight) || (window.pageYOffset > MainImageContainer[0].offsetHeight) ) && (intViewportWidth < 768) ) {
		headerBkg.classList.add('headerBkgAfter');
	} else if (intViewportWidth < 768) {
		headerBkg.classList.remove('headerBkgAfter');
	};

};


var openSideNavTotalCount = 0;


function openSideNav() {
	// open side navigation bar
	var sideNav = document.getElementById('navSideMenuOverlayContainerId');
	let headerBkg = document.getElementById('headerBkgId');

	if ((openSideNavTotalCount == 0) && (intViewportWidth >= 768) ) {
		sideNav.style.width = '20%';
		openSideNavTotalCount++;;
	} else if ((openSideNavTotalCount == 0) && (intViewportWidth < 768) ) {
		headerBkg.classList.add('headerBkgAfter');
		sideNav.style.width = '100%';
		openSideNavTotalCount++;;
	} else if (openSideNavTotalCount === undefined) {
		openSideNavTotalCount = 0;
		openSideNav();
	} else {
		openSideNavTotalCount = 0;
		sideNav.style.width = '0%';
	};
};


function projectPopup() {
	// open popup above current frame
	let projectPopupContainerId = document.getElementById('projectPopupContainerId');
	projectPopupContainerId.style.visibility = 'visible';

	// change popup text margin
	let innerWidth = window.innerWidth;
	let projectPopupText = document.querySelectorAll('.projectPopupText');
	let projectPopupImage = document.getElementById('projectPopupImageContentId');
	let style = getComputedStyle(projectPopupImage);
	if (innerWidth <= 600) {
		for (i=0; i<projectPopupText.length; i++) {
			projectPopupText[i].style.marginLeft = style.marginLeft;
			projectPopupText[i].style.marginRight = style.marginRight;
		};
		
	};

}

function projectPopupExitButton() {
	// close popup
	let projectPopupContainerId = document.getElementById('projectPopupContainerId');
	let projectPopupExit = document.getElementById('projectPopupExitImageContainerId');

	projectPopupContainerId.style.visibility = 'hidden';
	projectPopupExit.style.visibility = 'hidden';
}


var slideIndex = 1;


function changeProjectPopupImage(currentSlideIndex) {
	// popup slideshow
	let numSlides = document.querySelectorAll('.projectPopupImage').length;
	let projectPopupImage = document.getElementsByClassName('projectPopupImage');

	if (currentSlideIndex > 0) {
		slideIndex += currentSlideIndex;
	} else {
		slideIndex -= 1;
	};

	for (i=0; i < numSlides; i++) {
		projectPopupImage[i].style.display = 'none';
	};

	if ( (slideIndex <= 0) && (slideIndex > -1*numSlides + 1) ) {
		projectPopupImage[numSlides + currentSlideIndex + slideIndex].style.display = 'flex';
	} else if (slideIndex > numSlides || slideIndex <= -1*numSlides + 1) {
		projectPopupImage[0].style.display = 'flex';
		slideIndex = 1;
	} else {
		projectPopupImage[slideIndex - 1].style.display = 'flex';
	};

};

function enlargeImage(currentImageIndex) {
	// when image is clicked, enlarge image to full screen
	let numImage = document.querySelectorAll('.projectPopupImage').length;
	let projectEnlarge = document.querySelectorAll('.projectEnlargeImage');
	let projectImage = document.querySelectorAll('.projectPopupImage');
	let projectEnlargeContainer = document.getElementById('projectEnlargeImageContainerId');
	let projectEnlargeBkg = document.getElementById('projectEnlargeBackgroundId');
	let projectPopupExit = document.getElementById('projectPopupExitImageContainerId');

	for (i=0; i<numImage; i++) {
		if (i == currentImageIndex-1) {
			// enlarge image
			projectEnlargeBkg.style.visibility = 'visible';
			projectEnlargeContainer.style.visibility = 'visible';
			projectPopupExit.style.visibility = 'hidden';
			projectEnlarge[0].src = projectImage[i].src;
		};
	};
};

function projectEnlargeExitButton() {
	// close enlarged image
	let projectEnlargeImageContainer = document.getElementById('projectEnlargeImageContainerId');
	let projectEnlargeBackground = document.getElementById('projectEnlargeBackgroundId');
	let projectPopupExit = document.getElementById('projectPopupExitImageContainerId');

	projectEnlargeImageContainer.style.visibility = 'hidden';
	projectEnlargeBackgroundId.style.visibility = 'hidden';
	projectPopupExit.style.visibility = 'visible';
};























