import './App.css';
import {useState, useEffect} from 'react';
import InvestmentChart from './components/InvestmentChart';

function App() {
  const [startingAmount, setStartingAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [data, setData] = useState([0]);
  const [labels, setLabels] = useState([0]);

  const newData = () => {
    let updatedData = [];
    let updatedLabels = [];
    let finalAmount = parseInt(startingAmount);
    updatedLabels.push(0);
    updatedData.push(finalAmount);
    for(let i = 0; i < investmentDuration; i++){
        updatedLabels.push("Year " + (i + 1));
        let interestAmount = (parseInt(interestRate) / 100.00) * finalAmount;
        finalAmount += parseInt(interestAmount);
        updatedData.push(finalAmount);
    }

    setFinalAmount(parseInt(finalAmount));
    setData(updatedData);
    setLabels(updatedLabels);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newData();
  }

  return (
    <div className="container">
      <div className="input">
        <form onClick={handleSubmit} className="input-form">
          <div>
            <label>Starting Amount
              <input type="number" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value) || 0}/>
              </label>
              <br />
              <label>Annual Interest Rate (%)
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value) || 0}/>
              </label>
              <br />
              <label>Investment Duration (years)
                <input type="number" value={investmentDuration} onChange={(e) => setInvestmentDuration(e.target.value) || 0}/>
              </label>
              <br />
          </div>
          <button type="submit">New Chart</button>
        </form>
      </div>  
      <div className="output">
        <InvestmentChart data={data} labels={labels} finalAmount={finalAmount} className="chart-window"></InvestmentChart>
      </div>
    </div>
  );
}

export default App;
