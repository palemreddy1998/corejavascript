function firstName() {
    return 'Reddy';
}

function lastName() {
    return 'Palem';
}


const fullName = firstName.bind('Palem');
console.log(fullName);