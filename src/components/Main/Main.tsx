import React from 'react';
import Footer from '../Footer/Footer';
import s from './Main.module.css';
import mireafon from './mirea.jpg';
import ModuleButton from './ModuleButton/ModuleButton';


interface TableComponentProps {
}

interface TableComponentState {
  
}

class Main extends React.Component<TableComponentProps, TableComponentState> {

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
            <div className={s.main_block}>
                <div className={s.title1}>
                    <p className={s.title1_text}>Конкурс на повышенную государственную академическую стипендию</p>
                </div>
                <div className={s.title2}>
                    <p className={s.title2_text}>С 21 декабря 2020 г. по 31 января 2021 г. будет проходить приём документов для участия в конкурсе на получение повышенной государственной академической стипендии в весеннем семестре 2020/2021 учебного года.</p>
                </div>
                <div className={s.mirea_blok} style={{ backgroundImage:"url(" + mireafon + ")", backgroundSize: 'cover' }}>
                    <div className={s.title3}>
                        <p className={s.title3_text2}> <span className={s.title3_text1}> Повышенная </span> <br></br> государственная академическая стипендия</p>
                    </div>
                    <div className={s.block_with_button}>
                        <div className={s.types_of_scholarships}>
                            <div className={s.activityes}>
                                <p className={s.activity}>Учебная деятельность</p>
                                <p className={s.activity}>Научно-исследовательская деятельность</p>
                                <p className={s.activity}>Общественная деятельность</p>
                                <p className={s.activity}>Культурно-творческая деятельность</p>
                                <p className={s.activity}>Спортивная деятельность</p>
                            </div>
                        </div>
                        <div className={s.button_block}>
                            <ModuleButton></ModuleButton>
                        </div>

                    </div>
                    <Footer></Footer>
                </div>
                
            </div>
    )}
}

export default Main;