function AnimalSounds() {}

AnimalSounds.prototype.cow = function() {
    alert("moo");
    return this;
}

AnimalSounds.prototype.pig = function() {
    alert("oink");
    return this;
}

AnimalSounds.prototype.dog = function() {
    alert("woof");
    return this;
}

var sounds = new AnimalSounds();

sounds.cow();
sounds.pig();
sounds.dog();

sounds.cow().pig().dog();