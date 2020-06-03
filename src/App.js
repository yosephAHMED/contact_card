import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <ContactCard
                    name="Bob"
                    email="email@email.com"
                />
                <ContactCard
                    name="Rod"
                    email="email@email.com"
                />
            </div>
        );
    }
}

export default App;