import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home'
import UserCrud from '../components/User/UserCrud';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (

    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/users' element={<UserCrud />}/>
        <Route path='*' element={<Home />}/>
    </Routes>

)