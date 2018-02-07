import React, {Component} from 'react';


export default class Education extends Component {
    render() {
        return (
            <section className="education" id="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <div className="education-image">
                            <img src="/images/education-logo.png"></img>
                        </div>
                        <div className="education-description">
                            Kharkiv National University of Radioelectronics
                            Computer systems and networks 2003-2008
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
