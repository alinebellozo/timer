// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let alarm = process.argv; // the user will insert the value using command line arguments

let count = 1000; // count starts with 1s

const timer = () => {
// iterate thru the alarm values
  for (let i = 0; i < alarm.length; i++) {
    // check if the value is greater or equal 0 and if it's really a number
    if (alarm[i] >= 0 && alarm[i] !== NaN) {
      // fn to define the amount of time to "beep"
      setTimeout(() => {
        process.stdout.write("*beep*");
      }, count * alarm[i]);
    }
  }
}

timer(alarm);