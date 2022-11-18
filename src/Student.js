import Score from "./Score"

export default function Student({ name, bio, scores }) {
    return (
        <>
            <p> Name: {name} </p>
            <p> Bio: {bio} </p>
            <p> Scores:
                <>
                    {scores.map(score => (
                        <Score
                            date={score.date}
                            score={score.score}
                        />
                    ))}
                </>
            </p>
        </>
    )
}