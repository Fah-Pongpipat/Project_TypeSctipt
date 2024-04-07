// โปรแกรมคำนวนเกรด
function calculate(score: number): string {
  if (score >= 80) {
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
let listscore = [80, 51, 35, 69, 55, 71, 75, 64, 56];
for (var i in listscore) {
  console.log(`คะแนน ${listscore[i]} เกรดที่ได้ = ${calculate(listscore[i])}`);
}
