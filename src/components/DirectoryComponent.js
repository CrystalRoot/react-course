import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({foo, onClick}) {
    return (
        <Card onClick={() => onClick(foo.id)}>
            <CardImg width="100%" src={foo.image} alt={foo.name} />
            <CardImgOverlay>
                <CardTitle>{foo.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
    const directory = props.sterling.map(foo => {
        return (
            <div key={foo.id} className="col-md-5 m-1">
                <RenderDirectoryItem foo={foo} onClick={props.onClick} />
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

export default Directory;