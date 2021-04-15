import React from 'react';
import s from './Documents.module.css';
import mireafon from './mirea.jpg';


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
                <div className={s.mirea_blok} style={{ backgroundImage:"url(" + mireafon + ")", backgroundSize: 'cover' }}>
                    <div className={s.bg_blur}>
                        <div className={s.text_block}>
                            <p className={s.text}>На данный момент в этом разделе ничего нет</p>
                        </div>
                    </div>
                </div>
            </div>
    )}
}

export default Documents;