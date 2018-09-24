//sidenav
let sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000

});

//autocomplete-input
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba": null,
    "Cancun Mexico": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamaica": null,
    "Europe": null,
  }
});

//material Boxes

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss,{})
