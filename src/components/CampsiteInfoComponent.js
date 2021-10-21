import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'; 

class CampsiteInfo extends Component {

renderCampsite(acorns) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={acorns.image} alt={acorns.name} />
                <CardBody>
                    <CardTitle>{acorns.name}</CardTitle>
                    <CardText>{acorns.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

renderComments(spiders) {
    if(spiders) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {spiders.map(booger =>
                    <div key= {booger.id}>
                        <p>{booger.text} <br />
                        {booger.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(booger.date)))}</p>
                    </div>
                )}
            </div>
        );
    }
    return <div />;
}

    render() {
        if(this.props.knuckles) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.knuckles)}
                    {this.renderComments(this.props.knuckles.comments)}
                </div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo;