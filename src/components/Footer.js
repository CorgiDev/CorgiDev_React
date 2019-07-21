import React, { Component } from 'react';
import twitterlogo from '../img/twitter-square.png';
import fblogo from '../img/fb-square.png';

export default class Footer extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
          <footer>
                <p class="attribution">
                  <a href="http://twitter.com/thecorgidev"><img src={twitterlogo} alt="Twitter logo" class="social-icon" /></a>
                  <a href="http://facebook.com/corgidev"><img src={fblogo} alt="Facebook logo" class="social-icon" /></a>
                  <br />
                  &copy; 2017 Elizabeth Gray.<br />
                  All social media icons on this page were found on <a href="https://www.iconfinder.com/" class="attribution-link">Icon Finder</a>. <br />
                  Octocat is a GitHub logo, and is the property of <a href="https://github.com/logos" class="attribution-link">GitHub</a>.
                </p>
            </footer>
        </div>
      )
   }
}