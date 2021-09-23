import './styles.css';
import './styles.scss';
import moment from 'moment';

//babel could convert this to es6 syntax
const es6TestFunction =  () =>{
    let testEs6Variable = 0;

    return testEs6Variable;
}
console.log("Hello world");
es6TestFunction();

//lazy loading the dynamic import code
const getTodos = () =>import (/* webpackChunkName: "postsAPI" */'./api')

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    console.log("click");
    getTodos().then(({fetchTodos})=>fetchTodos()).then(resp=>{
        console.log(resp);
    });
    
})