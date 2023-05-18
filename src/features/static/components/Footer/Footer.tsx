import './Footer.scss';

interface Props {
  copyrightText: string;
}

export function Footer({ copyrightText }: Props) {
  return (
    <div className="footer">
      <div className="footer__copyright">{copyrightText}</div>
    </div>
  );
}
