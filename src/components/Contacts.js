import React, {Component} from 'react';
export default class Contacts extends Component {
    render() {
        return (
            <section className="contacts" id="contacts">
                <div className="green-line">
                    <h2>Contacts:</h2>
                    <ul className="contacts-list">
                        <li>skype: pasichnikroman	|</li>
                        <li>email: pasichnikroman@gmail.com	|</li>
                        <li>github: pasichnikroman 	|</li>
                        <li>tel: +38 093 710 97 54	|</li>
                    </ul>
                </div>
            </section>
        )
    }
}