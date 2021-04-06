import React from 'react';
import s from './Information.module.css';


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
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
                <p className={s.ppp}>Информация Информация Информация Информация Информация</p>
            </div>
    )}
}

export default Information;