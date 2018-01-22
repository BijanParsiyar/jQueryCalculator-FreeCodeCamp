





$(document).ready(function(){ // When our page loads run this jQuery

  // Stores the input from our user to calculate later
  var inputs = [""];

  // String to store current input string
  var totalString;

  // Operators array for validations without the .
  var operators1 = ["+", "-", "/", "*"];

  // Operators array with the . for validation
  var operators2 = ["."];

  // Numbers for validation
  var nums = [0, 1, 3, 4, 5, 6, 7, 8, 9];


                      function getValue(input){

                        // Basically seeing if the . is in the last place of our input array and the input variable in our function is an input too, so two consecutive dots
                        if(operators2.includes(inputs[inputs.length-1]===true && input===".")){ // We don't want two duplicate dots, includes check a value

                          console.log("Duplicate '.' ");

                          // Single item in there and all the operatores exdcept the . and what we are trying to click is not an operator
                        } else if(inputs.length===1 && operators1.includes(input)===false){// Validation so we don't start with an operator in the calculator

                        inputs.push(input); // inputs is our array, and input is the this.id that we are adding to the array


                        } else if(operators1.includes(inputs[inputs.length-1])===false){ // If our last thing was not an operator in our inputs array// So we don't have dubplicate operators

                                  inputs.push(input);

                         } else if(nums.includes(Number(input))) { // If the input includes a number, also we are converting the input into a number
                           inputs.push(input);
                         }
                        update(); // Update the value regardless of what case the input falls into, because only one of the else statesments will trigger
                      }

  function update(){ // Update calculator screen

    totalString = inputs.join(""); // Now it's a string with .join()
    $("#steps").html(totalString);

  }

  function getTotal(){ // Evaluate / solve

    totalString = inputs.join(""); // Join inputs array with totalString variable into a string
    $("#steps").html(eval(totalString));  // Will evaluate our string and return us a single number

  }

                                $("a").on("click", function(){ // When an anchor tag is clicked run a function

                                  if(this.id === "deleteAll"){ // The currently selected anchor tag id

                                    // reset value of inputs
                                    inputs = [""];

                                    update(); // So it will update it to the most current value



                                  } else if (this.id==="backOne"){
                                    inputs.pop(); // Remove the last array value
                                    update();
                                  } else if (this.id==="total"){ // If user hits equal sign

                                    getTotal();

                                  } else {// For every other possible situation of an anchor tag getting clicked
                                    if(inputs[inputs.length -1 ].indexOf("+", "-", "/", "*")===-1){ // Our last input of the array -1 because .length isn't 0 indexed
                                       getValue(this.id);
                                    }
                                    else {
                                       getValue(this.id);
                                    }
                                  }


                                });




});
