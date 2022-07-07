import { expect } from "chai";
import gradingStudents from "../algo/gradingStudents.js";

const grades = [38, 40, 55, 58, 67, 69, 66];

describe("should grade students", () => {
  const updatedGrades = gradingStudents(grades);

  it("should check if response is array", () => {
    expect(updatedGrades).to.be.a("array").with.lengthOf(grades.length);
  });

  it("should check if response is valid", () => {
    expect(gradingStudents(grades)).to.have.ordered.members([
      40, 40, 55, 60, 67, 70, 66,
    ]);
    expect(gradingStudents(grades)).to.deep.equal(updatedGrades);
  });
});
