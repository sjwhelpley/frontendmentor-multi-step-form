import { BrowserRouter,Route, Routes } from 'react-router-dom';

import FormView from './components/Form/FormView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
