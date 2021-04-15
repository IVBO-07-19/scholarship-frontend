import React from 'react';
import TextField from '@material-ui/core/TextField';
import CheckboxE from './CheckboxE/CheckboxE';
import s from './EducationalApplication.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface TableComponentProps {
}

interface TableComponentState {
  
}


class EducationalApplication extends React.Component<TableComponentProps, TableComponentState> {

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
                <CheckboxE></CheckboxE>
                <div className={s.box1}>
                    <p className={s.title}>Получатель награды (приза) в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, за результаты проектной деятельности и (или) опытно-конструкторской работы.</p>
                    <div className={s.input_fields}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Наименование мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Занятое место"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Степень участия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.box2}>
                    <p className={s.title}>Победитель или призер международной, всероссийской, ведомственной или региональной олимпиады, конкурса, соревнования, состязания или иного мероприятия, направленных на выявление учебных достижений студентов, проведенных в течение 1-ого года, предшествующего назначению повышенной государственной академической:</p>
                    <div className={s.input_fields2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Наименование мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Уровень"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Занятое место"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Степень участия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>
                    </div>
                </div>
                                
            </div>
    )}
}

export default EducationalApplication;