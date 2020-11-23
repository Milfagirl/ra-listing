function Listing(props) {
    const { dataForList } = props;
    let priceToInsert = ''
    if (dataForList.currency_code === 'USD') {
        priceToInsert = `$${dataForList.price}`;
    } else if (dataForList.currency_code === 'EUR') {
        priceToInsert = `€${dataForList.price}`;
    } else {
        priceToInsert = `${dataForList.price} ${dataForList.currency_code}`
    }
    let classNametoInsert = ''
    if (dataForList.quantity > 20) {
        classNametoInsert = 'level-high';
    } else if (dataForList.quantity > 10) {
        classNametoInsert = 'level-medium';
    } else classNametoInsert = 'level-low'

    return (
        <div className="item">
            <div className="item-image">
                <a href={dataForList.url}>
                    <img src={dataForList.MainImageUrl} alt={dataForList.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{dataForList.title}</p>
                <p className="item-price">{priceToInsert}</p>
                <p className={`item-quantity ${classNametoInsert}`}>{dataForList.quantity} left</p>
            </div>
        </div>

    )
}

export default Listing;

