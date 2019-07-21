import React, { Component } from 'react';

export default class Header extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <header>
            <a href="index.html" id="logo">
                <h1>Elizabeth Gray</h1>
                <h2>Developer in Training</h2>
            </a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
      )
   }
}