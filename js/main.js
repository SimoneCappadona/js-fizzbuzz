const userCardFizzbuzz = document.getElementById("row");
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

for (let i = 1; i <= 100; i++) {
  let titleClass = "";
  let textBox = "";
  if (i % 15 == 0) {
    titleClass = "text-primary";
    textBox = "FizzBuzz";
  } else if (i % 5 == 0) {
    titleClass = "text-warning";
    textBox = "Buzz";
  } else if (i % 3 == 0) {
    titleClass = "text-danger";
    textBox = "Fizz";
  } else {
    textBox = i;
  }
  userCardFizzbuzz.innerHTML += `
     <div class="col-2 g-2">
        <div class="card text-center my-color">
            <h3 class="${textBox} ${titleClass}">${textBox}</h3>
            </div>
          </div>   
    `;
}
