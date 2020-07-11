import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputNama = React.createRef();
        this.inputEmail = React.createRef();
        this.inputMessage = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        alert(`
        Namaku ${this.inputNama.current.value}
        emailku ${this.inputEmail.current.value},
        pesanku untukmu ${this.inputMessage.current.value}
        `);
    }


    render() {

        return (
            <>
                <h2>Contact Me</h2>
                <p>Reach Me Out by filling the form below.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama:
         <input name="nama" type="text" ref={this.inputNama} />
                    </label>
                    <br />
                    <label>
                        Email:
         <input name="email" type="email" ref={this.inputEmail} />
                    </label>
                    <br />
                    <label>
                        Message:
         <textarea name="message" ref={this.inputMessage} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
