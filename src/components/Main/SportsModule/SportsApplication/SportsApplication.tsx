import React from 'react';
import TextField from '@material-ui/core/TextField';
import s from './SportsApplication.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface TableComponentProps {
}

interface TableComponentState {
  
}


class SportsApplication extends React.Component<TableComponentProps, TableComponentState> {

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
                    <p className={s.title}>Получение в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты спортивной деятельности, осуществленной в рамках спортивных международных, всероссийских, ведомственных, региональных мероприятий, проводимых Университетом или иной организацией</p>
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
                            placeholder="Уровень"
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
                            placeholder="Занятое место"
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
                    <p className={s.title}>Выполнение нормативов и требований золотого знака отличия «Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» (ГТО) соответствующей возрастной группы на дату назначения повышенной государственной академической стипендии</p>
                    <div className={s.input_fields2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Наличие золотого знака ГТО"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата получения"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Возрастная группа выполненных нормативов"
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
                    <p className={s.title}>Систематическое участие в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, в спортивных мероприятиях воспитательного, пропагандистского характера и (или) иных общественно значимых спортивных мероприятиях</p>
                    <p className={s.title}>Участие в мероприятиях В СОСТАВЕ сборной Университета в Московских студенческих спортивных играх</p>
                    <div className={s.input_fields3}>
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
                    <p className={s.title}>Участие в мероприятиях НЕ В СОСТАВЕ сборной Университета</p>
                    <div className={s.input_fields4}>
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
                    <p className={s.title}>Участие в онлайн мероприятиях Университета</p>
                    <div className={s.input_fields5}>
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

export default SportsApplication;