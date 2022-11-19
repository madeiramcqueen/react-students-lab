import Score from "./Score"

export default function Student({ student }) {
    return (
        <>
            <p> Name: {student.name} </p>
            <p> Bio: {student.bio} </p>
            <p> Scores:
                <>
                    {student.scores.map(score => (
                        <Score
                            score={score}
                        />
                    ))}
                </>
            </p>
        </>
    )
}