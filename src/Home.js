import React from 'react';

export default class Home extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="images/landingImage.jpg" style={{ width: 1109 }} />
                </div>
                <div className="row no-gutters p-md-5 p-2">

                    <div className="col-md-4 col-12 px-2">
                        <div className="text-center"><i><span className="fa fa-user fa-5x"></span></i></div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                        consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                        dolore eum hic laboriosam nesciunt odit officia omnis similique.
                
                        </p>
                            </div>
                    <div className="col-md-4 col-12 px-2">
                        <div className="text-center"><i><span className="fa fa-industry fa-5x"></span></i></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                        consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                        dolore eum hic laboriosam nesciunt odit officia omnis similique.
                    </p>
                    </div>
                    <div className="col-md-4 col-12 px-2">
                        <div className="text-center"><i><span className="fa fa-user fa-5x"></span></i></div>
                        <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                        consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                        dolore eum hic laboriosam nesciunt odit officia omnis similique.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}