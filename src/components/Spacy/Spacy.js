import React,{Component} from 'react';

const style = {
    center:{
        marginLeft: '30%'
    }
}

class Spacy extends Component{
    render(){
        return(
            <div style={style.center}>
                <center>
                    <h1>Bem vindo ao SpaCy!</h1>
                </center>
            </div>
        );
    }
}


export default Spacy;