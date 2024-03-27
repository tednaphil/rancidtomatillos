import { Link } from 'react-router-dom';
import './BadUrl.css';

function BadUrl() {

    return (
        <>
            <h2 className='bad-url'>404 - Page Not Found</h2>
            <Link to='/' className='bad-url'>Go Back To Homepage</Link>
        </>
    )
}

export default BadUrl;