import React, { useEffect, useState } from 'react';

import ReceiptsRow from '../../components/Rows/ReceiptsRow';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function RecentOrders(props) {

    return (
        <div className="vertical-md userPages">
            <div className="title">{"My orders"}</div>

            <ReceiptsRow />
            
        </div>
    );
}
