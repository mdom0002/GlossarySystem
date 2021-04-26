import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddTermModal} from './AddTermModal';
import {EditTermModal} from './EditTermModal';

export class Term extends Component{

    constructor(props){
        super(props);
        this.state={terms:[],addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:5000/api/term')
        .then(response=>response.json())
        .then(data=>{
            this.setState({terms:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteTerm(termid){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:5000/api/term/'+termid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {terms,termid,word,def}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Definition</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {terms.map(term=>
                            <tr key={term.TERMID}>
                                <td>{term.WORD}</td>
                                <td>{term.DEF}</td>
                                <td>
                                <ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        termid:term.TERMID,word:term.WORD,def:term.DEF})}>
                                    
                                    Edit 
                                    </Button> 
                                    <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteTerm(term.TERMID)}> Delete </Button>
    <EditTermModal show={this.state.editModalShow}
        onHide={editModalClose}
        termid={termid}
        word={word}
        def={def}/>
</ButtonToolbar></td>
                            </tr>
                            )}

                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Word</Button>

                    <AddTermModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}