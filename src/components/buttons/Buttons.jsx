import Button from '../button/Button';

const Buttons = ({handleClick}) => {
    return (
        <>
            <div>
                <Button handleClick={handleClick}>Botón 1</Button>
                <Button handleClick={handleClick}>Botón 2</Button>
            </div>
        </>
    );
};
export default Buttons;
