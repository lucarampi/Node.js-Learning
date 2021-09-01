//console.log(global)
global.myApp = {
    hello(){
        return "I am everywhere";
    },
    name : "myApp"
}
global.myFreezedApp = Object.freeze({
    hello(){
        return "I am everywhere too";
    },
    name : "U can`t change my name... I`m freezed..."

})