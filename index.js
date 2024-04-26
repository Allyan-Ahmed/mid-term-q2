import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        name: "weight",
        message: "Enter your weight (in kg): ",
        type:"number",
        validate: (weight) => {
            if(isNaN(weight)){
                return(`enter a valid Weight`);
            }else{
                return true
            }
        }
    },
    {
        name: "height",
        message: "enter your height (in meter) :",
        type: "number",
        validate: (height) => {
            if(isNaN(height)){
                return(`enter a valid Height`);
            }else{
                return true
            }
        }
    }    
  ])
  .then((answers) => {
    let weight = answers.weight;
    let height = answers.height*answers.height;
    let bmi = weight/height;
    console.log(`Your BMI is: ${bmi}`);

    if(bmi < 18.5){
        console.log('You are Underweight')
    }else if(bmi > 18.5 || bmi < 24.9){
        console.log('You are Healthy')
    }else if(bmi > 25 || bmi < 29.9){
        console.log('You are Overweight')
    } else {
        console.log('You are Obsite')
    }
})