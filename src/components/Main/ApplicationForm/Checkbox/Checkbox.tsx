import React from 'react';
import s from './Checkbox.module.css';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import { useMain } from '../../MainProvider';



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
  // const [checkboxes, setcheckboxes] = React.usecheckboxes({
  //   checkedY: false,
  //   checkedH: false,
  //   checkedO: false,
  //   checkedK: false,
  //   checkedS: false,
  //   checkedX: false,
  //   checkedP: false,
  // });
    const {checkboxes, setCheckboxes} = useMain()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.name, event.target.checked,  setCheckboxes)
    setCheckboxes({...checkboxes, [event.target.name]: event.target.checked });
  };

  return (
    <div className={s.checkbox_grid}>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedY} onChange={handleChange} name="checkedY" style={{height: '1px'}} />
              <p>Учебная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedH} onChange={handleChange} name="checkedH" style={{height: '1px'}} />
              <p>Научно-исследовательская деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedO} onChange={handleChange} name="checkedO" style={{height: '1px'}} />
              <p>Общественная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedK} onChange={handleChange} name="checkedK" style={{height: '1px'}} />
              <p> Культурно-творческая деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedS} onChange={handleChange} name="checkedS" style={{height: '1px'}} />
              <p>Спортивная деятельность</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedX} onChange={handleChange} name="checkedX" style={{height: '1px'}} />
              <p className={s.soglasie}>Я даю согласие на обработку и хранение информации, предоставляемой мною для участия в данном конкурсе.</p>
            </div>
            <div className={s.check_inline}>
              <GreenCheckbox checked={checkboxes.checkedP} onChange={handleChange} name="checkedP" style={{height: '1px'}} />
              <p className={s.soglasie}> Я даю согласие на публикацию моих персональных данных (ФИО, шифр, Институт, вид деятельности) в сети Интернет при объявлении результатов данного конкурса.</p>
            </div>
      </div>
  );
}
