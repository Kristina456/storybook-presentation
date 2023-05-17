interface Props {
  item: string;
}

export function Footer({ item }: Props) {
  return <div>{item}</div>;
}
