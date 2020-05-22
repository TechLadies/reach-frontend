const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function dateStringOf(date) {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const printDate = day + " " + month + " " + year;
  
    return printDate;
  }

  function dateVariation(date) {
    const day = date.getDate()
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const fullDate = day + ' ' + month + ' ' + year
    const dateMonth = day + ' ' + month
  
    return { day, month, year, fullDate, dateMonth }
  }
  
  const periodFormatter = (minDate, maxDate) => {
    if (minDate.year === maxDate.year) {
      if (minDate.month === maxDate.month) {
        return minDate.day + '-' + maxDate.day + maxDate.month + maxDate.year
      } else {
        return minDate.dateMonth + '-' + maxDate.dateMonth + maxDate.year
      }
    } else {
      return minDate.fullDate + '-' + maxDate.fullDate
    }
  }
  
  const reformatDate = date => {
    return date
      .split('/')
      .reverse()
      .join('-')
  }
 
 

 

  export {dateStringOf , dateVariation, periodFormatter, reformatDate};