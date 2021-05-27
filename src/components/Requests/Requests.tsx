import React from 'react';
import s from './Requests.module.css';
import mireafon from './mirea.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RequestCard from './ReuestCard'


interface TableComponentProps {
}

interface TableComponentState {

}

class Requests extends React.Component<TableComponentProps, TableComponentState> {

    constructor(props: TableComponentProps){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div>
                <div className={s.mirea_blok} style={{ backgroundImage:"url(" + mireafon + ")", backgroundSize: 'cover' }}>
                    <div className={s.bg_blur}>
                        <div className={s.text_block}>
                           <RequestCard id={'2'} date={'13 мая 2021'} status={true}/>
                           <RequestCard id={'1'} date={'18 мая 2021'} status={false}/>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Requests;