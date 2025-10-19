function navigate(addressLat, addressLong, positionLat, positionLong){
    return Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
}

console.log(navigate(1, 1, 2, 3));