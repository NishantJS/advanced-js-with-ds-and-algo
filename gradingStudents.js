/**
 * * Grading Students
 * todo round up to nearest digit which is divisible by 5
 * @param grades array of grades
 * @returns modified array of grades
 * passing grade 40
 * can max round up 2 values i.e. 58 => 60 but 57 => 57
 */

const gradingStudents = (grades) => {
  return grades.map((value) => {
    if (value % 5 == 0 || value <= 37) return value;
    else {
      for (let i = 0; i < 3; i++) {
        if ((value + i) % 5 === 0) return value + i;
      }
      return value;
    }
  });
};

export default gradingStudents;
