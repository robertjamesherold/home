import g3 from './g3.webp'
import g4 from './g4.webp'
import g5 from './g5.webp'
import g6 from './g6.webp'
import g7 from './g7.webp'
import g8 from './g8.webp'
import g9 from './g9.webp'
import g10 from './g10.webp'
import g11 from './g11.webp'
import g12 from './g12.webp'

type VillaOlivetoProps = {
    map?: number
    className?: string
    }

const VillaOlivetoImage:React.FC<VillaOlivetoProps> = ({map, className}:VillaOlivetoProps) => {
    const imageMap = 
        map == 1 ? g3 
    :   map == 2 ? g4
    :   map == 3 ? g5
    :   map == 4 ? g6
    :   map == 5 ? g7
    :   map == 6 ? g8
    :   map == 7 ? g9
    :   map == 8 ? g10
    :   map == 9 ? g11
    :   map == 10 ? g12
    :   g3

    return(
        <div className={`relative ${className}`}>
            <img 
                src={imageMap}
                className='relative inline-block w-full h-full object-cover'
            />    
        </div>
    )
}

export default VillaOlivetoImage