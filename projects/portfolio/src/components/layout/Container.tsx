type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="max-w-full mx-1">{children}</div>;
}
