var professional = document.getElementById('professional'); 
var professional_body = document.getElementById('Professional_body');

var work = document.getElementById('work'); 
var work_body = document.getElementById('work_body');

var education = document.getElementById('education'); 
var education_body = document.getElementById('education_body');

var skills = document.getElementById('skills'); 
var skills_body = document.getElementById('skills_body');


console.log("hello")



var show_professional = function () { 
    work_body.classList.add('hide');
    professional_body.classList.remove('hide');
   education_body.classList.add('hide');
   skills_body.classList.add('hide');
  
} 


professional.addEventListener('click', show_professional)


var show_work = function () { 
   professional_body.classList.add('hide');
    work_body.classList.remove('hide');
    education_body.classList.add('hide');
    skills_body.classList.add('hide');
 } 



work.addEventListener('click', show_work)

var show_education = function () { 
    professional_body.classList.add('hide');
     work_body.classList.add('hide');
     education_body.classList.remove('hide');
     skills_body.classList.add('hide');
     } 
 


education.addEventListener('click', show_education)

var show_skills = function () { 
    professional_body.classList.add('hide');
     work_body.classList.add('hide');
     education_body.classList.add('hide');
     skills_body.classList.remove('hide');
    } 
 


skills.addEventListener('click', show_skills)


 

