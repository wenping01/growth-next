import { InputProps } from '@/types';

export default function ({ title, placeholder, type }: InputProps) {
  return (
    <div className="flex-1">
      <label htmlFor="title">{title}</label>
      <input
        id="title"
        type={type || 'text'}
        placeholder={`${placeholder}`}
        className="w-full rounded-lg border-2 p-4 py-3"
      />
    </div>
  );
}
