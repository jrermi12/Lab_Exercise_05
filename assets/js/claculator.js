var Numb1 = '';
var Numb2 = '';
var num = [];
var answer;

function sendNum(numbers){
    num.push(numbers);
    if(num.lenght != 1){
        Numb1 = '';
        document.getElementById('screen').innerHTML = Numb1;
    }

    for(index = 0; index<num.length; index++){
        Numb1 = Numb1 + num[index]
    }
    document.getElementById('screen').innerHTML = Numb1;
}

function equalTo(){
    document.getElementById('screen').innerHTML = '';
    for(index = 0; index<num.length; index++){
        Numb2 += num[index]
    }
    answer = eval(Numb2);
    document.getElementById('screen').innerHTML = answer;

    while(num.length > 0){
        num.pop();
    }
    num.push(answer.toString())
}

function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	a ='';	
	b ='';
}
