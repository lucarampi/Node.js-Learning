# Exporting/Importing modules

Here we are going to learn how to export a modules using various different ways. 

Let`s create the first module and call it *moduleA.js* and export some variables:

```jsx
//moduleA
this.hello = "Hello guys! I came from moduleA!"
exports.wellcome = "Yooo, I came from modeuleA too!"
module.exports.noway ="Noway! Me me either!!!"
```

Now we will create another module called *moduleB.js* and export using the most common way:

```jsx
//moduleB
module.exports = {
    hello: "Hi! How are you? I'm from moduleB, nice to meet you guys.",
    sayGoodNight(){
        return "Good night everybody"
    }
}
```

Once we have our modules ready, we just have to create a *.js* script to act as a *client* of our application. I`m going to call it *clientModule.js* and import the others modules:

```jsx
//clientModule
const moduleA = require('./moduleA')
const moduleB = require('./moduleB')
console.log(moduleA.hello)
console.log(moduleA.wellcome)
console.log(moduleA.noway)
console.log(moduleB.hello)
console.log(moduleB.sayGoodNight())
```

Executing the *clientModule*:

```bash
node clientModule.js
```

And you should also receive the same output as me (if you didn`t change nothing), but without those *""*:

```bash
"Hello guys! I came from moduleA!"
"Yooo, I came from modeuleA too!"
"Noway! Me me either!!!"
"Hi! How are you? I'm from moduleB, nice to meet you guys."
"Good night everybody"
```

[](https://github.com/lucarampi/Node.js-Learning/tree/master/1%20-%20Exporting%20variables)