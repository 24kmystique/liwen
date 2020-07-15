









var intViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var intViewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var homeHiContainer = document.getElementById('homeHiContainerId');
var homeHiContainerPos = homeHiContainer.getBoundingClientRect();
var homeHiContainerPosTop = homeHiContainerPos.top;
var headerBkg = document.getElementById('headerBkgId');
var navMenuContainerId = document.getElementById('navMenuContainerId');
var navSideMenuImageId = document.getElementById('navSideMenuImageId');

window.onscroll = function() {
	changeHeader();
};

function changeHeader() {
	// when scroll window, header background become solid



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
		headerBkg.classList.remove('headerBkgAfter');
		openSideNavTotalCount = 0;
		sideNav.style.width = '0%';
	};
};























