import React from 'react';
import "./index.css"
import Video from "./components/video/video";
import Header from "./components/contHeader/Header";
import OtherTemplate from "./components/otherInfo/otherTemplate";

function App() {
    return (
        <div>
            <Video/>
            <Header/>
            <OtherTemplate/>

        </div>
    );
}

export default App;
