require('./globalObject')

console.log(global.myApp.hello());
console.log(myApp.hello());

console.log(myApp.name);
myApp.name = "myApp changed";
console.log(myApp.name);

console.log(global.myFreezedApp.name)
global.myFreezedApp.name = "U can try changing me if u want..."
console.log(global.myFreezedApp.name)