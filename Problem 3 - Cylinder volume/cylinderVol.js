function calcCylinderVol(arr) {
    var radius = arr[0],
        height = arr[1],
        volume = Math.PI * radius * radius * height,
        result = Math.round(volume * 1000) / 1000;

    console.log(result)
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);