import { Routes, Route } from 'react-router-dom';
import 'src/styles/styles.scss';

import HomePage from './pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default App;
