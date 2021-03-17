const Number = (props) => {

    if (isNaN(props.id)) {
        return (
            <div>
                <p>Here is your word: {props.id} </p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Here is your number: {props.id} </p>
            </div>
        )
    };
};

export default Number;