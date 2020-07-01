// Write your code here!
// no longer has DOM node 'main#main'
let main = document.querySelector('main')
main.remove();

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
