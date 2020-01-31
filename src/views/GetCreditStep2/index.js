import React, {useCallback, useMemo} from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import styles from './index.module.css';
import Button from '../../components/Button';
import { actionsCredit } from '../../state/credit/actions';
import { createArrayComponents, createInput } from '../../utils/component';
import Header from '../../components/Header';
import Input from '../../components/Input';

const parseInput = value => {
  if(value) {
    const str = value.replace(/[^0-5]/g, '');
    return str.substr(0, 1);
  };
};

const validateInput = (value) => {
  if(!value) return 'поле пустое'
};

const input = createInput('Введите оценку') (Input);

const fieldItem = (i) => (
  <Field 
    name={`estimation ${i}`}
    parse={parseInput}
    validate={validateInput}
    key={i}
    render={input}
  />
);

const GetCreditStep2 = () => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(push('/3'));
    dispatch(actionsCredit.setStep(3));
    dispatch(actionsCredit.setArrayEstimation(Object.values(value)));
  };
  const onClickCallback = useCallback(onClick, [])
  const lengthSteps = useSelector(state => state.credit.lengthSteps);
  const lengthEstimation = useSelector(state => state.credit.data.numberEstimation);
  const step = useSelector(state => state.credit.step);
  
  const arrayInputEstimationMemo = useMemo(
    () => createArrayComponents(lengthEstimation, fieldItem),
    [lengthEstimation]
  );

  const form = ({handleSubmit}) => (
    <form className={styles.form}>
      <div className={styles.field}>
        <legend className={styles.legend}>
           Введите оценки
        </legend>
        {arrayInputEstimationMemo}
      </div>
      <Button value='Следующий шаг' onClick={handleSubmit}/>
    </form>
  );

  const formCallback = useCallback(form, [lengthEstimation]);

  return (
    <div className={styles.container}>
      <Header step={step} lengthSteps={lengthSteps}/>
      <Form onSubmit={onClickCallback} render={formCallback} />
    </div>
  );
};

export default GetCreditStep2;