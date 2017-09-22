import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import BottomNavigationExampleSimple from '../Bottom/Bottom';

const style = {
    nav: {
        "backgroundColor": "#e3f2fd"
    },
    btn: {
        "cursor": "pointer"
    },
    navBar:{
        "marginTop": "60px !important"
    },
    space:{
        'marginLeft': '20px'
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
    handleToggle (){
        console.log(this.state.open);
        this.setState({open: !this.state.open})
    };

    preencher(){
        this.setState({dados: "asdfasdfasdfas"})
    };

    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <AppBar
                        title="Dashboard"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onClick={this.handleToggle}
                    > 
                    
                    </AppBar>
                    <Drawer open={this.state.open} style={style.navBar}>
                        <MenuItem onClick={this.preencher}>Rasa</MenuItem>
                        <MenuItem>spaCy</MenuItem>
                    </Drawer>
                    <div className="container" style={style.space}>
                        <center>
                            <h1>OK</h1>
                            {this.state.dados}
                        </center>
                    </div>
                    <footer className="fixed-bottom">
                        <BottomNavigationExampleSimple />
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Navbar;