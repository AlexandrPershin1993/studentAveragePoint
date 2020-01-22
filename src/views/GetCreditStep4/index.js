import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import ErrorMessage from '../../components/ErrorMessage';
import SuccesMessage from '../../components/SuccesMessage';

const GetCreditStep4 = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(push('/1'));
    dispatch(actionsCredit.setStep(1));
    dispatch(actionsCredit.toDoReset());
  };
  const onSubmit = (data) => {
    dispatch(actionsCredit.toDoSendDataUser(data));
  }

  const numberLessons = useSelector(state => state.credit.numberLessons);
  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const nameObject = useSelector(state => state.credit.data.nameObject);
  const arrayEstimation = useSelector(state => state.credit.arrayEstimation);
  const numberMissingLessons = useSelector(state => state.credit.numberMissingLessons); 
  const statusLoadingDataUser = useSelector(state=> state.credit.statusLoadingDataUser);

  const percentDisrespectfulPass = Math.round((numberMissingLessons * 100) / numberLessons);
  const averageScore = (arrayEstimation.reduce((acc, value) => acc + +value, 0) / arrayEstimation.length).toFixed(1);

  const getStatus = (percentDisrespectfulPass, averageScore) => {
    if(percentDisrespectfulPass < 10 && averageScore >= 4) return true;
    return false;
  }

  const data = {
    object: nameObject,
    percentDisrespectfulPass,
    averageScore,
    status: getStatus(percentDisrespectfulPass, averageScore)
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header1lvl}> 
        Получить зачет автоматом
      </h1>
      <h2 className={styles.header2lvl}>
        Шаг 4 из {lengthSteps} <br />
      </h2>
      <ul className={styles.ul}>
        <li>
          {`Ваш предмет: ${nameObject}`}
        </li>
        <li>
          {`Ваш средний балл: ${averageScore}`}
        </li>
        <li>
          {`Ваш процент пропусков по неуважительной причине: ${percentDisrespectfulPass} %`}
        </li>
        <li>
          {`Статус: ${data.status ? 'зачет автоматом получен' : 'зачет автоматом не получен'}`}
        </li>
      </ul>
      {statusLoadingDataUser === 'error' ? <ErrorMessage error={'Произошла ошибка, попробуйте еще раз'}/> : null}
      {statusLoadingDataUser === 'succes' ? <SuccesMessage succes={'Данные загружены успешно'}/> : null}
      <Button value='Отправить данные на сервер' onClick={ () => onSubmit(data)}/>
      <Button value='Другой предмет' onClick={onClick}/>
    </div>
  );
};

export default GetCreditStep4;