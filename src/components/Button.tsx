type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
};

export default function Button({ text, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-[#FE6787] text-white font-bold py-5 px-7 rounded-4xl ${className}`}
        >
            {text}
        </button>
    );
}