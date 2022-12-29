import {
  cardName,
  imgcardName,
  cardNumber,
  imgNumbercard,
  cvc,
  imgCvccard,
  expMonth,
  expirateMonth,
  expYear,
  expirateYear,
  submit,
  requiredName,
  requiredNumber,
  requiredcod,
  requiredexp,
  inputsForm,
  form,
  confirmContent,
  img,
  h2,
  p,
  button,
  main,
  mainBg,
} from "/javascript/selectorsElements.js";

let txt = "";

// FUNCTION //
function addEvent(element, insertTxt, message) {
  element.addEventListener("keyup", (ev) => {
    ev.preventDefault();
    if (ev.target.getAttribute("id") === "data-exp") {
      insertTxt.innerText = `${element.value}/`;
      message.innerText = "";
      element.classList.remove("border-required");
    } else {
      insertTxt.innerText = element.value;
      message.innerText = "";
      element.classList.remove("border-required");
    }
  });
}

function validationForms(input) {
  input.setAttribute("required", "required");
  if (!input.checkValidity()) {
    txt = input.validationMessage;
    input.classList.add("border-required");
    input.removeAttribute("required");
  } else {
    txt = "";
  }
  return txt;
}

// CALL FUNCTION INSERT TEXT CARD IMG //
addEvent(cardName, imgcardName, inputsForm[0]);
addEvent(cardNumber, imgNumbercard, inputsForm[1]);
addEvent(cvc, imgCvccard, inputsForm[3]);
addEvent(expMonth, expirateMonth, inputsForm[2]);
addEvent(expYear, expirateYear, inputsForm[2]);
//

submit.addEventListener("click", (ev) => {
  ev.preventDefault();
  //  MESSAGE FORM REQUIRED //
  requiredName.innerText = validationForms(cardName);
  requiredNumber.innerText = validationForms(cardNumber);
  requiredcod.innerText = validationForms(cvc);
  requiredexp.innerText = validationForms(expMonth);

  if (requiredexp.innerText === "" && !expMonth.checkValidity()) {
    requiredexp.innerText = validationForms(expMonth);
  }
  if (requiredexp.innerText === "" && !expYear.checkValidity()) {
    requiredexp.innerText = validationForms(expYear);
  }
  //

  // VALIDATION FORM AND SCREAN NEXT CONFIRM //
  if (
    inputsForm[0].innerText === "" &&
    inputsForm[1].innerText === "" &&
    inputsForm[2].innerText === "" &&
    inputsForm[3].innerText === ""
  ) {
    form.classList.add("form-display");
    // New Screen //
    img.setAttribute("src", "/assets/icon-complete.svg");
    h2.innerText = "Thank You!";
    p.innerText = "We've added your card details";
    button.innerText = "Continue";
    confirmContent.setAttribute("id", "content-confirm");
    main.append(confirmContent);
    confirmContent.append(img, h2, p, button);
    //
  }
});

function switchImgbg(x) {
  if (x.matches) {
    mainBg.setAttribute("src", "/assets/bg-main-mobile.png");
    mainBg.classList.remove("img-bg");
    mainBg.classList.add("main-bg");
  } else {
    mainBg.classList.remove("main-bg");
    mainBg.classList.add("img-bg");
  }
}

const x = window.matchMedia("(max-width:800px)");
switchImgbg(x);
x.addEventListener("change", switchImgbg);
