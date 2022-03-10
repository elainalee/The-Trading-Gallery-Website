import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { IconButton } from '../Buttons/IconButton';

import "./Utils.css";

export default function SearchBar(props) {
    const showOnClick = props.showOnClick;

    const [showSearchBar, setShowSearchBar] = useState(false);
    const searchRef = useRef();

    function handleSearch(e) {
        e.preventDefault();
        window.location.href = `/search/${searchRef.current.value}`;
    }

    return (
        <div className="searchBar">
             <Form onSubmit={handleSearch}>
                <Form.Group id="search-form">
                    {showOnClick && (
                        <IconButton buttonIcon="search-btn" buttonSize="navbar" onClick={() => setShowSearchBar(!showSearchBar)} />
                    )}

                    <div className={showSearchBar ? "search-bar" : "hide-mobile"}>
                        <Form.Control id="search-bar" type="text" ref={searchRef} placeholder="Search product name" required />

                        {showOnClick && (
                            <div id="cancelText" className="links" onClick={() => setShowSearchBar(false)}>cancel</div>
                        )}
                    </div>

                    {!showOnClick && (
                        <IconButton buttonIcon="search-btn" buttonSize="navbar" onClick={handleSearch} />
                    )}

                    {showOnClick && !showSearchBar && (
                        <IconButton buttonIcon="cancel-btn" buttonSize="navbar" color="black" onClick={() => props.handleMenuClick(false)} />
                    )}
                </Form.Group>
            </Form>
        </div>
    );
}
