import NavBar from "./NavBar";
import { useState } from "react";

const Sales = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    
    const [sales, setSales] = useState([
        {
            id: 1,
            product: 'Смартфоны',
            quantity: 3,
            amount: '7 000 kzt',
            date: '23.04.2025'
        },
        {
            id: 2,
            product: 'Кофе',
            quantity: 4,
            amount: '3 200 kzt',
            date: '23.04.2025'
        }
    ]);

    const handleAdd = () => {
        if (productName.trim() === '' || quantity === '' || amount === '' || date === '') {
            alert('Заполните все поля!');
            return;
        }

        const newSale = {
            id: sales.length + 1,
            product: productName,
            quantity: Number(quantity),
            amount: amount,
            date: date
        };

        setSales([...sales, newSale]);
        
        setProductName('');
        setQuantity('');
        setAmount('');
        setDate('');
        setIsOpen(false);
    }

    return(
        <>
        <h1>Продажи</h1>
         <button onClick={() => setIsOpen(true)}>
            + Добавить продажу
         </button>

        {isOpen && (
            <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '500px',
                }}>
                    <h2>Введите продажу</h2>
                    
                    <div style={{ marginBottom: '10px' }}>
                        <label>Товар:</label>
                        <br/>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Название товара"
                            style={{ width: '100%', padding: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>Количество:</label>
                        <br/>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Количество"
                            style={{ width: '100%', padding: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>Сумма:</label>
                        <br/>
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Например: 7 000 kzt"
                            style={{ width: '100%', padding: '5px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>Дата:</label>
                        <br/>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={{ width: '100%', padding: '5px' }}
                        />
                    </div>

                    <button onClick={handleAdd}>Добавить</button>
                    <br/>
                    <br/>
                    <button onClick={() => setIsOpen(false)}>
                    Закрыть
                    </button>
          </div>
        </div>
      )}

         <table border="1">
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale) => (
                    <tr key={sale.id}>
                        <td>{sale.product}</td>
                        <td>{sale.quantity}</td>
                        <td>{sale.amount}</td>
                        <td>{sale.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <NavBar/>
        </>
    )
}

export default Sales;