import React from 'react';
import s from './Documents.module.css';


interface TableComponentProps {
}

interface TableComponentState {
  
}

class Documents extends React.Component<TableComponentProps, TableComponentState> {

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
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
                <p className={s.ppp}>Documents Documents Documents Documents Documents</p>
            </div>
    )}
}

export default Documents;