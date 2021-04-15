import React from 'react';
import s from './CheckboxE.module.css';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';



const GreenCheckbox = withStyles({
  root: {
    color: '#1D4CC5',
    '&$checked': {
      color: '#1D4CC5',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CheckboxE() {
  const [state, setState] = React.useState({
    checkedE: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
        <div className={s.check_inline}>
            <GreenCheckbox checked={state.checkedE} onChange={handleChange} name="checkedE" style={{height: '1px', marginLeft: '7px', marginTop: '5px'}} />
            <p className={s.soglasie}>Получение в течение не менее 2-х следующих друг за другом промежуточных аттестаций, предшествующих назначению повышенной государственной академической стипендии, только оценок «отлично»</p>
        </div>
  );
}
