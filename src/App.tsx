import { Navigate, Route, Routes } from 'react-router-dom';
import MaxTraining from './pages/MaxTraining';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/maxtrainingperformance" /> } />
      <Route path="/maxtrainingperformance" element={ <MaxTraining /> } />
    </Routes>
  );
}
