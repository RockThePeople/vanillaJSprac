class Person {
    constructor(name, birth){
        this.name = name
        this.birth = birth
    };
    age() {
        return 2023 - this.birth + 1
    };
    showname() {
        return this.name
    }
}
P1 = Person("Park", 2000);
console.log(age());
console.log(showname());

