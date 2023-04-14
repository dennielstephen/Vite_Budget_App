import { useState } from 'react';

function Budget() {
  const [salary, setSalary] = useState('');
  const [needs, setNeeds] = useState([]);
  const [wants, setWants] = useState([]);
  const [debt, setDebt] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleAddExpense = (expense, value) => {
    switch (selectedCategory) {
      case 'needs':
        setNeeds([...needs, { expense, value }]);
        break;
      case 'wants':
        setWants([...wants, { expense, value }]);
        break;
      case 'debt':
        setDebt([...debt, { expense, value }]);
        break;
      default:
        break;
    }
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="p-6">
        <div className="mb-4">
          <label htmlFor="salary" className="block font-medium mb-2">
            Salary (PHP)
          </label>
          <input
            type="text"
            id="salary"
            className="border-gray-400 py-2 px-3 rounded-lg w-full"
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Needs</label>
          <ul className="list-disc list-inside">
            {needs.map((expense, index) => (
              <li key={index}>
                {expense.expense}: {expense.value} PHP
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg"
            onClick={() => {
              setSelectedCategory('needs');
              setShowModal(true);
            }}
          >
            Add Expense
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Wants</label>
          <ul className="list-disc list-inside">
            {wants.map((expense, index) => (
              <li key={index}>
                {expense.expense}: {expense.value} PHP
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg"
            onClick={() => {
              setSelectedCategory('wants');
              setShowModal(true);
            }}
          >
            Add Expense
          </button>
        </div>
        <div>
          <label className="block font-medium mb-2">Debt</label>
          <ul className="list-disc list-inside">
            {debt.map((expense, index) => (
              <li key={index}>
                {expense.expense}: {expense.value} PHP
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg"
            onClick={() => {
              setSelectedCategory('debt');
              setShowModal(true);
            }}
          >
            Add Expense
          </button>
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">
                    Add {selectedCategory} Expense
                </h2>
              <div className="mb-4">
                  <label htmlFor="expense" className="block font-medium mb-2">
                      Expense
                  </label>
                  <input
                      type="text"
                      id="expense"
                      className="border-gray-400 py-2 px-3 rounded-lg w-full"
                  />
              </div>
              <div className="mb-4">
                  <label htmlFor="value" className="block font-medium mb-2">
                      Value (PHP)
                  </label>
                  <input
                      type="text"
                      id="value"
                      className="border-gray-400 py-2 px-3 rounded-lg w-full"
                  />
              </div>
              <div className="flex justify-end">
                  <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg"
                  onClick={() => {
                  const expense = document.getElementById('expense').value;
                  const value = document.getElementById('value').value;
                  handleAddExpense(expense, value);
                  }}
                  >
                      Add
                  </button>
                  <button
                  className="ml-4 bg-gray-400 hover:bg-gray-500 text-white py-2 px-3 rounded-lg"
                  onClick={() => setShowModal(false)}
                  >
                      Cancel
                  </button>
              </div>
            </div>
        </div>
      )}
      </div>
  </div>
);
}

export default Budget;
