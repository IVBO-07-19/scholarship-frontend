import React from 'react';
import s from './Footer.module.css'

interface TableComponentProps {
}

interface TableComponentState {
  
}

class Footer extends React.Component<TableComponentProps, TableComponentState> {

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
            <footer className={s.footerbar}>
                <div className={s.contacts1}>
                    <p className={s.address}>119454, Москва , пр Вернадского, д. 78</p>
                    <p className={s.phone_number}>+7 (499) 215-65-65</p>
                </div>
                <div className={s.contacts2}>
                    <p className={s.address}>107996, Москва, ул. Стромынка, д. 20</p>
                    <p className={s.phone_number}>+7 (499) 681-33-56</p>
                </div>
                <div className={s.contacts3}>
                    <p className={s.address}>119454, Москва, пр. Вернадского, д. 86</p>
                    <p className={s.phone_number}>+7 (495) 246-05-55</p>
                </div>

            </footer>
    )}
}

export default Footer;