// JavaScript Document

var number1=40,number2=21,number3,number4;
function sumOfNumbers(number1,number2)
{
	document.writeln("Sum of two Numbers" + "<br>");
	document.writeln("-------------------------" + "<br>");
	document.writeln("The Given Numbers is :" + number1 + "," + number2);
    number3=number1+number2;
	return number3;
}
var sum=sumOfNumbers(number1,number2);
document.writeln("<br>" + "Sum of Two Numbers is: " + sum + "<br>");

//Sum Of Two Numbers

function productOfNumbers(number1,number2)
{
	document.writeln("<br>" + "Product of two Numbers" + "<br>");
	document.writeln("-------------------------" + "<br>");
	document.writeln("<br>" + "The Given Numbers is :" + number1 + "," + number2);	
    number3=number1-number2;
	return number3;
}
var product=productOfNumbers(number1,number2);
document.writeln("<br>" + "Product of Two Numbers is: " + product + "<br>");

//Product Of Two Numbers


function differenceOfNumbers(number1,number2)
{
	document.writeln("<br>" + "Difference of two Numbers" + "<br>");
	document.writeln("-------------------------" + "<br>");
	document.writeln("The Given Numbers is :" + number1 + "," + number2);	
	number3=number1/number2;
	return number3;
}
var difference=differenceOfNumbers(number1,number2);
document.writeln("<br>" + "Difference of Two Numbers is: " + difference + "<br>");

//Sum Of Two Numbers

var name="JavaScript";

function printTheNames(a)
{
	document.writeln("<br>" + "Printing the name 10 times" + "<br>");
	document.writeln("--------------------------" + "<br>");
	for(i=1;i<10;i++)
	{
		document.writeln(a + "<br>");
	}
}
printTheNames(name);

//Printing the Name 10 times



function remainderQuotient(number1,number2)
{
	 document.writeln("<br>" + "Find the Remainder and Quotient" + "<br>");
	 document.writeln("------------------------------" + "<br>");
	 document.writeln("The Given Numbers are :" + number1 + "," + number2);
	 number3=number1%number2;
	 number4=number1/number2;
	 document.writeln("<br>" +"Remainder is:" + number3,"<br>" + "Quotient is:" + number4 + "<br>");	
}
remainderQuotient(number1,number2);

//Find the remainder and quotient


function oddEven(a)
{
	document.writeln("<br>" + "Find the Number is ODD or EVEN" + "<br>");
    document.writeln("----------------------------------" + "<br>");
	document.writeln("The Given Number is: " + number2);
	var sum = a/2;
	if(sum==0)
	{
		document.writeln("<br>" + a + "  is Even number");
	}
	else
	{
		document.writeln("<br>" + a + "  is Odd number" + "<br>");
	}
}
oddEven(number2);

//Find odd or even


var listOfArray = ["a","b","c","d"];

function printArrayList(a)
{
	document.writeln("<br>" + "Print the List of Array" + "<br>");
    document.writeln("---------------------" + "<br>");
	for(i=0;i<a.length;i++)
	{
		document.writeln(a[i] + "<br>");
	}
}
printArrayList(listOfArray);

//Printing the ArrayList 


var listOfObjects = [{
	"name" : "Bala",
	"qualification" : "MCA",
	"age" : 29
	},
	{
	"name" : "Jothi",
	"qualification" : "MCA",
	"age" : 28
	},
	{
	"name" : "Saravana",
	"qualification" : "BE",
	"age" : 27
	}]
	
		
	

//Printing Array of Objects




	






	



