class animal {
    constructor(legs, eyes, ears) {
        this.legs = legs;
        this.eyes = eyes;
        this.ears = ears;
    }
    showAnimal() {
        console.log(`The Animal has ${this.legs} legs, ${this.eyes} eyes and ${this.ears} ears.`);
    }
}

class dog extends animal {
    constructor(color, voice, height, legs, eyes, ears) {
        super(legs, eyes, ears)
        this.color = color;
        this.voice = voice;
        this.height = height;
    }
    showDog() {
        console.log(`The Dog has ${this.color} color, ${this.voice} voice, ${this.height} height, ${this.legs} legs, ${this.eyes} eyes and ${this.ears} ears.`);
    }
}

class cat extends animal {
    constructor(color, voice, height, legs, eyes, ears) {
        super(legs, eyes, ears)
        this.color = color;
        this.voice = voice;
        this.height = height;
    }
    showCat() {
        console.log(`The Cat has ${this.color} color, ${this.voice} voice, ${this.height} height, ${this.legs} legs, ${this.eyes} eyes and ${this.ears} ears.`);
    }
}

class cow extends animal {
    constructor(color, voice, height, legs, eyes, ears) {
        super(legs, eyes, ears)
        this.color = color;
        this.voice = voice;
        this.height = height;
    }
    showCow(){
        console.log(`The Cow has ${this.color} color, ${this.voice} voice, ${this.height} height, ${this.legs} legs, ${this.eyes} eyes and ${this.ears} ears.`);
    }
}


let animalObject = new animal(4,2,2);
console.log(animalObject.showAnimal());
let dogObject = new dog("Brown" , "Barking", "2.5 feet", 4,2,2);
console.log(dogObject.showDog());
let catObject = new cat("white" , "Meow Meow", "1.5 feet", 4,2,2);
console.log(catObject.showCat());
let cowObject = new cow("black and white" , "moo", "5.5 feet", 4,2,2);
console.log(cowObject.showCow());