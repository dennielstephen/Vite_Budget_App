import { useState } from 'react';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQty, setNewQty] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('Grocery');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItemObj = {
        item: newItem,
        qty: newQty,
        price: newPrice,
        location: newLocation
        };
        setItems([...items, newItemObj]);
        setNewItem('');
        setNewQty('');
        setNewPrice('');
        setNewLocation('Grocery');
    };

    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        items.forEach((item) => {
        totalPrice += item.qty * item.price;
        });
        return totalPrice;
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Item" className="border p-2 flex-1" required />
                    <input type="number" value={newQty} onChange={(e) => setNewQty(e.target.value)} placeholder="Qty" min="1" step="1" className="border p-2 w-20" required />
                    <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Price" min="0" step="0.01" className="border p-2 w-28" required />
                    <select value={newLocation} onChange={(e) => setNewLocation(e.target.value)} className="border p-2 w-32">
                        <option value="Grocery">Grocery</option>
                        <option value="Wet Market">Wet Market</option>
                    </select>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Add</button>
                    </div>
                </form>

                <div className="mt-4">
                    {items.length === 0 ? (
                        <p>No items yet.</p>
                    ) : (
                    <table className="border-collapse border w-full">
                        <thead>
                            <tr>
                                <th className="border p-2">#</th>
                                <th className="border p-2">Item</th>
                                <th className="border p-2">Qty</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Location</th>
                                <th className="border p-2">Total Price</th>
                                <th className="border p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{item.item}</td>
                                    <td className="border p-2">{item.qty}</td>
                                    <td className="border p-2">{item.price}</td>
                                    <td className="border p-2">{item.location}</td>
                                    <td className="border p-2">{currencyFormat(item.qty * item.price)}</td>
                                    <td className="border p-2">
                                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">Delete</button>
                                    </td>
                                </tr>
                                ))}
                                <tr>
                                    <td colSpan="5" className="text-right font-bold p-2">Total Price:</td>
                                    <td className="font-bold p-2">{currencyFormat(getTotalPrice())}</td>
                                    <td></td>
                                </tr>
                        </tbody>
                    </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;

function currencyFormat(num) {
    if (typeof num !== 'number') {
      return '₱0.00';
    }
    return '₱' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '₱1,');
  }