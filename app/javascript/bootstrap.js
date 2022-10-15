import * as bootstrap from "bootstrap"
import * as Popper from '@popperjs/core'
window.bootstrap = bootstrap;
window.Popper = Popper;

// initialize the page
window.addEventListener('load', (event) => {
  initPage();
});
window.addEventListener('turbo:render', (event) => {
  initPage();
});
function initPage() {
  // initialize popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

  // initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}
