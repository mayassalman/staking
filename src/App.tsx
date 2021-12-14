import React from 'react';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import StakingZkpPage from './pages/StakingZkpPage';

function getMissingEnvVars() {
    // Need this ludicrous check because due to a quirk of dotenv-webpack,
    // process.env[envVar] doesn't actually work:
    // https://github.com/mrsteele/dotenv-webpack/issues/70#issuecomment-392525509
    const _envCheck = {
        API_BASE_URL: process.env.API_BASE_URL,
        IDENTITY_REGISTER_CONTRACT: process.env.IDENTITY_REGISTER_CONTRACT,
        CHAIN_ID: process.env.CHAIN_ID,

        // Optional:
        // SUGGESTED_RPC_URL: process.env.SUGGESTED_RPC_URL,
    };
    const missing = [] as Array<string>;
    for (const [key, val] of Object.entries(_envCheck)) {
        if (!val) {
            missing.push(key);
        }
    }
    return missing;
}

function App() {
    // const missing = getMissingEnvVars();
    // if (missing.length > 0) {
    //     return (
    //         <div className="App">
    //             <h1>Configuration Error</h1>
    //             <p>
    //                 Server is missing environment variable
    //                 {missing.length > 1 && 's'}: {missing.join(', ')}
    //             </p>
    //             <p>
    //                 Please configure <code>.env</code> correctly (use{' '}
    //                 <code>.env.example</code> as a base) and then rebuild /
    //                 restart the server.
    //             </p>
    //         </div>
    //     );
    // }

    return (
        <div className="App">
            <Router>
                <Route path={'/'} exact={true} component={StakingZkpPage} />
            </Router>
        </div>
    );
}

export default App;
