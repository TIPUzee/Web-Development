let creditInput = document.getElementById('creditInput');
let marksInput = document.getElementById('marksInput');
let resultOutput = document.getElementById('resultOutput');

let CreditArray = [];
let MarksArray = []
let totalQualityPoint = 0
let totalCredit = 0

function addmarks() 
{
	let c = parseFloat(creditInput.value);
	CreditArray.push(c)
	
	let m = parseFloat(marksInput.value);
	MarksArray.push(m)
}

function calc()
{
	for (let i = 0; i < CreditArray.length; i++)
	{

		if (CreditArray[i] == 1)
		{
			if (MarksArray[i] == 0) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 1) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 2) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 3) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 4) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 5) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 6) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 7) 
			{
				totalQualityPoint += 0;
			}
			if (MarksArray[i] == 8) 
			{
				totalQualityPoint += 1.00;
			}
			if (MarksArray[i] == 9) 
			{
				totalQualityPoint += 1.50;
			}
			if (MarksArray[i] == 10) 
			{
				totalQualityPoint += 2.0;
			}
			if (MarksArray[i] == 11) 
			{
				totalQualityPoint += 2.3;
			}
			if (MarksArray[i] == 12) 
			{
				totalQualityPoint += 2.7;
			}
			if (MarksArray[i] == 13) 
			{
				totalQualityPoint += 3.0;
			}
			if (MarksArray[i] == 14) 
			{
				totalQualityPoint += 3.3;
			}
			if (MarksArray[i] == 15) 
			{
				totalQualityPoint += 3.7;
			}
			if (MarksArray[i] == 16) 
			{
				totalQualityPoint += 4.0;
			}
			if (MarksArray[i] == 17) 
			{
				totalQualityPoint += 4.0;
			}
			if (MarksArray[i] == 18) 
			{
				totalQualityPoint += 4.0;
			}
			if (MarksArray[i] == 19) 
			{
				totalQualityPoint += 4.0;
			}
			if (MarksArray[i] == 20) 
			{
				totalQualityPoint += 4.0;
			}
		}
		else if (CreditArray[i] == 2)
		{

		}
		else if (CreditArray[i] == 3)
		{
			
		}
		else if (CreditArray[i] == 4)
		{
			
		}
		else if (CreditArray[i] == 5)
		{
			
		}
	}

	for (let i = 0; i < CreditArray.length; i++)
	{
		totalCredit += CreditArray[i];
	}

	let gpa = totalQualityPoint / totalCredit;

	resultOutput.value = 'GPA: ' + gpa;
}