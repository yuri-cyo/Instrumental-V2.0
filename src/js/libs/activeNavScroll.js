export function activeNavScroll(activeClass, hightTrigger) {

	// import {activeNavScroll} from './lib/activeNavScroll.js'; 
	// activeNavScroll('nav-list__item-link--active', 30);   		//! 	імпорт! (де activeClass(string) - назва активного класа навігації, hightTrigger(number) висота тригера в %(процентах)

	// <ul class="nav-list"> //! Приклад HTML
	// 	<li><a href="#section-1" class="nav-list__item-link">nav section 1</a></li>
	// <ul/>

	// <section id="section-1">section 1</section>

	// const activeClassNav = 'nav-list__item-link--active'; //! Активний клас! 
	const activeClassNav = activeClass; //! Активний клас! 
	let windowHeight = window.innerHeight / 100 * hightTrigger; //! висота активного тригера (висота вікна подылена на ..)
	// console.log(windowHeight);
	// const fixDoubleClasses = 0; //! Фікс накладання класів. Віднімає висоту тригера (де 0 - викл) //! розкоментувати для автоматичної ависоти активного тригер (активний тригер - це мінімальна висота секції)

			
	addEventListener('scroll', funcWindowHeight);
	function funcWindowHeight() {
		const anchors = document.querySelectorAll('a[href*="#"]')
		const sections = document.querySelectorAll('section[id*="section"]')
		let heightSections;
		let activeHeight;
		let arrHeightSections = [];
	
	// for (let section of sections) { //! розкоментувати цикл для автоматичної висоти активного тригера (активний тригер - це мінімальна висота секції)
	//   heightSections = section.getBoundingClientRect().height; //* Висота секції
	
	//   arrHeightSections.push(parseInt(heightSections));
	//   activeHeight = Math.min(...arrHeightSections) - fixDoubleClasses;
	// }
	
	activeHeight = windowHeight;
	
	for (let anchor of anchors) {
		anchor.addEventListener("click", function(event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: "smooth",
				block: "start",
				})
			})
			let hasSection = '' + anchor.hash.slice(1);
			const allNavLinks = document.querySelector(`a[data-scroll-active-nav=${hasSection}]`) //* Секції
		const allSections = document.querySelector(`div[id*=${hasSection}]`) //* Секції
		
		let style = window.getComputedStyle(allSections);
		let margin = parseFloat(style.marginBottom);
		// const heightSection = allSections.getBoundingClientRect().height; //* Висота секції
		const heightSection = allSections.scrollHeight + margin; //* Висота секції
		const coordSections = allSections.getBoundingClientRect().top - (margin / 2); //* координати 
		
		// console.log(activeHeight);

		if (activeHeight <= coordSections + heightSection && 
			activeHeight >= coordSections) {
				allNavLinks.classList.add(activeClassNav)
			} else {
				allNavLinks.classList.remove(activeClassNav)
		}
		}
	}
}

