const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    // speed: 1000,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  
function changeDepositTerm() {
  
  var depositField = document.querySelector(".deposit_type_field");
  var depositType = depositField.value;
  var depositTermSelect = document.querySelector(".deposit_period_field");
  
  depositTermSelect.innerHTML = "";
  
  if (depositType === "refill") {
      var options = [
          { term: "6 месяцев", rate: 20 },
          { term: "1 год", rate: 22 },
          { term: "1,5 года", rate: 15 },
          { term: "2 года", rate: 10 }
      ];
  } else if (depositType === "express") {
      var options = [
          { term: "3 месяца", rate: 20 },
          { term: "6 месяцев", rate: 22 },
          { term: "9 месяцев", rate: 23 },
          { term: "1 год", rate: 24 },
          { term: "1,5 года", rate: 18 },
          { term: "2 года", rate: 15 }
      ];
  }
  
  options.forEach(function(option) {
      var opt = document.createElement("option");
      opt.value = option.rate;
      opt.innerHTML = option.term;
      depositTermSelect.appendChild(opt);
  });
}



var depositField = document.querySelector(".deposit_type_field");

depositField.addEventListener("change", changeDepositTerm);



function calculateDeposit(){

 

  var textOutput = document.querySelector(".text_output");
  var depositeType = document.querySelector(".deposit_type_field").selectedOptions[0].text;

  var depositePeriod = document.querySelector(".deposit_period_field");

  var interestRate = depositePeriod.value;

  var depositInput = document.querySelector(".price_field").value;
let depositSumm = parseInt(depositInput);
  let result = (depositSumm + (depositSumm / 100) * interestRate);

  var resultString = "Вклад\"" + depositeType + "\" на срок  \"" + depositePeriod.selectedOptions[0].text + "\" на сумму " + depositSumm + "\n" 
  + "в конце срока вы получите " + result + " руб.";
  textOutput.textContent = resultString;
}

var submitButton = document.querySelector(".submit_button");

submitButton.addEventListener("click", calculateDeposit);