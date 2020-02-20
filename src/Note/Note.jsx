import React, { Component } from 'react'
import './Note.css';

class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id){
        const response = window.confirm('Estas seguro de querer eliminar?');
        if(response){
            this.props.removeNote(id);    
        }
        return;
    }

    render(){
        return(
            <div className="Note">
                <i 
                    class="fa fa-times" 
                    aria-hidden="true"
                    onClick={()=> this.handleRemove(this.noteId)}
                >

                </i>
                <p>{this.noteContent}</p>
            </div>
        )
        
    }
}

export default Note;