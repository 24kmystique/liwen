














// var animation = bodymovin.loadAnimation( {
// 	container: document.getElementById('homeAnim'),
// 	rederer: 'svg',
// 	autoplay: true,
// 	path: './data.json'
// })
// var container = document.getElementById('homeAnim');

// var animData = {
// 	container: container,
// 	renderer: 'svg',
// 	autoplay: true,
// 	loop: false,
// 	path : './data.json'
// };
// var anim = bodymovin.loadAnimation(animData);




var intViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var intViewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var homeHiContainer = document.getElementById('homeHiContainerId');
// var homeHiContainerPos = homeHiContainer.getBoundingClientRect();
// var homeHiContainerPosTop = homeHiContainerPos.top;


window.onscroll = function() {
	changeHeader();
};

function changeHeader() {
	// when scroll window, header background become solid

	let headerBkg = document.getElementById('headerBkgId');
	let navMenuContainerId = document.getElementById('navMenuContainerId');
	let navSideMenuImageId = document.getElementById('navSideMenuImageId');

	// if main background image is out of view, nav header will have background

	if ( (window.pageYOffset > intViewportHeight) && (intViewportWidth >= 768) ) { //changed homeHiContainerPosTop to intViewportHeight
		headerBkg.classList.add('headerBkgAfter'); // not working
		navSideMenuImageId.style.visibility = 'visible';
		navMenuContainerId.style.visibility = 'hidden';
		// alert('visibility works');
	} else if (intViewportWidth >= 768) {
		headerBkg.classList.remove('headerBkgAfter');
		navSideMenuImageId.style.visibility = 'hidden';
		navMenuContainerId.style.visibility = 'visible';
	} else if ( (window.pageYOffset > intViewportHeight) && (intViewportWidth < 768) ) {
		headerBkg.classList.add('headerBkgAfter');
	} else if (intViewportWidth < 768) {
		headerBkg.classList.remove('headerBkgAfter');
	};

	/*
	if ( (window.pageYOffset > homeHiContainerPosTop) && (intViewportWidth >= 768) ) {
		headerBkg.classList.add('headerBkgAfter'); // not working
		navSideMenuImageId.style.visibility = 'visible';
		navMenuContainerId.style.visibility = 'hidden';
		// alert('visibility works');
	} else if (intViewportWidth >= 768) {
		headerBkg.classList.remove('headerBkgAfter');
		navSideMenuImageId.style.visibility = 'hidden';
		navMenuContainerId.style.visibility = 'visible';
	} else if ( (window.pageYOffset > homeHiContainerPosTop) && (intViewportWidth < 768) ) {
		headerBkg.classList.add('headerBkgAfter');
	} else if (intViewportWidth < 768) {
		headerBkg.classList.remove('headerBkgAfter');
	}; */


};



var openSideNavTotalCount = 0;


function openSideNav() {
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
		// headerBkg.classList.remove('headerBkgAfter');
		openSideNavTotalCount = 0;
		sideNav.style.width = '0%';
	};
};


function projectPopup() {
	let projectPopupContainerId = document.getElementById('projectPopupContainerId');
	projectPopupContainerId.style.visibility = 'visible';

}

function projectPopupExitButton() {
	let projectPopupContainerId = document.getElementById('projectPopupContainerId');
	projectPopupContainerId.style.visibility = 'hidden';
}


var slideIndex = 1;


function changeProjectPopupImage(currentSlideIndex) {
	
	let numSlides = document.querySelectorAll('.projectPopupImage').length;
	let projectPopupImage = document.getElementsByClassName('projectPopupImage');
	//alert('currentSlideIndex: '+ currentSlideIndex);

	if (currentSlideIndex > 0) {
		slideIndex += currentSlideIndex;
	} else {
		slideIndex -= 1;
	};

	for (i=0; i < numSlides; i++) {
		projectPopupImage[i].style.display = 'none';
	};

	if ( (slideIndex <= 0) && (slideIndex > -1*numSlides + 1) ) {
		// alert('if');
		// alert('currentSlideIndex: ' + currentSlideIndex + 'slideIndex: ' + slideIndex);
		projectPopupImage[numSlides + currentSlideIndex + slideIndex].style.display = 'flex';
	} else if (slideIndex > numSlides || slideIndex <= -1*numSlides + 1) {
		// alert('else if');
		// alert('currentSlideIndex: ' + currentSlideIndex + 'slideIndex: ' + slideIndex);
		projectPopupImage[0].style.display = 'flex';
		slideIndex = 1;
	} else {
		// alert('else instead');
		// alert('currentSlideIndex: ' + currentSlideIndex + 'slideIndex: ' + slideIndex);
		projectPopupImage[slideIndex - 1].style.display = 'flex';
	};

}

























