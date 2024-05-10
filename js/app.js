const animal = {
    name: '',
    age: 0,
    getInf() {
        return `${this.name}(${this.age}歳)`;
    },
    get inf() {
        return this.getInf();
    },
    set month(x) {
        this.age = Math.trunc(x / 12);
    }
}

    animal.name = 'タマ';

    animal.month = 26;

console.log(animal.inf);

    console.log(animal.getInf());