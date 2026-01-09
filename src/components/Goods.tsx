import NavBar from "./NavBar";

const Goods = () => {
    return(
        <>
         <h1>Товары</h1>
         <button>+ Добавить товар</button>
         <table border="1">
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Смартфоны</td>
                    <td>20 000</td>
                </tr>
                <tr>
                    <td>Чайники</td>
                    <td>3 500</td>
                </tr>
            </tbody>
        </table>
        <NavBar/>
        </>
    )
}

export default Goods;