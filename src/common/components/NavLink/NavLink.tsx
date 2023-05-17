interface Props {
  item: string;
}

export function NavLink({ item }: Props) {
  return (
    <div className="nav-link">
      <div>{item}</div>
    </div>
  );
}
