// 404 Error Page Style File Path: public/css/pages-and-components-css/error.scss

import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
    return (
		<>
			<div className="error-area ptb-100">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="error-content">
								<img src="/images/error.png" alt="image" />
								<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

								<Link href="/">
									<a className="default-btn">Back To Home</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

export default ErrorPage;