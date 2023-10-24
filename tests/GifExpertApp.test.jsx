import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Tests in <GifExpertApp />', () => { 
    
    test('Check if text changes when writing in input', () => {
        
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Pikachu' } });

        expect(input.value).toBe('Pikachu');
        // screen.debug();
    });

    test('should match with snapshot', () => {
        
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('should add a new category', () => {
        
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Pikachu' } });
        fireEvent.submit(form);

        expect(screen.getByText('Pikachu'));
        // screen.debug();
    });

    test('should not add repeated category ', () => {
        
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Eevee already exists
        fireEvent.input(input, { target: { value: 'eevee' } });
        fireEvent.submit(form);

        const count = screen.getAllByText('eevee')
        expect(count.length).toEqual(1);

        screen.debug();
    });


 });