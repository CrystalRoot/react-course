import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {     
            selectedCampsite: null       
        };
    }

    onCampsiteSelect(garden) {
        this.setState({selectedCampsite: garden});
    }

    render() {
        const directory = this.props.campsites.map(foo => {
            return (
                <div key={foo.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(foo)}>
                        <CardImg width="100%" src={foo.image} alt={foo.name} />
                        <CardImgOverlay>
                            <CardTitle>{foo.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo knuckles={this.state.selectedCampsite}/>
            </div>
        );
    }
}

export default Directory;