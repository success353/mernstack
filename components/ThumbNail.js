import Image from "next/image";

const ThumbNail = ({ result }) => {
    const BACK_DROP = 'https://image.tmdb.org/t/p/original/'
    return (
        <div>
            <Image
                layout="responsive"
                src={ `${BACK_DROP}${result.backdrop_path || result.poster_path}`  || `${BACK_DROP}${result.poster_path}` }
                height={1080}
                width={1920}
            />
            <div>
                <p className='truncate'>{result.overview}</p>
            </div>
        </div>
    );
}

export default ThumbNail;