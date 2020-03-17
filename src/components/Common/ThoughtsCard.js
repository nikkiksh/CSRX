import React from 'react';

export default function ThoughtsCard({content,imageURI}){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
            <div className="hexagon thoughtsHexagon">
                <div className="hexagon-in1">
                    <div className="hexagon-in2">
                    </div>
                </div>
            </div>
        <div>
    <p>{content}</p>
        </div>
        </div>
    )

}