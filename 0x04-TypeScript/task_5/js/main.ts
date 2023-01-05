interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  if (subject1.brand === "major" && subject2.brand === "major") {
    return subject1.credits + subject2.credits
  }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  if (subject1.brand === "minor" && subject2.brand === "minor") {
    return subject1.credits + subject2.credits
  }
}
