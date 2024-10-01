const dots = Array.from({ length: 100 }, (_, i) => (
    <div
        key={i}
        className="dot"
        style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
        }}
    />
));

export default dots