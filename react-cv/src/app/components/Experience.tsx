import styles from './Experience.module.css';

const Experience = () => {
    return (
        <section>
        <h2>Projects</h2> 
        <div className = "three_col">
            <div className = "card">
                <h3>Deloitte Digital Salesforce Academy, Salesforce Career Journey </h3>
                <img src="images/DeloitteDIgital-Salesforce.jpeg" width="200" alt="Nate's headshot" className = "styled-image"/>
                <ul>
                    <li>Selected for 6-week Salesforce introduction class, gained hands-on experience in Salesforce by participating in Trailhead competition</li>
                    <li>Attended 3 different virtual seminars, learned career tips from Deloitte Salesforce Consultants, explored Career paths in Salesforce</li>
                </ul>
            </div>
            <div className = "card">
                <h3>2-Dimensional Plotter Project</h3>
                <img src="images/plotter.jpg" width="200" alt="Nate's headshot" className = "styled-image"/>
                    <ul>
                        <li>Collaborated with a team of 5 other Computer/Electrical Engineering Students to develop a 2D plotter from scratch which included free drawing etch-a-sketch mode, automatic and manual calibration modes, and automated mathematical function mode</li>
                        <li>Wrote and tested Python code to achieve required functionality by interfacing Raspberry Pi 4 with rotary encoder and limit switch inputs, LCD screen UI display output, and PWM signal outputs to electrical circuit which drove stepper motors</li>
                    </ul>
            </div>
            <div className = "card">
                <h3>Graphical User Interface Project</h3>
                <img src="images/Snake_OG-logo.jpg" width="200" alt="Snake" className = "styled-image"/>
                            <ul>
                                <li>Wrote program that constructed a graphical user interface which recreated the popular video game Snake</li>
                                <li>Used knowledge of Javafx, object oriented programming, threads, functional interfaces, and custom component construction</li>
                            </ul>
            </div>
        </div>
    </section>
    );
  };
  
  export default Experience;