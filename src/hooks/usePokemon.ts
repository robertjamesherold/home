
async function useFetch(url:string) {
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

const usePokemon = (number: number | number & number) => {
  const count = Array.isArray(number) ? `${number[0]},${number[1]}` : number.toString();
    const pokemon = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${count}`
    );
    return pokemon;
};

export default usePokemon;