import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
        <div className='about-me'>
          <h1>Samara</h1>
          <p>Olá. Meu nome é Samara, tenho 19 anos, e estou estudando Front-end na Tybe.</p>
          <h2>Minhas Habilidades:</h2>
          <li>
            <ul>React</ul>
            <ul>ES6</ul>
            <ul>Javascript</ul>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>Jest</ul>
            <ul>HOFS</ul>
            <ul>Git/GitHub</ul>
          </li>
        </div>
        )
    }
}

export default About;