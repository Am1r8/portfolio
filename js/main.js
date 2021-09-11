alert("This Portfolio is Made for Computers and it's not available for Phone Users!");

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
// const servic = document.querySelector('#services')
const games = document.querySelector('#games')
const chrome_90 = document.querySelector('#extension')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
// const aboutservices = document.querySelector('#about-services')
const links_games = document.querySelector('#link-games')
const links_chromes = document.querySelector('#link-chrome')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    border: "0.3em",
    width: '750px',
    height: '550px',
    x: "20px",
    y: "50px",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    border: "0.3em",
    width: '400px',
    height: '300px',
    x: "100px",
    y: "400px",
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

// servic.addEventListener('click', () => {
//   const servicebox = new WinBox({
//     title: 'Services',
//     border: "0.3em",
//     width: '450px',
//     height: '450px',
//     x: "300px",
//     y: "250px",
//     mount: aboutservices,
//     onfocus: function () {
//       this.setBackground('#00aa00')
//     },
//     onblur: function () {
//       this.setBackground('#777')
//     },
//   })
// })

games.addEventListener('click', () => {
  const games_links = new WinBox({
    title: 'Games',
    border: "0.3em",
    width: '450px',
    height: '300px',
    x: "100px",
    y: "150px",
    mount: links_games,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

chrome_90.addEventListener('click', () => {
  const chrome_links = new WinBox({
    title: 'Chrome Extensions',
    border: "0.3em",
    width: '450px',
    height: '300px',
    x: "100px",
    y: "500px",
    mount: links_chromes,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
