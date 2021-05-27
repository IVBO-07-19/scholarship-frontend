import React from 'react';
import s from './Requests.module.css';
import mireafon from './mirea.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                            <Card className={'root'}>
                                <CardContent>
                                    <Typography className={'title'} color="textSecondary" gutterBottom>
                                        Номер заявки: 1
                                    </Typography>
                                    <Typography className={'date'} color="textSecondary" gutterBottom>
                                        Заявка открыта 10 мая 2021
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Статус заявки:
                                    </Typography>
                                    <Typography className={'title'} color="textSecondary" gutterBottom>
                                        Открыта
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Редактировать
                                    </Button>
                                    <Button size="small" color="primary">
                                        Удалить
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Requests;