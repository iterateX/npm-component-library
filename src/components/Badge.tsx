export interface BadgeProps {
    color?: 'green' | 'red' | 'gray';
    text: string;
  }
  
  export function Badge({ color = 'gray', text }: BadgeProps) {
    const colorMap = {
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      gray: 'bg-gray-100 text-gray-800',
    };
  
    return (
      <span className={`inline-block px-3 py-1 text-sm rounded-full ${colorMap[color]}`}>
        {text}
      </span>
    );
  };