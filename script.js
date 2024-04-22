let First = +prompt('Birinchi sonni kiriting')

let Second = +prompt('Ikkinchi sonni kiriting')

let Choose = +prompt(`Amalni tanlang:\n1-Qo'shish\n2-Ayirish\n3-Ko'paytirish\n4-Bo'lish\ntanlang: (1/2/3/4)`)

if (Choose == 1) {
    console.log(`${First} + ${Second} = ${First + Second}`);
}


else if (Choose == 2) {
    console.log(`${First} - ${Second} = ${First - Second}`);
}


else if (Choose == 3) {
    console.log(`${First} * ${Second} = ${First * Second}`);
}


else if (Choose == 4) {
    console.log(`${First} / ${Second} = ${First / Second}`);
}