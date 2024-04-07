class Human {
  constructor(firstName, lastName, age, tall, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.tall = tall;
    this.weight = weight;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
  isOlder(age) {
    if (this.age > age) {
      return true
    }
    return false;
  }
}

class Medic extends Human {
  constructor(firstName, lastName, age, tall, weight, experience, education, workTime) {
    super(firstName, lastName, age, tall, weight)
    this.experience = experience;
    this.education = education;
    this.workTime = workTime;
  }
  checkExperience(experience) {
    if (this.experience > experience) {
      return true;
    }
    return false;
  }
}
let m1 = new Medic('Sviat', 'Gerich', 30, 1.68, 68, 5, true, 8)
console.log(m1.sayMyName())




