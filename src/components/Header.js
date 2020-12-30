import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header__content container">
                    <p>Book<span className="color">mark</span></p>
                    <p>Admin</p>
                </div>
            </header>

        );
    }
};
export default Header