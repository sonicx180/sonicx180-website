import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import "../App.css";

function Home() {
    
    return (
        <>
            <Header />
            <main>
                <div id="home">
                    <h1>Home</h1>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;