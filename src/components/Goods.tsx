import NavBar from "./NavBar";
import { useState } from "react";

const Goods = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    
    const [goods, setGoods] = useState([
        {
            id: 1,
            product: 'Смартфоны',
            quantity: '20 000'
        },
        {
            id: 2,
            product: 'Чайники',
            quantity: '3 500'
        }
    ]);

    const handleAdd = () => {
        if (productName.trim() === '' || quantity === '') {
            alert('Заполните все поля!');
            return;
        }

        const newGood = {
            id: goods.length + 1,
            product: productName,
            quantity: quantity
        };

        setGoods([...goods, newGood]);
        
        setProductName('');
        setQuantity('');
        setIsOpen(false);
    }

    return(
        <>
         <h1>Товары</h1>
         <button onClick={() => setIsOpen(true)}>
            + Добавить товар
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
                    <h2>Введите товар</h2>
                    
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
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Например: 20 000"
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
                </tr>
            </thead>
            <tbody>
                {goods.map((good) => (
                    <tr key={good.id}>
                        <td>{good.product}</td>
                        <td>{good.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <NavBar/>
        </>
    )
}

export default Goods;