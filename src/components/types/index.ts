export interface SearchProps {
    title: string,
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
    isSorted: boolean,
    setIsSorted: React.Dispatch<React.SetStateAction<boolean>>
}

export interface HomeProps {
    data: Object[],
    postPerPage: number,
    handleClick: Function,
    totalPage: number,
    priceRange: number,
    setPriceRange: Function
}

export interface ProductDetailProps {
    addCart: Function
}

export interface CartCardProps {
    value: Object,
    handleCount: Function
}

export interface CartProps {
    cart: Object[],
    handleCount: Function
}