console.log("Shorthand Characters Classes (Regular Expressions)")
let regex = /\war/;// word characters-> _ or alphabets or numbers
regex = /\war+dlr/;//w+ means one or more word characters - agar dlr beech mein bhi h to bhi match hoga - dlr se pehle koi otherword character hona chaiye not %,$ etc.
regex =/\Wbhai/;//non-word characters - space is also a non-word characters
regex =/\W+ha/; // one or more non-word characters
regex =/\d999/; //d means any digit - d999 - any digit with 999 at it's right
regex =/number \d+999/;// number space aur uske baad one or more digits and then 999
regex =/number \D99/; // \D means a non-digit
regex =/number \D+99/; // \D+ means one or more non-digits
regex =/\ska number/; // \s means match White space characters - space only
regex =/\s+ka number/; // \s+ means match one or more White space characters
regex =/\Ska number/; //\S means match non-white space characters before ka number
regex =/\S+ka number/; //\S+ means match one or more non-white space characters before ka number
regex =/\dsds\b/; // dsds ke baad koi bhi word, means dsds, word ke end mein ho aur uske baad ek aur word start ho rha ho 

//ASSERTIONS

regex =/h(?=y)/;// h ke thik baad y hona chahiye
regex =/h(?!y)/;// h ke thik baad y ke alawa kucch bhi ho match hoga

const str = "hyry%dlrdsds %hyy323@gmail.com harry   ddsdsdka number vds999 ";


//HAVE A LOOK ON result
let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} MATCHES the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does NOT MATCH the expression ${regex.source}`);
}