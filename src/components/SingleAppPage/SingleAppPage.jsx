import { useParams } from "react-router-dom";

const divStyle = {
    margin: '0 auto',
    padding: '5px 20px'
}

function SingleAppPage() {
    console.log(useParams());
    const params = useParams()

    function checkParams({ category, title }) {
        if (category === 'category' && title === 'title') {
            return (
                <p>Nested Page</p>
            )
        }

        return (
            <h1>ERROR</h1>
        )
    }

    return (
        <div style={divStyle}>
            {checkParams(params)}
        </div>
    );
}

export default SingleAppPage;