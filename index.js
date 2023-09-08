let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let res = "";

let arr = Array.from(buttons);// array of buttons

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            res = eval(res);// inbuilt JS function , whatever is the string, it will evaluate and will give the required result.
            input.value = res;// result will be shown in input tag
        }
        else if (e.target.innerHTML == 'AC') {
            res = "";
            input.value = res;
        }
        else if (e.target.innerHTML == 'DEL') {
            res = res.substring(0, res.length - 1);
            input.value = res;
        }
        else {
            res += e.target.innerHTML;
            input.value = res;
        }
    })

})