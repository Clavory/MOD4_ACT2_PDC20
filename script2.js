function act2(){
    let val1 = prompt("Please enter any number", '');
    let val2 = prompt("Please enter any number", '');
    if(val1 > val2) {
        alert(`${val1} is higher`);
    } else if(val1 < val2){
        alert(`${val2} is higher`);
    } else if(val1 == val2){
        alert(`${val1} & ${val2} are equal`);
    } else
        alert('Please input numbers only');  
}