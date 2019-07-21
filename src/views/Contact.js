import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/ContactStyles';

//contact images
import phoneImage from '../img/android-color.png';
import linkedInImage from '../img/linkedin-color.png';
import mailImage from '../img/google-color.png';
import twitterImage from '../img/twitter-color.png';
import githubImage from '../img/github-color.png';
import loanImage from '../img/graduation-icon.jpg';

//contact image styles
const phonelogo = {
	backgroundImage: "url(" + { phoneImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }
  const linkedinlogo = {
	backgroundImage: "url(" + { linkedInImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }
  const maillogo = {
	backgroundImage: "url(" + { mailImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }
  const twitterlogo = {
	backgroundImage: "url(" + { twitterImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }
  const githublogo = {
	backgroundImage: "url(" + { githubImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }
  const loanlogo = {
	backgroundImage: "url(" + { loanImage } + ")",
	display: "block",
    minHeight: "20px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    padding: "0 0 0 30px",
    margin: "0 0 10px"
  }

export default class Contact extends Component {
	state = {
	}

	render() {
		return (
			<div id="wholePageContainer">
				<Header />
				<div id="wrapper">
					<section id="primary">
						<h3>General Information</h3>
							<p>I am not currently looking for any new employment opprotunities, but I am available for speaking engagements and other events. If you have questions, don't hesitate to contact me!</p>
							<p> Email and LinkedIn are the best ways to reach me. Speaking of which, you can use the form on this page to send me a quick email.</p>
						<h3>Student Loan Assistance</h3>
							<p>I recently created a Gift of College profile. Gift of College is a way people can save for college. It also makes it easy for friends and family to help those they know struggling with student loans. Check out my profile link below for more information, or if you want to help.</p>
						<h3>Contact Details</h3>
							<ul class="contact-info">
								<li class="phone"><a href="/contact" aria-disabled="true" disabled style={phonelogo}>No phone number available</a></li>
								<li class="linkedin"><a href="https://www.linkedin.com/in/corgidev/" style={linkedinlogo}>Elizabeth Gray LinkedIn Profile</a></li>
								<li class="mail"><a href="mailto:egray@corgidev.com?subject=Email from CorgiDev site" style={maillogo}>egray@corgidev.com</a></li>
								<li class="twitter"><a href="https://twitter.com/intent/tweet?screen_name=thecorgidev" style={twitterlogo}>@TheCorgiDev</a></li>
								<li class="github"><a href="https://github.com/CorgiDev" target="_blank" rel="noopener noreferrer" style={githublogo}>CorgiDev GitHub Profile</a></li>
								<li class="studentloan"><a href="https://www.giftofcollege.com/Profile/corgidev/" target="_blank" rel="noopener noreferrer" style={loanlogo}>CorgiDev Giift of College Profile</a></li>
							</ul>                
					</section>

					<section id="secondary">
						<h3 id="contactHeader">Contact Form</h3>
						<p>This form is not 100% functional right now. I will eventually correct this. In the meantime, you can email me directly at <a href="mailto:egray@corgidev.com" class="highlight">egray@corgidev.com</a> if the form does not behave.</p>
						<form id="contactForm" name="contactForm" action="mailto:corgidev@outlook.com?subject=CorgiDev Contact Form" method="post" enctype="text/plain">
							<label for="userName">Name: </label><input type="text" name="userName" id="userName" required /> 
							<br />
							<br />
							<label for="userEmail">Email: </label><input type="email" name="userEmail" id="userEmail" required />
							<br />
							<br />
							<label for="userMessage">Comments: </label><textarea name="userMessage" cols="40" rows="10" maxlength="1000" id="userMessage" required></textarea> <br />
							<br />
							<button type="submit">Submit</button> <input type="reset" value="Reset" />
						</form>
					</section>
					<Footer />
				</div>
			</div>
		)
	}
}
