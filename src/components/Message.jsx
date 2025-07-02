const Message = ({ message }) => {
    const isBot = message.role === "bot";

    return (
        <div id={message.id} className={`message ${message.role}-message ${message.loading ? "loading" : ""} ${message.error ? "error" : ""}`}>
            {isBot ? (
                <span className="" style={{ fontSize: "2rem" }} role="img" aria-label="robot">🤖</span>
            ) : (
                <span className="" style={{ fontSize: "2rem" }} role="img" aria-label="user"></span>
            )}

            <p className="text">{message.content}</p>
        </div>
    );
};

export default Message;