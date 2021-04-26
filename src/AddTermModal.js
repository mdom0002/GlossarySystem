import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';



export class AddTermModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
     //   this.handleFileSelected=this.handleFileSelected.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/term',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TERMID:null,
                WORD:event.target.value,
                DEF:event.target.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Term
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="WORD">
                        <Form.Label>Enter Word</Form.Label>
                        <Form.Control type="text" name="WORD" required 
                        placeholder="word"/>
                    </Form.Group>

                    <Form.Group controlId="DEF">
                        <Form.Label>Enter Definition</Form.Label>
                        <Form.Control type="text" name="DEF" required 
                        placeholder="definition"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Word
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }
}