let first_prmt = Number(
  prompt(
    'Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'
  )
);

let question;
let answer;

switch (true) {
  case first_prmt === 1:
    question = prompt('რა არის typeof(5)');
    answer = question;
    if (answer === 'number' || answer === 'NUMBER' || answer === 'NumBeR') {
      alert('პასუხი სწორია!');
    } else {
      alert('სამწუხაროდ ვერ გამოიცანით.');
    }
    break;
  case first_prmt === 2:
    question = prompt('შეიძლება თუ არა let-ის რედეკლალირება');
    answer = question;
    if (answer === 'Yes' || answer === 'yes' || answer === 'YeS') {
      alert('პასუხი სწორია!');
    } else {
      alert('სამწუხაროდ ვერ გამოიცანით.');
    }
    break;
  case first_prmt === 3:
    question = prompt('რას აბრუნებს console.log(Math.floor(2.1))');
    answer = question;
    if (answer === 'ori' || answer === 'ORI' || answer === 'oRi') {
      alert('პასუხი სწორია!');
    } else {
      alert('სამწუხაროდ ვერ გამოიცანით.');
    }
    break;
}
