
import React from "react";

export default function Card(props :any) {
    return (
        <div className="col-lg-12">
            <div className="card rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}