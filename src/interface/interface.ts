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

export interface InputProps {
  placeholder: string;
  button?: React.ReactNode;
  extraElement?: React.ReactNode;
  variant?: "largeInput" | "smallInput";
}

export interface FirstCardProps {
  description: string;
  price: string;
  time: string;
  variant: "noborder" | "border";
  image: string;
  noPeopleBidding: number;
  islike: boolean;
  noOfLike: number;
  bidders?: string[];
  size?: "small";
}

export interface FirstCardFooterProps {
  noPeopleBidding: number;
  islike: boolean;
  noOfLike: number;
  bidders?: string[];
}

export interface PriceCardProps {
  price: number;
  emoji: React.ReactNode;
  description: string;
}

export interface MiniFirstCardProps {
  description: string;
  price: string;
  time: string;
  image: string;
  noPeopleBidding: number;
  islike: boolean;
}
