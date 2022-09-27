import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Iphone 14 Pro',
      amount: 1600,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Netflix', amount: 20, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Galaxy Classix Z1',
      amount: 600,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'LG Ultragear',
      amount: 100,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started with my Expenses!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
