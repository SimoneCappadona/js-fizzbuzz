const userCardFizzbuzz = document.getElementById('card');
const userFizz = document.getElementById('fizz');
const userBuzz= document.getElementById('buzz');
const userFizzBuzz= document.getElementById('fizzbuzz');
// for (let i = 1; i <=100; i++){
//     if(i % 15 == 0){
//         console.log('FizzBuzz')
//     }
//     else if(i % 5 == 0){
//         console.log('Buzz')
//     }
//     else if(i % 3 == 0){
//         console.log('Fizz')
//     }
//     else{
//        console.log(i)
//     }
// }
for (let i = 1; i <=100; i++){
    let titleClass = "";
    let textBox = "";
    if(i % 15 == 0){
        titleClass = "text-primary";
        textBox = "fizzbuzz"
    }
    else if(i % 5 == 0){
        titleClass = "text-warning";
        textBox = "buzz"
    }
    else if(i % 3 == 0){
        titleClass = "text-danger";
        textBox = "fizz"
    }
    else{
        textBox = i;
    }  
    const boxElement = document.createElement('div');
    boxElement.classList.add('box')
    boxElement.innerHTML += `
      <div class="card">  
        <div class="card-body">
            <h3 class="${textBox , titleClass}">${textBox}</h3>
          </div>  
        </div>   
    `;
    userCardFizzbuzz.append(boxElement); 
}