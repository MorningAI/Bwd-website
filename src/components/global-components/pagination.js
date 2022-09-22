import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        
        let examplePaginationLink = '#'        

        return (
            <div className="row">
                <div className="col-sm-12">
                    <ul className="sandy-pagenation pagination pagination-lg justify-content-center">
                        <li className="page-item"><a className="page-link" href={examplePaginationLink}><i className="icofont-double-left"></i></a></li>
                        <li className="page-item"><a className="page-link" href={examplePaginationLink}>1</a></li>
                        <li className="page-item"><a className="page-link active" href={examplePaginationLink}>2</a></li>
                        <li className="page-item"><a className="page-link" href={examplePaginationLink}>3</a></li>
                        <li className="page-item"><a className="page-link" href={examplePaginationLink}><i className="icofont-double-right"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default Pagination
