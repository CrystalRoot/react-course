import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {
    render() {
        const directory = this.props.sterling.map(foo => {
            return (
                <div key={foo.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(foo.id)}>
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
            </div>
        );
    }
}

export default Directory;