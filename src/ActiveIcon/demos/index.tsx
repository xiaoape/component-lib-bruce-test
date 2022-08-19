import React, { useState } from 'react';
import { ActiveIcon } from 'component-lib-bruce-test';

function ActiveIconDemo (props: any) {
    return (
        <ActiveIcon 
        normalUrl="https://raw.githubusercontent.com/xiaoape/images/master/resume/check.png" 
        activeUrl="https://github.com/xiaoape/images/blob/master/resume/check%20(1).png" 
        trigger="hover" width={36} height={36} {...props} />
    )
}
export default ActiveIconDemo
