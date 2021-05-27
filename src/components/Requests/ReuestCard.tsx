import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './Requests.module.css';


interface CardProps {
    id : string,
    date : string,
    status : boolean,

}

const RequestCard =({id,date,status}:CardProps)=>{
    return(
        <Card className={s.root}>
            <CardContent>
                <Typography className={s.title} color="textSecondary" gutterBottom>
                    Номер заявки: {id}
                </Typography>
                <Typography className={s.date} color="textSecondary" gutterBottom>
                    Заявка открыта {date}
                </Typography>
                <Typography variant="h5" component="h2">
                    Статус заявки: {status ? 'Открыта' : 'Закртыа'}
                </Typography>
                <Typography variant="body2" component="p">
                    Статус проверки: на проверке
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
    )
}
export default RequestCard