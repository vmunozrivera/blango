/*************** LOGS ***************/

// console.time('myTimer')
// console.count('counter1')
// console.log('A normal log message')
// console.warn('Warning: something bad might happen')
// console.error('Something bad did happen!')
// console.count('counter1')
// console.log('All the things above took this long to happen:')
// console.timeEnd('myTimer')

/*************** FUNCTIONS ***************/

// function sayHello(yourName) {
//   if (yourName === undefined) {
//       console.log('Hello, no name')
//   } else {
//        console.log('Hello, ' + yourName)
//   }
// }

// const yourName = 'Your Name'  // Put your name here

// console.log('Before setTimeout')

// setTimeout(() => {
//     sayHello(yourName)
//   }, 2000
// )

// console.log('After setTimeout')

/*************** LOOPS ***************/ 

// for(let i = 0; i < 10; i += 1) {
//   console.log('for loop i: ' + i)
// }

// let j = 0
// while(j < 10) {
//   console.log('while loop j: ' + j)
//   j += 1
// }

// let k = 10

// do {
//   console.log('do while k: ' + k)
// } while(k < 10)

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.forEach((value => {
//   console.log('For each value ' + value)
// }))

// const doubled = numbers.map(value => value * 2)

// console.log('Here are the doubled numbers')

// console.log(doubled)


/*************** CLASSES ***************/
// class Greeter {
//   constructor (name) {
//     this.name = name
//   }

//   getGreeting () {
//     if (this.name === undefined) {
//       return 'Hello, no name'
//     }

//     return 'Hello, ' + this.name
//   }

//   showGreeting (greetingMessage) {
//     console.log(greetingMessage)
//   }

//   greet () {
//     this.showGreeting(this.getGreeting())
//   }
// }

// const g = new Greeter('Patchy')  // Put your name here if you like
// g.greet()

// class DelayedGreeter extends Greeter {
//   delay = 2000

//   constructor (name, delay) {
//     super(name)
//     if (delay !== undefined) {
//       this.delay = delay
//     }
//   }

//   greet () {
//     setTimeout(
//       () => {
//         this.showGreeting(this.getGreeting())
//       }, this.delay
//     )
//   }
// }

// const dg2 = new DelayedGreeter('Patchy 2 Seconds')
// dg2.greet()

// const dg1 = new DelayedGreeter('Patchy 1 Second', 1000)
// dg1.greet()


/*************** PROMISES ***************/
// function resolvedCallback(data) {
//   console.log('Resolved with data ' +  data)
// }

// function rejectedCallback(message) {
//   console.log('Rejected with message ' + message)
// }

// const lazyAdd = function (a, b) {
//   const doAdd = (resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject("a and b must both be numbers")
//     } else {
//       const sum = a + b
//       resolve(sum)
//     }
//   }

//   return new Promise(doAdd)
// }

// const p = lazyAdd(3, 4)
// p.then(resolvedCallback, rejectedCallback)

// lazyAdd("nan", "alsonan").then(resolvedCallback, rejectedCallback)


/*************** REACTJS ***************/

class ClickButton extends React.Component {
  state = {
    wasClicked: false
  }

  handleClick () {
    this.setState(
      {wasClicked: true}
    )
  }

  render () {
    let buttonText

    if (this.state.wasClicked)
      buttonText = 'Clicked!'
    else
      buttonText = 'Click Me'

    return React.createElement(
      'button',
      {
        className: 'btn btn-primary mt-2',
        onClick: () => {
          this.handleClick()
        }
      },
      buttonText
    )
  }
}

const domContainer = document.getElementById('react_root')

ReactDOM.render(
  React.createElement(ClickButton),
  domContainer
)