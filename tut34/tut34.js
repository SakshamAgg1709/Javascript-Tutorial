console.log('This is tut34');

let regex = /sakham/

// Lets look into some metacharacter symbols
regex = /^harr/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character between h and r, it can be hirry, hgrry etc.
regex = /h*rry/; //matches any 0 or more characters between h and r,, it can be hidasasrry, hrry etc.
regex = /ha?rryi?t/; //? after character means that character is optional- a and i can be removed, or be there, but we can replace a or i , we can just avoid it if we want
regex = /h\*rry/ // it will match exact - h*rry - we have escape


const str = "arry is a hry gud boi, saksham is also gud h*rry"

let result = regex.exec(str)
console.log('Result from exec is' , result);

if (regex.test(str)) {
    console.log(`The string "${str}" matches the expression "${regex.source}"`);
    
} else {
    console.log(`The string "${str}" DOES NOT matches the expression "${regex.source}"`);
}

