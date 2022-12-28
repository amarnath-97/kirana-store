import renderer from 'react-test-renderer';
import { test } from 'vitest';
import PriceRange from './PriceRange';


function toJson(component) {
    const result = component.toJSON()
    console.log(result)
    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)
    return result;
}

const fun = () =>{}

test('Price Range', () => {
    const component = renderer.create(
        <PriceRange priceRange={0} setPriceRange={fun}/>
    )

    let tree = toJson(component)

    console.log('val -> ', tree.children[1].props.value)

    // expect(tree).not.toBeNull();
    // expect(tree).toMatchSnapshot();
})