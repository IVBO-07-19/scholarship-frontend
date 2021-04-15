import React from 'react';
import s from './Information.module.css';
import mireafon from './mirea.jpg';


interface TableComponentProps {
}

interface TableComponentState {
  
}

class Information extends React.Component<TableComponentProps, TableComponentState> {

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
            <div>
                <div className={s.mirea_blok} style={{ backgroundImage:"url(" + mireafon + ")", backgroundSize: 'cover' }}>
                    <div className={s.bg_blur}>
                        <div className={s.text_block}>
                            <p className={s.text}>В соответствии с Приказом Минобрнауки России № 1663 от 27 декабря 2016 года студенты, имеющие заслуги в учебной, научно-исследовательской, общественной, культурно-творческой и спортивный деятельности, могут претендовать на получение повышенной государственной академической стипендии.</p>
                            <p className={s.text}>В конкурсе будут учитываться достижения за 1 календарный год до момента назначения стипендии, т.е. с 01 марта 2020 г. по январь 2021 г. включительно (по дату подачи документов).</p>
                            <p>С подробными правилами проведения конкурса вы можете ознакомиться, прочитав Временный порядок оценки повышенной государственной академической стипендии.</p>
                        </div>
                    </div>
                </div>
            </div>
    )}
}

export default Information;