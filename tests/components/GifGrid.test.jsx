import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Tests in <GifGrid />', () => { 

    const category = 'One punch';
    
    test('should display loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        
        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));


        // screen.debug();
    });

    test('should display Items when images are loaded useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.com/photo.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://goku.com/photo.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2);

        // screen.debug();
    });
 })