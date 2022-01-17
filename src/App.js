import logo from './logo.svg';
import './App.css';

import StoreTabs from "./StoreTabs";
import RouteTabs from "./RouteTabs";

function App() {
    return (
        <div className="App">
            <uni-event-load url={'tabs.json'} prop={'value'}>
                <uni-tabs pro={true} color={'success'}>
                    <uni-template hidden={true}>
                        <div>
                            <header className="App-header">
                                <div>
                                    <img src={logo} className="App-logo" alt="logo"/>
                                    <p>
                                        Edit <code>src/App.js</code> and save to reload.
                                    </p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn React
                                    </a>
                                </div>
                            </header>
                        </div>

                        <div>
                            <StoreTabs/>
                            <hr/>
                            <RouteTabs/>
                        </div>
                    </uni-template>
                </uni-tabs>
            </uni-event-load>
        </div>
    );
}

export default App;
