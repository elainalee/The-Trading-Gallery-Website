import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import Footer from '../../components/Footer';
import { logOut } from '../../reducers/authReducer';
import { LogInRoute } from '../../utils/routes';

export default function ListingsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    async function handleLogOut() {

        dispatch(logOut()).then((res) => {
            history.push(LogInRoute);
        })
        // try {
        //     await logOut();
        //     history.pushState('/logIn');
        // } catch {
        //     setError('Failed to log out');
        // }
    }

    return (
        <div className="marginTop">
            <div className="marginLeft">
                ListingsPage Page Placeholder
            </div>

            <CustomButton buttonStyle="link" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            <Footer />
        </div>
        
    );
}
