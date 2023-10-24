import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests in useFetchGifs Hook', () => { 
    
    test('should return initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('One punch') )
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an images array and isLoading equal to false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One punch') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
 })