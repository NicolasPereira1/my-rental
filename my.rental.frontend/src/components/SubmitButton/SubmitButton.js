import './SubmitButton.css';
export const SubmitButton = ({text, icon = '', style =  {color: 'inherit', backgroundColor:'inherit'}} ) => {
    return (
        <button className='submitButton' style={style}>
            { text }
            { icon }
        </button>
    );
}