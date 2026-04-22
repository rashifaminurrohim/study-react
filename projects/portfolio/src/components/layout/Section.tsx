type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section>{children}</section>;
}