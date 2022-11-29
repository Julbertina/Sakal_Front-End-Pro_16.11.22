const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length) {
    const charactersLength = characters.length;
    let password = "";
    
    for ( let i = 0; i < length; i=i+1 ) {
        password += characters[Math.floor(Math.random() * charactersLength)];
    }
    return password;
}

const key = generateKey(16);
console.log(key);