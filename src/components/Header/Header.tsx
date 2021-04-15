import React from 'react';
import s from './Header.module.css'
import { NavLink, BrowserRouter } from 'react-router-dom';

interface TableComponentProps {
}

interface TableComponentState {
  
}

class Header extends React.Component<TableComponentProps, TableComponentState> {

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
            <header className={s.headerbar}>
                <NavLink to="/Main" className={s.nav1}>УВиСР</NavLink>
                <span></span>                
                <NavLink to="/Information" className={s.nav2}>Информация</NavLink>
                <span></span> 
                <NavLink to="/Documents" className={s.nav2}>Необходимые документы</NavLink>
                <span></span> 
            </header>
    )}
}

export default Header;