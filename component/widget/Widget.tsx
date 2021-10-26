import { ReactNode } from 'react';
import { wrapperStyle } from '../../util/styles';

type Props = {
  header: string;
  children: ReactNode;
};

function Widget(props: Props) {
  return (
    <div className="widget">
      <div className="widget-header">{props.header}</div>
      {props.children}
    </div>
  );
}

export default Widget;
