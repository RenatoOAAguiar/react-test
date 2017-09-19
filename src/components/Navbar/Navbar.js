import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const style = {
    nav: {
        "backgroundColor": "#e3f2fd"
    },
    btn: {
        "cursor": "pointer"
    }
}

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle (){
        console.log(this.state.open);
        this.setState({open: !this.state.open})
    };
        

    

    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <AppBar
                        title="Dashboard"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onClick={this.handleToggle}
                        />
                    <Drawer open={this.state.open}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Navbar;