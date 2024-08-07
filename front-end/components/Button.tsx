import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:string;
};

const Button = ({ type, title, icon ,variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && <Image src={icon} alt={title} width={20} height={20} className="mr-2" />}
      {title}
    </button>
  );
};

export default Button;
