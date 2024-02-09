const animateTitle = (theClass) => {
    const titles = document.getElementsByClassName(theClass);
    for(let i = 0; i < titles.length; i++) {
        pulseStopTitle(titles[i], i * 2000);
    }
}

const pulseStopTitle = (item, delay) => {
    setTimeout(() => {
        item.classList.add('animate_pulse');
    }, delay);
    
    setTimeout(() => {
        item.classList.remove('animate_pulse');
    }, delay + 1000);
}

export default animateTitle;