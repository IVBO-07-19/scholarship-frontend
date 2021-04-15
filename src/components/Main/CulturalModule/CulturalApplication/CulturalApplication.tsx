import React from 'react';
import TextField from '@material-ui/core/TextField';
import s from './CulturalApplication.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface TableComponentProps {
}

interface TableComponentState {
  
}


class CulturalApplication extends React.Component<TableComponentProps, TableComponentState> {

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
                    <p className={s.title}>Получение в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, награды (приза) за результаты культурно-творческой деятельности, осуществленной в рамках деятельности, проводимой Университетом или иной организацией, в том числе в рамках конкурса, смотра и иного аналогичного международного, всероссийского, ведомственного, регионального мероприятия</p>
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
                            placeholder="Уровень мероприятия"
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
                    <p className={s.title}>Публичное представление в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, созданного произведения литературы или искусства</p>
                    <div className={s.input_fields2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название созданного произведения "
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Место публичного представления "
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата представления"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>
                        <div></div>
                        
                    </div>
                </div>
                <div className={s.box2}>
                    <p className={s.title}>Систематическое участие в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) публичной культурно-творческой деятельности воспитательного, пропагандистского характера и иной общественно значимой публичной культурно-творческой деятельности</p>
                    <p className={s.title}>Участие в мероприятиях В СОСТАВЕ творческого коллектива Университета</p>
                    <div className={s.input_fields3}>
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
                            placeholder="Уровень мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Даты"
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
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>                        
                    </div>
                    <p className={s.title}>Участие в мероприятиях НЕ В СОСТАВЕ творческого коллектива Университета</p>
                    <div className={s.input_fields3}>
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
                            placeholder="Уровень мероприятия"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Даты"
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
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>                        
                    </div>
                </div>
                                
            </div>
    )}
}

export default CulturalApplication;