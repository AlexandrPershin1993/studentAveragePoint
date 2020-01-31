import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import ErrorMessage from '../../components/ErrorMessage';
import SuccesMessage from '../../components/SuccesMessage';
import Header from '../../components/Header';

const maxAverageScore = 4;
const maxPercentDisrespectfulPass = 10;

const getStatus = (percentDisrespectfulPass, averageScore) => {
  if(percentDisrespectfulPass < maxPercentDisrespectfulPass && averageScore >= maxAverageScore) return true;
  return false;
};

const getAverageScore = (arrayEstimation) => {
  const reduce = (acc, value) => acc + +value;
  const averageScore = arrayEstimation.reduce(reduce, 0) / arrayEstimation.length;
  return averageScore.toFixed(1);
};

const getPercentDisrespectfulPass = (numberMissingLessons, numberLessons) => 
  Math.round((numberMissingLessons * 100) / numberLessons);

const GetCreditStep4 = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(push('/1'));
    dispatch(actionsCredit.setStep(1));
    dispatch(actionsCredit.toDoReset());
  };
  const onClickCallback = useCallback(onClick, []);
  const onSubmit = (data) => {
    dispatch(actionsCredit.toDoSendDataUser(data));
  };

  const numberLessons = useSelector(state => state.credit.numberLessons);
  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const nameObject = useSelector(state => state.credit.data.nameObject);
  const arrayEstimation = useSelector(state => state.credit.arrayEstimation);
  const numberMissingLessons = useSelector(state => state.credit.numberMissingLessons); 
  const statusLoadingDataUser = useSelector(state=> state.credit.statusLoadingDataUser);
  const step = useSelector(state => state.credit.step);

  const percentDisrespectfulPassMemo = useMemo(
    () => getPercentDisrespectfulPass(numberMissingLessons, numberLessons),
    [
      numberMissingLessons,
      numberLessons
    ]
  );
  const averageScoreMemo = useMemo(() => getAverageScore(arrayEstimation), [arrayEstimation]);
  const statusMemo = useMemo(
    () => getStatus(percentDisrespectfulPassMemo, averageScoreMemo),
    [
      percentDisrespectfulPassMemo,
      averageScoreMemo
    ]
  )

  const data = {
    object: nameObject,
    percentDisrespectfulPass: percentDisrespectfulPassMemo,
    averageScore: averageScoreMemo,
    status: statusMemo
  };

  const onSubmitCallback = useCallback(() => onSubmit(data), [
    ...Object.values(data)
  ]);

  return (
    <div className={styles.container}>
      <Header step={step} lengthSteps={lengthSteps}/>
      <ul className={styles.ul}>
        <li>
          {`Ваш предмет: ${nameObject}`}
        </li>
        <li>
          {`Ваш средний балл: ${averageScoreMemo}`}
        </li>
        <li>
          {`Ваш процент пропусков по неуважительной причине: ${percentDisrespectfulPassMemo} %`}
        </li>
        <li>
          {`Статус: ${statusMemo ? 'зачет автоматом получен' : 'зачет автоматом не получен'}`}
        </li>
      </ul>
      {statusLoadingDataUser === 'error' ? <ErrorMessage error={'Произошла ошибка, попробуйте еще раз'}/> : null}
      {statusLoadingDataUser === 'succes' ? <SuccesMessage succes={'Данные загружены успешно'}/> : null}
      <Button value='Отправить данные на сервер' onClick={onSubmitCallback}/>
      <Button value='Другой предмет' onClick={onClickCallback}/>
    </div>
  );
};

export default GetCreditStep4;