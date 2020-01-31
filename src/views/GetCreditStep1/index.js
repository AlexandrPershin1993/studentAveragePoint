import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import Input from '../../components/Input';
import ElementForm from './ElementForm';
import Header from '../../components/Header';
import { createInput } from '../../utils/component';

const validatorEstimation = (number) => number > 0;

const validatorForm = (values) => {
  const objError = {};
  if(!values.nameObject) {
    objError.nameObject = 'поле пустое'
  };
  if(!values.numberEstimation) {
    objError.numberEstimation = 'поле пустое'
  } else if(!validatorEstimation(values.numberEstimation)) {
    objError.numberEstimation = 'значение меньше 0'
  }
  return objError;
};

const parseInputNameObject = value => {
  if(value) return value.replace(/[0-9]/g, '');
};

const parseInputNumberEstimation = value => {
  if(value) return value.replace(/[^0-9]/g, '');
}

const inputNameObject = createInput('Введите наименование') (Input);

const inputNumberEstimation = createInput('Введите колличество') (Input);

const form = ({handleSubmit}) => (
  <form className={styles.form}>
    <ElementForm 
      textLegend='Введите наименование предмета' 
      nameInput='nameObject'
      parse={parseInputNameObject} 
      render={inputNameObject}
    />
    <ElementForm 
      textLegend='Введите кол-во оценок больше 0' 
      nameInput='numberEstimation'
      parse={parseInputNumberEstimation} 
      render={inputNumberEstimation}
    />
    <Button value='Следующий шаг' onClick={handleSubmit}/>
  </form>
);

const GetCreditStep1 = () => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(push('/2'));
    dispatch(actionsCredit.setStep(2));
    dispatch(actionsCredit.setData(value));
  };
  const onClickCallback = useCallback(onClick, []);

  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const step = useSelector(state => state.credit.step);

  return (
    <div className={styles.container}>
      <Header step={step} lengthSteps={lengthSteps}/>
      <Form 
        onSubmit={onClickCallback}
        validate={validatorForm}
        render={form}
      />
    </div>
  );
};

export default GetCreditStep1;