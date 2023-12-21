let operator = "";
let operand1 = "";
let operand2 = "";

$(document).ready(function() {
    $(".digitbtn").on("click", function() {
        appendDigit($(this).text());
    });
    $(".operatorbtn").on("click", function() {
        setOperator($(this).text());
    });
    $(".clearbtn").on("click", function() {
        operand1 = "";
        operand2 = "";
        operator = "";
        $('#txtDisplay').val("");
    })
    $(".equalbtn").on("click", function() {
        if (operator !== "" && operand1!== "" && operand2 !== ""){
            let result = calculate();
            if (result==Infinity || result==-Infinity || result==0){
                operand1 = "";
            }else{
                operand1 = result;
            }
            operand2 = "";
            operator = "";
            $('#txtDisplay').val(result);
        }else if(operand1 !== "" && operator!=="" && operand2===""){
            alert("Enter second number before calculation")
        }
    })

});

function appendDigit(digitText) {

    if (operator === "") {
        if (operand1==="0"){
            operand1 = digitText;
        }else{
            operand1 = operand1 + digitText;
        }
        $('#txtDisplay').val(operand1);
    } else if (operand1 !== "" && operator !== "") {
        if (operand2==="0"){
            operand2 = digitText;
        }else{
            operand2 = operand2 + digitText;
        }
        $("#txtDisplay").val(operand1 + operator + operand2);
    }
}

function setOperator(text) {
    if (operand1 === "") {
        alert("Enter number first");
    } else if (operand1 !== ""){
        operator = text;
        $("#txtDisplay").val(operand1 + operator + operand2);
    }
}

function calculate() {
    let result;
    switch (operator) {       
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }
    return result;
}