const pulseStopTitle = (item, delay) => {
  setTimeout(() => {
    item.classList.add('animate_pulse');
  }, delay);

  setTimeout(() => {
    item.classList.remove('animate_pulse');
  }, delay + 1000);
};
const animateTitle = (theClass) => {
  const titles = document.getElementsByClassName(theClass);
  for (let i = 0; i < titles.length; i += 1) {
    pulseStopTitle(titles[i], i * 2000);
  }
};

export default animateTitle;
