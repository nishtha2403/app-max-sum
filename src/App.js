import { useState } from 'react';
import './App.css';

function App() {
  const [enteredExpression, setEnteredExpression] = useState();
  const [expressionArray, setExpressionArray] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [maxSum, setMaxSum] = useState(0);
  
  const onSubmit = () => {
    const expressionArray = enteredExpression.split(',');
    const sortedArray = expressionArray.sort((a,b) => a-b);
    const num1 = parseInt(sortedArray[sortedArray.length - 1]) || 0;
    const num2 = parseInt(sortedArray[sortedArray.length - 2]) || 0;
    setExpressionArray(expressionArray);
    setNum1(num1);
    setNum2(num2); 
    setMaxSum(num1 + num2);
  }

  return (
    <div className="App">
      <h1>Find Max Sum of two numbers!</h1>
      <div className='panel'>
        <div className='leftPanel'>
        {
              expressionArray.length > 0 && 
              <div className='container'>
                {
                  expressionArray.map(exp => <p>{exp}</p>)
                }
              </div>
        }
          
        </div>
        <div className='rightPanel'>
          <div className='inputPanel'>
            <input 
              type="text"
              placeholder='Enter numbers...'
              value={enteredExpression}
              onChange={(e) => {
                setEnteredExpression(e.target.value);
              }}
            />
            <button onClick={onSubmit}>Submit</button>
          </div>
          <div className='outputPanel'>
            {
              expressionArray.length > 0 && <h4>Maximum sum of two numbers ({num1}, {num2}) are {maxSum}</h4>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
