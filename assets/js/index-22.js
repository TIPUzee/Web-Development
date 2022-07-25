let courseInputEle = document.getElementById('course');

let creditInputEle = document.getElementById('credit');
let currCredit = parseInt(creditInputEle.value);

let marksInputEle = document.getElementById('marks');

let coursesList = [];
let creditsList = [];
let marksList = [];
let qualitypointsList = [];
let gradesList = [];

let table = document.getElementById('resultsTable');
let tableBody = document.querySelector('#resultsTable tbody');
let tableResultCell = document.querySelector('#resultsTable tfoot td');

function updateMarksInputField()
{
	currCredit = parseInt(creditInputEle.value);

	marksInputEle.innerHTML = '';

	let range = currCredit * 20;

	for (let i = 0; i <= range; i++)
	{
		marksInputEle.innerHTML += `<option value="${i}">${i}</option>`;
	}
}
updateMarksInputField();




function getInputCourse()
{
	coursesList.push(courseInputEle.value);
}

function getInputCredit()
{
	creditsList.push(parseInt(creditInputEle.value));
}

function getInputMarks()
{
	marksList.push(parseInt(marksInputEle.value));
}

// given number=2
// find object(row) with id=tr2
// if found, return object
// if not fount, create object(row) in table

function getTableRow(number) 
{
	let row;
	for (let i = 0; i < 5; i++) 
	{
		row = tableBody.querySelector(`#tr${number}`);

		if (row == null)
		{
			tableBody.innerHTML += `
			<tr id="tr${number}">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td onclick="deleteRow('tr${number}');"><i class="fa-solid fa-trash"></i></td>
			</tr>`;
		}
		else 
		{
			break;
		}
	}

	return row;
}

function addNewDetailsInTable()
{
	let currInputNo = coursesList.length;
	let row = getTableRow(currInputNo);

	let currCell = row.firstElementChild;

	currCell.innerHTML = coursesList[currInputNo - 1];
	
	currCell = currCell.nextElementSibling;
	currCell.innerHTML = creditsList[currInputNo - 1];

	currCell = currCell.nextElementSibling;
	currCell.innerHTML = marksList[currInputNo - 1];

	calcQualityPoints();
	currCell = currCell.nextElementSibling;
	currCell.innerHTML = qualitypointsList[currInputNo - 1];

	calcGrade();
	currCell = currCell.nextElementSibling;
	currCell.innerHTML = gradesList[currInputNo - 1];

	tableResultCell.innerHTML = `Your GPA: ${calcGPA()}`;
}

function submitDetails()
{
	getInputCourse();
	getInputCredit();
	getInputMarks();

	addNewDetailsInTable();
}









let credit1QualityPoints = {}; 
let credit2QualityPoints = {}; 
let credit3QualityPoints = {}; 
let credit4QualityPoints = {}; 
let credit5QualityPoints = {}; 

