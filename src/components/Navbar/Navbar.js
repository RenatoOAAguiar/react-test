import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import BottomNavigationExampleSimple from '../Bottom/Bottom';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import Rasa from '../Rasa/Rasa';
import Spacy from '../Spacy/Spacy';

const style = {
    nav: {
        "backgroundColor": "#e3f2fd"
    },
    btn: {
        "cursor": "pointer"
    },
    navBar: {
        "marginTop": "60px !important"
    },
    space: {
        'marginLeft': '20px'
    },
    corLink:{
        color: 'black'
    }
}

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dados: ''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.preencher = this.preencher.bind(this);
    }
    handleToggle() {
        console.log(this.state.open);
        this.setState({
            open: !this.state.open
        });
    };

    preencher() {
        this.setState({dados: "asdfasdfasdfas"})
    };

    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <AppBar
                        title="Dashboard"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onClick={this.handleToggle}></AppBar>
                    <Drawer open={this.state.open} style={style.navBar}>
                        <MenuItem path="/rasa" onClick={this.preencher}><Link style={style.corLink} to="/rasa">Rasa</Link></MenuItem>
                        <MenuItem path="/spacy"><Link style={style.corLink} to="/spacy">spaCy</Link></MenuItem>
                    </Drawer>
                    <div className="container" style={style.space}>
                            <div>
                                <Switch>
                                    <Route path="/rasa" name="Página rasa" component={Rasa}/>
                                    <Route path="/spacy" name="Página Spacy" component={Spacy}/>
                                </Switch>
                            </div>
                    </div>
                    <footer className="fixed-bottom">
                        <BottomNavigationExampleSimple/>
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Navbar;