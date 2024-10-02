export { getMoonphaseIcon };

const getMoonphaseIcon = function getMoonphaseIcon(icon) {
  if (icon === "New Moon") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14c7.72,0,14-6.28,14-14S55.72,34,48,34z M48,58c-5.514,0-10-4.486-10-10
		s4.486-10,10-10c5.514,0,10,4.486,10,10S53.514,58,48,58z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Waxing Crescent") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14c7.72,0,14-6.28,14-14S55.72,34,48,34z M38,48c0-5.292,4.136-9.625,9.342-9.967
		C44.123,40.182,42,43.838,42,48s2.123,7.818,5.342,9.967C42.136,57.625,38,53.292,38,48z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "First Quarter") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S55.72,34,48,34z M38,48c0-5.514,4.486-10,10-10v20
		C42.486,58,38,53.514,38,48z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Waxing Gibbous") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S55.72,34,48,34z M38,48c0-5.514,4.486-10,10-10
		c0.222,0,0.439,0.019,0.658,0.033C51.876,40.182,54,43.838,54,48s-2.124,7.818-5.342,9.967C48.439,57.981,48.222,58,48,58
		C42.486,58,38,53.514,38,48z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Full Moon") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S55.72,34,48,34z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Waning Gibbous") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14c7.72,0,14-6.28,14-14S55.72,34,48,34z M48,58c-0.222,0-0.44-0.019-0.658-0.033
		C44.123,55.818,42,52.162,42,48s2.123-7.818,5.342-9.967C47.56,38.019,47.778,38,48,38c5.514,0,10,4.486,10,10S53.514,58,48,58z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Last Quarter") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14c7.72,0,14-6.28,14-14S55.72,34,48,34z M48,58V38c5.514,0,10,4.486,10,10
		S53.514,58,48,58z"/>
</g>
</svg>`;
    return svgElement;
  }
  if (icon === "Waning Crescent") {
    const svgElement = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px"
	 height="800px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" class="today-icon weather-icon moonphase-icon">
<g id="Base" display="none">
</g>
<g id="Dibujo">
	<path d="M48,34c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S55.72,34,48,34z M38,48c0-5.514,4.486-10,10-10
		c0.222,0,0.439,0.019,0.658,0.033C51.876,40.182,54,43.838,54,48s-2.124,7.818-5.342,9.967C48.439,57.981,48.222,58,48,58
		C42.486,58,38,53.514,38,48z"/>
</g>
</svg>`;
    return svgElement;
  }
};
