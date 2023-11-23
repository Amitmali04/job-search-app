

interface ButtonProps {
    text?: string;
    onClick?: () => void;
  }

  export const BlueButton: React.FC<ButtonProps> = ({ text, onClick}) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded text-center my-2"
          >
            {text}
          </button>
      );
}