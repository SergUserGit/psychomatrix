const btnCalc = document.querySelector(".button-calc");
const inpDate = document.querySelector(".input-date");
const cellOne = document.querySelector(".cell-one");
const cellTwo = document.querySelector(".cell-two");
const cellThree = document.querySelector(".cell-three");
const cellFour = document.querySelector(".cell-four");
const cellFive = document.querySelector(".cell-five");
const cellSix = document.querySelector(".cell-six");
const cellSeven = document.querySelector(".cell-seven");
const cellEight = document.querySelector(".cell-eight");
const cellNine = document.querySelector(".cell-nine");

btnCalc.addEventListener("click", onClickBtnCalc);

function getTotalSumDate(strDay, strMonth, strYear) {
  let sumDay = 0;
  let sumMonth = 0;
  let sumYear = 0;

  for (let i = 0; i < strDay.length; i += 1) {
    sumDay = sumDay + Number(strDay[i]);
  }

  for (let i = 0; i < strMonth.length; i += 1) {
    sumMonth = sumMonth + Number(strMonth[i]);
  }

  for (let i = 0; i < strYear.length; i += 1) {
    sumYear = sumYear + Number(strYear[i]);
  }

  const totalSum = sumDay + sumMonth + sumYear;
  return totalSum;
}

function getTwoNumber(totalSum) {
  let sumTotal = 0;
  const strSumTotal = String(totalSum);
  for (let i = 0; i < strSumTotal.length; i += 1) {
    sumTotal = sumTotal + Number(strSumTotal[i]);
  }
  return sumTotal;
}

function getThreeNumber(strDay, totalSum) {
  const valueTwo = Number(strDay[0]) * 2;
  const valueThree = totalSum - valueTwo;
  return valueThree;
}

function getFourNumber(valueThree) {
  let sumTotalFour = 0;
  const strSumTotalFour = String(valueThree);
  for (let i = 0; i < strSumTotalFour.length; i += 1) {
    sumTotalFour = sumTotalFour + Number(strSumTotalFour[i]);
  }
  return sumTotalFour;
}

function getStructDate(totalStr) {
  let strOne = "";
  let strTwo = "";
  let strThree = "";
  let strFour = "";
  let strFive = "";
  let strSix = "";
  let strSeven = "";
  let strEight = "";
  let strNine = "";
  for (let i = 0; i < totalStr.length; i += 1) {
    const symb = totalStr[i];
    if (symb === "1") {
      strOne = strOne + symb;
    }
    if (symb === "2") {
      strTwo = strTwo + symb;
    }
    if (symb === "3") {
      strThree = strThree + symb;
    }
    if (symb === "4") {
      strFour = strFour + symb;
    }
    if (symb === "5") {
      strFive = strFive + symb;
    }
    if (symb === "6") {
      strSix = strSix + symb;
    }
    if (symb === "7") {
      strSeven = strSeven + symb;
    }
    if (symb === "8") {
      strEight = strEight + symb;
    }
    if (symb === "9") {
      strNine = strNine + symb;
    }
  }
  const resultDate = {
    cellOne: strOne !== "" ? strOne : "-",
    cellTwo: strTwo !== "" ? strTwo : "-",
    cellThree: strThree !== "" ? strThree : "-",
    cellFour: strFour !== "" ? strFour : "-",
    cellFive: strFive !== "" ? strFive : "-",
    cellSix: strSix !== "" ? strSix : "-",
    cellSeven: strSeven !== "" ? strSeven : "-",
    cellEight: strEight !== "" ? strEight : "-",
    cellNine: strNine !== "" ? strNine : "-",
  };
  return resultDate;
}

function onClickBtnCalc() {
  const valInp = inpDate.value;
  if (valInp !== "") {
    const curDate = new Date(valInp);
    const curDay = curDate.getDate();
    const curMonth = curDate.getMonth() + 1;
    const curYear = curDate.getFullYear();
    const strDay = String(curDay);
    const strMonth = String(curMonth);
    const strYear = String(curYear);
    const totalSumDate = getTotalSumDate(strDay, strMonth, strYear);
    const numberTwo = getTwoNumber(totalSumDate);
    const numberThree = getThreeNumber(strDay, totalSumDate);
    const numberFour = getFourNumber(numberThree);
    const totalStr =
      strDay +
      strMonth +
      strYear +
      String(totalSumDate) +
      String(numberTwo) +
      String(numberThree) +
      String(numberFour);
    const structDate = getStructDate(totalStr);
    cellOne.textContent = structDate.cellOne;
    cellTwo.textContent = structDate.cellTwo;
    cellThree.textContent = structDate.cellThree;
    cellFour.textContent = structDate.cellFour;
    cellFive.textContent = structDate.cellFive;
    cellSix.textContent = structDate.cellSix;
    cellSeven.textContent = structDate.cellSeven;
    cellEight.textContent = structDate.cellEight;
    cellNine.textContent = structDate.cellNine;
  }
}
