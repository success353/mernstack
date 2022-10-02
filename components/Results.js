import ThumbNail from "./ThumbNail";

const Results = ({ results }) => {
    return (
        <div className="">
            {results.map((result) => {
                return (
                    <ThumbNail key={result.id} result={result} />
                )
            })}
        </div>
    );
}

export default Results;