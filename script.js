let secondary = document.getElementById("secondary");
let main = document.getElementById("main");
secondary.style.display = "none";
let tpe1 = document.getElementById("tpe1");
let tpa1 = document.getElementById("tpa1");
let weight1 = document.getElementById("weight1");

let tpe2 = document.getElementById("tpe2");
let tpa2 = document.getElementById("tpa2");
let weight2 = document.getElementById("weight2");

let tpe3 = document.getElementById("tpe3");
let tpa3 = document.getElementById("tpa3");

let tpe4 = document.getElementById("tpe4");
let tpa4 = document.getElementById("tpa4");

let gradeOutput = document.getElementById("output");
let weight1output = document.getElementById("displayWeight1");

let weight2output = document.getElementById("displayWeight2");




function checkGrade() {
   let section1Grade =
   (
     (Number(tpe1.value)) / 
     
     (Number(tpa1.value))
   
   )* Number(weight1.value);


  let section2Grade =
   (
     (Number(tpe2.value) ) / 
     
     (Number(tpa2.value))
   
   )* Number(weight2.value);
  
  document.getElementById('currentOutput').innerText = section2Grade + section1Grade + '%'
  main.style.display = "none";
  secondary.style.display = "";
  weight1output.innerText = weight1.value;
  weight2output.innerText = weight2.value;
}
function addGrade() {



 let section1Grade =
   (
     (Number(tpe1.value) + Number(tpe3.value)) / 
     
     (Number(tpa1.value) + Number(tpa3.value))
   
   )* Number(weight1.value);


  let section2Grade =
   (
     (Number(tpe2.value) + Number(tpe4.value)) / 
     
     (Number(tpa2.value) + Number(tpa4.value))
   
   )* Number(weight2.value);

 



  let output1 = (Math.round(section1Grade * 100)/100)
  
  let output2 = (Math.round(section2Grade * 100)/100)
    
        
  gradeOutput.innerText = output1 + output2 + '%'
}

// What If Calculator functions
function addAssignment() {
  const assignmentsContainer = document.getElementById('potential-assignments');
  
  const assignmentDiv = document.createElement('div');
  assignmentDiv.className = 'assignment';
  assignmentDiv.innerHTML = `
    <input class="textbox" type="number" placeholder="Points Earned" required>
    <input class="textbox" type="number" placeholder="Points Available" required>
    <input class="weightbox" type="number" placeholder="Weight %" required>
    <button class="remove-btn" onclick="removeAssignment(this)">×</button>
  `;
  
  assignmentsContainer.appendChild(assignmentDiv);
}

function removeAssignment(button) {
  const assignment = button.closest('.assignment');
  if (document.querySelectorAll('#potential-assignments .assignment').length > 1) {
    assignment.remove();
  } else {
    alert("You need at least one assignment.");
  }
}

function calculatePotentialGrade() {
  const currentGrade = parseFloat(document.getElementById('currentGrade').value);
  const currentWeight = parseFloat(document.getElementById('currentWeight').value);
  const assignments = document.querySelectorAll('#potential-assignments .assignment');
  
  if (isNaN(currentGrade) || isNaN(currentWeight) || currentWeight <= 0) {
    alert("Please enter valid current grade information.");
    return;
  }
  
  let totalWeightedScore = currentGrade * currentWeight;
  let totalWeight = currentWeight;
  let isValid = true;
  
  assignments.forEach(assignment => {
    const inputs = assignment.querySelectorAll('input');
    const pointsEarned = parseFloat(inputs[0].value);
    const pointsAvailable = parseFloat(inputs[1].value);
    const weight = parseFloat(inputs[2].value);
    
    if (isNaN(pointsEarned) || isNaN(pointsAvailable) || isNaN(weight)) {
      isValid = false;
      return;
    }
    
    if (pointsAvailable <= 0 || weight <= 0) {
      isValid = false;
      return;
    }
    
    const percentage = (pointsEarned / pointsAvailable) * 100;
    const weightedScore = percentage * weight;
    totalWeightedScore += weightedScore;
    totalWeight += weight;
  });
  
  if (!isValid) {
    alert("Please fill all fields with valid values.");
    return;
  }
  
  const finalGrade = totalWeightedScore / totalWeight;
  document.getElementById('potentialOutput').textContent = finalGrade.toFixed(2) + "%";
}

// Initialize the first tab on load
window.onload = function() {
  document.querySelector('.tab-button').click();
};
