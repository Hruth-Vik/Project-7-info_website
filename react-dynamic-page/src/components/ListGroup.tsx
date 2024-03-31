function ListGroup() {
    let items = [
        'New York',
        'Paris',
        'Tokyo',
        'San Francisco',
        'London'
    ];
    items=[];
    if(items.length===0)
    {
        return <p>this is empty</p>
    }

    return (
        <>
            <ul className="list-group">

                {items.map(item => <li key={item}>{item}</li>)}


                {/* <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li> */}


            </ul>
        </>
    );
}

export default ListGroup;
