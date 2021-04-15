import React from 'react';
import TextField from '@material-ui/core/TextField';
import CheckboxS from './CheckboxS/CheckboxS';
import s from './ScientificApplication.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface TableComponentProps {
}

interface TableComponentState {
  
}


class ScientificApplication extends React.Component<TableComponentProps, TableComponentState> {

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
                    <p className={s.title}>Получение в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии</p>
                    <div className={s.input_fields}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название награды"
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
                            placeholder="Отношение к вузу"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата получения награды"
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
                    <div className={s.input_fields2}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название документа"
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
                            placeholder="Отношение к ВУЗу"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Дата получения документа"
                            size="small"
                            className={s.input_field}
                            />
                        </div>
                        <div></div>
                        <div>
                            <button className={s.btn_add}>
                                <AddCircleIcon style={{color:'#009E3F', height: '40px', width: '40px'}} />
                            </button>
                        </div>
                    </div>
                    <div className={s.input_fields3}>
                        <div>
                            <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            placeholder="Название гранта на выполнение НИР"
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
                <div className={s.box2}>
                    <p className={s.title}>Перечень публикаций в научном (учебно-научном, учебно-методическом) международном, всероссийском, ведомственном или региональном издании, в издании Университета или иной организации в течение 1-ого года, предшествующего назначению повышенной государственной академической стипендии</p>
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
                            placeholder="Название сборника"
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
                </div>
                                
            </div>
    )}
}

export default ScientificApplication;