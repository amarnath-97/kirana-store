import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from 'vitest';
import Search from './Search';

function fun (){}

test("Search Component", async () => {
    render(<Search title='search' searchTerm={'w'} setSearchTerm={fun} isSorted={false} setIsSorted={fun}/>);
    const search : HTMLInputElement = await screen.findByPlaceholderText('Enter something to search..');
    fireEvent.change(search, { target: { value: 'w' } });
    expect(search.value).toBe('w');
});