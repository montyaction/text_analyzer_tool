import { ChangeEvent } from 'react';
import './index.scss'

type TextInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ value, onChange }: TextInputProps) => {
  return (
    <textarea
      className="text-area"
      value={value}
      onChange={onChange}
      placeholder="Paste your text here..." 
    />
  );
}

export default TextArea;
