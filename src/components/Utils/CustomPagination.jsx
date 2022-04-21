import React, { useState } from 'react';
import CustomButton from '../Buttons/CustomButton';
import './CustomPagination.css';

export default function CustomPagination({ countPerPage, children }) {
    const [curPageNum, setCurPageNum] = useState(0);
    const totalPageNum = Math.ceil((children?.length ?? 1) / countPerPage);
    const lastPageNum = totalPageNum - 1;

    const childrenToShow = children?.slice(curPageNum * countPerPage, curPageNum * countPerPage + countPerPage);

    const handleSetCurPageNum = (newPageNum) => {
        setCurPageNum(newPageNum);
        // window.location.reload(false);
    }

    return (
        <div className="customPagination">
            {childrenToShow?.map((child, index) => {
                return <div key={index}>{child}</div>;
            })}

            <div id="pageNumbers">
                <i id="leftArrow" className="fas fa-arrow-left links" onClick={() => { handleSetCurPageNum(curPageNum > 0 ? curPageNum - 1 : curPageNum) }} />

                <CustomButton onClick={() => { handleSetCurPageNum(0) }} buttonStyle={(curPageNum == 0) ? "primary" : "outline"} buttonSize="sm" buttonDetail="square" marginLeft="5px" marginRight="5px">{0 + 1}</CustomButton>

                {(curPageNum > 3) && (
                    <div id="dottedLine">...</div>
                )} 

                {[curPageNum - 2, curPageNum - 1, curPageNum, curPageNum + 1, curPageNum + 2].map((pageNum, index) => (
                        <div id="pageButton" key={index} >
                            {(pageNum > 0 && pageNum < lastPageNum) && (
                                <CustomButton onClick={() => { handleSetCurPageNum(pageNum) }} buttonStyle={(curPageNum == pageNum) ? "primary" : "outline"} buttonSize="sm" buttonDetail="square" marginLeft="5px" marginRight="5px">{pageNum + 1}</CustomButton>
                            )}
                        </div>
                ))}

                {(curPageNum < lastPageNum - 2) && (
                    <div id="dottedLine">...</div>
                )} 

                {totalPageNum > 1 && (
                    <CustomButton onClick={() => { handleSetCurPageNum(lastPageNum) }} buttonStyle={(curPageNum == lastPageNum) ? "primary" : "outline"} buttonSize="sm" buttonDetail="square" marginLeft="5px" marginRight="5px">{totalPageNum}</CustomButton>
                )}

                <i id="rightArrow" className="fas fa-arrow-right links" onClick={() => { handleSetCurPageNum(curPageNum < lastPageNum ? curPageNum + 1 : curPageNum) }} />
            </div>

        </div>
    );
}