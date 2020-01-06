const $ = require('jquery');

const container = $('.main-body');
const popupForm = $('.form-add-job-seekers');
const buttonClassClose = $('.add-job-seekers__button-close')[0];

$('.button-add').click(openDropdownForm);
container.click(closeDropdownForm);
$(buttonClassClose).click(closeDropdownForm);

function openDropdownForm (e) {
  e.preventDefault();
  popupForm.addClass('form-add-job-seekers--visible');
  container.addClass('main-body--disabled');
}

function closeDropdownForm (e) {

  console.log(e);

  if ($(e.target).is('.main-body')
    || $(e.target).is(buttonClassClose)
    || e.target.offsetParent === buttonClassClose) {
    e.preventDefault();
    popupForm.removeClass('form-add-job-seekers--visible');
    container.removeClass('main-body--disabled');
  }
}

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    popupForm.removeClass('main__add-job-seekers--visible');
    container.removeClass('main-body--disabled');
  }
});
