import React from 'react';
import TextField from '@material-ui/core/TextField';
import s from './PublicApplication.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface TableComponentProps {
}

interface TableComponentState {
  
}


class PublicApplication extends React.Component<TableComponentProps, TableComponentState> {

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
                <div className={s.box1}>
                    <p className={s.title}>Систематическое участие в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, организуемой Университетом или с его участием. <b> Описываются только мероприятия Университета!</b></p>
                    <p className={s.title_centr}>ДЛЯ РАЗОВЫХ УЧАСТИЙ В МЕРОПРИЯТИЯХ</p>
                    <div className={s.input_fields}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Выполненные работы"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Даты мероприятий"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="ФИО"
                                size="small"
                                className={s.input_field}
                                />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="Должность"
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
                    <p className={s.title}>Степень участия в мероприятии (заполняется Комиссией)</p>
                    <div className={s.input_fields_dis}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Организатор"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Соорганизатор"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Помощь в организации"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                    </div>
                    <p className={s.title_centr}>ДЛЯ СИСТЕМАТИЧЕСКОГО ВЫПОЛНЕНИЯ ОДНОТИПНОГО ФУНКЦИОНАЛА</p>
                    <div className={s.input_fields}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Наименование деятельности"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Выполняемый функционал"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Период выполнения"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="ФИО"
                                size="small"
                                className={s.input_field}
                                />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="Должность"
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
                    <p className={s.title}>Баллы (заполняется Комиссией)</p>
                    <div className={s.input_fields_dis}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Организатор"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Соорганизатор"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Помощь в организации"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.box2}>
                    <p className={s.title}>Систематическое участие в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, в качестве добровольца (волонтера) в подготовке и проведении общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, <b>организуемой Университетом или с его участием.</b></p>
                    <div className={s.input_fields}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Выполненные работы"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Даты мероприятий"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="ФИО"
                                size="small"
                                className={s.input_field}
                                />
                        </div>
                        <div>
                                <TextField
                                id="outlined-size-small"
                                variant="outlined"
                                placeholder="Должность"
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
                    <p className={s.title}>Степень участия в мероприятии (заполняется Комиссией)</p>
                    <div className={s.input_fields_dis2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Руководитель проекта"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Организатор"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Тимлидер"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Волонтер"
                            size="small"
                            disabled
                            className={s.input_field}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.box2}>
                    <p className={s.title}>Систематическое участие в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, в деятельности по информационному обеспечению общественно значимых мероприятий, общественной жизни Университета</p>
                    <div className={s.input_fields2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Наименование деятельности"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Выполняемый функционал"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Период выполнения"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="ФИО"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Должность"
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
                    <div className={s.inline_field}>
                        <p className={s.title_inline}>Баллы (заполняется Комиссией): </p>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            disabled
                            className={s.inp}
                            />
                        </div>
                    </div>
                    <div className={s.input_fields3}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название статьи"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название источника СМИ"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Уровень издания"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Количество соавторов"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата публикации"
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
                    <div className={s.inline_field}>
                        <p className={s.title_inline}>Баллы (заполняется Комиссией): </p>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            disabled
                            className={s.inp}
                            />
                        </div>
                    </div>
                </div>
                                
            </div>
    )}
}

export default PublicApplication;