import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'; 

function RenderCampsite({acorn}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={acorn.image} alt={acorn.name} />
                <CardBody>
                    <CardTitle>{acorn.name}</CardTitle>
                    <CardText>{acorn.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({spiders}) {
    if (spiders) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {spiders.map(booger => {
                    return (
                        <div key={booger.id}>
                            <p>{booger.text} <br />
                            {booger.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(booger.date)))}</p>
                        </div>
                    )
                })
                }
            </div>
        );
    }
    return (
        <div />
    );
}

function CampsiteInfo(props) {
    if (props.knuckles) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite acorn={props.knuckles} />
                    <RenderComments spiders={props.knuckles.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;