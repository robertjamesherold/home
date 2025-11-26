import { useEffect, useState } from 'react';

interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        // Weitere Sprite-Varianten können hier hinzugefügt werden
    };
    // Weitere Eigenschaften nach Bedarf
}

const usePokemon = (range?: [number, number]) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!range) return;
            
            try {
                setLoading(true);
                const [start, end] = range;
                
                // Erstelle Array von Promises für alle IDs
                const promises = Array.from(
                    { length: end - start + 1 }, 
                    (_, i) => fetch(`https://pokeapi.co/api/v2/pokemon/${start + i}`)
                );
                
                // Führe alle Requests parallel aus
                const responses = await Promise.all(promises);
                
                // Parse alle Responses
                const results = await Promise.all(
                    responses.map(res => {
                        if (!res.ok) throw new Error(`Response status: ${res.status}`);
                        return res.json();
                    })
                );
                
                setPokemon(results);
                setError(null);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err instanceof Error ? err : new Error('Unknown error'));
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [range?.[0], range?.[1]]);

    return { pokemon, loading, error };
};

export default usePokemon;