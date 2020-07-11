import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div className="row">
                <div className="jumbotron-text float-right text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header">Ali Masyhur</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            My <b>mission</b> and <b>vision</b> goes here.
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}