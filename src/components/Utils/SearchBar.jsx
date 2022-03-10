import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { MainPageRoute, MyAccountRoute, ShopPageRoute } from '../../utils/routes';
import { IconButton } from '../Buttons/IconButton';

import "./Utils.css";

export default function SearchBar(props) {
    const searchRef = useRef();

    function handleSearch(e) {
        e.preventDefault();
        window.location.href = `/search/${searchRef.current.value}`;
    }

    return (
        <div className="searchBar">
             <Form onSubmit={handleSearch}>
                <Form.Group id="search-form">
                    <Form.Control id="search-bar" type="text" ref={searchRef} placeholder="Search product name" required />

                    <IconButton buttonIcon="search-btn" buttonSize="navbar" onClick={handleSearch} />
                </Form.Group>
            </Form>
        </div>
    );
}
