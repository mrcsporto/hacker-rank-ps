const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

function weekdayText(weekdays) {
  function getText(number) {
    if (number > weekdays.length) {
      return "Invalid Weekday Numeber"
    } else {
      return weekdays[number]
    }
  }
  getText(number)
}

weekdayText(weekdays)

