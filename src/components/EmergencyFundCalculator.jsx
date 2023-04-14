import { useState } from 'react';

const EmergencyFundCalculator = () => {

    // Define initial state values
    const [expenses, setExpenses] = useState('');
    const [emergencyFund, setEmergencyFund] = useState(0);
    const [selectedFund, setSelectedFund] = useState('normal');

    // Function to compute emergency fund based on expenses and selected fund
    const computeEmergencyFund = () => {
        const minFund = expenses * 3;
        const normalFund = expenses * 6;
        const pandemicFund = expenses * 12;
        const physicalCash = expenses / 2;
        const digiBankATM = expenses * 2;
        const digiBankNoATM = emergencyFund - (physicalCash + digiBankATM);
    
        return {
        minFund,
        normalFund,
        pandemicFund,
        physicalCash,
        digiBankATM,
        digiBankNoATM,
        selectedFund
        };
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Compute emergency fund based on current state values
        const fund = computeEmergencyFund();
    
        // Set emergency fund based on selected fund
        const selectedFundAmount = fund.selectedFund === 'minimum' ? fund.minFund 
            : fund.selectedFund === 'normal' ? fund.normalFund 
            : fund.selectedFund === 'pandemic' ? fund.pandemicFund 
            : 0;
    
        setEmergencyFund(selectedFundAmount);
    };

    const numberWithCommas = (num) => {
        return num.toLocaleString('en-US');
    }
    

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Fund Calculator</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center">
                <label htmlFor="expenses" className="font-medium mb-2">Monthly Expenses</label>
                <input
                    id="expenses"
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:border-blue-500"
                    required
                />
                </div>
                <div className="flex flex-col items-center">
                <label htmlFor="selectedFund" className="font-medium mb-2">Emergency Fund Type</label>
                <select
                    id="selectedFund"
                    value={selectedFund}
                    onChange={(e) => setSelectedFund(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:border-blue-500"
                >
                    <option value="minimum">Minimum Fund</option>
                    <option value="normal">Normal Fund</option>
                    <option value="pandemic">Pandemic Level Fund</option>
                </select>
                </div>
                <button type="submit" className="py-2 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Compute
                </button>
            </form>
            {emergencyFund > 0 && (
                <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Emergency Fund</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-gray-100 py-4 px-8 rounded-lg">
                    <p className="text-lg font-medium mb-2">Physical Cash at Home</p>
                    <p className="text-2xl font-bold">₱ {numberWithCommas(computeEmergencyFund().physicalCash)}</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 py-4 px-8 rounded-lg">
                    <p className="text-lg font-medium mb-2">Digital Bank with ATM</p>
                    <p className="text-2xl font-bold">₱ {numberWithCommas(computeEmergencyFund().digiBankATM)}</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 py-4 px-8 rounded-lg">
                    <p className="text-lg font-medium mb-2">Digital Bank without ATM</p>
                    <p className="text-2xl font-bold">₱ {numberWithCommas(computeEmergencyFund().digiBankNoATM)}</p>
                    </div>
                </div>
                </div>
            )}
        </div>
    )}
export default EmergencyFundCalculator;