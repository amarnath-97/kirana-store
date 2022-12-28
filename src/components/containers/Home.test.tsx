import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

let data = [
    {
        category: {
            quality: "good",
        },
        _id: "639aad1d9512feab115031c6",
        title: "dalsss",
        price: 729,
        description:
            "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
        img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
        userId: "4",
        __v: 0,
    },
    {
        category: {
            quality: "good",
        },
        _id: "639aad1d9512feab115031c7",
        title: "dalsss",
        price: 729,
        description:
            "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
        img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
        userId: "4",
        __v: 0,
    },
    {
        category: {
            quality: "good",
        },
        _id: "639aad1d9512feab115031c8",
        title: "dalsss",
        price: 729,
        description:
            "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
        img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
        userId: "4",
        __v: 0,
    },
];

const fun = () => { }

describe("Home Component", () => {
    render(
        <Router>
            <Home data={data} />
        </Router>
    );

    test('Card on click ', async () => {
        render(
            <Router>
                <Home data={data}
                    handleClick={fun}
                    totalPage={5}
                    priceRange={237}
                    setPriceRange={fun}
                    postPerPage={4} />
            </Router>
        );
        const card = await screen.findAllByRole('article');
        // console.log(card.length)
        expect(card.length).toBe(6)
        fireEvent.click(card[0]);
        // console.log('card  ----->   ', card);
    });

    test('should first', async () => {
        render(
            <Router>
                <Home data={data}
                    handleClick={fun}
                    totalPage={5}
                    priceRange={45}
                    setPriceRange={fun}
                    postPerPage={4} />
            </Router>
        );
        
        const priceChange = await screen.getByTestId('custom-element');
        fireEvent.change(priceChange, { target: { value: 45 } });
        expect(priceChange.value).toBe('45');
    });

})