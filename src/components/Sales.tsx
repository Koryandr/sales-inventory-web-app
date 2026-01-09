import NavBar from "./NavBar";

const Sales = () => {
    return(
        <>
        <h1>Продажи</h1>
         <button>+ Добавить продажу</button>
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
                <tr>
                    <td>Смартфоны</td>
                    <td>3</td>
                    <td>7 000 kzt</td>
                    <td>23.04.2025</td>
                </tr>
                <tr>
                    <td>Кофе</td>
                    <td>4</td>
                    <td>3 200 kzt</td>
                    <td>23.04.2025</td>
                </tr>
            </tbody>
        </table>
        <NavBar/>
        </>
    )
}

export default Sales;