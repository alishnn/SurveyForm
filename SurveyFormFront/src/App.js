import React from 'react';
import './App.css'; // You can import your CSS file here if you have one
import SurveyForm from './components/SurveyForm'; // Import the SurveyForm component



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Survey Form</h1>
      </header>
      <main>
        <SurveyForm />
        
      </main>
    </div>
  );
}

export default App;

