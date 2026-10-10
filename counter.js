// Privacy-friendly visit counter (https://counter.dev): no cookies, no fingerprinting
if (!sessionStorage.getItem('_swa') && document.referrer.indexOf(location.protocol + '//' + location.host) !== 0) {
  fetch('https://counter.dev/track?' + new URLSearchParams({ referrer: document.referrer, screen: screen.width + 'x' + screen.height, user: 'Klaus.Eckelt@gmail.com', utcoffset: '1' }));
}
sessionStorage.setItem('_swa', '1');
