import React, { Component } from "react";
import "./Layout.scss"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Outlet } from 'react-router-dom'

const context = React.createContext()

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                { brand: 'Mercedes', year: 2018 },
                { brand: 'Audi', year: 2020 },
                { brand: 'BMW', year: 2018 }
            ]
        }
    }
    render() {
        return (
            <div className="Layout">
                <Nav />
                <context.Provider value={this.state.cars}>
                    <Outlet />
                </context.Provider>
                <Footer />
            </div>
        );
    }
}

export { Layout, context }