function generateQualityPointsDic() 
{
	// credit hour 1
	let currQualityPoint = 0;
	for (let i = 0; i <= 7; i++) { credit1QualityPoints[i] = currQualityPoint; }
	
	currQualityPoint = 1.00;
	for (let i = 8; i <= 10; i++) { credit1QualityPoints[i] = currQualityPoint; currQualityPoint += 0.5; }
	
	currQualityPoint = 2.30;
	for (let i = 11; i <= 11; i++) { credit1QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	currQualityPoint = 2.70;
	for (let i = 12; i <= 14; i++) { credit1QualityPoints[i] = currQualityPoint; currQualityPoint += 0.3; }

	currQualityPoint = 3.70;
	for (let i = 15; i <= 16; i++) { credit1QualityPoints[i] = currQualityPoint; currQualityPoint += 0.3; }

	currQualityPoint = 4.00;
	for (let i = 17; i <= 20; i++) { credit1QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }


	// credit hour 2
	currQualityPoint = 0; 
	for (let i = 0; i <= 15; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	currQualityPoint = 2.00;
	for (let i = 16; i <= 17; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.6; }

	currQualityPoint = 3.00;
	for (let i = 18; i <= 19; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.6; }

	currQualityPoint = 4.0;
	for (let i = 20; i <= 21; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.4; }

	currQualityPoint = 4.60;
	for (let i = 22; i <= 24; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.4; }

	currQualityPoint = 5.60;
	for (let i = 25; i <= 27; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.4; }

	currQualityPoint = 6.60;
	for (let i = 28; i <= 30; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.4; }

	currQualityPoint = 7.60;
	for (let i = 31; i <= 32; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0.4; }

	currQualityPoint = 8.00;
	for (let i = 33; i <= 40; i++) { credit2QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }


	// credit hour 3
	currQualityPoint = 0;
	for (let i = 0; i <= 23; i++) { credit3QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	credit3QualityPoints[24] = 3.00; 
	credit3QualityPoints[25] = 3.60; 
	credit3QualityPoints[26] = 3.90; 
	credit3QualityPoints[27] = 4.50; 
	credit3QualityPoints[28] = 5.10; 
	credit3QualityPoints[29] = 5.40; 
	credit3QualityPoints[30] = 6.00; 
	credit3QualityPoints[31] = 6.30; 
	credit3QualityPoints[32] = 6.60; 
	credit3QualityPoints[33] = 6.90; 
	credit3QualityPoints[34] = 7.20; 
	credit3QualityPoints[35] = 7.50; 
	credit3QualityPoints[36] = 8.10; 
	credit3QualityPoints[37] = 8.40; 
	credit3QualityPoints[38] = 8.70; 
	credit3QualityPoints[39] = 9.00; 
	credit3QualityPoints[40] = 9.30; 
	credit3QualityPoints[41] = 9.60; 
	credit3QualityPoints[42] = 9.90; 
	credit3QualityPoints[43] = 10.20; 
	credit3QualityPoints[44] = 10.50; 
	credit3QualityPoints[45] = 11.10; 
	credit3QualityPoints[46] = 11.40; 
	credit3QualityPoints[47] = 11.70; 
	credit3QualityPoints[48] = 12.00; 

	currQualityPoint = 12.00;
	for (let i = 49; i <= 60; i++) { credit3QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	
	// credit hour 4
	currQualityPoint = 0;
	for (let i = 0; i <= 31; i++) { credit4QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	credit4QualityPoints[32] = 4.00; 
	credit4QualityPoints[33] = 4.40; 
	credit4QualityPoints[34] = 5.20; 
	credit4QualityPoints[35] = 5.60; 
	credit4QualityPoints[36] = 6.00; 
	credit4QualityPoints[37] = 6.40; 
	credit4QualityPoints[38] = 7.20; 
	credit4QualityPoints[39] = 7.60; 
	credit4QualityPoints[40] = 8.00; 
	credit4QualityPoints[41] = 8.40; 
	credit4QualityPoints[42] = 8.80; 
	credit4QualityPoints[43] = 8.80; 
	credit4QualityPoints[44] = 9.20; 
	credit4QualityPoints[45] = 9.60; 
	credit4QualityPoints[46] = 10.00; 
	credit4QualityPoints[47] = 10.40; 
	credit4QualityPoints[48] = 10.80; 
	credit4QualityPoints[49] = 10.80; 
	credit4QualityPoints[50] = 11.20; 
	credit4QualityPoints[51] = 11.60; 
	credit4QualityPoints[52] = 12.00; 
	credit4QualityPoints[53] = 12.00; 
	credit4QualityPoints[54] = 12.40; 
	credit4QualityPoints[55] = 12.80; 
	credit4QualityPoints[56] = 13.20; 
	credit4QualityPoints[57] = 13.60; 
	credit4QualityPoints[58] = 14.00; 
	credit4QualityPoints[59] = 14.40; 
	credit4QualityPoints[60] = 14.80; 
	credit4QualityPoints[61] = 14.80; 
	credit4QualityPoints[62] = 15.20; 
	credit4QualityPoints[63] = 15.60; 
	credit4QualityPoints[64] = 16.00;
	
	currQualityPoint = 16.00;
	for (let i = 65; i <= 80; i++) { credit4QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }


	// credit hour 5
	currQualityPoint = 0;
	for (let i = 0; i <= 39; i++) { credit5QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }

	credit5QualityPoints[40] = 5;
	credit5QualityPoints[41] = 5.5;
	credit5QualityPoints[42] = 6;
	credit5QualityPoints[43] = 6.5;
	credit5QualityPoints[44] = 7;
	credit5QualityPoints[45] = 7.5;
	credit5QualityPoints[46] = 8;
	credit5QualityPoints[47] = 8.5;
	credit5QualityPoints[48] = 9;
	credit5QualityPoints[49] = 9.5;
	credit5QualityPoints[50] = 10;
	credit5QualityPoints[51] = 10.5;
	credit5QualityPoints[52] = 10.5;
	credit5QualityPoints[53] = 11;
	credit5QualityPoints[54] = 11.5;
	credit5QualityPoints[55] = 11.5;
	credit5QualityPoints[56] = 12;
	credit5QualityPoints[57] = 12.5;
	credit5QualityPoints[58] = 12.5;
	credit5QualityPoints[59] = 13;
	credit5QualityPoints[60] = 13.5;
	credit5QualityPoints[61] = 13.5;
	credit5QualityPoints[62] = 14;
	credit5QualityPoints[63] = 14.5;
	credit5QualityPoints[64] = 14.5;
	credit5QualityPoints[65] = 15;
	credit5QualityPoints[66] = 15.5;
	credit5QualityPoints[67] = 15.5;
	credit5QualityPoints[68] = 16;
	credit5QualityPoints[69] = 16.5;
	credit5QualityPoints[70] = 16.5;
	credit5QualityPoints[71] = 17;
	credit5QualityPoints[72] = 17.5;
	credit5QualityPoints[73] = 17.5;
	credit5QualityPoints[74] = 18;
	credit5QualityPoints[75] = 18.5;
	credit5QualityPoints[76] = 18.5;
	credit5QualityPoints[77] = 19;
	credit5QualityPoints[78] = 19.5;
	credit5QualityPoints[79] = 19.5;
	credit5QualityPoints[80] = 20;

	currQualityPoint = 20;
	for (let i = 81; i <= 100; i++) { credit5QualityPoints[i] = currQualityPoint; currQualityPoint += 0; }
}
generateQualityPointsDic();

function calcQualityPoints() 
{
	qualitypointsList = [];

	for (let i = 0; i < marksList.length && i < creditsList.length; i++)
	{
		if (creditsList[i] == 1)
		{
			qualitypointsList.push(credit1QualityPoints[marksList[i]]);
		}
		else if (creditsList[i] == 2)
		{
			qualitypointsList.push(credit2QualityPoints[marksList[i]]);
		}
		else if (creditsList[i] == 3)
		{
			qualitypointsList.push(credit3QualityPoints[marksList[i]]);
		}
		else if (creditsList[i] == 4)
		{
			qualitypointsList.push(credit4QualityPoints[marksList[i]]);
		}
		else if (creditsList[i] == 5)
		{
			qualitypointsList.push(credit5QualityPoints[marksList[i]]);
		}
		else 
		{
			alert('Invalid credit-hours was entered!');
		}
	}
}

function calcGrade() 
{
	gradesList = [];

	for (let i = 0; i < marksList.length; i++)
	{
		if (creditsList[i] == 1)
		{
			if (marksList[i] >= 16) { gradesList.push('A'); }
			else if (marksList[i] >= 13) { gradesList.push('B'); }
			else if (marksList[i] >= 10) { gradesList.push('C'); }
			else if (marksList[i] >= 8) { gradesList.push('D'); }
			else { gradesList.push('F'); }
		}
		else if (creditsList[i] == 2)
		{
			if (marksList[i] >= 32) { gradesList.push('A'); }
			else if (marksList[i] >= 26) { gradesList.push('B'); }
			else if (marksList[i] >= 20) { gradesList.push('C'); }
			else if (marksList[i] >= 16) { gradesList.push('D'); }
			else { gradesList.push('F'); }
		}
		else if (creditsList[i] == 3)
		{
			if (marksList[i] >= 48) { gradesList.push('A'); }
			else if (marksList[i] >= 39) { gradesList.push('B'); }
			else if (marksList[i] >= 30) { gradesList.push('C'); }
			else if (marksList[i] >= 24) { gradesList.push('D'); }
			else { gradesList.push('F'); }
		}
		else if (creditsList[i] == 4)
		{
			if (marksList[i] >= 64) { gradesList.push('A'); }
			else if (marksList[i] >= 52) { gradesList.push('B'); }
			else if (marksList[i] >= 40) { gradesList.push('C'); }
			else if (marksList[i] >= 32) { gradesList.push('D'); }
			else { gradesList.push('F'); }
		}
		else if (creditsList[i] == 5)
		{
			if (marksList[i] >= 80) { gradesList.push('A'); }
			else if (marksList[i] >= 65) { gradesList.push('B'); }
			else if (marksList[i] >= 50) { gradesList.push('C'); }
			else if (marksList[i] >= 40) { gradesList.push('D'); }
			else { gradesList.push('F'); }
		}
	}

}

function calcGPA() 
{
	let totalCredits = 0;
	for (let i = 0; i < creditsList.length; i++)
	{ 
		totalCredits += creditsList[i];
	}

	let totalQualityPoints = 0;
	for (let i = 0; i < qualitypointsList.length; i++)
	{
		totalQualityPoints += qualitypointsList[i];
	}

	let gpa = totalQualityPoints / totalCredits;
	return gpa;
}











function deleteRow(rowId) 
{
	let row = table.querySelector(`#${rowId}`);
	row.remove();

	
}