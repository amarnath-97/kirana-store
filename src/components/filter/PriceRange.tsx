import React from 'react'

const PriceRange = ({priceRange,setPriceRange}) => {
    return (
        <div className="border-2 w-64 flex flex-col gap-2 p-2">
            <label htmlFor="price-filter">Price Range: ₹ 0 to ₹ {priceRange}</label>
            <input type="range" name="" id="price-filter" min='0' max='2000' step='5' value={priceRange} data-testid="custom-element" onChange={(e) => setPriceRange(e.target.value)} />
        </div>
    )
}

export default PriceRange;