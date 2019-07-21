import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//My Profile Pic
import profilePic from '../img/beth2.jpg';

//Resume Name and Email styles. Need to eventually refactor CSS to avoid using as many inline styles.
const resumeTop = {
  display: "block",
  textAlign: "center"
}
const resumeName = {
	color: "#714f02"
}

export default class Resume extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id="wholePageContainer">
                <Header />
                <div id="wrapper">
                  <section id="resumeWrapperA" style={resumeTop}>
                    <img src={profilePic} alt="Me with rounded border." class="resume-photo"/>
                    <h1 id="resumeName" style={resumeName}>Elizabeth Ann Gray</h1>
                    <h2 id="resumeEmail"><a href="mailto:egray@corgidev.com">egray@corgidev.com</a></h2>
                  </section>

				  <hr/>
				  	<h3>PROFESSIONAL PROFILES</h3>
				  	<ul id="professionalProfileList">
						<li><a href="https://www.linkedin.com/in/corgidev/"><i class="fi-social-linkedin"></i></a></li>
						<li><a href="https://teamtreehouse.com/corgidev"><i class="fi-social-treehouse"></i></a></li>
						<li><a href="https://twitter.com/TheCorgiDev"><i class="fi-social-twitter"></i></a></li>
						<li><a href="https://github.com/CorgiDev"><i class="fi-social-github"></i></a></li>
						<li><a href="https://www.hackerrank.com/CorgiDev"><FontAwesomeIcon icon={['fab', 'hackerrank']} /></a></li>
						<li><a href="https://trailhead.salesforce.com/me/corgidev"><FontAwesomeIcon icon={['fab', 'salesforce']} /></a></li>
					</ul>

				  <hr/>
				  <br />
                  <section id="resumeWrapperB">
                    <h3>SKILLS SUMMARY</h3>
						<b>Languages:</b> HTML, CSS, JavaScript, C#
						<br />
						<b>Libraries:</b> JQuery, React
						<br />
						<b>Frameworks:</b> Bootstrap, Foundation
						<br />
						<b>Other Technical Skills:</b> Setting up, maintaining, and troubleshooting hardware/software. Working with Azure DevOps (formerly Visual Studio Online and Visual Studio Team Services), Azure Security, Azure SQL Server/Databases, Group Policy, Active Directory, Exchange 2010/ Online, Windows Server, OSX, Windows OS, iOS, and Android
						<br />
						<b>Non-Technical Skills:</b> Training coordination, technical documentation creation, accessibility, public speaking
						<br />
						<br />

                    <h3>PROJECT SUMMARIES</h3>
						<h4>CorgiDev Home</h4>
							<ul>
								<li><b>Project Location: </b><a href="https://bitbucket.org/CorgiDev/corgidev">https://bitbucket.org/CorgiDev/corgidev</a></li>
								<li>Built using Visual Studio Code and Community 2017.</li>
								<li>Can view the site live at <a href="http://corgidev.com">http://corgidev.com</a>.</li>
								<li>Site is hosted through AWS S3.</li>
								<li>Setting up email required the use of AWS Route 53 so emails could be received through my G Suite account.</li>
							</ul>
						
						<h4>MyCamPost</h4>
							<ul>
								<li><b>Project Location: </b><a href="http://www.mycampost.com">http://www.mycampost.com</a></li>
								<li>First project I worked on that used MVC.</li>
								<li>Used HTML and CSS to help redesign the layout of the main page to include a search field with filters.</li>
								<li>Also designed the layout of the results prior to the site being connected to a database.</li>
							</ul>
						
						<h4>Staff Directory Project</h4>
							<ul>
								<li><b>Project Location: </b><a href="https://github.com/EGrayTech/StaffDirectoryProject">https://github.com/EGrayTech/StaffDirectoryProject</a></li>
								<li>MVC project built using Entity Framework, .Net, C#, jQuery, and Bootstrap.</li>
								<li>Uses Localdb for persistent data.</li>
							</ul>
						
						<h4>AnimalDex Project</h4>
							<ul>
								<li><b>Project Location: </b><a href="https://github.com/CorgiDev/animalDex">https://github.com/CorgiDev/animalDex</a></li>
								<li>Built using JavaScript on the front-end and back-end.</li>
								<li>Uses mongoDB for persistent data.</li>
								<li>Functions as a CRUD application where users can store information about animals they have seen.</li>
							</ul>
						
						<h4>React Project</h4>
							<ul>
								<li><b>Project Location: </b><a href="https://github.com/CorgiDev/ReactProject">https://github.com/CorgiDev/ReactProject</a></li>
								<li>Built using JavaScript and React.</li>
								<li>Uses a Firebase database for persistent data and an API connection.</li>
								<li>Was a remake of my www.corgidev.com page with an added Blog page for a course I was taking.</li>
							</ul>
						
						<h4>React CorgiDev</h4>
						<ul>
							<li><b>Project Location: </b><a href="https://github.com/CorgiDev/ReactCorgiDev">https://github.com/CorgiDev/ReactCorgiDev</a></li>
							<li>Built using JavaScript and React.</li>
							<li>Plan to use some kind of database for an API connection and to load in blog posts.</li>
							<li>Will eventually replace my current CorgiDev page.</li>
						</ul>

                    <h3>EDUCATION</h3>
					<h4>JavaScript/React | November 2018 | <a href="https://codelouisville.org/">Code Louisville</a></h4>
						<ul>
							<li>Focus on JavaScript/React with API usage.</li>
							<li>Course work was a mixture of in-class discussion and online learning through Treehouse.</li>
							<li>Recreated my CorgiDev.com website with an additional page that uses React-Context API to have CRUD functionality, but without persistence.</li>
							<li>Used Bootstrap CDN for much of the styling and React-Router-Dom for routing.</li>
							<li>Used Firebase database as an API for my app to connect to.</li>
						</ul>
					<h4>Full-Stack JavaScript | August 2018 | <a href="https://codelouisville.org/">Code Louisville</a></h4>
						<ul>
							<li>Focused on front-end/back-end development using JavaScript.</li>
							<li>Course work was a mixture of in-class discussion and online learning through Treehouse.</li>
							<li>Created a CRUD application as my final project, named AnimalDex, which is listed above.</li>
						</ul>
					<h4>C#/.Net Development | March 2018 | <a href="https://codelouisville.org/">Code Louisville</a></h4>
						<ul>
							<li>Focused on C#/.Net development on the front-end and back-end of a project.</li>
							<li>Course work was a mixture of in-class discussion and online learning through Treehouse.</li>
							<li>Created a CRUD application as my final project, which is the Staff Directory project listed above.</li>
						</ul>
					<h4>Front-End Web Design | August 2017 | <a href="https://codelouisville.org/">Code Louisville</a></h4>
						<ul>
							<li>Focused on Front-End Web Design technologies (i.e. HTML, CSS, and JavaScript)</li>
							<li>Course work was a mixture of in-class discussion and online learning through Treehouse.</li>
							<li>Created a project, which became my live site at www.corgidev.com.</li>
						</ul>
					<h4>Bachelor of Arts | May 2012 | <a href="https://wwww.wku.edu">Western Kentucky University</a></h4>
						<ul>
							<li>Majored in Sociology with a minor in Criminology</li>
							<li>Member of Alpha Kappa Delta (National Sociological Honor Society)</li>
							<li>Studied abroad at Kansai Gaidai in Osaka, Japan for the Fall 2010 semester.</li>
						</ul>

                    <h3>WORK EXPERIENCE</h3>
					<h4>Software Development Engineer | <a href="https://www.cloudfitsoftware.com/">CloudFit Software LLC.</a> | June 2018 to Current</h4>
						<ul>
							<li>Originally employed with Composable Systems. However, they merged with Cloudfit Software August 2018 and took on the Cloudfit name. My job duties remained the same.</li>
							<li>Worked with the Microsoft FastTrack Orchestration Portal (FTOP) team at Cloudfit Software to ensure proper and timely deployment of updates to the FTOP site.</li>
							<li>Set up new branch policies to ensure more consistent and secure merging of pull requests prior to deployment to staging.</li>
							<li>Documented previously undocumented regression testing procedures.</li>
							<li>Merged in pull requests to the main development branch, create new release branches, and ensure updating of configuration files and branches after a successful deployment.</li>
							<li>Used Azure DevOps Branch Policies to ensure more consistent deployments.</li>
							<li>Assisted on a recent database migration by writing SQL scripts that migrated data from an old database to a new database with an updated schema. This required the use a few joins to combine data from various tables.</li>
							<li>Currently performing manual QA work for Farm Credit Mid-America as a contractor from CloudFit Software LLC.</li>
						</ul>

					<h4>Computer Support Specialist | <a href="https://www.aph.org/">American Printing House f/t Blind</a> | April 2015 to June 2018</h4>
						<ul>
							<li>Worked directly with department heads and Canon representatives to assist with a smooth transition from Konica brand copiers to Canon copiers. Ensured proper placement, organized training sessions, and currently act as the primary point of contact for employees needing assistance with the new Canon copiers.</li>
							<li>Learned about common issues with Accessibility, and ways to improve it in development, tech support, and general communication.</li>
							<li>Continually reformatting departmental technical documentation to improve consistency and clarity. I’ve also better documented various processes that were previously undocumented and did a complete redo of the Network Administrator handbook.</li>
							<li>Organized testing and training for the company Windows 10 roll out. Training was very well received and resulted in only two users out of approximately 350 needing any additional one on one training.</li>
							<li>Created a multi-volume series on Office 2016, which ties into our increasing use of Office 365, including creating a preview of Outlook online to build excitement for our plan to migrate our E-Mail to Office 365.</li>
							<li>Administered SharePoint and assisted with HTML/CSS edits where needed to improve Accessibility and maintain the CTS department’s page.</li>
						</ul>
					
					<h4>REP I – Internet/Phone Repair | <a href="https://www.spectrum.com/">Charter Communications</a> | January 2015 to April 2015</h4>
						<ul>
							<li>Improved my knowledge of network infrastructure and VOIP phone systems.</li>
							<li>Utilized the Avaya soft/hard phone to process calls.</li>
						</ul>
					
					<h4>Library Technology Assistant | <a href="https://wwww.wku.edu">Western Kentucky University</a> | October 2012 to January 2015</h4>
						<ul>
							<li>Redid various Excel reports used by the entire WKU Libraries department.</li>
							<li>Volunteered during Master Plan week in 2013 to assist with move in parking. Used it as an opportunity to help students with their IT needs, and serve as a positive first point of contact for new students and their parents.</li>
							<li>Joined the Library Statistics Work Group in 2013 to more closely work with the various library departments to streamline their statistics and improve how we gathered them.</li>
							<li>Redid numerous online forms used to gather Library Statistics, which are still in use to this day. This involved the use of a WYSIWYG editor and some HTML and JavaScript edits.</li>
						</ul>
					
					<h4>Student Lab Consultant | <a href="https://wwww.wku.edu">Western Kentucky University</a>  | January 2010 to October 2012</h4>
						<ul>
							<li>Primary responsibility was the monitoring of the computer labs, and assisting the patrons visiting.</li>
							<li>Consistently sought out new responsibilities to learn and grow, which resulted in my supervisor recommending me for the Library Technology Assistant position when it became available.</li>
						</ul>

                    <h3>ADDITIONAL PROFESSIONAL EXPERIENCE</h3>
					<h4>Accessible Support and Technology</h4>
					<ul>
						<li>Presented at 3 locations:</li>
						<ul>
							<li><a href="https://www.meetup.com/Louisville-DotNet/">Louisville .Net Meetup Group</a> – Louisville, KY – September 2017 – Approx. 26 attendees</li>
							<li><a href="https://dogfoodcon.com/">Dog Food Con</a> – Columbus, OH – October 2017 – Approx. 24 attendees</li>
							<li><a href="http://www.codepalousa.com/">Code PaLOUsa</a> – Louisville, KY – March 2018 – Approx. 30 attendees.</li>
						</ul>
						<li>Sought to help people be more aware of how important accessibility is, teach ways they can keep accessibility in mind wherever they go, and make the entire subject a little less overwhelming.</li>
						<li>Based off my personal experiences in academia and working at the American Printing House for the Blind in Louisville, KY.</li>
					</ul>

					<h4>Introduction to Accessibility</h4>
					<ul>
						<li>This is an updated version of my previous talk with new categories added and additional details not previously included.</li>
						<li>Presented at 1 location, with a 2nd upcoming:</li>
						<ul>
							<li><a href="https://www.meetup.com/Tech-Foundations-Louisville/">Louisville Tech Foundations Meetup</a> – Louisville, KY – May 2019 – Approx. 38 attendees</li>
							<li><a href="http://www.codepalousa.com/">Code PaLOUsa</a> – Louisville, KY – Scheduled for August 2019</li>
						</ul>
						<li>A general overview of the topic of Accessibility. Covers the general idea of what Accessibility is, its importance, the value it has for everyone, and ways anyone can work towards improving it everywhere.</li>
						<li>The Tech Foundations meetup was a shortened form of the presentation to account for me sharing the time with another speaker named Tyler Mullins, and to avoid excessive overlap between our presentations.</li>
					</ul>
                  </section>
                  <Footer/>
                </div>
            </div>
      )
   }
}