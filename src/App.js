import React, { useState } from "react";
import RefereeManagement from "./RefereeManagement";
import GeographicalViewTest from "./components/GeographicalViewTest";

function App() {
    const [activeComponent, setActiveComponent] = useState("home");

    const renderComponent = () => {
        switch (activeComponent) {
            case "home":
                return <RefereeManagement />;
            case "geoView":
                return <GeographicalViewTest />;
            default:
                return <RefereeManagement />;
        }
    };

    return (
        <div className="App">
            <nav className="bg-blue-500 p-4">
                <h1 className="text-white text-xl font-semibold">
                    Temporary header for test pages
                </h1>
                <hr className="my-2" />
                <ul className="flex space-x-4">
                    <li>
                        <button
                            onClick={() => setActiveComponent("home")}
                            className="text-white hover:underline"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveComponent("geoView")}
                            className="text-white hover:underline"
                        >
                            Geo View Test
                        </button>
                    </li>
                </ul>
            </nav>

            {renderComponent()}
        </div>
    );
}

export default App;
