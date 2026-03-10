// Grading Students
// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades: number[]): number[] {
    for(let i:number =0; i<grades.length; i++) {
        if(grades[i] < 38) {
            continue;
        }
        else {
            if(((Math.ceil(grades[i] / 5) * 5) - grades[i]) < 3 ){
                grades[i] = (Math.ceil(grades[i] / 5) * 5)
            }
        }
    }
    return grades;
}
console.log(gradingStudents([12, 45, 23, 76, 90, 43, 98, 36])); // [12, 45, 23, 76, 90, 45, 100, 36]
console.log(gradingStudents([12, 45, 2, 76, 90, 73, 98, 36])); // [12, 45, 2, 76, 90, 75, 100, 36]