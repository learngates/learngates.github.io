
function maind(){
  startdate = new Date()
  now(startdate.getYear(),startdate.getMonth(),startdate.getDate(),startdate.getHours(),startdate.getMinutes(),startdate.getSeconds())
  // Styled components version, not needed if using scss

  /**
   * Make flexbox grids super easy!
   * ---
   * @param columns  —  Number of columns
   * @param margin  —  Margin with unit
   */

  const flexGrid = ({ columns, margin }) => {
    const width = `${100 / columns}%`;
    const unitlessMargin = margin.match(/[\d?.]/g).join('');
    const unit = margin.match(/[a-zA-Z%]+/g).join('');
    const calcMargin = (unitlessMargin * columns - unitlessMargin) / columns;
    return `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:after {
      flex: auto;
      margin: 0 auto;
      content: "";
    }
    >* {
      width: calc(${width} - ${calcMargin});
      margin-left: ${unitlessMargin / 2}${unit};
      margin-right: ${unitlessMargin / 2}${unit};
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(${columns}n) {
        margin-right: 0;
      }
      &:nth-child(${columns}n + 1) {
        margin-left: 0;
      }
    }
  `;
  };
}


function ChangeValue(number,pv){
  numberstring =""
  var j=0
  var i=0
  while (number > 1)
  {

    numberstring = (Math.round(number-0.5) % 10) + numberstring
    number= number / 10
    j++
    if (number > 1 && j==3) {
      numberstring = "," + numberstring
      j=0}
    i++
  }

  numberstring=numberstring

  if (pv==1) {document.getElementById("worldpop").innerHTML=numberstring }
}


function now(year,month,date,hours,minutes,seconds){
  startdatum = new Date(year,month,date,hours,minutes,seconds)

  var now = 5600000000.0
  var now2 = 5690000000.0
  var groeipercentage = (now2 - now) / now *100
  var groeiperseconde = (now * (groeipercentage/100))/365.0/24.0/60.0/60.0
  nu = new Date ()
  schuldstartdatum = new Date (96,1,1)
  secondenoppagina = (nu.getTime() - startdatum.getTime())/1000
  totaleschuld= (nu.getTime() - schuldstartdatum.getTime())/1000*groeiperseconde + now
  ChangeValue(totaleschuld,1);


  timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",200)
}

window.onload=maind;


