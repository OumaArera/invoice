import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import InvoiceForm from './components/InvoiceForm';
import RequisitionForm from './components/RequisitionForm';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="grow pt-0 pb-0">
          <Routes>
            {/* Define routes here */}
            
            <Route path="/richcom/payment-invoice" element={<InvoiceForm />} />
            <Route path="/richcom/requisition-invoice" element={<RequisitionForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App