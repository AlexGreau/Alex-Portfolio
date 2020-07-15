import React, { useEffect, useState } from 'react';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import classes from './Orders.module.css';
import Order from './Order/Order';
import Spinner from '../../components/ui/spinner/Spinner';

const Orders = (props) => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // fetch orders
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrders(fetchedOrders);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            })

        return () => {
            return null;
        }
    }, [])

    let body = (
        <Spinner />
    )

    if (!loading) {
        body = orders.map(order => {
            return <Order key={order.id} price={order.price} ingredients={order.ingredients}/>
        })

    }


    return (
        <div>
            {body}
        </div>
    )

}

export default Orders; //withErrorHandler(Orders);