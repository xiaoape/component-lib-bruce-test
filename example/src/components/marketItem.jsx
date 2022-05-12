/*
 * @Author: bruceliu bruceliu@nswap.com
 * @Date: 2022-05-06 10:36:45
 * @LastEditors: bruceliu bruceliu@nswap.com
 * @LastEditTime: 2022-05-06 10:46:25
 * @FilePath: /react-business/src/components/marketItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react';

const MarketItem = ({ userInfo }) => {
    console.log(userInfo, 'nnnn')
    useEffect(() => {
        console.log(userInfo, 'hhhhhh')
    }, [userInfo])
    return (
        <div>
            <div>fsdfsd</div>
            <div>{userInfo.name}</div>
        </div>
    )
}

export default MarketItem