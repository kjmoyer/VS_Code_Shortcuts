//Debugging
//---------insert breakpoint F9---------
//---------start/continue F5---------
//---------step into F11---------
//---------step out SHIFT + F11---------
//---------step over F10---------

let countMeIn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`And a ${arr[i]}`)
  }
}

countMeIn(['one', 'two', 'three']);
