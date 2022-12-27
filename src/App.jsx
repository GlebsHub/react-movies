import React from 'react';
import {Header} from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Cards from "./components/Cards";

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <Cards />
        </>
    );
};

export default App;