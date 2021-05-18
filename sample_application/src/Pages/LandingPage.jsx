import React, {useState} from 'react';
import Navbar from '../Component/Navbar';

const LandingPage = () => {
    const [state, setState] = useState();
    return<>
        <Navbar/>
        <div>
            Contact us
        </div>
    </>
}


export default LandingPage