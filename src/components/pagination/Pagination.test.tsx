import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest';
import Pagination from './Pagination';

const handleClick = () =>{}

test('Pagination should show no of pages', async ()=>{
    render(<Pagination totalPost={10} postPerPage={2} handleClick={handleClick}/>);

    const page = await screen.findAllByRole('button');
    expect(page.length).toBe(5);
})