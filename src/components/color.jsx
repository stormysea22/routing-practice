const Color = (props) => {

    return (
        <div>
            <h1 style= {{ color:props.color, backgroundColor:props.bg_color }}> The word is: {props.id} </h1>
        </div>
    )
}

export default Color;