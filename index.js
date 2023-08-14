import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// Challenge 1

// ReactDOM.render(<ul>
//     <li>Item1</li>
//     <li>Item2</li></ul> ,document.getElementById("root"))

// challenge 2
    // function MainContent(){
    //     return (
    //         <h1>I'm learning React</h1>
    //     )
    // }
    // ReactDOM.render(
    //     <div>
    //         <MainContent/>
    //     </div>,document.getElementById("root")
    // )
//challenge 3 
// create a new h1 element,give it some textContent,
// give it a class name of "header", append it as child of the div#root
// Using vanilla javascript
    // const h1 = document.createElement("h1")
    // h1.textContent="This is am imperative way to program "
    // h1.className="header"
    // document.getElementById("root").append(h1)
   
// challenge 4
// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
//
        //     const navbar=(
        //         <nav>
        //             <h1>Narendra's website</h1>
        //             <ul>
        //                 <li>Menu</li>
        //                 <li>About</li>
        //                 <li>Contact</li>
        //             </ul>
        //         </nav>
        //     )
        //    ReactDOM.render(navbar,document.getElementById("root"))
        
// Challenge:5
// find out what happens if we try to append JSX
// to our div#root using .append() instead of ReactDOM

// 1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
// 2. Select the div with the ID of "root" and use `.append()` to append
//    your JSX
// 3. See if you can guess what will show up in the browser before running
//    the code
// 4. See if you can explain what actually shows up in the browser
        // const page=(
        //     <div>
        //         <h1>My awesome website in react</h1>
        //         <h3>Reasons i love react</h3>
        //         <ol>
        //             <li>It's composable</li>
        //             <li>It's declarative</li>
        //             <li>It's a hireable skill</li>
        //             <li>It's actively maintained by skilled people</li>
        //         </ol>
        //     </div>
        // )
        // document.getElementById("root").append(page)

// This above code return object of javascript.
// This is to remind that JSX return the palin javascript object when we do not 
// render using reactDOM .

// FIX the problem, the above problem can be fixed using reactDOM .

            // const page=(
            //     <div>
            //         <h1>My awesome website in react</h1>
            //         <h3>Reasons i love react</h3>
            //         <ol>
            //             <li>It's composable</li>
            //             <li>It's declarative</li>
            //             <li>It's a hireable skill</li>
            //             <li>It's actively maintained by skilled people</li>
            //         </ol>
            //     </div>
            // )
            // ReactDOM.render(
            //     page,document.getElementById("root")
            // )
            

// Challenge:6 Starting from scratch, build and render the 
// HTML for our section project. Check the Google slide for 
// what you're trying to build.

// We'll be adding styling to it later.

        // const page =(
        //    <div>
        //      <img src="./react-logo.png" width="120px"/>
        //      <h1>Fun facts about react</h1>
        //      <ul>
        //            <li>Was first released in 2013</li>
        //             <li>Was originally created by Jordan Walke</li>
        //             <li>Has well over 100K stars on GitHub</li>
        //             <li>Is maintained by Facebook</li>
        //             <li>Powers thousands of enterprise apps, including</li>
        //      </ul>
        //    </div>
            
        // )
        // ReactDOM.render(page,document.getElementById("root"))

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page
 */

        // function MyPage(){
        //     return (
        //         <div>
        //             <h1>They are the list why im learning React!!</h1>
        //   
        //             <ol>
        //                 <li>It's composable</li>
        //                 <li>It's declarative</li>
        //                 <li>It's a hireable skill</li>
        //                 <li>It's actively maintained by skilled people</li>
        //             </ol>
        //         </div>
        //     )
        // }
        // ReactDOM.render(<MyPage /> , document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
    //   function MyPage(){
    //           return (
    //               <div>
    //                   <Header/>
    //                   <MainContent/>
    //                   <Footer/>
    //               </div>
    //           )
    //       }
    //   ReactDOM.render(<MyPage /> , document.getElementById("root"))

    ReactDOM.render(<App/>,document.getElementById("root"))


