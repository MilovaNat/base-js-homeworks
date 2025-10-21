function canDrive(hasLicence, age, isDrunk){
    return hasLicence && age >= 18 && !isDrunk ? "может" : "не может";
}

console.log(canDrive(false, 16, false));
console.log(canDrive(true, 50, false));