import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderSelectedCampsite(boogie) {
        if (boogie) {
            return (
                <Card>
                    <CardImg top src={boogie.image} alt={boogie.name} />
                    <CardBody>
                        <CardTitle>{boogie.name}</CardTitle>
                        <CardText>{boogie.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
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
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;