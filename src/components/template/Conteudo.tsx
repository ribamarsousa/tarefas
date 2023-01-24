interface IProps {
  children: React.ReactNode;
}

export default function Conteudo(props: IProps) {
  return <div className="flex flex-1 justify-center">{props.children}</div>;
}
