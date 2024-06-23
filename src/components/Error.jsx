export default function Error({title, message, onconfirm}){
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
            {
                onconfirm && (
                    <div id="confirmation-actions">
                        <button className="button" onClick={onconfirm}>Okay</button>
                    </div>
                )
            }
        </div>
    );
}