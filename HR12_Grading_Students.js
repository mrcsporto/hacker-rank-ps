let grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  let roundGrades = []
  let difGrades = []
  let finalGrades = []
    for (let i = 0; i < grades.length; i++) {
      let counter = grades[i]
      while (counter % 5) {
        counter++
      }
      roundGrades.push(counter)
    }
   
    for(let j = 0; j < grades.length; j++) {
      difGrades.push(roundGrades[j] - grades[j])
      if (grades[j] >= 38) {
        if (difGrades[j] < 3) {
        finalGrades.push(roundGrades[j])
        } else {
        finalGrades.push(grades[j])
        }
      } else {
        finalGrades.push(grades[j])
      }
    }
    
  }

gradingStudents(grades)




