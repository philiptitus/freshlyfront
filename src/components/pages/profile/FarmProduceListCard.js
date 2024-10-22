import React from "react";
import { FaMinusCircle } from "react-icons/fa";

function FarmProduceListCard({Crop, GrownBy, BagsHarvested, BagsSold}) {
    return (
        <div className="FarmProcuceListCard">
            <div className='ProduceListItems mt-[20px] gap-x-[12px] lg:gap-x-[60px] grid grid-cols-4'>
                {/*Crop */}
                <div className='Crop lg:ml-[40px]'>
                  <p className='text-start lg:text-center font-inter font-[700] text-[#000000] text-[10px] lg:text-[16px] my-0'>{Crop} </p>
                </div>
                {/*Product Grown On */}
                <div className='GrownBy'>
                  <p className='text-start font-inter font-[700] text-[#000000] text-[10px] lg:text-[16px] my-0'>{GrownBy} </p>
                </div>
                {/*Harvests */}
                <div className='BagsHarvested'>
                  <p className='text-center font-inter font-[700] text-[#000000] text-[10px] lg:text-[16px] my-0'>{BagsHarvested} </p>
                </div>
                {/*Sold Bags */}
                <div className='BagsSold block lg:ml-[100px]'>
                    <div className="SoldBagsWrapper flex justify-between">
                        {/*Quantity Sold */}
                        <div className="Quantity block ml-[20px] lg:ml-0 mr-[6px] lg:mr-[16px]">
                            <p className='text-center font-inter font-[700] text-[#000000] text-[10px] lg:text-[16px] my-0'>{BagsSold} </p>
                        </div>
                        {/*Remove Button */}
                        <div className="RemoveButton block">
                            <FaMinusCircle  className="text-[#FF0C1A]"/>
                        </div>
                    </div> {/*Sold Bags Wrapper */}
                </div> {/*Sold Bags */}
              </div>  {/*Produce List Headers */}
        </div>
    )
}

export default FarmProduceListCard