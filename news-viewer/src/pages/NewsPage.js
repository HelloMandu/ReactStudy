import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';

const App = ({ match }) => {
    const category = match.params.category || 'all';
    return (
        <div>
            <Categories></Categories>
            <NewsList category={category}></NewsList>
        </div>
    );
}

export default App;