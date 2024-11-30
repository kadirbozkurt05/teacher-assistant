import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { SyllablePage } from '@/pages/SyllablePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllables" element={<SyllablePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;