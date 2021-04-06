import React from 'react';
import s from './ApplicationForm.module.css';
import TextField from '@material-ui/core/TextField';

interface TableComponentProps {
}

interface TableComponentState {
  
}

class ApplicationForm extends React.Component<TableComponentProps, TableComponentState> {

    constructor(props: TableComponentProps){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        fetch('https://product.pitstopshop.site/get-all-products')
            .then(resp => {
                resp.json().then(data => {
                    this.setState({products: data})
                })
            });
    }
    
    render(){
        return(
            <div className={s.main_container}>
                <div className={s.inputs}>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Фамилия"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Имя"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Отчество"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="№ студ. билета"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Группа"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Контактный телефон"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                    <div className={s.input_div}>
                        <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        placeholder="Институт"
                        size="small"
                        className={s.input_field}
                        />
                    </div>
                </div>
                <div className={s.checkbox_activities}>

                </div>
                
                
            </div>
    )}
}

export default ApplicationForm;