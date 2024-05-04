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

    let sumDay = 0;
    let sumMonth = 0;
    let sumYear = 0;

    for (let i = 0; i < strDay.length; i += 1) {
      sumDay = sumDay + Number(strDay.substring(i, 1));
    }

    for (let i = 0; i < strMonth.length; i += 1) {
      sumMonth = sumMonth + Number(strMonth.substring(i, 1));
    }

    for (let i = 0; i < strYear.length; i += 1) {
      sumYear = sumYear + Number(strYear[i]);
    }

    const totalSum = sumDay + sumMonth + sumYear;

    let sumTotal = 0;

    const strSumTotal = String(totalSum);

    for (let i = 0; i < strSumTotal.length; i += 1) {
      sumTotal = sumTotal + Number(strSumTotal[i]);
    }

    const valueTwo = Number(strDay[0]) * 2;

    const valueThree = totalSum - valueTwo;

    let sumTotalFour = 0;

    const strSumTotalFour = String(valueThree);

    for (let i = 0; i < strSumTotalFour.length; i += 1) {
      sumTotalFour = sumTotalFour + Number(strSumTotalFour[i]);
    }

    const strTotal = strDay + strMonth + strYear;

    const totalStr =
      strTotal +
      strSumTotal +
      String(sumTotal) +
      String(valueThree) +
      String(sumTotalFour);

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

    cellOne.textContent = strOne !== "" ? strOne : "-";
    cellTwo.textContent = strTwo !== "" ? strTwo : "-";
    cellThree.textContent = strThree !== "" ? strThree : "-";
    cellFour.textContent = strFour !== "" ? strFour : "-";
    cellFive.textContent = strFive !== "" ? strFive : "-";
    cellSix.textContent = strSix !== "" ? strSix : "-";
    cellSeven.textContent = strSeven !== "" ? strSeven : "-";
    cellEight.textContent = strEight !== "" ? strEight : "-";
    cellNine.textContent = strNine !== "" ? strNine : "-";
  }
}
