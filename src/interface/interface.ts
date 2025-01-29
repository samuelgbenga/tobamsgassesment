

export interface ButtonProps {
    label: string;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "block-primary" | "block-secondary";
  }


  export interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
  }


  export interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    children?: React.ReactNode;
  }