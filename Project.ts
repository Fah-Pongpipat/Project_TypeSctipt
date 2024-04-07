// โปรแกรมคำนวนเกรด
function calculate(score: number): string {
  if (score >= 85) {
    return "A+";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 75) {
    return "B+";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 65) {
    return "C+";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 55) {
    return "D+";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

let listscore = [49, 50, 56, 60, 66, 70, 78, 80, 89, 90];
for (var i in listscore) {
  console.log(`คะแนน ${listscore[i]} เกรดที่ได้ = ${calculate(listscore[i])}`);
}
