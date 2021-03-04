import config from '../config'
function cssvars() {
	const doc = document.documentElement;
	    doc.style.setProperty('--primary', `${config.style.primary}`);
    doc.style.setProperty('--secondary', `${config.style.secondary}`);
    doc.style.setProperty('--tertiary', `${config.style.tertiary}`);
    doc.style.setProperty('--quaternary', `${config.style.quaternary}`);
    doc.style.setProperty('--black', `${config.style.black}`);
    doc.style.setProperty('--white', `${config.style.white}`);
    doc.style.setProperty('--shade', `${config.style.shade}`);
    doc.style.setProperty('--darkshade', `${config.style.darkshade}`);
    doc.style.setProperty('--head', `${config.style.head}`);
    doc.style.setProperty('--body', `${config.style.body}`);
    doc.style.setProperty('--size', `${config.style.size}`);
    doc.style.setProperty('--h1', `${config.style.headings[0]}`);
    doc.style.setProperty('--h2', `${config.style.headings[1]}`);
    doc.style.setProperty('--h3', `${config.style.headings[2]}`);
    doc.style.setProperty('--h4', `${config.style.headings[3]}`);
    doc.style.setProperty('--h5', `${config.style.headings[4]}`);
    doc.style.setProperty('--h6', `${config.style.headings[5]}`);
    doc.style.setProperty('--btn-padding', `${config.style.buttons.padding}`);
    doc.style.setProperty('--btn-border', `${config.style.buttons.border}`);
    doc.style.setProperty('--btn-radius', `${config.style.buttons.radius}`);
}
export {cssvars}
