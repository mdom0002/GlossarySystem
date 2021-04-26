import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditTermModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/term',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TERMID:event.target.value,
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
            Edit Word
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="TERMID">
                        <Form.Label>TermID</Form.Label>
                        <Form.Control type="text" name="TERMID" required
                        disabled
                        defaultValue={this.props.TERMID} 
                        placeholder="TermId"/>
                    </Form.Group>

                    <Form.Group controlId="Word">
                        <Form.Label>Word</Form.Label>
                        <Form.Control type="text" name="WORD" required 
                        defaultValue={this.props.WORD}
                        placeholder="Word"/>
                    </Form.Group>

                    <Form.Group controlId="Def">
                        <Form.Label>Definition</Form.Label>
                        <Form.Control type="text" name="DEF" required 
                        defaultValue={this.props.DEF}
                        placeholder="Definition"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Term
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