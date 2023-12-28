import React from 'react';

const ops = {
  '+': add,
  '-': minus,
  '*': multiply,
  '/': divide,
}

type OP = keyof typeof ops;

function App() {

  const [num1, setNum1] = React.useState<string>('0');
  const [num2, setNum2] = React.useState<string>('0');

  const [op, setOp] = React.useState<OP>("+");

  return (
    <div style={{padding: 10, display: 'flex', gap: 5}}>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={op} onChange={(e) => setOp(e.target.value as OP)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <span>= {ops[op](Number(num1), Number(num2))}</span>
    </div>
  );
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function minus(num1: number, num2: number): number {
  return num1 - num2;
}

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function divide(num1: number, num2: number): number {
  return num1 / num2;
}

export default App;
