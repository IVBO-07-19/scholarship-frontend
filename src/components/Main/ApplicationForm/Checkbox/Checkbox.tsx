import React from 'react';
import s from './Checkbox.module.css';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';



const GreenCheckbox = withStyles({
  root: {
    color: '#1D4CC5',
    '&$checked': {
      color: '#1D4CC5',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedY: false,
    checkedH: false,
    checkedO: false,
    checkedK: false,
    checkedS: false,
    checkedX: false,
    checkedP: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={s.checkbox_grid}>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedY} onChange={handleChange} name="checkedY" style={{height: '1px'}} />
              <p>Учебная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedH} onChange={handleChange} name="checkedH" style={{height: '1px'}} />
              <p>Научно-исследовательская деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedO} onChange={handleChange} name="checkedO" style={{height: '1px'}} />
              <p>Общественная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedK} onChange={handleChange} name="checkedK" style={{height: '1px'}} />
              <p> Культурно-творческая деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedS} onChange={handleChange} name="checkedS" style={{height: '1px'}} />
              <p>Спортивная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedX} onChange={handleChange} name="checkedX" style={{height: '1px'}} />
              <p className={s.soglasie}>Я даю согласие на обработку и хранение информации, предоставляемой мною для участия в данном конкурсе.</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={state.checkedP} onChange={handleChange} name="checkedP" style={{height: '1px'}} />
              <p className={s.soglasie}> Я даю согласие на публикацию моих персональных данных (ФИО, шифр, Институт, вид деятельности) в сети Интернет при объявлении результатов данного конкурса.</p>
            </div>
      </div>
  );
}
