import React from 'react';
import ReactDOM from 'react-dom';
import './client.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>This is one cool app!</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);