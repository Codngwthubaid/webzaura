import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons;
  color: string;
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name];

  // Check if the icon exists, otherwise return null or a default icon
  if (!LucideIcon) {
    console.error(`Icon "${name}" not found in lucide-react`);
    return null; // or return a default icon if needed
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
