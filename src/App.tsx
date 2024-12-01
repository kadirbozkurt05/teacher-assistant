import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { SyllablePage } from '@/pages/SyllablePage';
import SyllableSentecenePage from './pages/SyllableSentecenePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllables" element={<SyllablePage />} />
          <Route path="/syllables-sentence" element={<SyllableSentecenePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;