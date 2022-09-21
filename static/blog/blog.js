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

// class ClickButton extends React.Component {
//   state = {
//     wasClicked: false
//   }

//   handleClick () {
//     this.setState(
//       {wasClicked: true}
//     )
//   }

//   // render () {
//   //   let buttonText

//   //   if (this.state.wasClicked)
//   //     buttonText = 'Clicked!'
//   //   else
//   //     buttonText = 'Click Me'

//   //   return React.createElement(
//   //     'button',
//   //     {
//   //       className: 'btn btn-primary mt-2',
//   //       onClick: () => {
//   //         this.handleClick()
//   //       }
//   //     },
//   //     buttonText
//   //   )
//   // }

//     render () {
//     let buttonText

//     if (this.state.wasClicked)
//       buttonText = 'Clicked!'
//     else
//       buttonText = 'Click Me'

//     return <button
//       className="btn btn-primary mt-2"
//       onClick={
//         () => {
//           this.handleClick()
//         }
//       }
//     >
//       {buttonText}
//     </button>
//   }
  
// }

// const domContainer = document.getElementById('react_root')

// ReactDOM.render(
//   React.createElement(ClickButton),
//   domContainer
// )

/*************** FETCH ***************/

// ['/api/v1/posts/', '/', '/abadurl/'].forEach(url => {
//   fetch(url).then(response => {
//     if (response.status !== 200) {
//       throw new Error('Invalid status from server: ' + response.statusText)
//     }

//     return response.json()
//   }).then(data => {
//     // do something with data, for example
//     console.log(data)
//   }).catch(e => {
//     console.error(e)
//   })
// })

/*************** JSX ***************/
class PostRow extends React.Component {
  render () {
    const post = this.props.post

    let thumbnail

    if (post.hero_image.thumbnail) {
      thumbnail = <img src={post.hero_image.thumbnail}/>
    } else {
      thumbnail = '-'
    }

    return <tr>
      <td>{post.title}</td>
      <td>
        {thumbnail}
      </td>
      <td>{post.tags.join(', ')}</td>
      <td>{post.slug}</td>
      <td>{post.summary}</td>
      <td><a href={'/post/' + post.slug + '/'}>View</a></td>
    </tr>
  }
}

class PostTable extends React.Component {
  state = {
    dataLoaded: true,
    data: {
      results: [
        {
          id: 15,
          tags: [
            'django', 'react'
          ],
          'hero_image': {
            'thumbnail': '/media/__sized__/hero_images/snake-419043_1920-thumbnail-100x100-70.jpg',
            'full_size': '/media/hero_images/snake-419043_1920.jpg'
          },
          title: 'Test Post',
          slug: 'test-post',
          summary: 'A test post, created for Django/React.'
        }
      ]
    }
  }

  componentDidMount () {
    //fetch('/api/v1/posts/').then(response => {
    fetch(this.props.url).then(response => {
      if (response.status !== 200) {
        throw new Error('Invalid status from server: ' + response.statusText)
      }

      return response.json()
    }).then(data => {
      this.setState({
        dataLoaded: true,
        data: data
      })
    }).catch(e => {
      console.error(e)
      this.setState({
        dataLoaded: true,
        data: {
          results: []
        }
      })
    })
  }

  render () {
    let rows
    if (this.state.dataLoaded) {
      if (this.state.data.results.length) {
        rows = this.state.data.results.map(post => <PostRow post={post} key={post.id}/>)
      } else {
        rows = <tr>
          <td colSpan="6">No results found.</td>
        </tr>
      }
    } else {
      rows = <tr>
        <td colSpan="6">Loading&hellip;</td>
      </tr>
    }

    return <table className="table table-striped table-bordered mt-2">
      <thead>
      <tr>
        <th>Title</th>
        <th>Image</th>
        <th>Tags</th>
        <th>Slug</th>
        <th>Summary</th>
        <th>Link</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  }
}

const domContainer = document.getElementById('react_root')
ReactDOM.render(
  React.createElement(PostTable,
    {url: postListUrl}),
  domContainer
)